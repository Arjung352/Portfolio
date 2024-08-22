import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  const mergedClasses = twMerge(clsx(...inputs));
  console.log("Merged Classes: ", mergedClasses);
  return mergedClasses;
}
