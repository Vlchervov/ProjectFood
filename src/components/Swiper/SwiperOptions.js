import SwiperCore, { Keyboard } from "swiper";

SwiperCore.use([Keyboard]);

export const SwiperOptions = {
  speed: 500,
  slidesPerView: 3,
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
