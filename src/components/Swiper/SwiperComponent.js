import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import { SwiperOptionsMobile } from "./SwiperOptions";

export const SwiperComponent = (props) => {
  const SwiperOptions = {
    speed: 1000,
    slidesPerView: 1,
    loop: "enabled",

    pagination: {
      clickable: true,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  };
  return (
    <Swiper {...SwiperOptions} spaceBetween={25} modules={[Pagination]}>
      <SwiperSlide>
        <img src={props.img.image_1} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={props.img.image_2} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={props.img.image_3} />
      </SwiperSlide>
    </Swiper>
  );
};
