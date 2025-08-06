export const browsers = [
  "chrome",
  "firefox",
  "microsoft edge",
  "safari",
] as const;
export type Browser = (typeof browsers)[number];
