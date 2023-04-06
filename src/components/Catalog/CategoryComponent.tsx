import { CatalogCard } from "./CatalogCard";
import "./_catalog.scss";
import { DataContent } from "../../interfaces";

export const CategoryComponent = (props: DataContent) => {
  return (
    <>
      <h1 id={props.anchor}>{props.name}</h1>
      <section className="categories">
        {props.cards.map((e) => (
          <CatalogCard {...e} key={e.id} />
        ))}
      </section>
    </>
  );
};
