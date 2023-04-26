import { CategoryComponent } from "./CategoryComponent";
import data from "../../data/categories.json";
import { useContext, useLayoutEffect, useRef, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { SwiperParamsForCatalog } from "../Swiper/SwiperOptions";
import CartContext from "../../context/cart/cartContext";
import { Catalog } from "./Catalog.styled";
import { motion } from "framer-motion";

export const CatalogComponent = () => {
  const { currentCity } = useContext(CartContext);
  const [state] = useState(data.data);
  const h3ref = useRef<HTMLInputElement>(null);
  useLayoutEffect(() => {
    h3ref.current!.scrollIntoView();
  }, []);

  return (
    <Catalog as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ ease: "easeOut", duration: .9 }} ref={h3ref}>
      <Swiper className="catalog__swiper" {...SwiperParamsForCatalog}>
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
      {state.map((e) => {
        if (e.city === currentCity) {
          return <CategoryComponent {...e} key={e.name} />;
        }
      })}
    </Catalog>
  );
};
