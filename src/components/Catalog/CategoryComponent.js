import { CatalogCard } from "./CatalogCard";
import "./_catalog.scss";

export const CategoryComponent = (props) => {
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
