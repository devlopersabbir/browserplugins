import { Injectable } from "@nestjs/common";
import { eq, SQL } from "drizzle-orm";
import { db } from "@/drizzle";
import { ExtensionSchema } from "./data-transfer-object/extension.dto";
import extensions from "./extensions.schema";

@Injectable()
export class ExtensionRepository {
  async create(input: ExtensionSchema) {
    const [extension] = await db
      .insert(extensions)
      .values({ ...input, slug: String(input.slug) })
      .returning();
    return extension;
  }
  async fetch() {
    const filter: SQL[] = [];

    return await db.query.extensions.findMany();
  }
  async findBySlug(slug: string) {
    return await db.query.extensions.findFirst({
      where: eq(extensions.slug, slug),
    });
  }
}
