import { SwiperSlide, Swiper } from "swiper/react";
import { UnderHeaderCategory } from "../Header.styled"
import { SwiperParamsForUnderHeaderCategory } from "../../Swiper/SwiperOptions";

export const HeaderCategory = () => {
    const currentCategory = 1;
    const categoryName: string[] = ["Десерт", "Завтраки", "Новинки", "Роллы", "Сашими", "Шаурма", "Бургеры", "Барбекю", "Гриль", "Сэндвичи", "Супы", "Рамен", "Закуски к пиву", "Пироги", "Пицца", "Гирос", "Такос", "Салаты", "WOK",];
    return (
        <>
            <UnderHeaderCategory>
                <ul>
                    {/* <Swiper className="swiperCategory"  {...SwiperParamsForUnderHeaderCategory}>
                        {
                            categoryName.map((i: string) => {
                                return (
                                    <SwiperSlide key={i} className="swiperSlideCategory">
                                        <li><a href="/#">{i}</a></li>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper> */}
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