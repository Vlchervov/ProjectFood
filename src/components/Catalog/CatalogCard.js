import { useEffect, useState } from "react";

export const CatalogCard = (props) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setState(false);
    }, 4000);
  }, [state]);

  return (
    <div className="categories__item">
      <img src="https://top-fon.com/uploads/posts/2022-09/thumbs/1663730724_3-top-fon-com-p-serii-fon-jpeg-foto-5.jpg"></img>
      <div className="categories__body">
        <p className="categories__title">
          <b>{props.title}</b>
        </p>
        <p className="categories__weight">{props.weight}</p>
        <p className="categories__description">{props.descr}</p>

        <div className="categories__footer">
          <p className="categories__price">{props.price}</p>
          <div className="categories__button">
            <button
              onClick={() => {
                setState(true);
              }}
              disabled={state}
            >
              Купить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
