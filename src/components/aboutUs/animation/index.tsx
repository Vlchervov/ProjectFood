import { useRef } from "react";
import { useInView } from "framer-motion";
import { NewSection } from "../AboutUs.styled";
import { motion } from "framer-motion";

interface IAnimation {
  children: string | JSX.Element[];
}

export function AnimationSection({ children }: IAnimation) {
  const ref = useRef(null);
  const isInView = useInView(ref, {});

  return (
    <NewSection
      ref={ref}
      as={motion.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.6 }}
      transition={{ ease: "easeOut", duration: 0.6 }}
    >
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
        }}
      >
        {children}
      </span>
    </NewSection>
  );
}
