import { CategoryComponent } from "./CategoryComponent";
import data from "../../data/categories.json";
import "./_catalog.scss";
import { useLayoutEffect, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions, SwiperOptionsForCatalog } from "../Swiper/SwiperOptions";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";



export const CatalogComponent = () => {
  const h3ref = useRef<HTMLInputElement>(null);
  useLayoutEffect(() => {
    h3ref.current!.scrollIntoView();
  }, []);

  return (
    <div className="catalog" ref={h3ref}>
      <Swiper className="catalog__swiper">
        <SwiperSlide>
          <img src="https://resizer.mail.ru/p/083fe3e5-6920-520e-a615-cc428ff3c43d/AAAcjXqsavsNPQPfw8sz4Q5wHG-Dcr1HeTbtVo_4w3TRRydCukIHCe2cfC9FYHfQTaoWnxiq-6vMgZKjRJjpK1FhUbU.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s0.rbk.ru/v6_top_pics/media/img/2/63/756324748637632.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s0.rbk.ru/v6_top_pics/resized/1200xH/media/img/7/74/755614628166747.jpg" />
        </SwiperSlide>
      </Swiper>
      {data.data.map((e) => (
        <CategoryComponent {...e} key={e.name} />
      ))}
    </div>
  );
};
