import { cn } from "@/lib/utils";
import Image from "next/image";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import { Button } from "@/components/ui/button";
import HeroBanner from "../_contents/hero-banner";
import { ComponentProps, PropsWithChildren } from "react";

interface HeroSectionsProps
  extends ComponentProps<"section">,
    PropsWithChildren {}

export default function HeroSections({
  children,
  ...resProps
}: HeroSectionsProps) {
  return (
    <section className="grid grid-cols-2 grid-rows-2">
      <div
        className={cn(
          "col-start-1 col-span-2 row-start-1 row-span-1",
          "xl:col-start-2 xl:col-span-1 xl:row-start-1 xl:row-span-2",

          "bg-primary-four py-[16px] px-[24px] w-11/12 mx-auto",
          "flex justify-end items-end",
          "rounded-bl-[200px] rounded-tr-[200px]"
        )}
      >
        <Image
          src="/my-self/me_three.png"
          alt="me three"
          width={350}
          height={550}
          className="w-[200px] md:w-[300px] xl:w-[350px]"
        />
      </div>
      <HeroBanner
        className={cn(
          "col-start-1 col-span-2 row-start-2 row-span-1",
          "xl:col-start-1 xl:col-span-1 xl:row-start-1 xl:row-span-2 my-auto"
        )}
      />
    </section>
  );
}
