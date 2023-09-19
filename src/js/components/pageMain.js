if (document.getElementById("page1Identifier")) {
  const swiper1 = new Swiper(".card-slider", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    slidesPerGroup: 1,

    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const swiper2 = new Swiper(".card-slider__activity", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    loop: true,

    breakpoints: {
      1270: {
        spaceBetween: 0,
        slidesPerView: 4,
      },
    },
  });
}
