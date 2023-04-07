import { Transition } from "react-transition-group";
import { useRef } from "react";
import { IModal } from "../../interfaces";
import { AceptButton, DeclineButton, ModalBody, ModalFooter, ModalWrapper, Section } from "./Modal.Styled";

export const Modal = (props: IModal) => {
  const nodeRef = useRef(null);
  return (
    <Section>
      <Transition
        nodeRef={nodeRef}
        in={props.formIsVisible}
        timeout={2}
        mountOnEnter
        unmountOnExit
      >
        {() => (
          <ModalWrapper>
            <ModalBody>
              <h1>Вы уверены?</h1>
              <ModalFooter>
                <AceptButton
                  onClick={() => {
                    props.cleanArray();
                    props.setFormIsVisivle(false);
                  }}
                >
                  Да
                </AceptButton>
                <DeclineButton
                  className="modal__cancelButton"
                  onClick={() => {
                    props.setFormIsVisivle(false);
                  }}
                >
                  Нет
                </DeclineButton>
              </ModalFooter>
            </ModalBody>
          </ModalWrapper>
        )}
      </Transition>
    </Section>
  );
};
