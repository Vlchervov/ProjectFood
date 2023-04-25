import { Transition } from "react-transition-group";
import { useRef } from "react";
import { IModal } from "../../interfaces";
import { AceptButton, DeclineButton, ModalBody, ModalFooter, ModalWrapper, Section } from "./Modal.Styled";
import { useActions } from "../../hooks/useActions";

export const Modal = (props: IModal) => {
  const nodeRef = useRef<HTMLInputElement>(null);
  const { cleanArray } = useActions()
  return (
    <Section>
      <Transition
        nodeRef={nodeRef}
        in={props.formIsVisible}
        timeout={2}
        mountOnEnter
        unmountOnExit
      >
        <ModalWrapper>
          <ModalBody>
            <h1>Вы уверены?</h1>
            <ModalFooter>
              <AceptButton
                onClick={() => {
                  props.setFormIsVisivle(false);
                  cleanArray(null)
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
      </Transition>
    </Section>
  );
};
