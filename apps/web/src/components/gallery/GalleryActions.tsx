"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/track";

export default function GalleryActions({
  variant,
}: {
  variant: "header" | "empty_state";
}) {
  if (variant === "header") {
    return (
      <>
        <Link
          href="/"
          className="btn-secondary"
          onClick={() =>
            trackEvent("gallery_back_home", { location: "gallery_header" })
          }
        >
          Back to Home
        </Link>

        <Link
          href="/enroll"
          className="btn-primary"
          onClick={() =>
            trackEvent("gallery_enroll_click", { location: "gallery_header" })
          }
        >
          Enroll Now
        </Link>
      </>
    );
  }

  return (
    <>
      <Link
        href="/enroll"
        className="btn-primary"
        onClick={() =>
          trackEvent("gallery_empty_enroll", {
            location: "gallery_empty_state",
          })
        }
      >
        Get Started
      </Link>

      <Link
        href="/courses"
        className="btn-secondary"
        onClick={() =>
          trackEvent("gallery_empty_view_courses", {
            location: "gallery_empty_state",
          })
        }
      >
        View Courses
      </Link>
    </>
  );
}