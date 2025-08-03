import { Body, Controller, Get, Post, UsePipes } from "@nestjs/common";
import { ExtensionService } from "./extension.service";
import { ZodValidationPipe } from "@/pipes";
import {
  ExtensionSchema,
  extensionSchema,
} from "./data-transfer-object/extension.dto";

@Controller({ path: "extensions", version: "v1" })
export class ExtensionController {
  constructor(private readonly service: ExtensionService) {}

  @Post("/")
  @UsePipes(new ZodValidationPipe(extensionSchema))
  async store(@Body() body: ExtensionSchema) {
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
