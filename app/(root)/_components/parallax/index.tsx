"use client";
import { ComponentProps, PropsWithChildren, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

import ParallaxImage from "./parallax-image";
interface ParallaxProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Parallax({ children, ...resProps }: ParallaxProps) {
  const container = useRef();
  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: ".box-c",
        pin: true,
        start: "center center",
        end: "+=300",
        markers: true,
      });
    },
    {
      scope: container,
    }
  );
  return (
    <div className="max-w-[1280px] mx-auto relative z-[-10]">
      <ParallaxImage
        imageSrc="/parallax/forest_layer_5-dark.png"
        imageAlt="five layer"
        id="five-layer"
        className="absolute inset-0  "
      />
      <ParallaxImage
        imageSrc="/parallax/forest_layer_4.png"
        imageAlt="five layer"
        className="absolute inset-0 "
      />
      <ParallaxImage
        imageSrc="/parallax/forest_layer_3.png"
        imageAlt="five layer"
        className="absolute inset-0 "
      />
      <ParallaxImage
        imageSrc="/parallax/forest_layer_2.png"
        imageAlt="five layer"
        className="absolute inset-0 "
      />
      <ParallaxImage
        imageSrc="/parallax/forest_layer_1.png"
        imageAlt="five layer"
        className="absolute inset-0 "
      />
    </div>
  );
}

/**
 *
 */
