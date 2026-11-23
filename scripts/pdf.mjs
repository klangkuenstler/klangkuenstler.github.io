import { launch, baseURL } from "./browser.mjs";

const browser = await launch();
try {
  const page = await browser.newPage();
  for (const lang of ["en", "pt"]) {
    await page.goto(`${baseURL}/?lang=${lang}`, { waitUntil: "networkidle" });
    await page.locator("#print-cv h1").waitFor({ state: "attached" });
    await page.pdf({
      path: `assets/marcos-ribeiro-cv-${lang}.pdf`,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      tagged: true,
    });
    console.log(`Generated assets/marcos-ribeiro-cv-${lang}.pdf`);
  }
} finally {
  await browser.close();
}
