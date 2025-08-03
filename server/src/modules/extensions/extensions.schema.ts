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
      .references(() => profiles.id, { onDelete: "cascade" }),
    categoryId: integer("category_id").references(() => categories.id),

    name: text("name").notNull(),
    description: text("description").notNull(),
    shortDescription: text("short_description"),
    price: decimal("price", { precision: 10, scale: 2 }).notNull(),
    version: text("version").notNull(),
    browsers: json("browsers").$type<[]>().default([]),
    tags: json("tags").$type<(typeof browsers)[number][]>().default([]),
    iconUrl: text("icon_url"),
    screenshots: json("screenshots").$type<string[]>().default([]),
    videoUrl: text("video_url"),
    downloadUrl: text("download_url"),
    downloadCount: integer("download_count").default(0),
    rating: decimal("rating", { precision: 3, scale: 2 }).default("0.00"),
    reviewCount: integer("review_count").default(0),
    status: typedTextEnum("status", extensionStatus).default("draft"),
  },
  (table) => ({
    sellerIdIdx: index("extensions_seller_id_idx").on(table.sellerId),
    categoryIdIdx: index("extensions_category_id_idx").on(table.categoryId),
    statusIdx: index("extensions_status_idx").on(table.status),
    nameIdx: index("extensions_name_idx").on(table.name),
  }),
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
