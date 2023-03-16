import { CategoryComponent } from "./CategoryComponent";
import data from "../../data/categories.json";
import "./_catalog.scss";

export const CatalogComponent = () => {
  return (
    <div className="catalog">
      {data.data.map((e) => (
        <CategoryComponent {...e} key={e.name} />
      ))}
    </div>
  );
};
