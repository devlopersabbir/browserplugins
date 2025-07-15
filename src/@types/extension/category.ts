export const category = [
  "productivity",
  "security",
  "developer",
  "social",
  "entertainment",
  "utility",
  "all",
] as const;
export type Category = (typeof category)[number];
