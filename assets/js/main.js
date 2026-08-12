// Año actual
document.querySelector(".year").textContent = new Date().getFullYear();

// Animación de entrada
window.addEventListener("load", () => {
  document.body.classList.remove("loading");
  document.body.classList.add("loaded");
});

// Header que se contrae al hacer scroll + parallax de la foto
const mast = document.querySelector(".mast");
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
addEventListener("scroll", () => {
  document.body.classList.toggle("scrolled", scrollY > 24);
  if (!reduced) mast.style.setProperty("--plax", (scrollY * 0.18) + "px");
}, { passive: true });

// Secciones que aparecen al hacer scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("shown"); });
}, { threshold: 0.25 });
document.querySelectorAll(".drift.onscroll").forEach(el => io.observe(el));
