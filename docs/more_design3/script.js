document.addEventListener("DOMContentLoaded", () => {
  /* ========== Scroll Animation ========== */
  const scrollElements = document.querySelectorAll(".scroll-animation");

  const inView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  const displayScrollElement = (element) => {
    element.classList.add("visible");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (inView(el, 1.2)) {
        displayScrollElement(el);
      }
    });
  };

  window.addEventListener("scroll", handleScrollAnimation);
  handleScrollAnimation(); // on load

  /* ========== Typewriter Effect ========== */
  const typewriterEl = document.getElementById("typewriter");
  const typeText = "AI/ML Enthusiast | Full-Stack Dev | Audio Processing";
  let idx = 0;
  const speed = 100; // ms

  function typeWriter() {
    if (idx < typeText.length) {
      typewriterEl.textContent += typeText.charAt(idx);
      idx++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();

  /* ========== Hamburger Menu ========== */
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    playSound(hoverSound);
  });

  document.querySelectorAll(".nav-menu li a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      playSound(hoverSound);
    });
  });

  /* ========== Sound Effects ========== */
  // Base64-encoded short "click/hover" beep (very small)
  const beepBase64 =
    "data:audio/mp3;base64,//uQxAABAAARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAAACAgACAAACAgAaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

  const hoverSound = new Audio(beepBase64);

  function playSound(sound) {
    // Clone the audio to allow overlapping sounds
    const s = sound.cloneNode();
    s.play().catch(() => {/* ignore any play() errors */});
  }

  // Add sound on link hover
  const allLinks = document.querySelectorAll("a, button, .btn");
  allLinks.forEach((el) => {
    el.addEventListener("mouseover", () => playSound(hoverSound));
    el.addEventListener("click", () => playSound(hoverSound));
  });
});

