import { Transition } from "react-transition-group";
import { useRef, useState } from "react";
import {
  ModalForAuthorizationBody,
  ModalForAuthorizationHeader,
  ModalForAuthorizationSection,
  ModalForAuthorizationWindow,
} from "./ModalForAuthorized.styled";
import { AuthorizationForm } from "./AuthorizationForm";
interface IPropsModalForAuthorized {
  isModalForAuthorizationVisible: boolean;
  isAuthorized: string;
  setIsModalForAuthorizationVisible: Function;
  setIsAuthorized: Function;
}

export const ModalForAuthorization = (props: IPropsModalForAuthorized) => {
  const nodeRef = useRef<HTMLInputElement>(null);

  return (
    <ModalForAuthorizationSection>
      <Transition
        timeout={500}
        in={props.isModalForAuthorizationVisible}
        nodeRef={nodeRef}
        unmountOnExit
        mountOnEnter
      >
        <ModalForAuthorizationWindow>
          <ModalForAuthorizationHeader>
            <div onClick={() => props.setIsModalForAuthorizationVisible(false)}>
              <span></span>
              <span></span>
            </div>
          </ModalForAuthorizationHeader>
          <ModalForAuthorizationBody>
            <div id="recaptcha-container" className="CAPTCHA"></div>
            {!props.isAuthorized ? (
              <AuthorizationForm setIsAuthorized={props.setIsAuthorized} />
            ) : (
              <>
                <h1>Профиль</h1>
              </>
            )}
          </ModalForAuthorizationBody>
        </ModalForAuthorizationWindow>
      </Transition>
    </ModalForAuthorizationSection>
  );
};
