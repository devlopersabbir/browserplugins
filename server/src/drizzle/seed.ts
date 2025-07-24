import "dotenv/config";
import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";
import { developerWithProfile } from "./seeds/developer.seed";
import { extensions } from "./seeds/extensions.seed";
import { faker } from "@faker-js/faker";

const databaseUrl = process.env.DATABASE_URL!;

const pool = new Pool({
  connectionString: databaseUrl,
  ssl: true,
});
const db = drizzle(pool, { schema }) as NodePgDatabase<typeof schema>;

async function main() {
  const userIds = await developerWithProfile(db);
  const extIds = await extensions(db, userIds);

  await db.insert(schema.features).values(
    Array.from({ length: 4 }).map(() => ({
      extensionId: faker.helpers.arrayElement(extIds),
      feature: faker.company.buzzPhrase(),
    })),
  );
  await db.insert(schema.tags).values(
    Array.from({ length: 3 }).map(() => ({
      extensionId: faker.helpers.arrayElement(extIds),
      tag: faker.word.noun(),
    })),
  );
  await db.insert(schema.media).values([
    {
      extensionId: faker.helpers.arrayElement(extIds),
      type: "image",
      url: faker.image.urlPicsumPhotos(),
      thumbnail: faker.image.url(),
    },
  ]);
  await db.insert(schema.screenshots).values(
    Array.from({ length: 2 }).map(() => ({
      extensionId: faker.helpers.arrayElement(extIds),
      url: faker.image.url(),
    })),
  );
  await db.insert(schema.permissions).values(
    ["Storage Access", "Clipboard Access"].map((perm) => ({
      extensionId: faker.helpers.arrayElement(extIds),
      permission: perm,
    })),
  );
  await db.insert(schema.extensionStats).values({
    extensionId: faker.helpers.arrayElement(extIds),
    downloads: faker.number.int({ min: 0, max: 10000 }),
    likes: faker.number.int({ min: 0, max: 1000 }),
    views: faker.number.int({ min: 0, max: 50000 }),
  });

  await db.insert(schema.changelogs).values([
    {
      extensionId: faker.helpers.arrayElement(extIds),
      version: "1.0.1",
      date: faker.date.past().toISOString().split("T")[0],
      changes: ["Initial release", "Performance improvements", "UI tweaks"],
    },
  ]);

  await db.insert(schema.reviews).values(
    Array.from({ length: 2 }).map(() => ({
      extensionId: faker.helpers.arrayElement(extIds),
      reviewerName: faker.person.fullName(),
      rating: faker.number.float({ min: 3.5, max: 5 }),
      comment: faker.lorem.sentences(2),
      createdAt: faker.date.recent(),
    })),
  );
  console.log("✅ Seed complete");
}

main().catch((err) => {
  console.error("🛑 Seed failed", err);
  process.exit(1);
});
