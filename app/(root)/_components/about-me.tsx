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
  useEffect(() => {
    if (layer.current && layer.current.parentElement) {
      parentContainer.current = layer.current.parentElement;
    }
  }, []);

  useGSAP(
    () => {
      gsap.to(layer.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: layer.current,
          start: "100 center",
          end: `300 center`,
          scrub: true,
          //   markers: true,
        },
      });
    },
    { scope: parentContainer.current! }
  );

  return (
    <div
      ref={layer}
      className={cn(
        "flex opacity-0 origin-bottom flex-col md:flex-row gap-4 justify-center items-center w-10/12 pt-6 pb-10 h-5/6 md:h-4/6 xl:h-3/6 rounded-lg z-[3] px-4 bg-primary-one-alfa",
        " bottom-5 absolute left-[50%] translate-x-[-50%] "
      )}
    >
      <Image
        src="/profile/me-tow.png"
        alt="my picture"
        width={200}
        height={250}
        className="rounded-xl w-[150px] h-[200px] md:w-[200px] md:h-[250px]"
      />
      <div>
        <Heading.H3>Dewa Surya Ariesta</Heading.H3>
        <Paragraph.Description className="my-4">
          Experienced software engineer with solid foundation in both frontend
          and backend technologies. My journey began as a freelance frontend
          developer, where I successfully designed and developed an
          enterprise-level data management system using Angular. As I
          progressed, I delved deeper into backend technologies, honing my
          skills in programming languages such as Java, Python and Rust. Looking
          ahead, my aim is to continuously refine my programming and
          communication skills while eagerly sharing my knowledge and expertise
          with teams and individuals beyond the confines of our field.
        </Paragraph.Description>
        <Button variant="primary">Connect with me On Linkedin</Button>
      </div>
    </div>
  );
}
