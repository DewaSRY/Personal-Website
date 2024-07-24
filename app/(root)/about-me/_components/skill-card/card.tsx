"use client";
import { cn } from "@/lib/utils";
import { ComponentProps, ElementRef, PropsWithChildren, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface CrdProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Crd({ children, className, ...resProps }: CrdProps) {
  const cardElement = useRef<ElementRef<"div">>(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardElement.current,
        start: "top 70%",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
    });

    tl.from(cardElement.current, {
      x: 300,
      y: 50,
      opacity: 0,
      transformOrigin: "right",
    });
    tl.to(cardElement.current, {
      x: 0,
      y: 0,
      opacity: 1,
      stagger: {
        each: 0.2,
      },
    });
  });
  return (
    <div ref={cardElement} className={cn(className)} {...resProps}>
      {children}
    </div>
  );
}
