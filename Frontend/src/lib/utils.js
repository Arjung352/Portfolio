import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  const mergedClasses = twMerge(clsx(...inputs));
  return mergedClasses;
}
