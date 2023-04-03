import { CategoryComponent } from "./CategoryComponent";
import data from "../../data/categories.json";
import "./_catalog.scss";
import { useLayoutEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptionsForCatalog } from "../Swiper/SwiperOptions";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export const CatalogComponent = () => {
  const h3ref = useRef(null);
  useLayoutEffect(() => {
    h3ref.current.scrollIntoView();
  }, []);

  return (
    <div className="catalog" ref={h3ref}>
      <Swiper className="catalog__swiper" {...SwiperOptionsForCatalog}>
        <SwiperSlide>
          <img src="https://n1s1.hsmedia.ru/1a/b2/e5/1ab2e53493a99ddc41f3072abfb2d2a6/728x542_1_ef80479b9da1e3d40c3545ca46eddf2b@1200x894_0xac120003_8396897381645801824.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s0.rbk.ru/v6_top_pics/media/img/2/63/756324748637632.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://proxy12.online.ua/news/r2-c299a95df8/6144490072370" />
        </SwiperSlide>
      </Swiper>
      {data.data.map((e) => (
        <CategoryComponent {...e} key={e.name} />
      ))}
    </div>
  );
};
