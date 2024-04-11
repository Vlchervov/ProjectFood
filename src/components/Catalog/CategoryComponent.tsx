import React from "react";
import { IDataContent } from "../../interfaces";
import { Categories, CategoryName, WrapperCatalogCategories } from "./Catalog.styled";
import { CatalogCard } from "./CatalogCard";
import { useState } from "react";

export const CategoryComponent = (props: IDataContent) => {
  const [state] = useState<IDataContent>(props);
  return (
    <WrapperCatalogCategories>
      <CategoryName>{state.name}</CategoryName>
      <Categories id={state.anchor}>
        {state.cards.map((item) => (
          <React.Fragment key={item.id}>
            <CatalogCard {...item} />
          </React.Fragment>
        ))}
      </Categories>
    </WrapperCatalogCategories>
  );
};