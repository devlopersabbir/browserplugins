import { Controller, Get } from "@nestjs/common";
import { ExtensionService } from "./extension.service";

// @Injectable()
@Controller("extension")
export class ExtensionController {
  constructor(private readonly service: ExtensionService) {}

  @Get("/")
  async index() {
    return await this.service.index();
  }
}
