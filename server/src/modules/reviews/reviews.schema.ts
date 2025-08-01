import {
  pgTable,
  serial,
  text,
  integer,
  real,
  timestamp,
  uniqueIndex,
  index,
} from "drizzle-orm/pg-core";
import extensions from "../extensions/extensions.schema";
import { relations } from "drizzle-orm";
import users from "../users/users.schema";
import { baseSchema } from "@/utils/db-utility";

const reviews = pgTable(
  "reviews",
  {
    ...baseSchema,
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    extensionId: integer("extension_id")
      .notNull()
      .references(() => extensions.id, { onDelete: "cascade" }),
    rating: integer("rating").notNull(), // 1-5 stars
    comment: text("comment"),
  },
  (table) => ({
    userExtensionIdx: uniqueIndex("reviews_user_extension_idx").on(
      table.userId,
      table.extensionId,
    ),
    extensionIdIdx: index("reviews_extension_id_idx").on(table.extensionId),
  }),
);

export const reviewsRelations = relations(reviews, ({ one }) => ({
  user: one(users, {
    fields: [reviews.userId],
    references: [users.id],
  }),
  extension: one(extensions, {
    fields: [reviews.extensionId],
    references: [extensions.id],
  }),
}));

export default reviews;
