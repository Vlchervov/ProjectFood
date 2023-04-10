import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { SwiperParamsForCatalogCard } from "./SwiperOptions";

export const SwiperComponent = (props) => {
  return (
    <Swiper className="swiperCard" {...SwiperParamsForCatalogCard}>
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
