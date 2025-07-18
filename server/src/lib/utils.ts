import { hash, verify } from "argon2";
import slug from "slugify";

export async function hashPassword<T extends string>(password: T): Promise<T> {
  return (await hash(password)) as T;
}

export async function comparePassword(
  hashed: string,
  password: string,
): Promise<boolean> {
  return await verify(hashed, password);
}

export function slugify(textContent: string, replacement: "-" | "_" = "-") {
  return slug(textContent, {
    trim: true,
    lower: true,
    strict: true,
    replacement,
  });
}
