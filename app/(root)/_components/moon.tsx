"use client";
import {
  ComponentProps,
  ElementRef,
  PropsWithChildren,
  useEffect,
  useRef,
} from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface MoonProps extends ComponentProps<"img">, PropsWithChildren {}

export default function Moon({ children, ...resProps }: MoonProps) {
  const parentContainer = useRef<HTMLElement>();
  const moonElement = useRef<ElementRef<"img">>(null);

  useEffect(() => {
    if (moonElement.current && moonElement.current.parentElement) {
      parentContainer.current = moonElement.current.parentElement;
    }
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: moonElement.current,
          start: "center center",
          end: `bottom top`,
          scrub: true,
          // markers: true,
        },
      });
      gsap.from(moonElement.current, {
        rotateZ: -180,
        scale: 0.7,
        duration: 1.6,
      });
      gsap.to(moonElement.current, {
        rotateZ: 1,
        scale: 1,
        duration: 2.2,
      });

      tl.to(moonElement.current, {
        rotateZ: 180,
        scale: 1.2,
        y: 120,
        // ease: "elastic.inOut",
      });
    },
    { scope: parentContainer }
  );

  return (
    <Image
      ref={moonElement}
      className={cn(
        "absolute left-[5%] top-[10%] z-0 duration-300",
        "w-[70vw] h-[calc(90vw - 120px)]",
        "max-w-[1000px] max-h-[900px]"
      )}
      src="/moon.png"
      alt="moon"
      width={900}
      height={900}
    />
  );
}
