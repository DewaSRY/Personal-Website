"use client";
import {
  ComponentProps,
  ElementRef,
  PropsWithChildren,
  useEffect,
  useRef,
} from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface WorkContainerProps extends ComponentProps<"div">, PropsWithChildren {}

export default function WorkContainer({
  children,
  ...resProps
}: WorkContainerProps) {
  const parentContainer = useRef<HTMLElement>();
  const layer = useRef<ElementRef<"div">>(null);
  useEffect(() => {
    if (layer.current) {
      const parent = document.getElementById("projects");
      if (parent) {
        parentContainer.current = parent;
      }
    }
  }, []);

  useGSAP(
    () => {
      gsap.to(layer.current, {
        y: 0,
        scale: 1,
        scrollTrigger: {
          trigger: layer.current,
          start: "-100 bottom",
          end: `top center`,
          scrub: true,
          // markers: true,
        },
      });
    },
    { scope: parentContainer.current }
  );

  return (
    <div
      ref={layer}
      className="bg-primary-one-alfa scale-90 translate-y-[50%]  mx-auto my-10 px-4 py-6 rounded-xl w-11/12 xl:w-[1600px]"
    >
      {children}
    </div>
  );
}
