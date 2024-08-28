"use client";

import {
  ComponentProps,
  PropsWithChildren,
  ComponentRef,
  useRef,
  useEffect,
} from "react";
import dynamic from "next/dynamic";
import { motion, useScroll } from "framer-motion";
import AboutMeText from "@/containers/aboutme-text";
import Paragraph from "@/components/common/paragraph";
import Heading from "@/components/common/heading";
import { cn } from "@/lib/utils";
import Brain from "@/components/brain";
interface pageProps extends ComponentProps<"div">, PropsWithChildren {}

export default function AboutMe({ children, ...resProps }: pageProps) {
  const MoonElement = dynamic(() => import("@/components/moon"));
  const containerRef = useRef<ComponentRef<"div">>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  return (
    <div className="flex h-screen relative">
      {/* main container */}
      <div
        ref={containerRef}
        className={cn(
          "w-full lg:w-2/3 xl:w-1/2 mx-2 overflow-y-auto no-scrollbar"
        )}
      >
        <div className="text-white-one mt-12">
          <Heading.H1>Dewa Surya Ariesta</Heading.H1>
        </div>
        <AboutMeText className="mt-12" />
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
