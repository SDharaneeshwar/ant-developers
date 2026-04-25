import { z } from "zod";

const emailRegex = /^[^\s@]+@[^\s@]+\.(com|in|net)$/i;

export const enrollSchema = z
  .object({
    name: z.string().trim().min(1, "This field is mandatory"),
    email: z
      .string()
      .trim()
      .min(1, "This field is mandatory")
      .regex(emailRegex, "Provide me a valid email id"),
    phone: z
      .string()
      .trim()
      .min(1, "This field is mandatory")
      .refine((value) => /^\d+$/.test(value), {
        message: "numbers are only allowed",
      })
      .refine((value) => /^\d{10}$/.test(value), {
        message: "10 digit numbers are only allowed",
      }),
    course: z.string().min(1, "This field is mandatory"),
    company: z.string().trim().min(1, "This field is mandatory"),
    fromDate: z.string().min(1, "This field is mandatory"),
    toDate: z.string().min(1, "This field is mandatory"),
    noOfDays: z.string().optional(),
    budget: z
      .string()
      .trim()
      .optional()
      .refine((value) => !value || /^\d+$/.test(value), {
        message: "Numbers are only allowed",
      }),
    teamSize: z.string().optional(),
    location: z.string().trim().min(1, "This field is mandatory"),
    trainingLocation: z.string().trim().min(1, "This field is mandatory"),
    heardFrom: z.string().optional(),
    notes: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.fromDate && data.toDate) {
      const from = new Date(data.fromDate);
      const to = new Date(data.toDate);

      if (to < from) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["toDate"],
          message: "To date must be after From date",
        });
      }

      const diffMs = to.getTime() - from.getTime();
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;

      if (!Number.isNaN(diffDays) && diffDays > 0 && !data.noOfDays) {
        data.noOfDays = String(diffDays);
      }
    }
  });

export type EnrollFormData = z.infer<typeof enrollSchema>;