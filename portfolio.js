const navItems = document.querySelectorAll(".nav-list li");
const sections = document.querySelectorAll(".section");
const tabLists = document.querySelectorAll(".tab-list");
const tabBoxes = document.querySelectorAll(".resume-box, .portfolio-box");

// Navigation functionality
navItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    navItems.forEach((nav) => nav.classList.remove("active"));
    sections.forEach((section) => section.classList.remove("active"));

    item.classList.add("active");
    sections[index].classList.add("active");
  });
});

// Tab functionality for resume section
document.querySelectorAll(".resume-list").forEach((tab, index) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".resume-list")
      .forEach((t) => t.classList.remove("active"));
    document
      .querySelectorAll(".resume-box")
      .forEach((box) => box.classList.remove("active"));

    tab.classList.add("active");
    document.querySelectorAll(".resume-box")[index].classList.add("active");
  });
});

// Tab functionality for portfolio section
document.querySelectorAll(".portfolio-list").forEach((tab, index) => {
  tab.addEventListener("click", () => {
    document
      .querySelectorAll(".portfolio-list")
      .forEach((t) => t.classList.remove("active"));
    document
      .querySelectorAll(".portfolio-box")
      .forEach((box) => box.classList.remove("active"));

    tab.classList.add("active");
    document.querySelectorAll(".portfolio-box")[index].classList.add("active");
  });
});

// Smooth scrolling and animations
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// Add hover effects to portfolio items
document.querySelectorAll(".portfolio-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "translateY(-10px) scale(1.02)";
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "translateY(0) scale(1)";
  });
});

// Add typing effect to the main heading
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

// Initialize typing effect when page loads
window.addEventListener("load", () => {
  const nameElement = document.querySelector(".home-info h1");
  if (nameElement) {
    typeWriter(nameElement, "Anish Kumar", 150);
  }
});
