import { baseSchema, createdAt } from "@/utils/db-utility";
import { relations } from "drizzle-orm";
import {
  decimal,
  index,
  integer,
  pgTable,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import profiles from "../profiles/profiles.schema";
import extensions from "../extensions/extensions.schema";
import purchases from "../purchases/purchases.schema";
import { typedTextEnum } from "@/helper";

export const earningStatus = ["pending", "paid", "held"] as const;
const earnings = pgTable(
  "earnings",
  {
    ...baseSchema,
    sellerId: integer("seller_id")
      .notNull()
      .references(() => profiles.id, { onDelete: "cascade" }),
    extensionId: integer("extension_id")
      .notNull()
      .references(() => extensions.id, { onDelete: "cascade" }),
    purchaseId: integer("purchase_id")
      .notNull()
      .references(() => purchases.id, { onDelete: "cascade" }),

    grossAmount: decimal("gross_amount", { precision: 10, scale: 2 }).notNull(),
    platformFee: decimal("platform_fee", { precision: 10, scale: 2 }).notNull(),
    netAmount: decimal("net_amount", { precision: 10, scale: 2 }).notNull(),
    status: typedTextEnum("status", earningStatus).default("pending"),
    paidAt: createdAt("paid_at"),
  },
  (table) => ({
    sellerIdIdx: index("earnings_seller_id_idx").on(table.sellerId),
    purchaseIdIdx: uniqueIndex("earnings_purchase_id_idx").on(table.purchaseId),
    statusIdx: index("earnings_status_idx").on(table.status),
  }),
);

export const earningsRelations = relations(earnings, ({ one }) => ({
  seller: one(profiles, {
    fields: [earnings.sellerId],
    references: [profiles.id],
  }),
  extension: one(extensions, {
    fields: [earnings.extensionId],
    references: [extensions.id],
  }),
  purchase: one(purchases, {
    fields: [earnings.purchaseId],
    references: [purchases.id],
  }),
}));

export default earnings;
