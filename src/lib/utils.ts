import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractIframeSrc(html: string): string {
  const match = html.match(/<iframe[^>]+src="([^"]+)"/);
  if (!match || !match[1]) throw new Error("Fail to extract source of video");
  return match[1];
}
