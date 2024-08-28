"use client";

import {
  ComponentProps,
  PropsWithChildren,
  ComponentRef,
  useRef,
  useEffect,
} from "react";
import { motion, useScroll } from "framer-motion";
import AboutMeText from "@/containers/aboutme-text";
import Heading from "@/components/common/heading";
import { cn } from "@/lib/utils";
import Brain from "@/components/brain";
import ExperienceCards from "@/containers/experience-cards";
import SkillCards from "@/containers/skill-containers";
import Paragraph from "@/components/common/paragraph";
interface pageProps extends ComponentProps<"div">, PropsWithChildren {}

export default function AboutMe({ children, ...resProps }: pageProps) {
  const containerRef = useRef<ComponentRef<"div">>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  return (
    <div className="lg:flex h-auto lg:h-screen  relative">
      {/* main container */}
      <div
        ref={containerRef}
        className={cn(
          "w-full lg:w-2/3 xl:w-1/2 mx-2 overflow-y-auto no-scrollbar",
          "px-4"
        )}
      >
        <Wrapper className="text-white-one  lg:mt-[10vh]">
          <Heading.H1 className=" mb-8 ">Dewa Surya Ariesta</Heading.H1>
          <Heading.Quote setQuote>
            I am an Extrovert person, it&apos;s might be more fun if we makes
            schedule to talk
          </Heading.Quote>
          <Paragraph.Description>
            My name is Dewa Surya Ariesta, I was born in 2004 and I am gen-Z. If
            you want to know my MBTI, I am an ENTP. and for my star sign, I am
            Ariest.
          </Paragraph.Description>
        </Wrapper>
        {/* My Biography */}
        <Wrapper>
          <Heading.H2 className="text-white-one mb-8 ">My Biography</Heading.H2>
          <AboutMeText className="" />
        </Wrapper>
        {/* My Skill */}
        <Wrapper>
          <Heading.H2 className="text-white-one mb-8 ">My Skill</Heading.H2>
          <SkillCards />
        </Wrapper>
        <Heading.H2 className="text-white-one mb-8">
          MY Work Experience
        </Heading.H2>
        <ExperienceCards />
      </div>

      {/* Brain Component */}
      <div
        className={cn(
          "hidden lg:block sticky top-0 ",
          "h-screen lg:w-1/3  xl:w-1/2 mx-1 "
        )}
      >
        <Brain scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}

function Wrapper({
  children,
  className,
}: PropsWithChildren & ComponentProps<"div">) {
  return (
    <div className={cn("mb-24 lg:mb-[20vh] xl:mb-[40vh] ", className)}>
      {children}
    </div>
  );
}
