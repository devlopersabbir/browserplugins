import {
  pgTable,
  serial,
  text,
  integer,
  real,
  timestamp,
} from "drizzle-orm/pg-core";
import extensions from "../extensions/extensions.schema";
import { relations } from "drizzle-orm";

const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  extensionId: integer("extension_id")
    .notNull()
    .references(() => extensions.id),
  reviewerName: text("reviewer_name"), // Optional: could be null for anonymous reviews
  rating: real("rating").notNull(), // Between 1.0 to 5.0
  comment: text("comment"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const reviewRelations = relations(reviews, ({ one }) => ({
  extension: one(extensions, {
    fields: [reviews.extensionId],
    references: [extensions.id],
  }),
}));

export default reviews;
