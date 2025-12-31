document.querySelectorAll(".dashboards img").forEach(img => {
  img.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.className = "image-overlay";

    const big = document.createElement("img");
    big.src = img.src;

    overlay.appendChild(big);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => overlay.remove());
  });
});

/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});

/* =====================================================
   SKILLS HOVER GLOW
===================================================== */
document.querySelectorAll(".skill, .skill-card").forEach(skill => {
  skill.addEventListener("mouseenter", () => {
    skill.classList.add("skill-glow");
  });
  skill.addEventListener("mouseleave", () => {
    skill.classList.remove("skill-glow");
  });
});

/* =====================================================
   FADE-IN ON SCROLL
===================================================== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(
  "section, .profile-section, .dashboards, .skills-section, .project-box"
).forEach(el => observer.observe(el));

/* =====================================================
   SUBTLE 3D PARALLAX (CARDS ONLY)
===================================================== */
document.addEventListener("mousemove", e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 4;
  const y = (e.clientY / window.innerHeight - 0.5) * 4;

  document.querySelectorAll(
    ".profile-section, .project-box, .skills-section"
  ).forEach(card => {
    card.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  });
});

document.addEventListener("mouseleave", () => {
  document.querySelectorAll(
    ".profile-section, .project-box, .skills-section"
  ).forEach(card => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});

/* =====================================================
   NAVBAR LINKS RIPPLE EFFECT
===================================================== */
document.querySelectorAll(".nav-right a").forEach(link => {
  link.style.position = "relative";
  link.style.overflow = "hidden";

  link.addEventListener("click", () => {
    const ripple = document.createElement("span");
    ripple.className = "nav-ripple";
    link.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

/* =====================================================
   GENTLE IDLE ANIMATION (DASHBOARDS)
===================================================== */
setInterval(() => {
  document.querySelectorAll(".dashboards img").forEach(img => {
    img.classList.add("idle-zoom");
    setTimeout(() => img.classList.remove("idle-zoom"), 900);
  });
}, 7000);

/* =====================================================
   CLICK FEEDBACK (GLOBAL RIPPLE)
===================================================== */
document.addEventListener("click", e => {
  const ripple = document.createElement("span");
  ripple.className = "click-ripple";
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;
  document.body.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

/* =====================================================
   PREVENT DEAD LINKS FEELING
===================================================== */
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    if (!link.href || link.href.endsWith("#")) {
      e.preventDefault();
      link.classList.add("link-warning");
      setTimeout(() => link.classList.remove("link-warning"), 400);
    }
  });
});

/* =====================================================
   IMAGE OPTIMIZATION
===================================================== */
document.querySelectorAll("img").forEach(img => {
  img.loading = "lazy";
});

/* =====================================================
   CONSOLE BRANDING
===================================================== */
console.log(
  "%cRehan Khan | Data Analyst Portfolio Loaded 🚀",
  "color:#38bdf8;font-size:14px;font-weight:bold;"
);

/* =====================================================
   PROFILE IMAGE — FULLSCREEN + HOVER (FIXED)
===================================================== */
document.querySelectorAll(".profile-pic").forEach(img => {
  img.style.cursor = "pointer";

  img.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.className = "image-overlay";

    const big = document.createElement("img");
    big.src = img.src;

    overlay.appendChild(big);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => overlay.remove());
  });

  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.06)";
    img.style.transition = "transform 0.4s ease";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});

/* =====================================================
   PROFILE SECTION IDLE MOTION
===================================================== */
setInterval(() => {
  const profile = document.querySelector(".profile-section");
  if (!profile) return;

  profile.style.transform = "translateY(-2px)";
  setTimeout(() => {
    profile.style.transform = "translateY(0)";
  }, 1200);
}, 6500);