// ---- Set current year in footer ----
document.getElementById("year").textContent = new Date().getFullYear();

// ---- Mobile menu toggle ----
const burger = document.getElementById("burger");
const tabs = document.getElementById("tabs");
burger.addEventListener("click", () => tabs.classList.toggle("open"));
tabs.querySelectorAll("a").forEach(link =>
  link.addEventListener("click", () => tabs.classList.remove("open"))
);

// ---- Active tab highlight on scroll ----
const sections = document.querySelectorAll("section");
const tabLinks = document.querySelectorAll(".tab");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) current = sec.id;
  });
  tabLinks.forEach(tab => {
    tab.classList.toggle("active", tab.getAttribute("href") === `#${current}`);
  });
});

// ---- Typing effect in hero ----
const words = [ "user-friendly interfaces.", "data analysis.", "solutions that scale."];
const typedEl = document.getElementById("typed");
let wordIndex = 0, charIndex = 0, deleting = false;

function type() {
  const word = words[wordIndex];
  if (!deleting) {
    typedEl.textContent = word.slice(0, ++charIndex);
    if (charIndex === word.length) { deleting = true; setTimeout(type, 1400); return; }
  } else {
    typedEl.textContent = word.slice(0, --charIndex);
    if (charIndex === 0) { deleting = false; wordIndex = (wordIndex + 1) % words.length; }
  }
  setTimeout(type, deleting ? 40 : 70);
}
type();

// ---- Scroll-reveal animations ----
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));

// ---- Contact form (front-end only — connect to Formspree/EmailJS later) ----
const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  note.textContent = "Message ready — connect this form to Formspree or EmailJS to actually send it.";
  form.reset();
});