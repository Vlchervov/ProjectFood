import { Link } from "react-router-dom";
import data from "../../../data/categories.json";

export const FirstCategory = () => {
  return (
    <>
      <div className="categories__name">
        <h1 id="Category1">Категория 1</h1>
      </div>
      <div className="categories__list">
        {data.categories_1.map((item) => (
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
        {/* {category.map((index) => (
          <div key={index.id} className="categories__item">
            <Link key={index.title} to={`/categories/${index.id}`}>
              <img src={index.src} />
            </Link>
            <div className="categories__body">
              <div className="categories__content">
                <p className="categories__title">
                  <Link key={index.title} to={`/categories/${index.id}`}>
                    <b>{index.title}</b>
                  </Link>
                </p>
                <p className="categories__weight"></p>
                <p className="categories__description">{index.descr}</p>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </>
  );
};
