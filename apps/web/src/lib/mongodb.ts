import mongoose from "mongoose";
import { getEnv } from "@/lib/env";

// 🔐 Strict env handling (no undefined allowed)
const MONGODB_URI = getEnv("MONGODB_URI");

// 🔁 Global cache (prevents multiple connections in dev)
declare global {
  // eslint-disable-next-line no-var
  var mongooseCache:
    | {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
      }
    | undefined;
}

const cached = global.mongooseCache || {
  conn: null,
  promise: null,
};

global.mongooseCache = cached;

// 🚀 Connect function
export async function connectToDatabase() {
  // Return existing connection
  if (cached.conn) return cached.conn;

  // Create new connection if not exists
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "academy_platform",

      // 🔧 Production-safe options
      autoIndex: true, // ensures indexes are created
      maxPoolSize: 10, // connection pool
      serverSelectionTimeoutMS: 5000, // fail fast if DB not reachable
    });
  }

  try {
    cached.conn = await cached.promise;

    if (process.env.NODE_ENV === "development") {
      console.log("✅ MongoDB Connected");
    }

    return cached.conn;
  } catch (error) {
    cached.promise = null; // reset promise on failure
    console.error("❌ MongoDB Connection Error:", error);
    throw error;
  }
}