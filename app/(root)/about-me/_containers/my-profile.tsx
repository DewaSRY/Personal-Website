import { ComponentProps, PropsWithChildren } from "react";

import AboutMe from "../_components/about-me";
import { cn } from "@/lib/utils";

import MyExperienceContent from "../_contents/my-experience-content";
interface MyProfileProps extends ComponentProps<"div">, PropsWithChildren {}

export default function MyProfile({
  children,
  className,
  ...resProps
}: MyProfileProps) {
  return (
    <section
      id="my-profile"
      className={cn(" mx-auto bg-primary-one my-10 ", className)}
      {...resProps}
    >
      <AboutMe />
      <MyExperienceContent />
    </section>
  );
}
