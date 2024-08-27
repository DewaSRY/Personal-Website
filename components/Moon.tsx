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

interface MoonProps extends ComponentProps<"img">, PropsWithChildren {}

export default function Moon({ children, className, ...resProps }: MoonProps) {
  const moonElement = useRef<ElementRef<"img">>(null);
  useEffect(() => {
    function activeMagneto(event: MouseEvent) {
      const moon = moonElement.current;
      if (moon) {
        const boundingBox = moon.getBoundingClientRect()!;
        const magnetoStrange = 140;
        const newX = (event.clientX - boundingBox?.left) / moon.offsetWidth;
        const newY = (event.clientY - boundingBox?.top) / moon.offsetHeight;
        const translateX = newX * magnetoStrange;
        const translateY = newY * magnetoStrange;
        moon.style.transform = `translate(${translateX}px,${translateY}px)`;
        moon.style.transition = ` 0.1s ease-in-out`;
      }
    }
    function resetMagneto(event: MouseEvent) {
      const moon = moonElement.current;
      if (moon) {
        moon.style.transform = `translate(0px,0px)`;
        moon.style.transition = ` 1s ease-in-out`;
      }
    }
    document.documentElement.addEventListener("mousemove", activeMagneto);
    document.documentElement.addEventListener("mouseleave", resetMagneto);
    return () => {
      document.documentElement.removeEventListener("mousemove", activeMagneto);
      document.documentElement.removeEventListener("mouseleave", resetMagneto);
    };
  }, []);

  return (
    <Image
      {...resProps}
      ref={moonElement}
      src="/hero/moon.png"
      alt="moon"
      width={600}
      height={600}
      loading="lazy"
      className={cn(className)}
    />
  );
}
