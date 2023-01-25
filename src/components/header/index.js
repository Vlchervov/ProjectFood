import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import data from "../../data/navigationCategories.json";

export const HeaderComponent = (props) => {
  const [state, setState] = useState(true);
  const [modalState, setModalState] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="header">
      <div className="header__section">
        <Link to="/categories">
          <h2 onClick={() => setState(state === false ? true : false)}>Меню</h2>
        </Link>
        {/* <Link to="/aboutUs">
          <h2>О нас</h2>
        </Link> */}
        {/* <ul className="headerNav__list">
          <a href="#2" className="headerNav__item"> Категория 2</a>
        </ul> */}
        <Link to="/Authorization">
          <h2 className="headerNav__list">Профиль</h2>
        </Link>
      </div>
      {/* <div className="headerNav__section">
        <ul className="headerNav__list">
          {data.length > 0 &&
            data.map((item, index) => (
              <li className="headerNav__item" key={index}>
                <a href={item.Anchor}>{item.title}</a>
              </li>
            ))}
        </ul>
      </div> */}
    </div>
  );
};
