import {
  boolean,
  decimal,
  integer,
  pgTable,
  text,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import users from "../users/users.schema";
import { baseSchema } from "@/utils/db-utility";
import { relations } from "drizzle-orm";
import extensions from "../extensions/extensions.schema";
import earnings from "../earnings/earnings.schema";

const profiles = pgTable(
  "profiles",
  {
    ...baseSchema,
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    companyName: text("company_name"),
    bio: text("bio"),
    website: text("website"),
    twitter: text("twitter"),
    github: text("github"),
    revenueShare: decimal("revenue_share", { precision: 5, scale: 2 }).default(
      "00.00",
    ),
    verified: boolean("verified").default(false),
  },
  (table) => [uniqueIndex("profile_user_id_idx").on(table.userId)],
);

export const profilesRelations = relations(profiles, ({ one, many }) => ({
  user: one(users, {
    fields: [profiles.userId],
    references: [users.id],
  }),
  extensions: many(extensions),
  earnings: many(earnings),
}));

export default profiles;
