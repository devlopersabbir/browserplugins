import {
  decimal,
  index,
  integer,
  json,
  pgTable,
  text,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import profiles from "../profiles/profiles.schema";
import categories from "../categories/categories.schema";
import { baseSchema } from "@/utils/db-utility";
import { typedTextEnum } from "@/helper";
import purchases from "../purchases/purchases.schema";
import reviews from "../reviews/reviews.schema";
import wishlists from "../wishlists/wishlists.schema";
import downloads from "../downloads/downloads.schema";
import earnings from "../earnings/earnings.schema";
import extensionFiles from "../extension-files/extension-file.schema";
import users from "../users/users.schema";

export const browsers = [
  "chrome",
  "firefox",
  "microsoft edge",
  "safari",
] as const;
export const extensionStatus = [
  "draft",
  "pending",
  "approved",
  "rejected",
  "suspended",
] as const;
const extensions = pgTable(
  "extensions",
  {
    ...baseSchema,
    sellerId: integer("seller_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    categoryId: integer("category_id").references(() => categories.id),

    name: text("name").notNull(),
    slug: text("slug").notNull().unique(),

    description: text("description").notNull(),
    shortDescription: text("short_description"),

    price: decimal("price", { precision: 10, scale: 2 }).notNull(),
    originalPrice: decimal("original_price", {
      precision: 10,
      scale: 2,
    }).notNull(),

    version: text("version").notNull(),
    browsers: json("browsers").$type<(typeof browsers)[number][]>().default([]),
    tags: json("tags").$type<string[]>().default([]),
    iconUrl: text("icon_url"),
    screenshots: json("screenshots").$type<string[]>().default([]),
    videoUrl: text("video_url"),
    downloadUrl: text("download_url"),
    downloadCount: integer("download_count").default(0),
    rating: decimal("rating", { precision: 3, scale: 2 }).default("0.00"),
    reviewCount: integer("review_count").default(0),
    status: typedTextEnum("status", extensionStatus).default("draft"),
  },
  (table) => [
    index("extensions_seller_id_idx").on(table.sellerId),
    index("extensions_category_id_idx").on(table.categoryId),
    index("extensions_status_idx").on(table.status),
    index("extensions_slug_idx").on(table.slug),
  ],
);

export const extensionsRelations = relations(extensions, ({ one, many }) => ({
  seller: one(profiles, {
    fields: [extensions.sellerId],
    references: [profiles.id],
  }),
  category: one(categories, {
    fields: [extensions.categoryId],
    references: [categories.id],
  }),
  purchases: many(purchases),
  reviews: many(reviews),
  wishlists: many(wishlists),
  downloads: many(downloads),
  earnings: many(earnings),
  files: many(extensionFiles),
}));
export default extensions;
