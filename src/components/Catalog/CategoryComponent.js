import { CatalogCard } from "./CatalogCard";
import { Navigation, Pagination, Scrollbar, A11y, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "../Swiper/SwiperOptions";
import { useState } from "react";

export const CategoryComponent = (props) => {
  const [keyboard, setKeyboard] = useState(false);
  return (
    <>
      <h1>{props.name}</h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={55}
        nested={false}
        keyboard={keyboard}
        {...SwiperOptions}
      >
        <section className="categories">
          {props.cards.map((e) => (
            <SwiperSlide
              onMouseEnter={() => {
                setKeyboard(true);
              }}
            >
              <CatalogCard {...e} key={e.id} />
            </SwiperSlide>
          ))}
        </section>
      </Swiper>
    </>
  );
};
