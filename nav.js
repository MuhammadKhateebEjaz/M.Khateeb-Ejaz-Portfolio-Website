// Typed.js effect
var typed = new Typed("#typing", {
  strings: ["Web Developer", "UI/UX Designer", "Creative Thinker"],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 1000,
  loop: true
});
// Toggle mobile menu
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
};
