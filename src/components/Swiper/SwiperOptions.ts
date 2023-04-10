import { Autoplay, EffectFade, Pagination, SwiperOptions } from "swiper";

export const SwiperParamsForCatalogCard: SwiperOptions = {
  speed: 500,
  slidesPerView: 1,
  loop: true,
  modules: [Pagination],
  pagination: {
    clickable: true,
  },
  // effect: "fade",
  grabCursor: true,
};

export const SwiperParamsForCatalog: SwiperOptions = {
  speed: 600,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  modules: [Pagination, EffectFade, Autoplay],
  pagination: {
    clickable: true,
    dynamicBullets: true,
  },
  effect: "fade",
  grabCursor: true,
};

// export const SwiperOptionsMobile = {
//   speed: 500,
//   slidesPerView: 1,
//   loop: "enabled",
//   keyboard: {
//     onlyInViewport: false,
//     enabled: false,
//   },
//   mousewheel: {
//     enabled: true,
//   },
//   pagination: {
//     clickable: true,
//   },
//   effect: "fade",
//   fadeEffect: {
//     crossFade: true,
//   },
// };
