import { useEffect, useRef } from "react"
import { Transition } from "react-transition-group"
import { ModalBody, ModalWrapper, Section } from "../../modal/Modal.Styled";

interface IpropsModalSelectCity {
    cityModalHidden: boolean;
    setCityModalHidden: Function;
}

export const ModalSelectCity = (props: IpropsModalSelectCity) => {
    const nodeRef = useRef<HTMLElement>(null)
    const body = document.querySelector<HTMLBodyElement>("body");
    const ModalIsOpen = () => {
        return props.cityModalHidden ? (body!.style.overflow = "hidden")
            : (body!.style.overflow = "auto");
    }

    useEffect(() => {
        ModalIsOpen();
    }, [props.cityModalHidden])

    return (
        <Section>
            <Transition nodeRef={nodeRef} in={props.cityModalHidden} timeout={2} mountOnEnter unmountOnExit>
                <ModalWrapper>
                    <ModalBody>
                        <h1>Выбор города</h1>
                        <div>
                            <button onClick={() => { props.setCityModalHidden(false) }}>Отмена</button>
                        </div>
                    </ModalBody>
                </ModalWrapper>
            </Transition>
        </Section>
    )
}