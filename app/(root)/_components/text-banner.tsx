import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";

interface TextBannerProps extends ComponentProps<"div">, PropsWithChildren {}

export default function TextBanner({
  children,
  className,
  ...resProps
}: TextBannerProps) {
  return (
    <div className={cn(className, "w-11/12 md:w-8/12 text-primary-five ")}>
      <Paragraph.Description className="text-[18px] md:text-[20px] xl:text-[24px]">
        HALLO, my name is
      </Paragraph.Description>
      <span className="text-[18px] md:text-[22px] xl:text-[26px] mr-2 text-primary-one">
        Dewa Surya Ariesta
      </span>
      <hr className="w-8/12 h-2 p-[2px] translate-x-[-1%]" />
      <Paragraph.Description>I am a</Paragraph.Description>
      <Heading.H1>Full Stack Web Developers</Heading.H1>
      <hr className="h-2 p-[2px] translate-x-[-1%]" />
      <Paragraph.Description>
        Let&apos;s make miracle happen
      </Paragraph.Description>
    </div>
  );
}
