import { ConflictException, Injectable } from "@nestjs/common";
import { slugify } from "@/lib/utils";
import { CategoriesRepository } from "./categories.repository";
import { CategoriesSchema } from "./data-transfer-object/categories.dto";

@Injectable()
export class CategoriesService {
  constructor(private readonly repository: CategoriesRepository) {}

  async store(input: CategoriesSchema) {
    // generate slug from the category name
    const slug = slugify(input.name, "-");
    // search category into db using slug
    const category = await this.repository.findBySlug(slug);
    if (category)
      throw new ConflictException(
        "This name of category already has on this store",
      );

    // now create category
    return await this.repository.create({ ...input, slug });
  }
  async index() {
    return await this.repository.fetch();
  }
}
