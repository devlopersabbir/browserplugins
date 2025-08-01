import { Injectable } from "@nestjs/common";
import { ExtensionRepository } from "./extension.repository";

@Injectable()
export class ExtensionService {
  constructor(private readonly repository: ExtensionRepository) {}
  async index() {
    return await this.repository.fetch();
  }
}
