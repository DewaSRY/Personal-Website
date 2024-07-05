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
  const moonElement = useRef<ElementRef<"img">>(null);

  useGSAP(() => {
    const homeSectionElement = document.getElementById("home");
    const activeMagneto = (event: MouseEvent) => {
      const moon = moonElement.current;
      if (moon) {
        const boundingBox = moon.getBoundingClientRect()!;
        const magnetoStrange = 100;
        const newX = (event.clientX - boundingBox?.left) / moon.offsetWidth;
        const newY = (event.clientY - boundingBox?.top) / moon.offsetHeight;

        gsap.to(moonElement.current, {
          duration: 0.5,
          scale: 1.2,
          x: newX * magnetoStrange,
          y: newY * magnetoStrange,
          ease: "power4.inOut",
        });
      }
    };
    const resetMagneto = (event: MouseEvent) => {
      const moon = moonElement.current;
      if (moon) {
        gsap.to(moonElement.current, {
          duration: 1,
          x: 0,
          y: 0,
          ease: "power4.inOut",
          scale: 1,
        });
      }
    };

    homeSectionElement!.addEventListener("mousemove", activeMagneto);
    homeSectionElement!.addEventListener("mouseleave", resetMagneto);
  });

  return (
    <Image
      ref={moonElement}
      className={cn(
        "absolute left-[5%] top-[10%] z-0 duration-300",
        "w-[70vw] h-[70vw]",
        "max-w-[600px] max-h-[600px]"
      )}
      src="/moon.png"
      alt="moon"
      width={900}
      height={900}
    />
  );
}
