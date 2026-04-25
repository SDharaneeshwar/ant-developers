const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

if (!baseUrl && process.env.NODE_ENV === "production") {
  throw new Error("NEXT_PUBLIC_BASE_URL is not set in production");
}

export const siteConfig = {
  name: "ANT Developers",
  description:
    "Premium aptitude, technical, soft skills, interview, language, and corporate training programs designed for learners, teams, and organizations.",

  url: baseUrl || "http://localhost:3000",

  ogImage: "/og-image.png",
};