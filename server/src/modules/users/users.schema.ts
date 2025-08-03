import { relations } from "drizzle-orm";
import { boolean, index, pgTable, text, varchar } from "drizzle-orm/pg-core";
import { baseSchema } from "@/utils/db-utility";
import { typedTextEnum } from "@/helper";
import profiles from "../profiles/profiles.schema";
import purchases from "../purchases/purchases.schema";
import reviews from "../reviews/reviews.schema";
import wishlists from "../wishlists/wishlists.schema";
import downloads from "../downloads/downloads.schema";

export const role = ["user", "seller", "admin"] as const;
const users = pgTable(
  "users",
  {
    ...baseSchema,
    email: varchar("email").notNull().unique(),
    username: varchar("username").notNull().unique(),
    password: varchar("password").notNull(),
    fullName: varchar("full_name"),
    avatarUrl: text("avatar_url"),
    role: typedTextEnum("role", role, "user"),
    emailVerified: boolean("email_verified").default(true),
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
  purchases: many(purchases),
  reviews: many(reviews),
  wishlists: many(wishlists),
  downloads: many(downloads),
}));
export default users;
