import { sql } from "drizzle-orm";
import { serial, timestamp } from "drizzle-orm/pg-core";

export const baseSchema = {
  id: serial("id").primaryKey(),

  createdAt: timestamp("createdAt", {
    mode: "date",
  })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updatedAt", {
    mode: "date",
  })
    .$defaultFn(() => sql`NULL`)
    .$onUpdateFn(() => new Date()),
};
