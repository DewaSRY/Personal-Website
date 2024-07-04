import { ComponentProps, PropsWithChildren } from "react";

import Parallax from "../_components/parallax";
import AboutMe from "../_components/about-me";
import { cn } from "@/lib/utils";
import ProgrammingContainer from "./programming-container";
import Heading from "@/components/common/heading";

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
      <div className="w-11/12 xl:max-w-[1200px] mx-auto py-10">
        <Heading.H2 className="my-10">Programming Tool I Use</Heading.H2>
        <hr />
        <ProgrammingContainer />
      </div>
    </section>
  );
}
