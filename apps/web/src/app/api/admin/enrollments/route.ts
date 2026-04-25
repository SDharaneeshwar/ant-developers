import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token")?.value;

  if (!token || !verifyToken(token)) {
    return new Response("Unauthorized", { status: 401 });
  }

  // fetch data here
  return new Response("Authorized");
}