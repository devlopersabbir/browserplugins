export const category = [
  "productivity",
  "security",
  "developer",
  "social",
  "entertainment",
  "utility",
] as const;
export type Category = (typeof category)[number];
