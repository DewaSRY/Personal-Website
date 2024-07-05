import { ComponentProps, PropsWithChildren, ElementRef, useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface BodyProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Body({ children, ...resProps }: BodyProps) {
  const workBodyElement = useRef<ElementRef<"div">>(null);
  const hrElement = useRef<ElementRef<"hr">>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: workBodyElement.current,
          start: "top 70%",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      });
      tl.from(hrElement.current, {
        scaleX: 0,
        transformOrigin: "left",
      });
      tl.to(hrElement.current, {
        scaleX: 1,
      });
    }
    // { scope: workContainer.current! }
  );

  return (
    <div ref={workBodyElement} className="scale-95">
      <hr ref={hrElement} />
      {children}
    </div>
  );
}
