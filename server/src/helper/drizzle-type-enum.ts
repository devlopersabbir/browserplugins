import { text } from "drizzle-orm/pg-core";

export const typedTextEnum = <TEnum extends string, TName extends string>(
  name: TName,
  values: readonly TEnum[],
  defaultValue?: TEnum,
) => {
  const column = text(name)
    .$type<TEnum>()
    .default(defaultValue ?? values[0]);

  return column;
};
