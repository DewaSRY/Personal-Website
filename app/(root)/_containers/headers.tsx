import { ComponentProps, PropsWithChildren } from "react";
import { Lora } from "next/font/google";

import NavItems from "../_content/nav-items";
import SocialNav from "../_content/social-nav";

import { cn } from "@/lib/utils";
const font = Lora({
  weight: "600",
  preload: false,
  style: "italic",
});

interface HeadersProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Headers({ children, ...resProps }: HeadersProps) {
  return (
    <header className="fixed top-0 z-10">
      <div className="w-full ">
        <span
          className={cn(
            font.className,
            "text-primary-five text-[1.2rem] xl:text-[1.4rem]",
            " top-2 left-2 px-2 "
          )}
        >
          Dewa Surya
        </span>
      </div>

      <SocialNav className="fixed bottom-[80%] left-[85%] md:bottom-[50%] md:translate-y-[-50] md:left-1   " />
      <NavItems />
    </header>
  );
}
