import { ComponentProps, PropsWithChildren } from "react";

import Heading from "@/components/common/heading";
import SkillBanner from "../_components/home/skill-banner";
interface HomeProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Home({ children, ...resProps }: HomeProps) {
  return (
    <section id="home" className="h-[100vh]">
      <SkillBanner />

      <Heading.H1>Full Stack Web Developers</Heading.H1>
    </section>
  );
}
