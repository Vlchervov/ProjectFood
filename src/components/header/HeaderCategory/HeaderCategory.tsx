import { SwiperSlide, Swiper } from "swiper/react";
import { UnderHeaderCategory } from "../Header.styled"
import { SwiperParamsForUnderHeaderCategory } from "../../Swiper/SwiperOptions";

export const HeaderCategory = () => {
    const currentCategory = 1;
    const categoryName: string[] = ["Десерт", "Завтраки", "Новинки", "Салаты", "Супы", "Роллы", "WOK", "Пицца", "Напитки", "Дополнительно", "тест1", "Тест 2", "Тест 3"];
    const updateCategoryName = categoryName.slice(currentCategory * 1, (currentCategory * 6) + 1).map(item => item)
    return (
        <>
            <UnderHeaderCategory>
                <ul>
                    <Swiper className="swiperCategory"  {...SwiperParamsForUnderHeaderCategory}>
                        {
                            categoryName.map((i: string) => {
                                return (
                                    <SwiperSlide key={i} className="swiperSlideCategory">
                                        <li><a href="/#">{i}</a></li>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </ul>
            </UnderHeaderCategory>
        </>
    )
}