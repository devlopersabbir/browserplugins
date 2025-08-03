import { z } from "zod";
import { role } from "../users.schema";

export const userSchema = z.object({
  fullName: z.string().min(1, "Full name is required").optional(),
  email: z.email().endsWith("@gmail.com"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  avatarUrl: z.url("Invalid URL").optional(),
  role: z.enum(role).default("user"),
  emailVerified: z.boolean().default(false),
});

export type UserSchema = z.infer<typeof userSchema>;
