import { CategoryComponent } from "./CategoryComponent";
import data from "../../data/categories.json";
import { useState } from "react";
import { Catalog } from "./Catalog.styled";
import { motion } from "framer-motion";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { HeaderCategory } from "../header/HeaderCategory/HeaderCategory";
import { SwiperForCatalog } from "../Swiper/SwiperForCatalog";
import { GoToUpComponent } from "../../utils/GoToUpComponent";

export const CatalogComponent = () => {
  const { scroll, handleButton } = useGlobalContext();
  const [state] = useState(data.data);

  return (
    <Catalog
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.9 }}
      ref={GoToUpComponent()}
    >
      <AiOutlineArrowUp
        onClick={handleButton}
        className={`arrowUp ${scroll > 700 && "show"}`}
      />
      <SwiperForCatalog />
      <HeaderCategory />
      {state.map((e) => {
        return <CategoryComponent {...e} key={e.name} />
      })}
    </Catalog>
  );
};