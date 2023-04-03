import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "./SwiperOptions";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export const SwiperComponent = (props) => {
  return (
    <Swiper {...SwiperOptions} spaceBetween={25}>
      <SwiperSlide>
        <img src={props.img.image_1} alt="фото товара" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={props.img.image_2} alt="фото товара" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={props.img.image_3} alt="фото товара" />
      </SwiperSlide>
    </Swiper>
  );
};
