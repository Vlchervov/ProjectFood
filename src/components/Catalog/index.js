import { useParams } from "react-router";
import { useState, useEffect } from "react";
const Singlepage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  return (
    <div>
      <div className="product">
        {product && (
          <a className="product__item">
            <img />
            <div className="product_body">
              <img src={product.scr} />
              <div className="product__content">
                <p className="product__title">{product.title}</p>
                <p className="product__weight">dsdsad</p>
                <p className="product__description">{product.descr}</p>
              </div>
              <div className="product__footer">
                <p className="product__price"></p>
                <div className="product__button">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export { Singlepage };
