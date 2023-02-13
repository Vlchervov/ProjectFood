import SwiperCore, { Keyboard } from "swiper";

SwiperCore.use([Keyboard]);

export const SwiperOptions = {
  speed: 1000,
  slidesPerView: 3,
  loop: "enabled",
  pagination: {
    clickable: true,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
};
