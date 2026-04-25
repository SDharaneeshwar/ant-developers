import type { Metadata } from "next";
import AdminLoginClient from "@/app/admin-login/AdminLoginClient";

export const metadata: Metadata = {
  title: "Admin Login",
  description: "Secure admin access for ANT Developers dashboard.",
};

export default function AdminLoginPage() {
  return <AdminLoginClient />;
}