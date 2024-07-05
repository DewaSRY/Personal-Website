"use client";
import {
  ComponentProps,
  ElementRef,
  PropsWithChildren,
  useEffect,
  useRef,
} from "react";
import Image from "next/image";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface AboutMeProps extends ComponentProps<"div">, PropsWithChildren {}

export default function AboutMe({ children, ...resProps }: AboutMeProps) {
  const parentContainer = useRef<HTMLElement>();
  const layer = useRef<ElementRef<"div">>(null);
  const hrElement = useRef<ElementRef<"hr">>(null);
  useEffect(() => {
    if (layer.current && layer.current.parentElement) {
      parentContainer.current = layer.current.parentElement;
    }
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: layer.current,
          start: "top bottom",
          end: `center 70%`,
          scrub: true,
          markers: true,
        },
      });
      tl.set(layer.current, {
        scale: 0.8,

        y: 120,
      });
      tl.set(hrElement.current, {
        scaleX: 0,
        transformOrigin: "left",
      });
      tl.to(layer.current, {
        scale: 1,
        y: 0,
      });
      tl.to(hrElement.current, {
        scaleX: 1,
      });
    },
    { scope: parentContainer.current! }
  );

  return (
    <div className={cn("bg-primary-three mt-[150px]  rounded-tl-[100px]")}>
      <div
        ref={layer}
        className={cn(
          "flex flex-col md:flex-row gap-4 justify-center items-start",
          "w-10/12 xl:max-w-[1200px] mx-auto py-[100px]  ",
          "pb-[200px]"
        )}
      >
        <Image
          src="/profile/me-tow.png"
          alt="my picture"
          width={200}
          height={250}
          className={cn(
            "rounded-xl w-[150px] h-[200px] md:w-[200px] md:h-[250px] ",
            "mr-[50px] xl:my-10"
          )}
        />
        <div>
          <Heading.H3 className=" text-primary-one">
            Dewa Surya Ariesta
          </Heading.H3>
          <hr ref={hrElement} className="h-2" />
          <Paragraph.Description className="my-4 text-primary-one">
            Experienced software engineer with solid foundation in both frontend
            and backend technologies. My journey began as a freelance frontend
            developer, where I successfully designed and developed an
            enterprise-level data management system using Angular. As I
            progressed, I delved deeper into backend technologies, honing my
            skills in programming languages such as Java, Python and Rust.
            Looking ahead, my aim is to continuously refine my programming and
            communication skills while eagerly sharing my knowledge and
            expertise with teams and individuals beyond the confines of our
            field.
          </Paragraph.Description>
        </div>
      </div>
    </div>
  );
}
