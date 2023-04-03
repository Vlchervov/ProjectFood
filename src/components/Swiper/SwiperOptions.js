import { Autoplay, EffectFade, Pagination } from "swiper";

export const SwiperOptions = {
  speed: 600,
  slidesPerView: 1,
  loop: "enabled",
  modules: [Pagination],
  pagination: {
    clickable: true,
    dynamicBullets: true,
  },
  // effect: "fade",
  grabCursor: true,
};

export const SwiperOptionsForCatalog = {
  speed: 600,
  slidesPerView: 1,
  loop: "enabled",
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

export const SwiperOptionsMobile = {
  speed: 500,
  slidesPerView: 1,
  loop: "enabled",
  keyboard: {
    onlyInViewport: false,
    enabled: false,
  },
  mousewheel: {
    enabled: true,
  },
  pagination: {
    clickable: true,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
};
