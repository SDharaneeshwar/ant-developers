import jwt from "jsonwebtoken";

const SECRET = process.env.ADMIN_SECRET || "supersecret";

export function signToken() {
  return jwt.sign({ role: "admin" }, SECRET, {
    expiresIn: "1d",
  });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}