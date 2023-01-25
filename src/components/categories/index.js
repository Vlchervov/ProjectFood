import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FirstCategory } from "./listOfCategories/categories1";
import { SecondCategory } from "./listOfCategories/categories2";
import { ThirdCategory } from "./listOfCategories/categories3";

export const CategoriesComponent = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/categories_1")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <section className="categories">
      <FirstCategory />
      <SecondCategory />
      <ThirdCategory />
    </section>
  );
};
