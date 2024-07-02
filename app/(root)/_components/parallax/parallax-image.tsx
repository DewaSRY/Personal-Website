"use client";

import {
  ComponentProps,
  ElementRef,
  PropsWithChildren,
  useEffect,
  useRef,
} from "react";
import { cn } from "@/lib/utils";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ParallaxImageProps extends ComponentProps<"img">, PropsWithChildren {
  imageSrc: string;
  imageAlt: string;
}

export default function ParallaxImage({
  children,
  imageSrc,
  imageAlt,
  className,
  ...resProps
}: ParallaxImageProps) {
  const parentContainer = useRef<HTMLElement>();
  const parallaxContainer = useRef<ElementRef<"div">>(null);
  useEffect(() => {
    if (parallaxContainer.current && parallaxContainer.current.parentElement) {
      parentContainer.current = parallaxContainer.current.parentElement;
    }
  }, []);

  useGSAP(
    () => {
      gsap.to(parallaxContainer.current, {
        y: 0,
        scrollTrigger: {
          trigger: parallaxContainer.current,
          start: `top center`,
          end: "600 bottom",
          scrub: true,
          // markers: true,
        },
      });
    },
    { scope: parallaxContainer.current! }
  );

  return (
    <div
      ref={parallaxContainer}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "782px",
      }}
      className={cn(className, "")}
      {...resProps}
    />
  );
}
