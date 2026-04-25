"use client";

import React, { useEffect, useMemo, useState } from "react";
import type {
  EnrollmentPriority,
  EnrollmentRecord,
  EnrollmentStatus,
} from "@/types/enrollment";
import StatusBadge from "@/components/admin/StatusBadge";
import EmailStatus from "@/components/admin/EmailStatus";
import PriorityBadge from "./PriorityBadge";
import { formatDate } from "@/lib/format-date";
import PremiumSelect from "@/components/form/PremiumSelect";
import { exportEnrollmentsCsv } from "@/lib/export-enrollments-csv";
import {
  getComputedFollowUpStatus,
  getLeadAgeLabel,
  isDueToday,
  isOverdue,
} from "@/lib/lead-utils";

const statusFilterOptions = [
  { label: "All Statuses", value: "all" },
  { label: "New", value: "new" },
  { label: "Contacted", value: "contacted" },
  { label: "Qualified", value: "qualified" },
  { label: "Closed", value: "closed" },
];

const statusUpdateOptions = [
  { label: "New", value: "new" },
  { label: "Contacted", value: "contacted" },
  { label: "Qualified", value: "qualified" },
  { label: "Closed", value: "closed" },
];

const priorityFilterOptions = [
  { label: "All Priorities", value: "all" },
  { label: "High", value: "high" },
  { label: "Medium", value: "medium" },
  { label: "Low", value: "low" },
];

const priorityOptions = [
  { label: "High", value: "high" },
  { label: "Medium", value: "medium" },
  { label: "Low", value: "low" },
];

const followUpFilterOptions = [
  { label: "All Follow-ups", value: "all" },
  { label: "Due Today", value: "due-today" },
  { label: "Overdue", value: "overdue" },
];

const sortOptions = [
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
  { label: "Name A-Z", value: "name-asc" },
  { label: "Name Z-A", value: "name-desc" },
];

const pageSizeOptions = [
  { label: "10 per page", value: "10" },
  { label: "25 per page", value: "25" },
  { label: "50 per page", value: "50" },
];

type SortValue = "newest" | "oldest" | "name-asc" | "name-desc";
type FollowUpFilter = "all" | "due-today" | "overdue";

