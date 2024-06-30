import { ComponentProps, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

import HeroBanner from "../_components/home/hero-banner";
import TextBanner from "../_components/home/text-banner";
interface HomeProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Home({ children, ...resProps }: HomeProps) {
  return (
    <section id="home" className="h-[100vh] relative">
      <div className="absolute inset-0 bottom-[20%] bg-hero-bg rounded-bl-[200px] " />
      <TextBanner
        className={cn(
          "absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        )}
      />
      <HeroBanner
        className={cn(
          "absolute right-0 top-[50%] translate-y-[-50%]",
          "xl:translate-y-[-70%] xl:translate-x-[-50%]"
        )}
      />
    </section>
  );
}