import { ComponentProps, PropsWithChildren } from "react";
import { Lora } from "next/font/google";

import NavItems from "../_components/navigation/nav-items";
import { cn } from "@/lib/utils";
const font = Lora({
  weight: "700",
  preload: false,
});

interface HeadersProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Headers({ children, ...resProps }: HeadersProps) {
  return (
    <header className="fixed top-0 z-10">
      <div className="w-full xl:w-[2400px]">
        <span
          className={cn(
            font.className,
            "text-primary-four text-[1.2rem] xl:text-[2rem]",
            " top-2 left-2 "
          )}
        >
          Dewa Surya
        </span>
      </div>

      <NavItems />
    </header>
  );
}
