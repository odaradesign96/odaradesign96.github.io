const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle?.addEventListener('click', () => {
  const open = mainNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

// Manejo del enlace "Inicio" para volver al header (incluye logo y enlace del menú)
document.querySelectorAll('a[href="#inicio"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const header = document.getElementById('inicio');
    if (header) {
      header.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Cerrar el menú si está abierto
      mainNav?.classList.remove('is-open');
      menuToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  note.textContent = 'Formulario de demostración: conecta Formspree, HubSpot, Brevo u otro servicio para recibir los mensajes.';
  note.style.color = '#57c9ef';
});

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;

      if (counter.dataset.animated === "true") return;

      counter.dataset.animated = "true";

      const target = Number(counter.dataset.target);
      const type = counter.dataset.type;
      const duration = Number(counter.dataset.duration) || 2000;

      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Suaviza el final del contador
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        const currentValue = Math.floor(target * easedProgress);

        if (type === "number") {
          counter.textContent = currentValue;
        }

        if (type === "continuous") {
          counter.textContent = `${currentValue}/7`;
        }

        if (type === "kg") {
          counter.textContent =
            "+" + currentValue.toLocaleString("es-CL") + " kg";
        }

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          // Valores finales exactos
          if (type === "number") {
            counter.textContent = target;
          }

          if (type === "continuous") {
            counter.textContent = `${target}/7`;
          }

          if (type === "kg") {
            counter.textContent =
              "+" + target.toLocaleString("es-CL") + " kg";
          }
        }
      }

      requestAnimationFrame(updateCounter);

      observer.unobserve(counter);
    });
  },
  {
    threshold: 0.5,
  }
);

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

const sectorCarousel = document.querySelector(".sector-carousel");

if (sectorCarousel) {

  const track = sectorCarousel.querySelector(".sector-carousel-track");
  const slides = sectorCarousel.querySelectorAll(".sector-card");
  const dots = sectorCarousel.querySelectorAll(".sector-dot");

  const prevButton = sectorCarousel.querySelector(".sector-prev");
  const nextButton = sectorCarousel.querySelector(".sector-next");

  let currentSlide = 0;


  function showSectorSlide(index) {

    if (index < 0) {
      currentSlide = slides.length - 1;
    } else if (index >= slides.length) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }

    track.style.transform =
      `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle(
        "active",
        index === currentSlide
      );
    });
  }


  nextButton.addEventListener("click", () => {
    showSectorSlide(currentSlide + 1);
  });


  prevButton.addEventListener("click", () => {
    showSectorSlide(currentSlide - 1);
  });


  dots.forEach((dot) => {

    dot.addEventListener("click", () => {

      const index =
        Number(dot.dataset.slide);

      showSectorSlide(index);

    });

  });

}
