import { ComponentProps, PropsWithChildren } from "react";
import { Lora } from "next/font/google";

import NavItems from "../_components/nav-items";
import SocialNav from "../_components/social-nav";
import SettingsNav from "../_components/settings-nav";
import { cn } from "@/lib/utils";
const font = Lora({
  weight: "700",
  preload: false,
});
interface HeadersProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Headers({ children, ...resProps }: HeadersProps) {
  return (
    <header className="z-10">
      <span
        className={cn(
          font.className,
          "text-primary-four text-[2rem]",
          "fixed top-2 left-2"
        )}
      >
        Dewa Surya
      </span>
      <NavItems />
      <SocialNav />
      <SettingsNav />
    </header>
  );
}
