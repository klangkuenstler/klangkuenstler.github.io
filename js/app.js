import { events, copy, technicalSkills } from "./content.js";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const storage = {
  get(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      /* Preferences remain usable without storage. */
    }
  },
};
const queryLanguage = new URLSearchParams(location.search).get("lang");
let language = ["en", "pt"].includes(queryLanguage)
  ? queryLanguage
  : storage.get("cv-language") === "pt"
    ? "pt"
    : "en";
let theme = storage.get("cv-theme") === "light" ? "light" : "dark";
let filter = "all";
const opened = new Set();
let observer;
let galleryTrigger;
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
const icons = {
  cap: '<path d="m2 9 10-5 10 5-10 5-10-5Z"/><path d="M6 11v6c4 3 8 3 12 0v-6M22 9v7"/>',
  code: '<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18"/>',
  globe:
    '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',
  chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4"/><rect x="9" y="9" width="6" height="6" rx="1"/>',
  trophy:
    '<path d="M7 3h10v6a5 5 0 0 1-10 0V3ZM7 5H3v3a4 4 0 0 0 4 4m10-7h4v3a4 4 0 0 1-4 4M12 14v6m-5 1h10"/>',
  layers: '<path d="m3 7 9-5 9 5-9 5-9-5Zm0 5 9 5 9-5M3 17l9 5 9-5"/>',
  flag: '<path d="M5 22V3m0 1c5-5 9 5 15 0v10c-6 5-10-5-15 0"/>',
  spark:
    '<path d="m12 2 2.8 7.2L22 12l-7.2 2.8L12 22l-2.8-7.2L2 12l7.2-2.8L12 2Z"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 1v2m0 18v2M1 12h2m18 0h2M4 4l2 2m12 12 2 2M4 20l2-2M18 6l2-2"/>',
  moon: '<path d="M21 13A9 9 0 0 1 11 3a9 9 0 1 0 10 10Z"/>',
};
const icon = (name) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.code}</svg>`;
const t = (key) => copy[language][key];
const tags = (values) =>
  `<div class="tags">${values.map((tag) => `<span>${t("translatedTags")[tag] || tag}</span>`).join("")}</div>`;
const external = (url, label, className = "text-link") =>
  `<a class="${className}" href="${url}" target="_blank" rel="noopener noreferrer">${label} <span aria-hidden="true">↗</span></a>`;
const media = (event) =>
  `<button class="image-preview ${event.id === "downhill" ? "poster-preview" : ""}" type="button" data-image="${event.id}" aria-label="${t("viewImage")}: ${event[language].imageAlt}"><img src="${event.image}" alt="${event[language].imageAlt}" loading="lazy" width="${event.imageWidth || (event.id === "downhill" ? 512 : 1935)}" height="${event.imageHeight || (event.id === "downhill" ? 640 : 1151)}"><span>${t("viewImage")} ↗</span></button>`;

function eventGallery(event) {
  if (!event.gallery) return "";
  const count = event.gallery.length + (event.image ? 1 : 0);
  return `<div class="event-gallery"><div class="gallery-slides" id="slides-${event.id}" tabindex="0" role="region" aria-label="${language === "pt" ? "Galeria" : "Gallery"}: ${event[language].title}">${event.gallery
    .map(
      (item, index) =>
        `<figure>${
          item.type === "video"
            ? `<video controls playsinline preload="none" poster="${item.poster}" width="${item.width}" height="${item.height}" aria-label="${item[language]}"><source src="${item.src}" type="video/mp4"><a href="${item.src}">${item[language]}</a></video>`
            : `<button class="image-preview" type="button" data-gallery-event="${event.id}" data-gallery-index="${index}" aria-label="${t("viewImage")}: ${item[language]}"><img src="${item.src}" alt="${item[language]}" loading="lazy" width="${item.width}" height="${item.height}"><span>${t("viewImage")} ↗</span></button>`
        }<figcaption>${item[language]}</figcaption></figure>`,
    )
    .join(
      "",
    )}${event.image ? `<figure>${media(event)}<figcaption>${event[language].imageAlt}</figcaption></figure>` : ""}</div><div class="gallery-controls"><button type="button" data-slide="-1" aria-controls="slides-${event.id}" aria-label="${language === "pt" ? "Anterior" : "Previous slide"}" disabled>←</button><span class="gallery-count" aria-live="polite">1 / ${count}</span><button type="button" data-slide="1" aria-controls="slides-${event.id}" aria-label="${language === "pt" ? "Seguinte" : "Next slide"}">→</button></div></div>`;
}

function renderTimeline() {
  const visible = events.filter(
    (event) =>
      filter === "all" ||
      event.category === filter ||
      (filter === "projects" && event.project),
  );
  $("#filters").innerHTML = ["all", "work", "education", "projects", "life"]
    .map(
      (category) =>
        `<button type="button" data-filter="${category}" aria-pressed="${filter === category}">${t(category)}</button>`,
    )
    .join("");
  $("#filter-status").textContent = `${visible.length} ${t("milestoneCount")}`;
  $("#timeline-entries").innerHTML = visible
    .map((event, index) => {
      const text = event[language];
      return `<article class="timeline-entry ${index % 2 ? "right" : "left"} ${event.future ? "future" : ""}" id="event-${event.id}" data-year="${event.date.slice(0, 4)}">
      <div class="timeline-node" aria-hidden="true">${icon(event.icon)}</div>
      <div class="timeline-date"><time datetime="${event.date}">${text.date}</time><span>${t("age")} ${event.age}${event.future ? ` · ${t("expected")}` : ""}</span></div>
      <div class="timeline-card"><div class="card-kicker"><span>${t(event.category)}</span><span class="card-number">${String(index + 1).padStart(2, "0")}</span></div>
        ${text.badge ? `<span class="badge">${text.badge}</span>` : ""}
        <h3>${text.title}</h3><p class="event-place">${text.place}</p><p class="event-summary">${text.summary}</p>
        ${tags(event.tags)}
        <details data-event="${event.id}" ${opened.has(event.id) ? "open" : ""}><summary><span>${t("details")}</span><span class="expand-icon" aria-hidden="true">+</span></summary><div class="event-expanded"><p>${text.details}</p>${eventGallery(event)}${event.image && !event.gallery ? media(event) : ""}${event.url ? external(event.url, t(event.id === "pap" ? "repository" : "visit")) : ""}</div></details>
      </div></article>`;
    })
    .join("");
  const years = [...new Set(visible.map((event) => event.date.slice(0, 4)))];
  $("#year-nav").innerHTML = years
    .map(
      (year) =>
        `<a href="#event-${visible.find((event) => event.date.startsWith(year)).id}" data-year-link="${year}">${year}</a>`,
    )
    .join("");
  $$("#timeline details").forEach((element) =>
    element.addEventListener("toggle", () => {
      element.open
        ? opened.add(element.dataset.event)
        : opened.delete(element.dataset.event);
      if (!element.open)
        element.querySelectorAll("video").forEach((video) => video.pause());
      scheduleScroll();
    }),
  );
  observer?.disconnect();
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries)
        if (entry.isIntersecting) entry.target.classList.add("in-view");
    },
    { threshold: 0.08 },
  );
  $$(".timeline-entry").forEach((entry) => observer.observe(entry));
  $$(".gallery-slides").forEach((slides) => {
    slides.addEventListener(
      "scroll",
      () => {
        const index = Math.round(slides.scrollLeft / slides.clientWidth);
        const gallery = slides.closest(".event-gallery");
        gallery.querySelector(".gallery-count").textContent =
          `${index + 1} / ${slides.children.length}`;
        gallery.querySelector('[data-slide="-1"]').disabled = index === 0;
        gallery.querySelector('[data-slide="1"]').disabled =
          index === slides.children.length - 1;
        [...slides.children].forEach((slide, i) => {
          if (i !== index) slide.querySelector("video")?.pause();
        });
      },
      { passive: true },
    );
    slides.addEventListener("keydown", (event) => {
      if (
        event.target !== slides ||
        !["ArrowLeft", "ArrowRight"].includes(event.key)
      )
        return;
      event.preventDefault();
      slides.scrollBy({
        left: slides.clientWidth * (event.key === "ArrowRight" ? 1 : -1),
        behavior: reducedMotion.matches ? "instant" : "smooth",
      });
    });
  });
  scheduleScroll();
}

function renderProjects() {
  $("#project-grid").innerHTML = ["falkata", "megactec", "pap"]
    .map((id, index) => {
      const event = events.find((item) => item.id === id);
      const text = event[language];
      return `<article class="project-card">
      ${event.image ? media(event) : `<a class="hardware-art" href="${event.url}" target="_blank" rel="noopener noreferrer" aria-label="${t("repository")}: ${text.projectTitle}"><span class="hardware-label">${t("papGraphic")}</span><div class="device"><div class="device-screen"><div class="device-status">CarPlay <span>09:41</span></div><div class="device-apps"><span>♫</span><span>↗</span><span>☎</span><span>◉</span></div><div class="device-road"><span></span></div></div><i></i></div><span class="hardware-footer">${t("papSub")} <b>18/20 ↗</b></span></a>`}
      <div class="project-body"><div class="project-kicker"><span>0${index + 1} / ${t(id === "pap" ? "hardwareSoftware" : "webDevelopment")}</span><span>${event.date.slice(0, 4)}</span></div><h3>${text.projectTitle}</h3><p>${text.projectSummary}</p>${tags(event.tags.filter((tag) => id !== "falkata" || tag !== "Python"))}${external(event.url, t(id === "pap" ? "repository" : "visit"))}</div>
    </article>`;
    })
    .join("");
}

function renderToolkit() {
  const sets = {
    ...technicalSkills,
    systems: t("systemsList"),
    languages: t("languagesList"),
  };
  $("#toolkit-grid").innerHTML = Object.entries(sets)
    .map(
      ([key, values], index) =>
        `<article class="toolkit-card"><span class="toolkit-icon">${icon(["code", "layers", "chip", "globe"][index])}</span><h3>${t(key)}</h3>${tags(values)}</article>`,
    )
    .join("");
}

function renderCV() {
  const sections = [
    [t("education"), ["estga", "esproser-finish"]],
    [t("work"), ["falkata", "erasmus", "megactec", "maxipc"]],
    [t("projects"), ["pap"]],
  ];
  $("#print-cv").innerHTML =
    `<header><h1>Marcos Ribeiro</h1><p class="cv-role">${t("role")}</p><p>Viseu & Aveiro, Portugal · ${t("born")}</p><p><a href="mailto:marcospribeiro57@gmail.com">marcospribeiro57@gmail.com</a> · <a href="https://klangkuenstler.github.io">klangkuenstler.github.io</a></p><p><a href="https://github.com/klangkuenstler">github.com/klangkuenstler</a> · <a href="https://www.linkedin.com/in/marcos-ribeiro-2746052aa/">LinkedIn: Marcos Ribeiro</a></p></header>
    <section><h2>${t("profile")}</h2><p>${t("cvSummary")}</p><p>${t("contactLocation").replace("<br>", " · ")}</p></section>
    ${sections
      .map(
        ([heading, ids]) =>
          `<section><h2>${heading}</h2>${ids
            .map((id) => {
              const event = events.find((item) => item.id === id),
                text = event[language];
              return `<div class="cv-entry"><h3>${text.place}</h3><span class="cv-date">${id === "esproser-finish" ? (language === "en" ? "SEP 2022 — JUL 2025" : "SET 2022 — JUL 2025") : text.date}</span><p>${text.summary}</p>${["falkata", "maxipc", "pap"].includes(id) ? `<p>${text.details}</p>` : ""}${event.url ? `<a href="${event.url}">${event.url.replace("https://", "")}</a>` : ""}</div>`;
            })
            .join("")}</section>`,
      )
      .join("")}
    <section><h2>${t("skills")}</h2><p>${Object.values(technicalSkills).flat().join(" · ")}</p><p>${t("systemsList").join(" · ")}</p></section><section><h2>${t("languages")}</h2><p>${t("languagesList").join(" · ")}</p></section>`;
}

function updateTheme() {
  document.documentElement.dataset.theme = theme;
  $("#theme-toggle").innerHTML = icon(theme === "dark" ? "sun" : "moon");
  $("#theme-toggle").setAttribute(
    "aria-label",
    t(theme === "dark" ? "light" : "dark"),
  );
  $('meta[name="theme-color"]').content =
    theme === "dark" ? "#080e13" : "#f4f7f7";
}

function render() {
  document.documentElement.lang = language === "pt" ? "pt-PT" : "en";
  $$("[data-i18n]").forEach((element) => {
    element.innerHTML = t(element.dataset.i18n);
  });
  $$("[data-lang]").forEach((element) =>
    element.setAttribute("aria-pressed", element.dataset.lang === language),
  );
  $$(".cv-download").forEach((element) => {
    element.href = `assets/marcos-ribeiro-cv-${language}.pdf`;
  });
  $("#close-gallery").setAttribute("aria-label", t("close"));
  $(".main-nav").setAttribute("aria-label", t("nav"));
  $(".language-control").setAttribute("aria-label", t("languageLabel"));
  $("#filters").setAttribute("aria-label", t("filter"));
  $("#year-nav").setAttribute("aria-label", t("years"));
  renderTimeline();
  renderProjects();
  renderToolkit();
  renderCV();
  updateTheme();
}

let framePending = false;
function scheduleScroll() {
  if (framePending) return;
  framePending = true;
  requestAnimationFrame(() => {
    framePending = false;
    const timeline = $("#timeline");
    const rect = timeline.getBoundingClientRect();
    const progress = Math.max(
      0,
      Math.min(rect.height, window.innerHeight * 0.55 - rect.top),
    );
    $(".timeline-progress").style.height = `${progress}px`;
    const entries = $$(".timeline-entry");
    let activeYear = entries[0]?.dataset.year;
    for (const entry of entries) {
      const reached =
        entry.getBoundingClientRect().top < window.innerHeight * 0.55;
      entry.classList.toggle("reached", reached);
      if (reached) activeYear = entry.dataset.year;
    }
    $$("[data-year-link]").forEach((link) => {
      if (link.dataset.yearLink === activeYear)
        link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
    const sections = $$("main > section[id]");
    let active = "home";
    for (const section of sections)
      if (section.getBoundingClientRect().top < 180) active = section.id;
    $$(".main-nav a").forEach((link) => {
      if (link.hash === `#${active}`)
        link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  });
}

