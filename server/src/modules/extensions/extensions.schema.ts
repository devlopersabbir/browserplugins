import {
  boolean,
  pgTable,
  real,
  serial,
  text,
  varchar,
} from "drizzle-orm/pg-core";
import users from "../users/users.schema";
import { relations } from "drizzle-orm";
import media from "../media/media.schema";
import extensionStats from "../extension-stats/extension-stats.schema";
import tags from "../tags/tags.schema";
import permissions from "../permissions/permissions.schema";
import changelogs from "../changelogs/changelogs.schema";
import screenshots from "../screenshots/screenshots.schema";
import features from "../features/features.schema";
import reviews from "../reviews/reviews.schema";

const extensions = pgTable("extensions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  longDescription: text("long_description"),
  price: real("price").notNull(),
  originalPrice: real("original_price"),
  category: text("category"),
  rating: real("rating"),
  totalRatings: serial("total_ratings"),
  users: text("users"),
  version: varchar("version", { length: 20 }),
  size: text("size"),
  lastUpdated: text("last_updated"),
  isPopular: boolean("is_popular").default(false),
  isFeatured: boolean("is_featured").default(false),
  isNew: boolean("is_new").default(false),
  gradientFrom: varchar("gradient_from", { length: 10 }),
  gradientTo: varchar("gradient_to", { length: 10 }),
  developerId: serial("developer_id").references(() => users.id),
});

export const extensionRelations = relations(extensions, ({ one, many }) => ({
  developer: one(users, {
    fields: [extensions.developerId],
    references: [users.id],
  }), // a extension has only one developer
  media: many(media), // a extension should has many media
  extensionStats: one(extensionStats, {
    fields: [extensions.id],
    references: [extensionStats.extensionId],
  }), // a extension has only one stats
  features: many(features), // many
  tags: many(tags), // many
  permissions: many(permissions), // many
  changelogs: many(changelogs), // many
  screenshots: many(screenshots), // many
  reviews: many(reviews),
}));
export default extensions;
