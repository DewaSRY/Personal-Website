import { ComponentProps, PropsWithChildren } from "react";
import Heading from "@/components/common/heading";
interface WorksProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Works({ children, ...resProps }: WorksProps) {
  return (
    <section id="works">
      <div className="h-[100vh]">
        <Heading.H1>Work</Heading.H1>
      </div>
    </section>
  );
}
