import { IDataContent } from "../../interfaces";
import { Categories, CategoryName } from "./Catalog.styled";
import { CatalogCard } from "./CatalogCard";
import "./_catalog.scss";

export const CategoryComponent = (props: IDataContent) => {
  return (
    <>
      <CategoryName id={props.anchor}>{props.name}</CategoryName>
      <Categories>
        {props.cards.map((e) => (
          <CatalogCard {...e} key={e.id} />
        ))}
      </Categories>
    </>
  );
};
