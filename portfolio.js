/* ================= MOBILE MENU ================= */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

/* ================= ACTIVE NAV ON SCROLL ================= */
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

/* ================= TYPING EFFECT (HERO) ================= */
const text = "MERN Stack Developer";
const typeTarget = document.getElementById("typeText");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typeTarget.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 120);
  }
}

window.addEventListener("load", typeWriter);

/* ================= REVEAL ANIMATIONS ================= */
const revealElements = document.querySelectorAll(
  ".skill-card, .experience-card, .project-card, .education-card"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.6s ease";
  revealObserver.observe(el);
});

/* ================= CONTACT FORM FEEDBACK ================= */
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const button = contactForm.querySelector("button");
  button.textContent = "Sending...";
  button.disabled = true;

  setTimeout(() => {
    alert("Message sent successfully.");
    contactForm.reset();
    button.textContent = "Send Message";
    button.disabled = false;
  }, 1500);
});

/* ================= SCROLL PROGRESS BAR ================= */
const progressBar = document.createElement("div");
progressBar.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: 0%;
  background: linear-gradient(90deg, #6366f1, #22d3ee);
  z-index: 2000;
`;
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / scrollHeight) * 100;
  progressBar.style.width = progress + "%";
});
