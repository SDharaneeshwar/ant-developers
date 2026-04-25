import { NextResponse } from "next/server";
import { createAdminSession } from "@/lib/admin-auth";
import { getEnv } from "@/lib/env";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const password = body?.password;
    const rememberMe = Boolean(body?.rememberMe);

    if (!password || password !== getEnv("ADMIN_LOGIN_PASSWORD")) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid password",
        },
        { status: 401 }
      );
    }

    const token = await createAdminSession(rememberMe);

    const response = NextResponse.json({
      success: true,
      message: "Login successful",
    });

    response.cookies.set("admin_session", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: rememberMe ? 60 * 60 * 24 * 7 : 60 * 60 * 24,
    });

    return response;
  } catch (error) {
    console.error("Admin login error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Login failed",
      },
      { status: 500 }
    );
  }
}