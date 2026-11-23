import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
import AxeBuilder from "@axe-core/playwright";
import { launch, baseURL } from "./browser.mjs";
import { events } from "../js/content.js";

const browser = await launch();
const errors = [];
try {
  await mkdir("test-results", { recursive: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
  });
  const page = await context.newPage();
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("response", (response) => {
    if (response.url().startsWith(baseURL) && response.status() >= 400)
      errors.push(`${response.status()} ${response.url()}`);
  });
  await page.goto(baseURL, { waitUntil: "networkidle" });
  assert.equal(await page.locator("html").getAttribute("lang"), "en");
  assert.equal(await page.locator("html").getAttribute("data-theme"), "dark");
  assert.equal(await page.locator(".timeline-entry").count(), events.length);
  const race = page.locator("#event-downhill");
  assert.match(await race.innerText(), /01 OCT 2023[\s\S]*Age 15/);
  await race.locator("summary").click();
  await race.locator("[data-image]").click();
  assert.equal(await page.locator("#gallery").evaluate((el) => el.open), true);
  assert.match(
    await page.locator("#gallery-image").getAttribute("src"),
    /downhill-poster/,
  );
  await page.keyboard.press("Escape");
  assert.equal(await page.locator("#gallery").evaluate((el) => el.open), false);
  assert.equal(
    await page.evaluate(() => document.activeElement.dataset.image),
    "downhill",
  );

  await page.locator('[data-filter="projects"]').click();
  assert.equal(await page.locator(".timeline-entry").count(), 3);
  await page.locator('[data-filter="life"]').click();
  assert.equal(await page.locator(".timeline-entry").count(), 3);
  await page.locator('[data-filter="all"]').click();
  assert.equal(await race.locator("details").getAttribute("open"), "");
  assert.ok((await page.locator("#year-nav a").count()) >= 6);
  await page.locator('[data-lang="pt"]').click();
  assert.equal(await page.locator("html").getAttribute("lang"), "pt-PT");
  assert.match(await race.innerText(), /Idade 15/);
  assert.equal(
    await page.locator(".cv-download").getAttribute("href"),
    "assets/marcos-ribeiro-cv-pt.pdf",
  );
  await page.locator("#theme-toggle").click();
  await page.reload({ waitUntil: "networkidle" });
  assert.equal(await page.locator("html").getAttribute("lang"), "pt-PT");
  assert.equal(await page.locator("html").getAttribute("data-theme"), "light");
  let violations = (
    await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze()
  ).violations;
  assert.deepEqual(
    violations.map(
      (v) => `${v.id}: ${v.nodes.map((n) => n.target).join(", ")}`,
    ),
    [],
  );
  await page.locator('[data-lang="en"]').click();
  await page.locator("#theme-toggle").click();
  await page.goto(`${baseURL}/#home`, { waitUntil: "networkidle" });
  await page.screenshot({ path: "test-results/desktop.png", fullPage: true });
  violations = (
    await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze()
  ).violations;
  assert.deepEqual(
    violations.map(
      (v) => `${v.id}: ${v.nodes.map((n) => n.target).join(", ")}`,
    ),
    [],
  );

  for (const lang of ["en", "pt"]) {
    for (const width of [360, 390, 768]) {
      await page.setViewportSize({ width, height: 844 });
      await page.goto(`${baseURL}/?lang=${lang}`, { waitUntil: "networkidle" });
      assert.ok(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `No overflow at ${width}px in ${lang}`,
      );
    }
    const response = await page.request.get(
      `${baseURL}/assets/marcos-ribeiro-cv-${lang}.pdf`,
    );
    assert.equal(response.status(), 200);
    assert.equal((await response.body()).subarray(0, 5).toString(), "%PDF-");
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(baseURL + "/?lang=en", { waitUntil: "networkidle" });
  await page.screenshot({ path: "test-results/mobile.png", fullPage: true });
  await page.emulateMedia({ reducedMotion: "reduce" });
  assert.equal(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
    "auto",
  );
  // Printing is independent of visible filters, and carries all professional experience.
  await page.locator('[data-filter="life"]').click();
  await page.emulateMedia({ media: "print" });
  assert.equal(await page.locator("#print-cv").isVisible(), true);
  for (const employer of ["Falkata", "Megactec", "MaxiPC", "PC AS PONTES"]) {
    assert.match(
      await page.locator("#print-cv").innerText(),
      new RegExp(employer),
    );
  }
  assert.deepEqual(errors, []);
  console.log(
    "Passed: bilingual content, persistence, filters, ages, gallery, responsive layouts, WCAG checks, PDFs and print view.",
  );
} finally {
  await browser.close();
}
