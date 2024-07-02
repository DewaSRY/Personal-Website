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
    if (moonElement.current) {
      if (moonElement.current.parentElement) {
        parentContainer.current = moonElement.current.parentElement;
      }
    }
  }, []);

  useGSAP(() => {
    const translateLength = ((window.innerHeight * 80) / 100) * 3;
    gsap.to(moonElement.current, {
      translateY: translateLength,
      rotateZ: 100,
      scrollTrigger: {
        trigger: moonElement.current,
        start: "150% center",
        end: `150% top`,
        scrub: true,
        // markers: true,
      },
    });
  });

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
