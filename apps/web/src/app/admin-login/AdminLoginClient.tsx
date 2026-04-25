"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import BackArrow from "@/components/layout/BackArrow";
import Footer from "@/components/layout/Footer";

export default function AdminLoginClient() {
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!password.trim()) {
      setError("Please enter the admin password");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
          rememberMe,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.message || "Login failed");
        return;
      }

      window.location.href = "/admin";
    } catch (error) {
      console.error(error);
      setError("Something went wrong while logging in");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <BackArrow />

      <main className="min-h-screen bg-hero-glow px-4 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <div className="glass-card rounded-3xl p-8 sm:p-10">
            <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.18em] text-brand-beige sm:text-sm">
              ADMIN ACCESS
            </p>

            <h1 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">
              Admin Login
            </h1>

            <p className="mt-3 text-slate-300">
              Enter the admin password to continue.
            </p>

            <form onSubmit={handleLogin} className="mt-8 space-y-5">
              <div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Admin Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input pr-12"
                    autoComplete="current-password"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 inline-flex -translate-y-1/2 items-center justify-center text-slate-400 transition hover:text-white"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <Eye className="h-5 w-5" />
                    ) : (
                      <EyeOff className="h-5 w-5" />
                    )}
                  </button>
                </div>

                <p className="error">{error || "\u00A0"}</p>
              </div>

              <label className="flex items-center gap-3 text-sm text-slate-300">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-white/20 bg-white/5 accent-orange-500"
                />
                <span>Remember Me</span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}