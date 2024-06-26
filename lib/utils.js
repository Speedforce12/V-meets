import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const formatTime = (date) => {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(date);
};

export const absoluteUrl = (param) => {
  return `${window.origin}/meeting/${param}`;
};

export const convertCallsToArray = (callsObj) => {
  if (!callsObj) {
    return [];
  }
  return Object.values(callsObj);
};
