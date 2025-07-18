import { pgTable, serial, integer } from "drizzle-orm/pg-core";
import extensions from "../extensions/extensions.schema";
import { relations } from "drizzle-orm";

const extensionStats = pgTable("extensionStats", {
  id: serial("id").primaryKey(),
  extensionId: integer("extension_id").references(() => extensions.id),
  downloads: integer("downloads"),
  likes: integer("likes"),
  views: integer("views"),
});
export const extensionStatsRelations = relations(extensionStats, ({ one }) => ({
  extension: one(extensions, {
    fields: [extensionStats.extensionId],
    references: [extensions.id],
  }), // only one exteniosn
}));
export default extensionStats;
