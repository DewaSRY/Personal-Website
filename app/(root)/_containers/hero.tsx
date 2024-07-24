import { ComponentProps, ElementRef, PropsWithChildren, useRef } from "react";

import { cn } from "@/lib/utils";
import TextBanner from "../_components/text-banner";
import dynamic from "next/dynamic";

interface HeroProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Hero({ children, className, ...resProps }: HeroProps) {
  const MoonElement = dynamic(() => import("../_components/moon"));

  return (
    <section
      id="home"
      className={cn("h-[800px] md:h-[1000px] relative", className)}
      {...resProps}
    >
      <TextBanner
        className={cn(
          "absolute inset-0 z-[2] py-[30%] px-[5%] xl:py-[10%]",
          "xl:w-[60vw]"
        )}
      />

      <MoonElement className="absolute inset-0 w-full  z-[0]" />
    </section>
  );
}
