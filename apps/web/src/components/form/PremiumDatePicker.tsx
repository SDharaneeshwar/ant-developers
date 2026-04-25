"use client";

import * as Popover from "@radix-ui/react-popover";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { DayPicker, type MonthCaptionProps, useNavigation } from "react-day-picker";
import { format } from "date-fns";
import clsx from "clsx";
import "react-day-picker/style.css";

type PremiumDatePickerProps = {
  value?: Date;
  onChange: (date: Date | undefined) => void;
  placeholder: string;
  error?: string;
  minDate?: Date;
};

export default function PremiumDatePicker({
  value,
  onChange,
  placeholder,
  error,
  minDate,
}: PremiumDatePickerProps) {
  const normalizedMinDate = minDate
    ? new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())
    : undefined;

  return (
    <div>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button
            type="button"
            className={clsx(
              "flex h-[52px] w-full items-center justify-between rounded-xl border bg-white/5 px-4 text-left outline-none transition",
              value ? "text-white" : "text-slate-400",
              error
                ? "border-red-400 focus:ring-1 focus:ring-red-400"
                : "border-white/10 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
            )}
          >
            <span>{value ? format(value, "dd MMM yyyy") : placeholder}</span>
            <CalendarIcon className="h-4 w-4 text-slate-400" />
          </button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            sideOffset={8}
            align="start"
            className="z-[90] rounded-2xl border border-white/10 bg-[#0f172a]/95 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.28)] backdrop-blur-xl"
          >
            <DayPicker
              mode="single"
              selected={value}
              onSelect={onChange}
              disabled={normalizedMinDate ? { before: normalizedMinDate } : undefined}
              hideNavigation
              className="premium-daypicker"
              components={{
                MonthCaption: CustomCaption,
              }}
              classNames={{
                months: "flex flex-col",
                month: "space-y-4",
                weekdays: "mt-2",
                weekday: "text-xs font-medium text-slate-400",
                day: "p-0",
                day_button:
                  "flex h-10 w-10 items-center justify-center rounded-xl text-sm text-slate-200 transition duration-200 hover:bg-white/10 hover:text-white",
                selected:
                  "bg-brand-orange text-white rounded-xl shadow-[0_6px_20px_rgba(249,115,22,0.35)] hover:bg-brand-orange",
                today:
                  "border border-brand-orange/40 text-brand-beige rounded-xl",
                disabled:
                  "pointer-events-none text-slate-600 opacity-35",
                outside: "text-slate-600 opacity-30",
              }}
            />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

      <p className="error">{error || "\u00A0"}</p>
    </div>
  );
}

function CustomCaption(props: MonthCaptionProps) {
  const { goToMonth, nextMonth, previousMonth } = useNavigation();
  const currentMonth = props.calendarMonth.date;

  const previousYear = new Date(
    currentMonth.getFullYear() - 1,
    currentMonth.getMonth(),
    1
  );
  const nextYear = new Date(
    currentMonth.getFullYear() + 1,
    currentMonth.getMonth(),
    1
  );

  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => goToMonth?.(previousYear)}
          className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
          aria-label="Previous year"
        >
          <ChevronsLeft className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => previousMonth && goToMonth?.(previousMonth)}
          className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
          aria-label="Previous month"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      </div>

      <div className="text-center text-sm font-semibold text-white">
        {format(currentMonth, "MMMM yyyy")}
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => nextMonth && goToMonth?.(nextMonth)}
          className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
          aria-label="Next month"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => goToMonth?.(nextYear)}
          className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
          aria-label="Next year"
        >
          <ChevronsRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}