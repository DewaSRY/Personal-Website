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
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface SkillSWrapperProps extends ComponentProps<"div">, PropsWithChildren {}

export default function SkillSWrapper({
  children,
  className,
  ...resProps
}: SkillSWrapperProps) {
  const parentContainer = useRef<HTMLElement>();
  const layer = useRef<ElementRef<"div">>(null);
  useEffect(() => {
    if (layer.current) {
      const parent = document.getElementById("skills");
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
          //   markers: true,
        },
      });
    },
    { scope: parentContainer.current }
  );

  return (
    <div
      ref={layer}
      className={cn(className, "translate-y-[50%] scale-90")}
      {...resProps}
    >
      {children}
    </div>
  );
}
