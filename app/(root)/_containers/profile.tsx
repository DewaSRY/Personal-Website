import { ComponentProps, PropsWithChildren } from "react";

import Parallax from "../_components/parallax";
import AboutMe from "../_components/about-me";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/smooth-scroll";

interface ProfileProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Profile({
  children,
  className,
  ...resProps
}: ProfileProps) {
  return (
    <section
      id="profile"
      className={cn("h-[100vh] mx-auto relative max-w-[1280px]  ", className)}
      {...resProps}
    >
      <AboutMe />
      <Parallax />
    </section>
  );
}
