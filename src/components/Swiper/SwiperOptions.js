import SwiperCore, { Keyboard } from "swiper";

SwiperCore.use([Keyboard]);

export const SwiperOptions = {
  speed: 300,
  slidesPerView: 2,
  keyboard: {
    onlyInViewport: true,
    enabled: true,
  },
  mousewheel: {
    enabled: true,
  },
  pagination: {
    clickable: false,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
};

export const SwiperOptionsMobile = {
  speed: 500,
  slidesPerView: 1,
  loop: "disabled",
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
