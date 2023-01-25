import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../../data/categories.json";

export const ThirdCategory = () => {
  return (
    <>
      <div className="categories__name">
        <h1 id="Category1">Категория 3</h1>
      </div>
      <div className="categories__list">
        {data.categories_3.map((item) => (
          <div className="categories__item">
            <Link key={item.title} to={`/categories/${item.id}`}>
              <img src={item.src} />
            </Link>
            <div className="categories__body">
              <p className="categories__title">
                <b>{item.title}</b>
              </p>
              <p className="categories__weight"></p>
              <p className="categories__description">{item.descr}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
