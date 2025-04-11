import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  DATABASE_URL: process.env.DATABASE_URL || "postgresql://postgres:althafDatabase@localhost:5432/kashessen_database",
  JWT_SECRET: process.env.JWT_SECRET || "this_is_my_key_abcdefg",
  SESSION_SECRET: process.env.SESSION_SECRET || "your-session-secret",

  // Google OAuth Config
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || "",
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || "",
  GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL || "http://localhost:5123/auth/google/callback",

  // NextAuth Config
  NEXTAUTH_URL: process.env.NEXTAUTH_URL || "http://localhost:5123",
};