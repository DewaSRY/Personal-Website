import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";
import WorkContent from "../_contents/work-content";
import Heading from "@/components/common/heading";
interface MyWorkSectionProps extends ComponentProps<"div">, PropsWithChildren {}

export default function MyWorkSection({
  children,
  ...resProps
}: MyWorkSectionProps) {
  return (
    <section className="my-[128px]">
      <Heading.H2 className="text-white-one px-2">
        There Is Several Work experience I have
      </Heading.H2>
      <Heading.Quote className="text-white-three px-2">
        it is not my full time job but I learn allot from it
      </Heading.Quote>
      <WorkContent />
    </section>
  );
}
