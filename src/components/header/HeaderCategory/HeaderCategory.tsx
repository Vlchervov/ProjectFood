import { useLocation } from "react-router";
import { UnderHeaderCategory } from "../Header.styled"

export const HeaderCategory = () => {
    const location = useLocation();
    const categoryName: string[] = ["Десерт", "Завтраки", "Новинки", "Салаты", "Супы", "Роллы", "WOK", "Пицца", "Напитки", "Дополнительно"];
    return (
        <>
            {location.pathname === "/catalog" ? (
                <UnderHeaderCategory>
                    <ul>
                        {categoryName.map((i: string): JSX.Element => {
                            return (
                                <li key={i}><a href="/#">{i}</a></li>
                            )
                        })}
                    </ul>
                </UnderHeaderCategory>
            ) : null}
        </>
    )
}