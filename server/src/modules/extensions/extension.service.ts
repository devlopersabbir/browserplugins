import { ConflictException, Injectable } from "@nestjs/common";
import { ExtensionRepository } from "./extension.repository";
import { ExtensionSchema } from "./data-transfer-object/extension.dto";
import { slugify } from "@/lib/utils";

@Injectable()
export class ExtensionService {
  constructor(private readonly repository: ExtensionRepository) {}

  async store(input: ExtensionSchema) {
    // generate slug from the extension name
    const slug = slugify(input.name, "-");
    // search extension into db using slug
    const extension = await this.repository.findBySlug(slug);
    if (extension)
      throw new ConflictException(
        "This name of extension already has on this store",
      );

    // now create extension
    return await this.repository.create({ ...input, slug });
  }
  async index() {
    return await this.repository.fetch();
  }
}
