"use client";
import { ComponentProps, ElementRef, PropsWithChildren, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import ParallaxImage from "./parallax-image";
interface ParallaxProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Parallax({ children, ...resProps }: ParallaxProps) {
  const parallaxContainer = useRef<ElementRef<"div">>(null);

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".layer") as HTMLElement[];
      boxes.forEach((layer, index) => {
        gsap.to(layer, {
          y: 0,
          duration: 5,
          scrollTrigger: {
            trigger: layer,
            start: "top 30%",
            end: "top bottom",
            scrub: true,
            toggleActions: "play pause reverse complete ",
            // markers: true,
          },
        });
      });
    },
    { scope: parallaxContainer }
  );
  return (
    <div ref={parallaxContainer} className="h-[800px] ">
      <ParallaxImage
        imageSrc="/parallax/forest_layer_5-dark.png"
        imageAlt="five layer"
        id="five-layer"
        className=" absolute top-0 "
      />
      <ParallaxImage
        imageSrc="/parallax/forest_layer_4.png"
        imageAlt="five layer"
        className="layer absolute top-0 translate-y-[10%] duration-500 "
      />
      <ParallaxImage
        imageSrc="/parallax/forest_layer_3.png"
        imageAlt="five layer"
        className="layer absolute top-0 translate-y-[15%] duration-300 "
      />
      <ParallaxImage
        imageSrc="/parallax/forest_layer_2.png"
        imageAlt="five layer"
        className="layer absolute top-0 translate-y-[20%] duration-200 "
      />
      <ParallaxImage
        imageSrc="/parallax/forest_layer_1.png"
        imageAlt="five layer"
        className="layer absolute top-0  translate-y-[25%] duration-150 "
      />
    </div>
  );
}

/**
 *
 */
