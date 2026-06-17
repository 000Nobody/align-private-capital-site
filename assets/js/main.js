/* Align Private Capital — interaction layer */
(function () {
  "use strict";

  /* ---- Header: solidify on scroll ------------------------------------- */
  const header = document.querySelector(".site-header");
  const onLight = header && header.classList.contains("on-light");
  const solidify = () => {
    if (!header) return;
    if (window.scrollY > 40) header.classList.add("solid");
    else header.classList.remove("solid");
  };
  solidify();
  window.addEventListener("scroll", solidify, { passive: true });

  /* ---- Mobile nav ----------------------------------------------------- */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---- Scroll reveal -------------------------------------------------- */
  const reveals = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && reveals.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* ---- Subtle hero water parallax ------------------------------------ */
  const water = document.querySelector(".hero__water");
  if (water && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let ticking = false;
    window.addEventListener(
      "scroll",
      () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const y = Math.min(window.scrollY, 600);
          water.style.transform = "translateY(" + y * 0.12 + "px)";
          ticking = false;
        });
      },
      { passive: true }
    );
  }

  /* ---- Bio expand/collapse ------------------------------------------- */
  document.querySelectorAll(".bio-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const bio = btn.previousElementSibling;
      const open = bio.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
      btn.querySelector(".label").textContent = open ? "Read less" : "Read full bio";
    });
  });

  /* ---- Footer year ---------------------------------------------------- */
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---- Contact form (front-end only, no backend) --------------------- */
  const form = document.getElementById("inquiry-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const note = form.querySelector(".form-status");
      if (note) {
        note.hidden = false;
        note.textContent =
          "Thank you. This is a demonstration form — please reach us directly using the office details above.";
      }
      form.reset();
    });
  }
})();
