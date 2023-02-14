import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import { CatalogCard } from "../Catalog/CatalogCard";

SwiperCore.use([Keyboard]);

export const SwiperComponent = () => {
  const [slider, setSlider] = useState(false);
  const SwiperOptions = {
    speed: 1000,
    slidesPerView: 1,
    loop: "enabled",
    keyboard: {
      onlyInViewport: true,
    },
    pagination: {
      clickable: true,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  };
  return (
    <Swiper
      {...SwiperOptions}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      onSlideChange={() => setSlider(slider === false ? true : false)}
    >
      <SwiperSlide
        onClick={() => {
          console.log("Вы Тыкнули на котейку!");
        }}
      >
        <img src="https://assets.htmlacademy.ru/img/blog/113/jpeg/jpeg1@1x.jpg"></img>
      </SwiperSlide>
      <SwiperSlide></SwiperSlide>
    </Swiper>
  );
};
