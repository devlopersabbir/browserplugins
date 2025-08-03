import { Injectable } from "@nestjs/common";
import { eq, SQL } from "drizzle-orm";
import { db } from "@/drizzle";
import { CategoriesSchema } from "./data-transfer-object/categories.dto";
import categories from "./categories.schema";

@Injectable()
export class CategoriesRepository {
  async create(input: CategoriesSchema) {
    const [data] = await db
      .insert(categories)
      .values({ ...input, slug: String(input.slug) })
      .returning();
    return data;
  }
  async fetch() {
    const filter: SQL[] = [];

    return await db.query.categories.findMany();
  }
  async findBySlug(slug: string) {
    return await db.query.categories.findFirst({
      where: eq(categories.slug, slug),
    });
  }
}
