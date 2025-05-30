/* ========= main.js ========= */
feather.replace();

// mobile nav
const navToggle = document.getElementById('nav-toggle');
const navMenu   = document.getElementById('nav-menu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// simple rotating tagline
const tagEl = document.getElementById('tagline');
const tags = ['AI/ML Developer', 'Full‑Stack Engineer', 'Open‑Source Contributor'];
let idx = 0;
function rotateTag() {
  tagEl.textContent = tags[idx];
  idx = (idx + 1) % tags.length;
}
rotateTag();
setInterval(rotateTag, 3000);
