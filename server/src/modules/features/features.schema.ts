import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";
import extensions from "../extensions/extensions.schema";
import { relations } from "drizzle-orm";

const features = pgTable("features", {
  id: serial("id").primaryKey(),
  extensionId: integer("extension_id").references(() => extensions.id),
  feature: text("feature").notNull(),
});

export const featuresRelations = relations(features, ({ one }) => ({
  extension: one(extensions, {
    fields: [features.extensionId],
    references: [extensions.id],
  }),
}));

export default features;
