import { existsSync } from "node:fs";
import { chromium } from "playwright";

export const baseURL = process.env.CV_BASE_URL || "http://127.0.0.1:4173";
export const launch = () =>
  chromium.launch({
    executablePath:
      process.env.CHROMIUM_PATH ||
      (existsSync("/usr/bin/chromium") ? "/usr/bin/chromium" : undefined),
    headless: true,
    args: ["--no-sandbox"],
  });
