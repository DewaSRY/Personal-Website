import { ComponentProps, PropsWithChildren } from "react";

import Parallax from "../_components/parallax";
import AboutMe from "../_components/about-me";
import { cn } from "@/lib/utils";

interface MyProfileProps extends ComponentProps<"div">, PropsWithChildren {}

export default function MyProfile({
  children,
  className,
  ...resProps
}: MyProfileProps) {
  return (
    <section
      id="my-profile"
      className={cn(" mx-auto ", className)}
      {...resProps}
    >
      <AboutMe />
    </section>
  );
}
