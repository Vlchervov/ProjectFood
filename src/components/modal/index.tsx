import { Transition } from "react-transition-group";
import "./_modal.scss";
import { useRef } from "react";
import { IModal } from "../../interfaces";

interface PropsModal {
  modal: IModal;
}

export const Modal = (props: PropsModal) => {
  const nodeRef = useRef(null);
  return (
    <section className="modal">
      <Transition
        nodeRef={nodeRef}
        in={props.modal.formIsVisible}
        timeout={2}
        mountOnEnter
        unmountOnExit
      >
        {() => (
          <div className="modal__wrapper">
            <div className="modal__body">
              <h1>Вы уверены?</h1>
              <div className="modal__bodyFooter">
                <button
                  className="modal__aceptButton"
                  onClick={() => {
                    props.modal.cleanArray();
                    props.modal.setFormIsVisivle(false);
                  }}
                >
                  Да
                </button>
                <button
                  className="modal__cancelButton"
                  onClick={() => {
                    props.modal.setFormIsVisivle(false);
                  }}
                >
                  Нет
                </button>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </section>
  );
};
