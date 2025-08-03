import { Body, Controller, Get, Post, UsePipes } from "@nestjs/common";
import { ZodValidationPipe } from "@/pipes";
import {
  CategoriesSchema,
  categoriesSchema,
} from "./data-transfer-object/categories.dto";
import { CategoriesService } from "./categories.service";

@Controller({ path: "categories", version: "v1" })
export class CategoriesController {
  constructor(private readonly service: CategoriesService) {}

  @Post("/")
  @UsePipes(new ZodValidationPipe(categoriesSchema))
  async store(@Body() body: CategoriesSchema) {
    try {
      return await this.service.store(body);
    } catch (err) {
      return err;
    }
  }

  @Get("/")
  async index() {
    return await this.service.index();
  }
}
