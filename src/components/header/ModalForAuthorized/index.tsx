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
            <AuthorizationForm />
          </ModalForAuthorizationBody>
        </ModalForAuthorizationWindow>
      </Transition>
    </ModalForAuthorizationSection>
  );
};
