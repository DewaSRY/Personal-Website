import { ComponentProps, PropsWithChildren } from "react";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import { cn } from "@/lib/utils";
interface HeroParaOneProps extends ComponentProps<"div">, PropsWithChildren {}

export default function HeroParaOne({
  children,
  className,
  ...resProps
}: HeroParaOneProps) {
  return (
    <div {...resProps} className={cn(className, "px-4 xl:border-l-2")}>
      <Heading.H1 className="text-white-one">Dewa Surya Ariesta</Heading.H1>
      <hr />
      <Paragraph.Description className="py-4 text-white-two">
        I have extensive experience as a software engineer, with a strong
        foundation in both frontend and backend technologies.
      </Paragraph.Description>
      <Paragraph.Description className="py-4 text-white-two">
        My journey in software engineering began when a friend invited me to
        join him on an exciting project.
      </Paragraph.Description>
    </div>
  );
}
