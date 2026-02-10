

const elements = document.querySelectorAll(
  '.fade-up, .fade-down, .slide-left, .slide-right'
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.2 }
);

elements.forEach(el => observer.observe(el));
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
        setTimeout(() => loader.remove(), 800);
    }, 1800);
});
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// MAGNETIC HOVER
document.querySelectorAll("a, button, .service-card").forEach(el => {
    el.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(2)";
    });

    el.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });
});
// SPLIT TEXT INTO WORDS
document.querySelectorAll(".split-text").forEach(el => {
    const words = el.innerText.split(" ");
    el.innerHTML = words
        .map(word => `<span>${word}&nbsp;</span>`)
        .join("");
});

// OBSERVE SPLIT TEXT
const splitObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                entry.target
                    .querySelectorAll("span")
                    .forEach((span, i) => {
                        span.style.transitionDelay = `${i * 0.06}s`;
                    });
            }
        });
    },
    { threshold: 0.6 }
);
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("show");

    if (isOpen) {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("show");
        document.body.classList.remove("menu-open");
    } else {
        hamburger.classList.add("active");
        mobileMenu.classList.add("show");
        document.body.classList.add("menu-open");
    }
});

// CLOSE ON LINK CLICK
document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("show");
        document.body.classList.remove("menu-open");
    });
});