export default function AdminDashboard({
  initialRecords,
}: {
  initialRecords: EnrollmentRecord[];
}) {
  const [records, setRecords] = useState<EnrollmentRecord[]>(initialRecords);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | EnrollmentStatus>("all");
  const [priorityFilter, setPriorityFilter] = useState<
    "all" | EnrollmentPriority
  >("all");
  const [followUpFilter, setFollowUpFilter] = useState<FollowUpFilter>("all");
  const [sortBy, setSortBy] = useState<SortValue>("newest");
  const [pageSize, setPageSize] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!errorMessage) return;

    const timer = setTimeout(() => {
      setErrorMessage("");
    }, 4000);

    return () => clearTimeout(timer);
  }, [errorMessage]);

  const filteredRecords = useMemo(() => {
    const base = records.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.email.toLowerCase().includes(search.toLowerCase()) ||
        item.company.toLowerCase().includes(search.toLowerCase()) ||
        item.course.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "all" ? true : item.status === statusFilter;

      const matchesPriority =
        priorityFilter === "all" ? true : item.priority === priorityFilter;

      const matchesFollowUp =
        followUpFilter === "all"
          ? true
          : followUpFilter === "due-today"
            ? isDueToday(item)
            : isOverdue(item);

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority &&
        matchesFollowUp
      );
    });

    return [...base].sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }

      if (sortBy === "oldest") {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }

      if (sortBy === "name-asc") {
        return a.name.localeCompare(b.name);
      }

      return b.name.localeCompare(a.name);
    });
  }, [records, search, statusFilter, priorityFilter, followUpFilter, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredRecords.length / pageSize));

  const paginatedRecords = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredRecords.slice(start, start + pageSize);
  }, [filteredRecords, currentPage, pageSize]);

  const stats = useMemo(() => {
    const dueTodayCount = records.filter(isDueToday).length;
    const overdueCount = records.filter(isOverdue).length;

    return {
      total: records.length,
      dueToday: dueTodayCount,
      overdue: overdueCount,
      new: records.filter((r) => r.status === "new").length,
      closed: records.filter((r) => r.status === "closed").length,
    };
  }, [records]);

  const rangeStart =
    filteredRecords.length === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const rangeEnd = Math.min(currentPage * pageSize, filteredRecords.length);

  const patchRecord = async (
    id: string,
    payload: Partial<EnrollmentRecord>
  ) => {
    try {
      setErrorMessage("");
      setUpdatingId(id);

      const res = await fetch(`/api/admin/enrollments/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let result: { message?: string } = {};
      try {
        result = await res.json();
      } catch {
        result = { message: "Unexpected server response" };
      }

      if (!res.ok) {
        throw new Error(result.message || "Failed to update record");
      }

      setRecords((prev) =>
        prev.map((record) =>
          record._id === id
            ? {
                ...record,
                ...payload,
                updatedAt: new Date().toISOString(),
              }
            : record
        )
      );
    } catch (error) {
      console.error(error);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please refresh and try again."
      );
    } finally {
      setUpdatingId(null);
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleLogout = async () => {
    try {
      setErrorMessage("");
      await fetch("/api/admin/logout", { method: "POST" });
      window.location.href = "/admin-login";
    } catch (error) {
      console.error(error);
      setErrorMessage("Logout failed. Please try again.");
    }
  };

  const handleExportCsv = () => {
    if (filteredRecords.length === 0) {
      setErrorMessage("There are no filtered leads to export.");
      return;
    }

    setErrorMessage("");
    exportEnrollmentsCsv(filteredRecords);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
    setExpandedId(null);
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
    setExpandedId(null);
  };

  const resetPage = () => {
    setCurrentPage(1);
    setExpandedId(null);
  };

  return (
    <>
      <div className="text-center">
        <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.18em] text-brand-beige sm:text-sm">
          ADMIN DASHBOARD
        </p>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Enrollment Lead Management
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
          View, track, and manage all submitted training enquiries in one place.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={handleExportCsv}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Export CSV
          </button>

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Logout
          </button>
        </div>
      </div>

      {errorMessage && (
        <div className="glass-card mt-6 rounded-2xl border border-red-400/20 bg-red-500/10 px-6 py-4 text-sm text-red-300">
          {errorMessage}
        </div>
      )}

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5">
        <StatCard label="Due Today" value={stats.dueToday} />
        <StatCard label="Overdue" value={stats.overdue} />
        <StatCard label="New" value={stats.new} />
        <StatCard label="Closed" value={stats.closed} />
        <StatCard label="Total Leads" value={stats.total} />
      </div>

      <div className="glass-card mt-8 rounded-3xl p-5 sm:p-6">
        <div className="grid gap-4 xl:grid-cols-[1fr_220px_220px_220px_180px]">
          <input
            type="text"
            placeholder="Search by name, email, company, or course"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              resetPage();
            }}
            className="input"
          />

          <PremiumSelect
            value={statusFilter}
            onValueChange={(value) => {
              setStatusFilter(value as "all" | EnrollmentStatus);
              resetPage();
            }}
            placeholder="All Statuses"
            items={statusFilterOptions}
          />

          <PremiumSelect
            value={priorityFilter}
            onValueChange={(value) => {
              setPriorityFilter(value as "all" | EnrollmentPriority);
              resetPage();
            }}
            placeholder="All Priorities"
            items={priorityFilterOptions}
          />

          <PremiumSelect
            value={followUpFilter}
            onValueChange={(value) => {
              setFollowUpFilter(value as FollowUpFilter);
              resetPage();
            }}
            placeholder="All Follow-ups"
            items={followUpFilterOptions}
          />

          <PremiumSelect
            value={sortBy}
            onValueChange={(value) => {
              setSortBy(value as SortValue);
              resetPage();
            }}
            placeholder="Sort By"
            items={sortOptions}
          />
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_180px]">
          <div className="text-sm text-slate-400">
            Showing {rangeStart}-{rangeEnd} of {filteredRecords.length} filtered leads
          </div>

          <PremiumSelect
            value={String(pageSize)}
            onValueChange={(value) => {
              setPageSize(Number(value));
              resetPage();
            }}
            placeholder="Page Size"
            items={pageSizeOptions}
          />
        </div>
      </div>

      <div className="glass-card mt-8 overflow-hidden rounded-3xl">
        {filteredRecords.length === 0 ? (
          <div className="p-8 text-center text-slate-300">
            No enrollments found.
          </div>
        ) : (
          <div className="max-h-[70vh] overflow-auto">
            <table className="min-w-full table-fixed text-left">
              <colgroup>
                <col className="w-[18%]" />
                <col className="w-[11%]" />
                <col className="w-[13%]" />
                <col className="w-[11%]" />
                <col className="w-[10%]" />
                <col className="w-[11%]" />
                <col className="w-[13%]" />
                <col className="w-[7%]" />
                <col className="w-[6%]" />
              </colgroup>

              <thead className="sticky top-0 z-10 border-b border-white/10 bg-[#182338] text-sm text-slate-300 backdrop-blur-xl">
                <tr>
                  <th className="px-5 py-4 font-medium">Lead</th>
                  <th className="px-5 py-4 font-medium">Course</th>
                  <th className="px-5 py-4 font-medium">Company</th>
                  <th className="px-5 py-4 font-medium">Dates</th>
                  <th className="px-5 py-4 font-medium">Source</th>
                  <th className="px-5 py-4 font-medium">Emails</th>
                  <th className="px-5 py-4 font-medium">Status</th>
                  <th className="px-5 py-4 font-medium">Priority</th>
                  <th className="px-5 py-4 font-medium">Age</th>
                </tr>
              </thead>

              <tbody>
                {paginatedRecords.map((record) => {
                  const computedFollowUpStatus = getComputedFollowUpStatus(record);

                  return (
                    <React.Fragment key={record._id}>
                      <tr
                        onClick={() => toggleExpand(record._id)}
                        className={`cursor-pointer border-b border-white/10 align-top text-sm text-slate-200 transition hover:bg-white/5 ${
                          computedFollowUpStatus === "overdue"
                            ? "bg-red-500/5"
                            : isDueToday(record)
                              ? "bg-yellow-500/5"
                              : ""
                        }`}
                      >
                        <td className="px-5 py-5 align-top">
                          <div className="font-semibold text-white">{record.name}</div>
                          <div className="mt-1 break-words text-slate-400">
                            {record.email}
                          </div>
                          <div className="mt-1 text-slate-400">{record.phone}</div>
                        </td>

                        <td className="px-5 py-5 align-top">
                          <div className="break-words">{record.course}</div>
                        </td>

                        <td className="px-5 py-5 align-top">
                          <div>{record.company}</div>
                          <div className="mt-1 text-slate-400">
                            {record.trainingLocation}
                          </div>
                        </td>

                        <td className="px-5 py-5 align-top">
                          <div>{record.fromDate}</div>
                          <div className="mt-1 text-slate-400">to {record.toDate}</div>
                          <div className="mt-1 text-slate-500">
                            {record.noOfDays || "-"} days
                          </div>
                        </td>

                        <td className="px-5 py-5 align-top">
                          <div className="break-words">{record.heardFrom || "-"}</div>
                        </td>

                        <td className="px-5 py-5 align-top">
                          <EmailStatus
                            adminSent={record.emailAdminSent}
                            userSent={record.emailUserSent}
                          />
                        </td>

                        <td
                          className="px-5 py-5 align-top"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="mb-3">
                            <StatusBadge status={record.status} />
                          </div>

                          <PremiumSelect
                            value={record.status}
                            onValueChange={(value) =>
                              patchRecord(record._id, {
                                status: value as EnrollmentStatus,
                              })
                            }
                            placeholder="Select Status"
                            items={statusUpdateOptions}
                            className="w-full min-w-[150px]"
                            triggerClassName="h-[46px]"
                          />
                        </td>

                        <td
                          className="px-5 py-5 align-top"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="mb-3">
                            <PriorityBadge priority={record.priority || "medium"} />
                          </div>

                          <PremiumSelect
                            value={record.priority || "medium"}
                            onValueChange={(value) =>
                              patchRecord(record._id, {
                                priority: value as EnrollmentPriority,
                              })
                            }
                            placeholder="Select Priority"
                            items={priorityOptions}
                            className="w-full min-w-[140px]"
                            triggerClassName="h-[46px]"
                          />
                        </td>

                        <td className="px-5 py-5 align-top text-slate-400">
                          {getLeadAgeLabel(record.createdAt)}
                        </td>
                      </tr>

                      {expandedId === record._id && (
                        <tr className="border-b border-white/10 bg-white/5">
                          <td colSpan={9} className="px-6 py-6">
                            <div className="grid gap-6 text-sm text-slate-300 md:grid-cols-2">
                              <div>
                                <h4 className="mb-2 font-semibold text-white">
                                  Contact
                                </h4>
                                <p>Email: {record.email}</p>
                                <p>Phone: {record.phone}</p>
                                <p>Location: {record.location}</p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                  <a
                                    href={`tel:${record.phone}`}
                                    className="btn-secondary"
                                  >
                                    Call
                                  </a>
                                  <a
                                    href={`mailto:${record.email}`}
                                    className="btn-secondary"
                                  >
                                    Email
                                  </a>
                                  <a
                                    href={`https://wa.me/91${record.phone}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-primary"
                                  >
                                    WhatsApp
                                  </a>
                                </div>
                              </div>

                              <div>
                                <h4 className="mb-2 font-semibold text-white">
                                  Training Info
                                </h4>
                                <p>Course: {record.course}</p>
                                <p>Company: {record.company}</p>
                                <p>Team Size: {record.teamSize || "-"}</p>
                                <p>Budget: {record.budget || "-"}</p>
                              </div>

                              <div>
                                <h4 className="mb-2 font-semibold text-white">
                                  Follow-up
                                </h4>
                                <p className="mb-3">
                                  Current Status:{" "}
                                  <span className="font-medium text-white">
                                    {computedFollowUpStatus.toUpperCase()}
                                  </span>
                                </p>

                                <div className="space-y-4">
                                  <div>
                                    <label className="mb-2 block text-xs uppercase tracking-[0.16em] text-slate-400">
                                      Follow-up Date
                                    </label>
                                    <input
                                      type="date"
                                      defaultValue={record.followUpDate || ""}
                                      className="input"
                                      onBlur={(e) =>
                                        patchRecord(record._id, {
                                          followUpDate: e.target.value,
                                          followUpStatus: "pending",
                                        })
                                      }
                                    />
                                  </div>

                                  <div className="flex flex-wrap gap-2">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        patchRecord(record._id, {
                                          followUpStatus: "completed",
                                        })
                                      }
                                      className="btn-secondary"
                                      disabled={updatingId === record._id}
                                    >
                                      Mark Done
                                    </button>

                                    <button
                                      type="button"
                                      onClick={() =>
                                        patchRecord(record._id, {
                                          followUpStatus: "pending",
                                        })
                                      }
                                      className="btn-secondary"
                                      disabled={updatingId === record._id}
                                    >
                                      Mark Pending
                                    </button>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h4 className="mb-2 font-semibold text-white">
                                  Additional
                                </h4>
                                <p>Source: {record.heardFrom || "-"}</p>
                                <p>Training Location: {record.trainingLocation || "-"}</p>
                                <p className="mt-2 text-slate-400">
                                  {record.notes || "No additional notes"}
                                </p>
                                <p className="mt-3 text-slate-500">
                                  Created: {formatDate(record.createdAt)}
                                </p>
                                <p className="mt-1 text-slate-500">
                                  Updated: {formatDate(record.updatedAt)}
                                </p>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {filteredRecords.length > 0 && (
          <div className="flex items-center justify-between border-t border-white/10 px-5 py-4">
            <button
              type="button"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>

            <div className="text-sm text-slate-300">
              Page {currentPage} of {totalPages}
            </div>

            <button
              type="button"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="glass-card glass-card-hover rounded-3xl p-5">
      <div className="text-sm uppercase tracking-[0.18em] text-brand-beige">
        {label}
      </div>
      <div className="mt-3 text-3xl font-semibold text-white">{value}</div>
    </div>
  );
}