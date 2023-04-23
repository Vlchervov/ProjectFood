import { Transition } from "react-transition-group";
import { useRef } from "react";
import { ModalForAuthorizationBody, ModalForAuthorizationSection, ModalForAuthorizationWrapper } from "./ModalForAuthorized.styled";

interface IPropsModalForAuthorized {
    isModalForAuthorizationVisible: boolean;
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
                <ModalForAuthorizationWrapper>
                    <ModalForAuthorizationBody>

                    </ModalForAuthorizationBody>
                </ModalForAuthorizationWrapper>
            </Transition>
        </ModalForAuthorizationSection>
    )
}