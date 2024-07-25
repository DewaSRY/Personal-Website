import { ComponentProps, PropsWithChildren } from "react";

import Heading from "@/components/common/heading";
import FAQContent from "../_contents/faq-content";
import { cn } from "@/lib/utils";
interface FeqSectionsProps
  extends ComponentProps<"section">,
    PropsWithChildren {}

export default function FeqSections({
  children,
  ...resProps
}: FeqSectionsProps) {
  return (
    <section
      className={cn(" grid grid-cols-2 grid-rows-6", "py-[128px]  mt-[128px]")}
    >
      <div
        className={cn(
          "col-start-1 col-span-2 row-start-1 row-span-2",
          "xl:col-start-1 xl:col-span-1 xl:row-start-2 xl:row-span-4",
          "px-2"
        )}
      >
        <Heading.H2 className="text-white-one text-center xl:text-left ">
          There is several Question might be you want to ask to me
        </Heading.H2>
        <Heading.Quote className="text-white-three text-center xl:text-left ">
          It is nice to know someone by asking them question. If you wont t know
          more about me just contact me, we will have nice talk.
        </Heading.Quote>
      </div>
      <FAQContent
        className={cn(
          "col-start-1 col-span-2 row-start-3 row-span-4",
          " bg-primary-three rounded-bl-[200px] rounded-tr-[200px]",
          "xl:col-start-2 xl:col-span-1 xl:row-start-1 xl:row-span-6"
        )}
      />
    </section>
  );
}
