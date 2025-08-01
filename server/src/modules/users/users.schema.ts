import { relations } from "drizzle-orm";
import { boolean, index, pgTable, text } from "drizzle-orm/pg-core";
import extensions from "../extensions/extensions.schema";
import { baseSchema } from "@/utils/db-utility";
import { typedTextEnum } from "@/helper";
import profiles from "../profiles/profiles.schema";

export const role = ["user", "seller", "admin"] as const;
const users = pgTable(
  "users",
  {
    ...baseSchema,
    email: text("email").notNull().unique(),
    username: text("username").notNull().unique(),
    fullName: text("full_name"),
    avatarUrl: text("avatar_url"),
    role: typedTextEnum("role", role, "user"),
    emailVerified: boolean("email_verified").default(false),
  },
  (table) => ({
    emailIdx: index("users_email_idx").on(table.email),
    usernameIdx: index("user_username_idx").on(table.username),
  }),
);

export const userRelations = relations(users, ({ many, one }) => ({
  profiles: one(profiles, {
    fields: [users.id],
    references: [profiles.userId],
  }),
  // purchases: many(purchases),
  // reviews: many(reviews),
  // wishlists: many(wishlists),
  // downloads: many(downloads),
}));
export default users;
