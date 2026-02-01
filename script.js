// Theme
const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme) setTheme(savedTheme);

// Toggle theme
themeBtn?.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
});

// Mobile menu
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(isOpen));
});

// Close menu when clicking a link (mobile)
nav?.addEventListener("click", (e) => {
  const a = e.target.closest("a");
  if (!a) return;
  nav.classList.remove("open");
  burger?.setAttribute("aria-expanded", "false");
});

// Active section highlight
const links = Array.from(document.querySelectorAll(".nav-link"));
const sections = links
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

const obs = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const id = "#" + entry.target.id;
    links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === id));
  });
}, { rootMargin: "-30% 0px -60% 0px" });

sections.forEach((s) => obs.observe(s));

// Copy email button
const copyBtn = document.getElementById("copyEmail");
copyBtn?.addEventListener("click", async () => {
  const email = copyBtn.getAttribute("data-email");
  if (!email) return;
  try {
    await navigator.clipboard.writeText(email);
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = "Copy email"), 1200);
  } catch {
    // fallback
    prompt("Copy this email:", email);
  }
});

// Back to top button
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  if (!toTop) return;
  const show = window.scrollY > 600;
  toTop.classList.toggle("show", show);
});
toTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
