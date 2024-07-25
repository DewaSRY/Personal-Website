import { ComponentProps, PropsWithChildren } from "react";
import Image from "next/image";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import HeroParaOne from "../_content/hero-para-one";
import HeroParaTwo from "../_content/hero-para-two";
import { cn } from "@/lib/utils";
interface MyHeroSectionProps extends ComponentProps<"div">, PropsWithChildren {}

export default function MyHeroSection({
  children,
  ...resProps
}: MyHeroSectionProps) {
  return (
    <section className="grid grid-cols-6 grid-rows-12 gap-2">
      <div
        className={cn(
          "col-start-1 col-span-6 row-start-1 row-span-4 ",
          "md:col-start-1 md:col-span-3 md:row-start-1 md:row-span-3",
          "xl:col-start-1 xl:col-span-2 xl:row-start-2 xl:row-span-10"
        )}
      >
        <Image
          src="/my-self/me_two.png"
          alt="my-self"
          width={350}
          height={550}
          className={cn("mx-auto")}
        />
      </div>
      <HeroParaOne
        className={cn(
          "col-start-1 col-span-6 row-start-5 row-span-4",
          "md:col-start-1 md:col-span-3 md:row-start-4 md:row-span-3",
          "xl:col-start-3 xl:col-span-2 xl:row-start-2 xl:row-span-3"
        )}
      />
      <HeroParaTwo
        className={cn(
          "col-start-1 col-span-6 row-start-7 row-span-6",
          "md:col-start-4 md:col-span-3 md:row-start-2 md:row-span-4",
          "xl:col-start-5 xl:col-span-2 xl:row-start-2 xl:row-span-4"
        )}
      />
    </section>
  );
}
