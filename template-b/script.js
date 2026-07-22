const IMAGE_PATHS = {
  hero: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=980&q=82",
  detail: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=980&q=82",
  archive: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=82"
};

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector("#main-menu");

document.querySelectorAll("[data-image]").forEach((image) => {
  const key = image.dataset.image;
  if (IMAGE_PATHS[key]) {
    image.src = IMAGE_PATHS[key];
  }
});

const closeMenu = () => {
  menu.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
};

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menu.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
);

document.querySelectorAll(".reveal").forEach((section) => {
  revealObserver.observe(section);
});
