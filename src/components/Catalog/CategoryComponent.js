import { CatalogCard } from "./CatalogCard";

export const CategoryComponent = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <section className="categories">
        {props.cards.map((e) => (
          <CatalogCard {...e} />
        ))}
      </section>
    </>
  );
};
