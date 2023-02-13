import { CategoryComponent } from "./CategoryComponent";
import data from "../../data/categories.json";
import { SwiperComponent } from "../Swiper/SwiperComponent";
export const CatalogComponent = () => {
  return (
    <div className="catalog">
      <SwiperComponent />
      {data.data.map((e) => (
        <CategoryComponent {...e} key={e.name} />
      ))}
    </div>
  );
};
