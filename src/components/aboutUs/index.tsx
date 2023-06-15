import { AnimationSection } from "./animation";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useGlobalContext } from "../../hooks/useGlobalContext";

export const AboutUs = () => {
  const { scroll, handleButton } = useGlobalContext();

  return (
    <>
      <AiOutlineArrowUp
        onClick={handleButton}
        className={`arrowUp ${scroll > 700 && "show"}`}
      />
      <AnimationSection>
        <h2>О компании</h2>
        <p>
          <b>IMPRESSIVE!</b> consectetur adipiscing elit
          <b>OUR FUTURE!</b>turpis nec vehicula porta, leo metus scelerisque
          nisi, et auctor nisl nisl eu ante. Aenean erat turpis, ullamcorper in
          dui ac, lobortis condimentum dui. Nulla rutrum tellus quis vehicula
          interdum. Maecenas sit amet nisi id risus sollicitudin venenatis.
          <b>ARE YOU READY?</b> Cras ante risus, rutrum id pharetra id, dictum
          vel eros. Aenean laoreet justo at sagittis luctus. Curabitur ac mi eu
          ipsum volutpat accumsan.{" "}
          <b>
            ARE YOU ADAPTED PERFECTLY <strong>TO OUR philosophy</strong>
          </b>
          <br />
          <br />
          <b>LET'S SCROLL THIS PAGE!</b>
          <br />
          <b>TO LEARN AS MUCH ABOUT US AS POSSIBLE</b>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Morbi cursus, elit non dapibus tincidunt, nulla
          est condimentum risus, vitae congue elit massa a risus.
        </p>
      </AnimationSection>
      <AnimationSection>Animation</AnimationSection>
      <AnimationSection>in</AnimationSection>
      <AnimationSection>view!</AnimationSection>
    </>
  );
};