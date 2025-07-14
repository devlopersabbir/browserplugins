export const browsers = [
  "Chrome",
  "FireFox",
  "Microsoft Edge",
  "Safary",
] as const;
export type Browsers = (typeof browsers)[number];
