document.addEventListener("DOMContentLoaded", () => {
    // Add animation class to elements when they come into view
    const animateElements = document.querySelectorAll(".animate")
  
    if (animateElements.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = 1
              entry.target.style.transform = "translateY(0)"
            }
          })
        },
        { threshold: 0.1 },
      )
  
      animateElements.forEach((element) => {
        element.style.opacity = 0
        element.style.transform = "translateY(20px)"
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
        observer.observe(element)
      })
    }
  
    // Mobile menu toggle
    document.addEventListener("DOMContentLoaded", () => {
      const menuToggle = document.querySelector(".menu-toggle");
      const nav = document.querySelector("nav");
    
      menuToggle.addEventListener("click", () => {
        nav.classList.toggle("active");
        menuToggle.classList.toggle("active");
      });
    });

  })
  
