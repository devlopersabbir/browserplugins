import { Extension } from "./extension/extension";

export type LooseAutocomplete<T extends string> = T | Omit<string, T>;
export type ExtensionProps = {
  extension: Extension;
};
export * from "./extension/browser";
export * from "./extension/category";
export * from "./extension/developer";
export * from "./extension/extension";
export * from "./extension/filter";
export * from "./extension/media";
export * from "./extension/stats";
