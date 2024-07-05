"use client";
import {
  ComponentProps,
  ElementRef,
  PropsWithChildren,
  useEffect,
  useRef,
} from "react";

import { cn } from "@/lib/utils";
import Moon from "../_components/moon";
import TextBanner from "../_components/text-banner";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface HomeProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Home({ children, className, ...resProps }: HomeProps) {
  const parent = useRef<ElementRef<"section">>(null);
  const layer = useRef<ElementRef<"div">>(null);
  useGSAP(
    () => {
      gsap.set(layer.current, {
        opacity: 0,
      });
      gsap.to(layer.current, {
        opacity: 1,
        duration: 1.8,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parent.current,
          start: "60% 70%",
          end: `90% 70%`,
          scrub: true,
          // markers: true,
        },
      });
      tl.set(layer.current, {
        transformOrigin: "top",
      });
      tl.to(layer.current, {
        scaleY: 0,
      });
    },
    {
      scope: parent.current!,
    }
  );
  return (
    <section
      ref={parent}
      id="home"
      className={cn(
        "h-[1000px] md:min-h-[150vh] relative mb-[100px] pb-[600px]",
        className
      )}
      {...resProps}
    >
      <div
        className={cn(
          "absolute inset-0 z-[2] ",
          "w-11/12 md:w-8/12 xl:w-[1000px] mx-auto ",
          "py-[200px] "
        )}
      >
        <TextBanner />
      </div>
      <div
        ref={layer}
        className="absolute inset-0 bottom-[20%] z-[0]  bg-primary-three-alfa rounded-bl-[200px] "
      />
      <div className="absolute inset-0 z-[1]">
        <Moon />
      </div>
    </section>
  );
}
