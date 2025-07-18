import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";
import extensions from "../extensions/extensions.schema";
import { relations } from "drizzle-orm";

const screenshots = pgTable("screenshots", {
  id: serial("id").primaryKey(),
  url: text("url"),
  extensionId: integer("extension_id").references(() => extensions.id),
});
export const screenshotsRelations = relations(screenshots, ({ one }) => ({
  extension: one(extensions, {
    fields: [screenshots.extensionId],
    references: [extensions.id],
  }),
}));
export default screenshots;
