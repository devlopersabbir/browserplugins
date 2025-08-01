import { pgTable, integer, text, index } from "drizzle-orm/pg-core";
import { baseSchema } from "@/utils/db-utility";
import extensions from "../extensions/extensions.schema";
import { relations } from "drizzle-orm";

// Extension files table (for version management)
const extensionFiles = pgTable(
  "extension_files",
  {
    ...baseSchema,

    extensionId: integer("extension_id")
      .notNull()
      .references(() => extensions.id, { onDelete: "cascade" }),

    version: text("version").notNull(),
    fileUrl: text("file_url").notNull(),
    fileHash: text("file_hash").notNull(),
    fileSize: integer("file_size").notNull(),
  },
  (table) => ({
    extensionIdIdx: index("extension_files_extension_id_idx").on(
      table.extensionId,
    ),
    versionIdx: index("extension_files_version_idx").on(
      table.extensionId,
      table.version,
    ),
  }),
);

export const extensionFilesRelations = relations(extensionFiles, ({ one }) => ({
  extension: one(extensions, {
    fields: [extensionFiles.extensionId],
    references: [extensions.id],
  }),
}));
export default extensionFiles;
