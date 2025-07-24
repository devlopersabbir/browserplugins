import { Body, Controller, Get, Post, UsePipes } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserRepository } from "./user.repository";
import { UserDto } from "./data-transfer-object/user.dto";
import { ZodValidationPipe } from "nestjs-zod";

@Controller({
  path: "/users",
  version: "v1",
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async index() {
    return this.userService.index();
  }

  @Post()
  async store(@Body() body: UserDto) {
    console.log(body);
    return body;
  }
}
