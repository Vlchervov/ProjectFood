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
                <img src="../imgForCatalogBanner/aquaBanner.jpeg" alt="фото баннера" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="../imgForCatalogBanner/756324748637632.jpg" alt="фото баннера" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="../imgForCatalogBanner/755614628166747.jpg" alt="фото баннера" />
            </SwiperSlide>
        </Swiper>
    )
}