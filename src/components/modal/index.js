import { Transition } from "react-transition-group";
import "./_modal.scss";
import { useRef } from "react";

export const Modal = (props) => {
  const nodeRef = useRef(null);
  return (
    <section className="modal">
      <Transition
        nodeRef={nodeRef}
        in={props.formIsVisible}
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
                    props.cleanArray();
                    props.setFormIsVisivle(false);
                  }}
                >
                  Да
                </button>
                <button
                  className="modal__cancelButton"
                  onClick={() => {
                    props.setFormIsVisivle(false);
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
