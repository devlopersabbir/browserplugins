import { z } from "zod";
import { createZodDto } from "nestjs-zod";

export const userSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string(),
});

export class UserDto extends createZodDto(userSchema) {}
