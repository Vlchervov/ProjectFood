import { CategoryComponent } from "./CategoryComponent";
import data from "../../data/categories.json";

export const CatalogComponent = () => {
  return (
    <div className="catalog">
      {data.data.map((e) => (
        <CategoryComponent {...e} key={e.name} />
      ))}
    </div>
  );
};
