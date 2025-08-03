import { baseSchema } from "@/utils/db-utility";
import { decimal, index, integer, pgTable, text } from "drizzle-orm/pg-core";
import users from "../users/users.schema";
import extensions from "../extensions/extensions.schema";
import { typedTextEnum } from "@/helper";
import { relations } from "drizzle-orm";
import earnings from "../earnings/earnings.schema";

export const purchaseStatus = [
  "pending",
  "completed",
  "failed",
  "refunded",
] as const;
const purchases = pgTable(
  "purchases",
  {
    ...baseSchema,
    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    extensionId: integer("extension_id")
      .notNull()
      .references(() => extensions.id, { onDelete: "cascade" }),

    amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
    stripePaymentId: text("stripe_payment_id"),
    status: typedTextEnum("status", purchaseStatus).default("pending"),
  },
  (table) => ({
    userIdIdx: index("purchases_user_id_idx").on(table.userId),
    extensionIdIdx: index("purchases_extension_id_idx").on(table.extensionId),
    stripePaymentIdIdx: index("purchases_stripe_payment_id_idx").on(
      table.stripePaymentId,
    ),
  }),
);

export const purchasesRelations = relations(purchases, ({ one }) => ({
  user: one(users, {
    fields: [purchases.userId],
    references: [users.id],
  }),
  extension: one(extensions, {
    fields: [purchases.extensionId],
    references: [extensions.id],
  }),
  earning: one(earnings, {
    fields: [purchases.id],
    references: [earnings.purchaseId],
  }),
}));
export default purchases;
