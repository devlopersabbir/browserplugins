import { Body, Controller, Get, Post, UsePipes } from "@nestjs/common";
import { UserService } from "./user.service";
import { userSchema, UserSchema } from "./data-transfer-object/user.dto";
import { ZodValidationPipe } from "@/pipes";

@Controller({ path: "/users", version: "v1" })
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post("/register")
  @UsePipes(new ZodValidationPipe(userSchema))
  async store(@Body() body: UserSchema) {
    try {
      const user = await this.service.register(body);
      return {
        message: `${user.fullName}, account created successfully 🎉`,
      };
    } catch (err) {
      return err;
    }
  }

  @Get()
  async index() {
    return this.service.index();
  }
}
