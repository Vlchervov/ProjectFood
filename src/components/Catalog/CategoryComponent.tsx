import { CatalogCard } from "./CatalogCard";
import "./_catalog.scss";
import { Cards } from "./interfaces/CatalogInterfaces";

export const CategoryComponent = (props: any) => {
  return (
    <>
      <h1 id={props.anchor}>{props.name}</h1>
      <section className="categories">
        {props.cards.map((e: Cards) => (
          <CatalogCard {...e} key={e.id} />
        ))}
      </section>
    </>
  );
};
