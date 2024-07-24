import { ComponentProps, ElementRef, PropsWithChildren, useRef } from "react";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import { cn } from "@/lib/utils";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Button } from "@/components/ui/button";
interface TextBannerProps extends ComponentProps<"div">, PropsWithChildren {}

export default function TextBanner({
  children,
  className,
  ...resProps
}: TextBannerProps) {
  const textBannerElement = useRef<ElementRef<"div">>(null);

  // useGSAP(() => {
  //   const tl = gsap.timeline({
  //     defaults: {
  //       ease: "power4.inOut",
  //       duration: 2,
  //     },
  //   });

  //   tl.from(textBannerElement.current, {
  //     clipPath: "polygon(0% 100%, 100% 100%, 100% 100%,0% 100%)",
  //     opacity: 0,
  //     y: 100,
  //   });
  //   tl.to(textBannerElement.current, {
  //     clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
  //     opacity: 1,
  //     y: 0,
  //     duration: 1,
  //   });
  // });

  return (
    <div
      ref={textBannerElement}
      className={cn(className, " text-primary-five ")}
    >
      <Paragraph.Bold className={cn("text-white-two")}>
        Hy There, My Name Is Dewa
      </Paragraph.Bold>
      <Heading.H1 className={cn("text-white-one")}>
        I am Full Stack Software Developer
      </Heading.H1>
      <hr className="h-2 p-[2px] translate-x-[-1%]" />
      <Heading.Quote className={cn("text-white-three")}>
        I will help you to build a beautiful and cool website and if you want to
        have someone to make something done, let's talk!.It might me.
      </Heading.Quote>
      <div className="flex w-full gap-8 my-8">
        <Button className="text-white-two bg-gradient-three ">
          <Paragraph.Description>Read More About ME</Paragraph.Description>
        </Button>
        <Button className="text-white-two bg-gradient-two">
          <Paragraph.Description>Contact Me</Paragraph.Description>
        </Button>
      </div>
    </div>
  );
}
