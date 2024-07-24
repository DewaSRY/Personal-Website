"use client";
import { ComponentProps, ElementRef, PropsWithChildren, useRef } from "react";
import Paragraph from "@/components/common/paragraph";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface DescriptionProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Description({
  children,
  ...resProps
}: DescriptionProps) {
  // const workBodyElement = useRef<ElementRef<"div">>(null);
  const hrElement = useRef<ElementRef<"hr">>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hrElement.current,
          start: "top 70%",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      });
      tl.from(hrElement.current, {
        scaleX: 0,
        transformOrigin: "left",
      });
      tl.to(hrElement.current, {
        scaleX: 1,
      });
    }
    // { scope: workContainer.current! }
  );
  return (
    <>
      <Paragraph.Description>{children}</Paragraph.Description>
      <hr ref={hrElement} className="my-2" />
    </>
  );
}
