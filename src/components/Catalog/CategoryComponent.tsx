import { IDataContent } from "../../interfaces";
import { CatalogCard } from "./CatalogCard";
import "./_catalog.scss";


export const CategoryComponent = (props: IDataContent) => {

  return (
    <>
      <h1 id={props.anchor}>{props.name}</h1>
      <section className="categories">
        {props.cards.map((e) => (
          <CatalogCard {...e} key={props.anchorID} />
        ))
        }
      </section>
    </>
  );
};
