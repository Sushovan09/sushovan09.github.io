document.addEventListener("DOMContentLoaded", function () {
  /* ---------------------------
    Typewriter Effect
  --------------------------- */
  const typewriterElement = document.getElementById("typewriter");
  const text =
    "AI/ML Enthusiast | Full-Stack Developer | Open-Source Advocate";
  let index = 0;
  const speed = 70; // Typing speed (ms)

  function typeWriter() {
    if (index < text.length) {
      typewriterElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();

  /* ---------------------------
    Sidebar Toggle (Mobile)
  --------------------------- */
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.getElementById("hamburger");
  const mainContent = document.getElementById("main-content");

  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    mainContent.classList.toggle("shifted");
  });
});

