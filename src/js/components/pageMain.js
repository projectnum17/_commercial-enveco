if (document.getElementById("page1Identifier")) {
  const swiper1 = new Swiper(".card-slider", {
    loop: false,
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
      },

      976: {
        slidesPerView: 2.5,
      },

      325: {
        slidesPerView: 1.2,
      },
    },
  });

  const swiper2 = new Swiper(".card-slider__activity", {
    loop: false,
    slidesPerView: 3.5,
    spaceBetween: 30,
    breakpoints: {
      1220: {
        slidesPerView: 4,
      },

      768: {
        slidesPerView: 2.5,
      },

      325: {
        slidesPerView: 1.2,
      },
    },
  });

  function setupTextToggle() {
    const textBlock = document.getElementById("textBlock");
    const readMoreButton = document.getElementById("readMoreButton");

    const originalText = textBlock.innerHTML;
    const shortText =
      "Enveco — українська спеціалізована проектно-консалтингова компанія, що надає комплексні інноваційні ...";

    let isShortened = true;

    function toggleText(event) {
      event.preventDefault(); // Предотвращаем стандартное действие браузера
      if (isShortened) {
        textBlock.innerHTML = originalText;
        readMoreButton.innerHTML = "Приховати";
        isShortened = false;
      } else {
        textBlock.innerHTML = shortText;
        readMoreButton.innerHTML = "Читати детальніше";
        isShortened = true;
      }
    }

    function checkWindowWidth() {
      if (window.innerWidth <= 768) {
        if (isShortened) {
          textBlock.innerHTML = shortText;
        }
      } else {
        textBlock.innerHTML = isShortened ? shortText : originalText;
      }
    }

    checkWindowWidth();

    readMoreButton.addEventListener("click", toggleText);

    window.addEventListener("resize", checkWindowWidth);
  }

  setupTextToggle();
}
