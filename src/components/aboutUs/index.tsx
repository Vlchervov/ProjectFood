import { AnimationSection } from "./animation";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { GoToUpComponent } from "../../utils/GoToUpComponent";

export const AboutUs = () => {
  const { scroll, handleButton } = useGlobalContext();

  return (
    <div ref={GoToUpComponent()}>
      <div style={{ marginTop: "64px" }}>
        <AiOutlineArrowUp
          onClick={handleButton}
          className={`arrowUp ${scroll > 700 && "show"}`}
        />
        <AnimationSection>
          <h2>О компании</h2>
          <p>
            IMPRESSIVE! onsectetur adipiscing elit
            OUR FUTURE! turpis nec vehicula porta, leo metus scelerisque
            nisi, et auctor nisl nisl eu ante. Aenean erat turpis, ullamcorper in
            dui ac, lobortis condimentum dui. Nulla rutrum tellus quis vehicula
            interdum. Maecenas sit amet nisi id risus sollicitudin venenatis.
            ARE YOU READY? Cras ante risus, rutrum id pharetra id, dictum
            vel eros. Aenean laoreet justo at sagittis luctus. Curabitur ac mi eu
            ipsum volutpat accumsan.

            ARE YOU ADAPTED PERFECTLY <strong>TO OUR philosophy</strong>
            <br />
            <br />
            <b>LET'S SCROLL THIS PAGE!</b>
            <br />
            TO LEARN AS MUCH ABOUT US AS POSSIBLE
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Morbi cursus, elit non dapibus tincidunt, nulla
            est condimentum risus, vitae congue elit massa a risus.
          </p>
        </AnimationSection>
        <AnimationSection>Animation</AnimationSection>
        <AnimationSection>in</AnimationSection>
        <AnimationSection>view!</AnimationSection>
      </div>
    </div>
  );
};