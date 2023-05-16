import { Link } from "react-router-dom";
import { NotFoundPageSection } from "./NotFoundPage.styled";

export const NotFoundPage = () => {
  return (
    <NotFoundPageSection>
      <h1>Упс...Такой страницы не существует</h1>
      <Link to="catalog">
        <button>Вернуться на главную</button>
      </Link>
    </NotFoundPageSection>
  );
};
