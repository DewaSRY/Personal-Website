import { ComponentProps, PropsWithChildren } from "react";
import Heading from "@/components/common/heading";
interface ProjectProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Project({ children, ...resProps }: ProjectProps) {
  return (
    <section id="projects">
      <div className="h-[100vh]">
        <Heading.H1>Project</Heading.H1>
      </div>
    </section>
  );
}
