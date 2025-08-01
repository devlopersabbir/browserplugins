import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db } from "./index";

(async () => {
  console.log("Running migrations...");
  await migrate(db, { migrationsFolder: "./src/drizzle/out" });
  console.log("Migrations completed");
})();
