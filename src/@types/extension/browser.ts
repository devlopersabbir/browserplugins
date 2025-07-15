export const browser = [
  "chrome",
  "firefox",
  "microsoft-edge",
  "safary",
  "all",
] as const;
export type Browser = (typeof browser)[number];
