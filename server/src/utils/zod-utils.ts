import { z } from "zod";

/* Generic decimal validator (as string) */
export const zDecimalString = (precision = 2) =>
  z.string().regex(new RegExp(`^\\d+(\\.\\d{1,${precision}})?$`), {
    message: `Must be a valid decimal with up to ${precision} decimal places`,
  });

// Generic integer ID
export const zId = (field = "ID") =>
  z
    .number({ error: `${field} is required` })
    .int(`${field} must be an integer`)
    .positive(`${field} must be a positive number`);

// Optional ID (used for nullable foreign keys)
export const zOptionalId = (field = "ID") =>
  z.number().int(`${field} must be an integer`).positive().optional();

// Generic semantic version string
export const zSemver = () =>
  z.string().regex(/^\d+(\.\d+){0,2}$/, {
    message: "Version must follow semantic versioning (e.g. 1.0.0)",
  });

// Generic slug
export const zSlug = () =>
  z
    .string()
    .min(3, "Slug must be at least 3 characters")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
      message: "Slug must be lowercase and hyphen-separated",
    });

// Generic optional URL
export const zOptionalUrl = () => z.url("Must be a valid URL").optional();

// Generic enum (based on const array)
export const zEnum = <T extends readonly string[]>(
  values: T,
  label = "Value",
) =>
  z.enum(values, {
    error: `${label} must be one of: ${values.join(", ")}`,
  });

// Generic string array
export const zStringArray = () =>
  z.array(z.string().min(1, "Empty strings are not allowed")).default([]);
