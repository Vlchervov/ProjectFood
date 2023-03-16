import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  Mousewheel,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptionsMobile } from "../Swiper/SwiperOptions";
import { useMediaQuery } from "react-responsive";
import { CatalogCard } from "./CatalogCard";
import { useState } from "react";
SwiperCore.use([Keyboard, Mousewheel]);

export const CategoryComponent = (props) => {
  const isMobile = useMediaQuery({ maxWidth: "420px" });
  const [state, setState] = useState(props.cards);

  // const switchName = (id) => {
  //   setState((cart) => {
  //     return cart.map((product) => {
  //       if (product.id === id) {
  //         const objCopy = { ...product };
  //         return {
  //           ...objCopy,
  //           checkArray: "В корзине",
  //         };
  //       }
  //       return product;
  //     });
  //   });
  // };

  return (
    <>
      {isMobile && (
        <>
          <h1 className="categories">{props.name}</h1>
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

          <section className="categories">
            {props.cards.map((e) => (
              <CatalogCard {...e} key={e.id} />
            ))}
          </section>
        </>
      )}
    </>
  );
};
