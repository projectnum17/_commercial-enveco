if (document.getElementById("page1Identifier")) {
  const swiper1 = new Swiper(".card-slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    //slidesPerGroup: 1,

    breakpoints: {
      1024: {
        slidesPerView: 3.35,
      },
    },

    //loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const swiper2 = new Swiper(".card-slider__activity", {
    slidesPerView: 2,
    spaceBetween: 30,
    //loop: true,

    breakpoints: {
      1270: {
        spaceBetween: 0,
        slidesPerView: 3.35,
      },
    },
  });
}
