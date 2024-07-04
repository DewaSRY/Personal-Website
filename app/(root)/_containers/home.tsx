import { ComponentProps, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

import Moon from "../_components/moon";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";

interface HomeProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Home({ children, className, ...resProps }: HomeProps) {
  return (
    <section
      id="home"
      className={cn("h-[100vh] relative", className)}
      {...resProps}
    >
      <div className="absolute inset-0 z-[2] flex justify-center items-center">
        <div
          className={cn(
            "w-11/12 md:w-8/12 translate-y-[-60%] md:translate-y-0"
          )}
        >
          <Paragraph.Description>
            <span className="text-[18px] md:text-[22px] xl:text-[26px] mr-2 text-primary-three">
              HALLO,
            </span>
            my name is
          </Paragraph.Description>
          <Paragraph.Description className="text-[18px] md:text-[20px] xl:text-[24px]">
            Dewa Surya Ariesta
          </Paragraph.Description>
          <hr className="w-8/12" />
          <Paragraph.Description>
            <span className="text-[18px] md:text-[20px] xl:text-[24px] mr-2 text-primary-three">
              I
            </span>
            am a
          </Paragraph.Description>
          <Heading.H1>Full Stack Web Developers</Heading.H1>
          <hr className="h-2 p-[2px]" />
          <Paragraph.Description>
            Let's make miracle happen
          </Paragraph.Description>
        </div>
      </div>
      <div className="absolute inset-0 bottom-2 z-[1]  bg-primary-two-alfa rounded-bl-[100px]" />
      <div className="absolute inset-0 z-[0]">
        <Moon />
      </div>
    </section>
  );
}
