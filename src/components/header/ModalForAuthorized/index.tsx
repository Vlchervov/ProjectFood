import { Transition } from "react-transition-group";
import { useRef } from "react";
import { ModalForAuthorizationBody, ModalForAuthorizationHeader, ModalForAuthorizationSection, ModalForAuthorizationWindow } from "./ModalForAuthorized.styled";

interface IPropsModalForAuthorized {
    isModalForAuthorizationVisible: boolean;
    setIsModalForAuthorizationVisible: Function;
}

export const ModalForAuthorization = (props: IPropsModalForAuthorized) => {
    const nodeRef = useRef<HTMLInputElement>(null);
    return (
        <ModalForAuthorizationSection>
            <Transition timeout={2}
                in={props.isModalForAuthorizationVisible}
                nodeRef={nodeRef}
                mountOnEnters
                unmountOnExit>
                <ModalForAuthorizationWindow>
                    <ModalForAuthorizationHeader>
                        <div onClick={() => props.setIsModalForAuthorizationVisible(false)}>
                            <span></span>
                            <span></span>
                        </div>
                    </ModalForAuthorizationHeader>
                    <ModalForAuthorizationBody>
                        <h1>Вход в аккаунт</h1>
                        <div className="AuthContent">
                            <input placeholder="Почта" type="email" />
                            <input placeholder="Пароль" type="password" />
                            <button>Войти</button>
                        </div>
                    </ModalForAuthorizationBody>
                </ModalForAuthorizationWindow>
            </Transition>
        </ModalForAuthorizationSection>
    )
}