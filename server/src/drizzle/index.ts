import "dotenv/config";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const databaseUrl = process.env.DATABASE_URL!;
if (!databaseUrl) throw new Error("Database url not found!");
const pool = new Pool({
  connectionString: databaseUrl,
  ssl: true,
});
export const db = drizzle(pool, { schema }) as NodePgDatabase<typeof schema>;
