import { Autoplay, EffectFade, Pagination } from "swiper";
import { SwiperModule } from "swiper/types";

export interface ISwiperOptions {
  speed: number;
  slidesPerView: number;
  loop: string;
  autoplay: {
    delay: number;
    disableOnInteraction: boolean;
  };
  modules: SwiperModule[];
  pagination: {
    clickable: boolean;
    dynamicBullets: boolean;
  };
  effect: string;
  grabCursor: boolean;
}

export const SwiperOptions = {
  speed: 500,
  slidesPerView: 1,
  loop: "enabled",
  modules: [Pagination],
  pagination: {
    clickable: true,
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
