"use client";
import { ComponentProps, ElementRef, PropsWithChildren, useRef } from "react";

import { cn } from "@/lib/utils";
import TextBanner from "../_components/text-banner";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface HomeProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Home({ children, className, ...resProps }: HomeProps) {
  const parent = useRef<ElementRef<"section">>(null);
  const layer = useRef<ElementRef<"div">>(null);
  const MoonElement = dynamic(() => import("../_components/moon"));
  useGSAP(
    () => {
      gsap.set(layer.current, {
        opacity: 0,
      });
      gsap.to(layer.current, {
        opacity: 1,
        duration: 0.8,
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
        "h-[100vh] md:min-h-[150vh] relative mb-[100px] pb-[600px]",
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
        className="absolute inset-0 md:bottom-[20%] z-[1]  bg-primary-one-alfa rounded-bl-[200px] blur-[20%] "
      />
      <div className="absolute inset-0 p-[100px] z-[0]">
        <MoonElement />
      </div>
    </section>
  );
}
