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

interface MoonProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Moon({ children, className, ...resProps }: MoonProps) {
  const moonElement = useRef<ElementRef<"img">>(null);

  useGSAP(() => {
    // let mm = gsap.matchMedia();
    const homeSectionElement = document.getElementById("home");
    function activeMagneto(event: MouseEvent) {
      const moon = moonElement.current;
      if (moon) {
        const boundingBox = moon.getBoundingClientRect()!;
        const magnetoStrange = 140;
        const newX = (event.clientX - boundingBox?.left) / moon.offsetWidth;
        const newY = (event.clientY - boundingBox?.top) / moon.offsetHeight;
        // mm.add("(min-width: 600px)", () => {
        // });
        gsap.to(moonElement.current, {
          duration: 0.8,
          scale: 1.2,
          translateX: newX * magnetoStrange,
          translateY: newY * magnetoStrange,
          ease: "power4.out",
        });
      }
    }
    function resetMagneto(event: MouseEvent) {
      const moon = moonElement.current;
      if (moon) {
        // mm.add("(min-width: 600px)", () => {});
        gsap.to(moonElement.current, {
          duration: 2,
          translateX: 0,
          translateY: 0,
          ease: "power4.inOut",
          scale: 1,
        });
      }
    }
    homeSectionElement!.addEventListener("mousemove", activeMagneto);
    homeSectionElement!.addEventListener("mouseleave", resetMagneto);
  });

  return (
    <div
      {...resProps}
      className={cn(
        className,
        "py-[100px] px-50px grid grid-cols-3 overflow-hidden"
      )}
    >
      <Image
        ref={moonElement}
        className={cn(
          "col-start-1 col-span-3 md:col-start-2 md:col-span-2 xl:col-start-3 xl:col-span-1"
        )}
        src="/hero/moon.png"
        alt="moon"
        width={900}
        height={900}
        loading="lazy"
      />
    </div>
  );
}
