import { ComponentProps, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

import Moon from "../_components/moon";

import TextBanner from "../_components/text-banner";
interface HomeProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Home({ children, className, ...resProps }: HomeProps) {
  return (
    <section
      id="home"
      className={cn(
        "h-[600px] md:min-h-[100vh] relative mb-[100px] pb-[50px]",
        className
      )}
      {...resProps}
    >
      <div
        className={cn(
          "absolute inset-0 z-[2] ",
          "w-11/12 md:w-8/12 xl:w-[1000px] mx-auto ",
          "py-[200px] "
        )}
      >
        <TextBanner />
      </div>

      <div className="absolute inset-0 bottom-[2%] z-[1]  bg-primary-three-alfa rounded-bl-[200px] " />
      <div className="absolute inset-0 z-[0]">
        <Moon />
      </div>
    </section>
  );
}
