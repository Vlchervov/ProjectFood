import { IDataContent } from "../../interfaces";
import { Categories, CategoryName } from "./Catalog.styled";
import { CatalogCard } from "./CatalogCard";
import { useState } from "react";

export const CategoryComponent = (props: IDataContent) => {
  const [state] = useState(props);
  return (
    <>
      <CategoryName id={state.anchor}>{state.name}</CategoryName>
      <Categories>
        {state.cards.map((item) => (
          <CatalogCard {...item} key={item.title} />
        ))}
      </Categories>
    </>
  );
};
