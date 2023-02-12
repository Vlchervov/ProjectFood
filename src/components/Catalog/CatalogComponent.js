import { CategoryComponent } from "./CategoryComponent";
import data from "../../data/Categories.json";

export const CatalogComponent = () => {
  return (
    <div className="catalog">
      {data.data.map((e) => (
        <CategoryComponent {...e} />
      ))}
    </div>
  );
};