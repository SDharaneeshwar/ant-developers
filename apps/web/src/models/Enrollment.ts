import mongoose, { Schema, model, models } from "mongoose";

const EnrollmentSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      index: true,
    },
    phone: { type: String, required: true, trim: true, index: true },
    course: { type: String, required: true, trim: true, index: true },
    company: { type: String, required: true, trim: true },
    fromDate: { type: String, required: true },
    toDate: { type: String, required: true },
    noOfDays: { type: String, default: "" },
    budget: { type: String, default: "" },
    teamSize: { type: String, default: "" },
    location: { type: String, required: true, trim: true },
    trainingLocation: { type: String, required: true, trim: true },
    heardFrom: { type: String, default: "", trim: true, index: true },
    notes: { type: String, default: "", trim: true, maxlength: 2000 },

    status: {
      type: String,
      enum: ["new", "contacted", "qualified", "closed"],
      default: "new",
      index: true,
    },

    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
      index: true,
    },

    followUpDate: {
      type: String,
      default: "",
      index: true,
    },

    followUpStatus: {
      type: String,
      enum: ["pending", "completed", "overdue"],
      default: "pending",
      index: true,
    },

    emailAdminSent: { type: Boolean, default: false },
    emailUserSent: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

EnrollmentSchema.index({ createdAt: -1 });

const Enrollment =
  models.Enrollment || model("Enrollment", EnrollmentSchema);

export default Enrollment;