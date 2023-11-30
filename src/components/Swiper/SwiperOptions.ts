import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
  SwiperOptions,
} from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const SwiperParamsForCatalogCard: SwiperOptions = {
  speed: 500,
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,
  modules: [Pagination],
  pagination: {
    clickable: true,
  },
  grabCursor: true,
};

export const SwiperOptionsForBasket: SwiperOptions = {
  slidesPerView: 2,
  spaceBetween: 0,
  modules: [Navigation, Scrollbar],
  scrollbar: {
    draggable: true,
  },
  grabCursor: true,
};

export const SwiperParamsForCatalog: SwiperOptions = {
  speed: 1200,
  slidesPerView: 1,
  spaceBetween: 1,
  loop: true,
  autoplay: {
    delay: 2400,
    disableOnInteraction: false,
  },
  modules: [Pagination, EffectFade, Autoplay],
  pagination: {
    clickable: true,
    dynamicBullets: true,
  },
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