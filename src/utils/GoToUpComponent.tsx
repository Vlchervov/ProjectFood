import { useLayoutEffect, useRef } from "react";

export const GoToUpComponent = () => {
    const h3ref = useRef<HTMLInputElement>(null);
    useLayoutEffect(() => {
        h3ref.current!.scrollIntoView({ block: "start"});
    }, []);

    return h3ref
}