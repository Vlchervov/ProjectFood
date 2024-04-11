import { UnderHeaderCategory } from "../Header.styled"

export const HeaderCategory = () => {
    const categoryName: string[] = ["Десерт", "Завтраки", "Новинки", "Роллы", "Сашими", "Шаурма", "Бургеры", "Барбекю", "Гриль", "Сэндвичи", "Супы", "Рамен", "Закуски к пиву", "Пироги", "Пицца", "Гирос", "Такос", "Салаты", "WOK",];
    return (
        <>
            <UnderHeaderCategory>
                <ul>
                    {categoryName.map((i: string) => {
                        return (
                            <li key={i}><a href="/#">{i}</a></li>
                        )
                    })}
                </ul>
            </UnderHeaderCategory>
        </>
    )
}