import { useSelector } from "react-redux";
import { HeaderRightSection, StyledLink, ItemCount } from "../Header.styled"
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import CartContext from "../../../context/cart/cartContext";
import { HiMoon } from "react-icons/hi2";
import { BiUser } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { ModalForAuthorization } from "../ModalForAuthorized";
import { DefaultTheme } from "styled-components";

interface IProps {
    toggleTheme(): void;
    theme: DefaultTheme;
}

export const HeaderRight = (props: IProps) => {
    const { cart }: any = useSelector((state) => state);
    const [hidden, setHidden] = useState<boolean>(true);
    const {
        isAuthorized,
        isModalForAuthorizationVisible,
        setIsModalForAuthorizationVisible,
        setIsAuthorized,
    } = useContext(CartContext);

    return (
        <HeaderRightSection>
            <ul className="menu">
                <li>
                    <button
                        onClick={() => setIsAuthorized(!isAuthorized)}
                        className="AppHeaderSection__ButtonIsAuthorized"
                    >
                        {isAuthorized ? "Выйти" : "FakeAuth"}
                    </button>
                </li>
                {isAuthorized ? (
                    <li>
                        <StyledLink to="#" className={`${!hidden && "active"}`}>
                            <BiUser onClick={() => setHidden(!hidden)} />
                        </StyledLink>
                        <ul className="dropDown" hidden={hidden}>
                            <li>
                                <StyledLink
                                    className={`${window.location.pathname === "/about-us" && "active"
                                        }`}
                                    to="about-us"
                                >
                                    О компании
                                </StyledLink>
                            </li>
                            <li>
                                <HiMoon
                                    onClick={props.toggleTheme}
                                    className="switchTheme"
                                />
                                <h6 onClick={props.toggleTheme}>{props.theme.title}</h6>
                            </li>
                        </ul>
                    </li>
                ) : (
                    <>
                        <button
                            className="AppHeaderSection__ButtonAuthorized"
                            onClick={() => setIsModalForAuthorizationVisible(true)}
                        >
                            Войти
                        </button>
                        <ModalForAuthorization
                            isModalForAuthorizationVisible={
                                isModalForAuthorizationVisible
                            }
                            setIsModalForAuthorizationVisible={
                                setIsModalForAuthorizationVisible
                            }
                        />
                    </>
                )}
                <li>
                    <StyledLink
                        className={`shopCartButton ${useLocation().pathname === "/basket" && "active"
                            }`}
                        to="basket"
                    >
                        {cart.length > 0 && (
                            <ItemCount>
                                <span>{cart.length}</span>
                            </ItemCount>
                        )}
                        <FaShoppingCart />
                    </StyledLink>
                </li>
            </ul>
        </HeaderRightSection>
    )
}