document.addEventListener("click", (event) => {
  const slideButton = event.target.closest("[data-slide]");
  if (slideButton) {
    const slides = document.getElementById(
      slideButton.getAttribute("aria-controls"),
    );
    slides.scrollBy({
      left: slides.clientWidth * Number(slideButton.dataset.slide),
      behavior: reducedMotion.matches ? "instant" : "smooth",
    });
  }
  const languageButton = event.target.closest("[data-lang]");
  if (languageButton) {
    language = languageButton.dataset.lang;
    storage.set("cv-language", language);
    const url = new URL(location.href);
    if (url.searchParams.has("lang")) {
      url.searchParams.set("lang", language);
      history.replaceState(null, "", url);
    }
    render();
  }
  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    filter = filterButton.dataset.filter;
    renderTimeline();
    $(`[data-filter="${filter}"]`).focus({ preventScroll: true });
  }
  const imageButton = event.target.closest(
    "[data-image], [data-gallery-event]",
  );
  if (imageButton) {
    const item = events.find(
      (entry) =>
        entry.id ===
        (imageButton.dataset.image || imageButton.dataset.galleryEvent),
    );
    const photo = imageButton.hasAttribute("data-gallery-index")
      ? item.gallery[Number(imageButton.dataset.galleryIndex)]
      : null;
    galleryTrigger = imageButton;
    $("#gallery-title").textContent =
      item[language].projectTitle || item[language].title;
    $("#gallery-image").src = photo?.src || item.image;
    $("#gallery-image").alt = photo?.[language] || item[language].imageAlt;
    $("#gallery-caption").textContent =
      photo?.[language] || item[language].imageAlt;
    $("#gallery").showModal();
    document.body.classList.add("dialog-open");
  }
});
$("#theme-toggle").addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  storage.set("cv-theme", theme);
  updateTheme();
});
$("#close-gallery").addEventListener("click", () => $("#gallery").close());
$("#gallery").addEventListener("click", (event) => {
  if (event.target !== $("#gallery")) return;
  const r = $("#gallery").getBoundingClientRect();
  if (
    event.clientX < r.left ||
    event.clientX > r.right ||
    event.clientY < r.top ||
    event.clientY > r.bottom
  )
    $("#gallery").close();
});
$("#gallery").addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  galleryTrigger?.focus({ preventScroll: true });
});
window.addEventListener("scroll", scheduleScroll, { passive: true });
window.addEventListener("resize", scheduleScroll);
new ResizeObserver(scheduleScroll).observe($("#timeline"));
window.addEventListener("beforeprint", renderCV);
$$("[data-icon]").forEach((element) => {
  element.innerHTML = icon(element.dataset.icon);
});
$("#copyright-year").textContent = new Date().getFullYear();
render();

// A subtle local spotlight follows the pointer; keyboard and touch users get the same content.
$("#timeline-entries").addEventListener("pointermove", (event) => {
  if (reducedMotion.matches || event.pointerType === "touch") return;
  const card = event.target.closest(".timeline-card");
  if (!card) return;
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--pointer-x", `${event.clientX - rect.left}px`);
  card.style.setProperty("--pointer-y", `${event.clientY - rect.top}px`);
});
