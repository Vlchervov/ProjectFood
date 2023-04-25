import { Transition } from "react-transition-group";
import { useRef } from "react";
import {
  ModalForAuthorizationBody,
  ModalForAuthorizationHeader,
  ModalForAuthorizationSection,
  ModalForAuthorizationWindow,
} from "./ModalForAuthorized.styled";
import { AuthorizationForm } from "./AuthorizationForm";

interface IPropsModalForAuthorized {
  isModalForAuthorizationVisible: boolean;
  setIsModalForAuthorizationVisible: Function;
}

export const ModalForAuthorization = (props: IPropsModalForAuthorized) => {
  const nodeRef = useRef<HTMLInputElement>(null);
  return (
    <ModalForAuthorizationSection>
      <Transition
        timeout={2}
        in={props.isModalForAuthorizationVisible}
        nodeRef={nodeRef}
        mountOnEnters
        unmountOnExit
      >
        <ModalForAuthorizationWindow>
          <ModalForAuthorizationHeader>
            <div onClick={() => props.setIsModalForAuthorizationVisible(false)}>
              <span></span>
              <span></span>
            </div>
          </ModalForAuthorizationHeader>
          <ModalForAuthorizationBody>
            <AuthorizationForm />
            <h6>
              Ещё не зарегистрированы? <strong>Получить аккаунт</strong>
            </h6>
          </ModalForAuthorizationBody>
        </ModalForAuthorizationWindow>
      </Transition>
    </ModalForAuthorizationSection>
  );
};
