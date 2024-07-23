import { ComponentProps, PropsWithChildren } from "react";
import { Lora } from "next/font/google";

import Image from "next/image";

import NavItems from "../_content/nav-items";
import SocialCTA from "../_content/social-cta";

import SmallNav from "../_content/rout-navigations/small-nav";

import { cn } from "@/lib/utils";
const font = Lora({
  weight: "600",
  preload: false,
  style: "italic",
});

interface HeadersProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Headers({ children, ...resProps }: HeadersProps) {
  return (
    <header className=" ">
      <Image
        src="/logos/logo.png"
        width={50}
        height={50}
        alt="dewa surya logo"
        className="my-auto fixed top-4 left-2 z-10"
      />
      <div className="hidden fixed top-4 right-2  w-[calc(60vw)]  xl:flex justify-between items-center  ">
        <SmallNav className="flex gap-[32px]" />
        <SocialCTA className="flex gap-[16px]" />
      </div>

      <div className="fixed inset-0 xl:hidden bg-white-alfa flex text-center items-center">
        <SocialCTA className="absolute  grid grid-rows-3 gap-8  " />
        <SmallNav className="w-[200px] translate-x-[calc(50vw-50%)] gap-6" />
      </div>
    </header>
  );
}
