import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { SwiperParamsForCatalogCard } from "./SwiperOptions";

interface IProps {
  img: {
    image_1?: string;
    image_2?: string;
    image_3?: string;
  };
}

export const SwiperComponent = (props: IProps) => {
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