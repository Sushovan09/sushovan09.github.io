// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    /* ---------------------------
      Scroll Reveal / On-Scroll Animations
    --------------------------- */
    const scrollRevealElements = document.querySelectorAll(".scroll-reveal");
  
    function revealOnScroll() {
      scrollRevealElements.forEach((el) => {
        const elementPos = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPos < windowHeight - 100) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      });
    }
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger on load
  
    /* ---------------------------
      Typewriter Effect
    --------------------------- */
    const typewriterElement = document.getElementById("typewriter");
    const text =
      "AI/ML Enthusiast | Full-Stack Developer | Open-Source Advocate";
    let index = 0;
    const speed = 70; // Typing speed in ms
  
    function typeWriter() {
      if (index < text.length) {
        typewriterElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter();
  
    /* ---------------------------
      Mobile Navigation Toggle
    --------------------------- */
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
  
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  
    // Close menu on link click (mobile)
    document.querySelectorAll(".nav-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        if (navMenu.classList.contains("active")) {
          navMenu.classList.remove("active");
        }
      });
    });
  
    /* ---------------------------
      Scroll Progress Bar
    --------------------------- */
    const scrollProgress = document.getElementById("scroll-progress");
  
    function updateProgressBar() {
      const scrollPos = document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercent = (scrollPos / docHeight) * 100;
      scrollProgress.style.width = scrollPercent + "%";
    }
    window.addEventListener("scroll", updateProgressBar);
  
    /* ---------------------------
      Back to Top Button
    --------------------------- */
    const backToTopBtn = document.getElementById("backToTop");
  
    // Show/Hide button on scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });
  
    // Smooth scroll to top
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  