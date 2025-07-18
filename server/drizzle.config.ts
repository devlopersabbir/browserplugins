import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/drizzle/schema.ts",
  // schema: "./src/modules/*/*.schema.ts",
  dialect: "postgresql",
  out: "./src/drizzle/out",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
