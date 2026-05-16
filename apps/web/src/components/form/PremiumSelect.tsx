"use client";

import * as Select from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import clsx from "clsx";

type SelectOption = {
  label: string;
  value: string;
};

type PremiumSelectProps = {
  value?: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  items: SelectOption[];
  error?: string;
  className?: string;
  triggerClassName?: string;
};

export default function PremiumSelect({
  value,
  onValueChange,
  placeholder,
  items,
  error,
  className,
  triggerClassName,
}: PremiumSelectProps) {
  return (
    <div className={className}>
      <Select.Root value={value} onValueChange={onValueChange}>
        <Select.Trigger
          className={clsx(
            "flex h-[52px] w-full items-center justify-between rounded-xl border px-4 text-left outline-none transition duration-300",
            "border-white/10 bg-white/5 text-white",
            "focus:border-[#F5EA00] focus:ring-1 focus:ring-[#F5EA00]",
            triggerClassName,
            error && "border-red-400 focus:border-red-400 focus:ring-red-400"
          )}
          aria-label={placeholder}
        >
          <Select.Value
            placeholder={<span className="text-slate-400">{placeholder}</span>}
          />

          <Select.Icon>
            <ChevronDown className="h-4 w-4 text-slate-400" />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            position="popper"
            sideOffset={8}
            align="start"
            className="z-[9999] w-[var(--radix-select-trigger-width)] overflow-hidden rounded-2xl border border-[#041c32]/10 bg-white/95 shadow-[0_18px_45px_rgba(4,28,50,0.18)] backdrop-blur-xl"
          >
            <Select.Viewport className="p-2">
              {items.map((item) => (
                <Select.Item
                  key={item.value}
                  value={item.value}
                  className={clsx(
                    "relative flex cursor-pointer select-none items-center rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200",
                    "text-[#041c32]",
                    "hover:bg-[#F5EA00]/20 hover:text-[#041c32]",
                    "data-[highlighted]:bg-[#F5EA00]/20 data-[highlighted]:text-[#041c32]",
                    "data-[state=checked]:bg-[#F5EA00]/30 data-[state=checked]:font-semibold data-[state=checked]:text-[#041c32]"
                  )}
                >
                  <Select.ItemText>{item.label}</Select.ItemText>

                  <Select.ItemIndicator className="absolute right-3 inline-flex items-center">
                    <Check className="h-4 w-4 text-[#041c32]" />
                  </Select.ItemIndicator>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>

      {error !== undefined ? <p className="error">{error || "\u00A0"}</p> : null}
    </div>
  );
}