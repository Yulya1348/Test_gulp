import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

Swiper.use([Navigation, Pagination, Scrollbar]);

const swiper = new Swiper('.section-list__swiper', {
  slidesPerGroup: 1,
  spaceBetween: 24,
  slidesPerView: 1.2,
  simulateTouch: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  breakpoints: {
    576: {
      slidesPerGroup: 1,
      spaceBetween: 32,
      slidesPerView: 2.15,
    },
    1200: {
      slidesPerGroup: 1,
      spaceBetween: 32,
      slidesPerView: 4,
    },
  },
});
