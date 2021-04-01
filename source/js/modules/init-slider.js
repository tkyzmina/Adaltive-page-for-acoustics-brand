
const swiper = new Swiper('.slider--1 .swiper-container', {
  loop: true,
  slidesPerView: 'auto',
  speed: 1500,
  pagination: {
    el: '.swiper-pagination-1',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  // effect: 'fade',
  // fadeEffect: {
  //   crossFade: true,
  // },
});
const swiper2 = new Swiper('.slider--2 .swiper-container', {
  loop: true,
  slidesPerView: 'auto',
  speed: 1000,
  pagination: {
    el: '.swiper-pagination-2',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  // effect: 'fade',
  // fadeEffect: {
  //   crossFade: true,
  // },
});

export {
  swiper, swiper2
};
