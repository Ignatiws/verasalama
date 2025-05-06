// Scroll reveal básico sin librerías externas
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section-block, .full-screen");
  
    const revealSection = (entry, observer) => {
      entry.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    };
  
    const options = {
      threshold: 0.2
    };
  
    const observer = new IntersectionObserver(revealSection, options);
  
    sections.forEach(section => {
      section.classList.add("invisible");
      observer.observe(section);
    });
  });
  