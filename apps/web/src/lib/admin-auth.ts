import { SignJWT, jwtVerify } from "jose";
import { getEnv } from "@/lib/env";

const secret = new TextEncoder().encode(getEnv("ADMIN_LOGIN_PASSWORD"));

export async function createAdminSession(rememberMe = false) {
  return await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(rememberMe ? "7d" : "1d")
    .sign(secret);
}

export async function verifyAdminSession(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch {
    return null;
  }
}