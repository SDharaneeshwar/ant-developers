"use client";

import { useEffect, useMemo } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { enrollSchema, type EnrollFormData } from "@/lib/validators/enroll";
import PremiumSelect from "@/components/form/PremiumSelect";
import PremiumDatePicker from "@/components/form/PremiumDatePicker";
import BackArrow from "@/components/layout/BackArrow";
import Footer from "@/components/layout/Footer";
import { formatDateForInput, parseInputDate } from "@/lib/date";
import { trackEvent } from "@/lib/track";

const courseOptions = [
  { label: "Aptitude Training", value: "Aptitude Training" },
  { label: "Soft Skills", value: "Soft Skills" },
  { label: "Technical Training", value: "Technical Training" },
  { label: "Interview Prep", value: "Interview Prep" },
  { label: "Corporate Training", value: "Corporate Training" },
  { label: "Language Training", value: "Language Training" },
  { label: "Team Building", value: "Team Building" },
];

const heardFromOptions = [
  { label: "WhatsApp", value: "WhatsApp" },
  { label: "Instagram", value: "Instagram" },
  { label: "Twitter", value: "Twitter" },
  { label: "LinkedIn", value: "LinkedIn" },
  { label: "Friends / Colleagues", value: "Friends / Colleagues" },
  { label: "Others", value: "Others" },
];

export default function EnrollPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm<EnrollFormData>({
    resolver: zodResolver(enrollSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      course: "",
      company: "",
      fromDate: "",
      toDate: "",
      noOfDays: "",
      budget: "",
      teamSize: "",
      location: "",
      trainingLocation: "",
      heardFrom: "",
      notes: "",
    },
  });

  const fromDate = useWatch({
    control,
    name: "fromDate",
  });

  const toDate = useWatch({
    control,
    name: "toDate",
  });

  const today = useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return now;
  }, []);

  const toDateMin = useMemo(() => {
    if (!fromDate) return today;

    const from = parseInputDate(fromDate);
    from.setHours(0, 0, 0, 0);

    return from > today ? from : today;
  }, [fromDate, today]);

  useEffect(() => {
    trackEvent("enroll_page_view", { page: "enroll" });
  }, []);

  useEffect(() => {
    if (!fromDate || !toDate) {
      setValue("noOfDays", "");
      return;
    }

    const from = parseInputDate(fromDate);
    const to = parseInputDate(toDate);

    if (Number.isNaN(from.getTime()) || Number.isNaN(to.getTime()) || to < from) {
      setValue("noOfDays", "");
      return;
    }

    const diffMs = to.getTime() - from.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;
    setValue("noOfDays", String(diffDays));
  }, [fromDate, toDate, setValue]);

  const onSubmit = async (data: EnrollFormData) => {
    trackEvent("enrollment_submit_attempt", {
      course: data.course || "unknown",
      source: data.heardFrom || "unknown",
    });

    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      let result: { message?: string } = {};

      try {
        result = await res.json();
      } catch {
        result = { message: "Unexpected server response" };
      }

      if (!res.ok) {
        trackEvent("enrollment_submit_failed", {
          course: data.course || "unknown",
          source: data.heardFrom || "unknown",
          reason: result.message || "submission_failed",
        });
        alert(result.message || "Submission failed");
        return;
      }

      trackEvent("enrollment_submit_success", {
        course: data.course || "unknown",
        source: data.heardFrom || "unknown",
      });

      router.push("/thank-you");
    } catch (error) {
      console.error("Form submission error:", error);

      trackEvent("enrollment_submit_failed", {
        course: data.course || "unknown",
        source: data.heardFrom || "unknown",
        reason: "network_or_server_error",
      });

      alert("Something went wrong while submitting the form");
    }
  };

  return (
    <>
      <BackArrow />

      <main className="min-h-screen bg-hero-glow py-24">
        <div className="section-shell max-w-4xl">
          <div className="glass-card rounded-3xl p-8 sm:p-10">
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">
              Enrollment Form
            </h1>

            <p className="mt-3 text-slate-300">
              Share your training requirement and our team will get in touch with you.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <FormField error={errors.name?.message}>
                  <input
                    {...register("name")}
                    placeholder="Full Name *"
                    className="input"
                  />
                </FormField>

                <FormField error={errors.email?.message}>
                  <input
                    {...register("email")}
                    placeholder="Email ID *"
                    className="input"
                  />
                </FormField>

                <FormField error={errors.phone?.message}>
                  <input
                    {...register("phone")}
                    inputMode="numeric"
                    maxLength={10}
                    placeholder="Phone Number *"
                    className="input"
                  />
                </FormField>

                <FormField error={errors.company?.message}>
                  <input
                    {...register("company")}
                    placeholder="Company / Institution Name *"
                    className="input"
                  />
                </FormField>

                <Controller
                  control={control}
                  name="course"
                  render={({ field }) => (
                    <PremiumSelect
                      value={field.value}
                      onValueChange={field.onChange}
                      placeholder="Select Course *"
                      items={courseOptions}
                      error={errors.course?.message}
                    />
                  )}
                />

                <FormField error={errors.location?.message}>
                  <input
                    {...register("location")}
                    placeholder="Your Location *"
                    className="input"
                  />
                </FormField>

                <FormField error={errors.trainingLocation?.message}>
                  <input
                    {...register("trainingLocation")}
                    placeholder="Location Planned for the Training *"
                    className="input"
                  />
                </FormField>

                <FormField error={errors.teamSize?.message}>
                  <input
                    {...register("teamSize")}
                    placeholder="Team Size (10 / 20 / 30 / 40...)"
                    className="input"
                  />
                </FormField>

                <Controller
                  control={control}
                  name="fromDate"
                  render={({ field }) => (
                    <PremiumDatePicker
                      value={field.value ? parseInputDate(field.value) : undefined}
                      onChange={(date) =>
                        field.onChange(date ? formatDateForInput(date) : "")
                      }
                      placeholder="From Date *"
                      error={errors.fromDate?.message}
                      minDate={today}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="toDate"
                  render={({ field }) => (
                    <PremiumDatePicker
                      value={field.value ? parseInputDate(field.value) : undefined}
                      onChange={(date) =>
                        field.onChange(date ? formatDateForInput(date) : "")
                      }
                      placeholder="To Date *"
                      error={errors.toDate?.message}
                      minDate={toDateMin}
                    />
                  )}
                />

                <FormField error={errors.noOfDays?.message}>
                  <input
                    {...register("noOfDays")}
                    placeholder="No of Days Planned (in days)"
                    className="input"
                    readOnly
                  />
                </FormField>

                <FormField error={errors.budget?.message}>
                  <input
                    {...register("budget")}
                    inputMode="numeric"
                    placeholder="Budget"
                    className="input"
                  />
                </FormField>

                <Controller
                  control={control}
                  name="heardFrom"
                  render={({ field }) => (
                    <PremiumSelect
                      value={field.value}
                      onValueChange={field.onChange}
                      placeholder="How did you hear us?"
                      items={heardFromOptions}
                      error={errors.heardFrom?.message}
                    />
                  )}
                />
              </div>

              <FormField error={errors.notes?.message}>
                <textarea
                  {...register("notes")}
                  placeholder="Additional Notes"
                  className="input min-h-[130px]"
                />
              </FormField>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary rounded-xl px-8 py-2.5 text-sm"
                >
                  {isSubmitting ? "Submitting..." : "Submit Enrollment"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

function FormField({
  children,
  error,
}: {
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div>
      {children}
      <p className="error">{error || "\u00A0"}</p>
    </div>
  );
}