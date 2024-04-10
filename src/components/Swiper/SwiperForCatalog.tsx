import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { SwiperParamsForCatalog } from "./SwiperOptions";

export const SwiperForCatalog = () => {
    return (
        <Swiper className="catalog__swiper" {...SwiperParamsForCatalog}>
            <SwiperSlide>
                <img src="https://preview.redd.it/made-this-anime-banner-in-pixlr-v0-eni9yujjzvxa1.jpg?auto=webp&s=8b871c713fdb41aaf0c08702857ba0e8464534cf" alt="фото баннера" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://s0.rbk.ru/v6_top_pics/media/img/2/63/756324748637632.jpg" alt="фото баннера" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://s0.rbk.ru/v6_top_pics/resized/1200xH/media/img/7/74/755614628166747.jpg" alt="фото баннера" />
            </SwiperSlide>
        </Swiper>
    )
}