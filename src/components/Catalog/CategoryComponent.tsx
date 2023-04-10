import { IDataContent } from "../../interfaces";
import { Categories, CategoryName } from "./Catalog.styled";
import { CatalogCard } from "./CatalogCard";
import { useState } from "react";
import "./_catalog.scss";

export const CategoryComponent = (props: IDataContent) => {
  const [state] = useState(props);
  return (
    <>
      <CategoryName id={props.anchor}>{props.name}</CategoryName>
      <Categories>
        {state.cards.map((item) => (
          <CatalogCard {...item} key={item.id} />
        ))}
      </Categories>
    </>
  );
};
