import { ComponentProps, PropsWithChildren } from "react";

import ProgrammingIcon from "../_components/tool-icon";
import { cn } from "@/lib/utils";
interface ToolsContentProps extends ComponentProps<"div">, PropsWithChildren {}

export default function ToolsContent({
  children,
  className,
  ...resProps
}: ToolsContentProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-auto-fit-100 xl:grid-cols-auto-fit-150 gap-2 md:gap-4 xl:gap-8 px-2",
        className
      )}
    >
      <ProgrammingIcon imageSrc="/tools/angular.png" imageAlt="Angular" />
      <ProgrammingIcon imageSrc="/tools/django.png" imageAlt="Django" />
      <ProgrammingIcon imageSrc="/tools/docker.png" imageAlt="Docker" />
      <ProgrammingIcon imageSrc="/tools/express.png" imageAlt="Express" />
      <ProgrammingIcon imageSrc="/tools/figma.png" imageAlt="Figma" />
      <ProgrammingIcon imageSrc="/tools/flask.png" imageAlt="Flask" />
      <ProgrammingIcon imageSrc="/tools/kubernates.png" imageAlt="kubernetes" />
      <ProgrammingIcon imageSrc="/tools/node.png" imageAlt="Node" />
      <ProgrammingIcon imageSrc="/tools/react.png" imageAlt="React" />
      <ProgrammingIcon imageSrc="/tools/spring.png" imageAlt="Spring" />
      <ProgrammingIcon imageSrc="/tools/vue.png" imageAlt="Vue" />
    </div>
  );
}
