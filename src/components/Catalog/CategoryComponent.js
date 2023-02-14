import { CatalogCard } from "./CatalogCard";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  Mousewheel,
  Controller,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions, SwiperOptionsMobile } from "../Swiper/SwiperOptions";
import { useMediaQuery } from "react-responsive";
SwiperCore.use([Keyboard, Mousewheel]);

export const CategoryComponent = (props) => {
  const isMobile = useMediaQuery({ maxWidth: "812px" });

  return (
    <>
      {isMobile && (
        <>
          <h1>{props.name}</h1>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={55}
            {...SwiperOptionsMobile}
          >
            <section className="categories">
              {props.cards.map((e) => (
                <SwiperSlide key={e.id}>
                  <CatalogCard {...e} key={e.id} />
                </SwiperSlide>
              ))}
            </section>
          </Swiper>
        </>
      )}
      {!isMobile && (
        <>
          <h1>{props.name}</h1>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={55}
            {...SwiperOptions}
          >
            <section className="categories">
              {props.cards.map((e) => (
                <SwiperSlide key={e.id}>
                  <CatalogCard {...e} key={e.id} />
                </SwiperSlide>
              ))}
            </section>
          </Swiper>
        </>
      )}
    </>
  );
};
