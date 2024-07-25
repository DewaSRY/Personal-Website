import { ComponentProps, PropsWithChildren } from "react";
import ToolsContent from "../_contents/tool-content";
import Heading from "@/components/common/heading";
interface MyToolsSectionProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

export default function MyToolsSection({
  children,
  ...resProps
}: MyToolsSectionProps) {
  return (
    <section>
      <div className="mt-[64px] mb-[128px]">
        <Heading.H2 className="text-white-one px-2 text-center md:text-left">
          Tools i have experience to work
        </Heading.H2>
        <Heading.Quote className="text-white-three px-2 text-center md:text-left">
          That tool, i use on professionally and on my bootcamp group team
        </Heading.Quote>
      </div>
      <ToolsContent />
    </section>
  );
}
