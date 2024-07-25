import { ComponentProps, PropsWithChildren } from "react";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
interface HeroBannerProps extends ComponentProps<"div">, PropsWithChildren {}

export default function HeroBanner({
  children,
  className,
  ...resProps
}: HeroBannerProps) {
  return (
    <div className={cn(className, "px-2 md:px-4 xl:px-6")} {...resProps}>
      <Heading.H1 className="text-white-one">
        I&apos;m currently available for Freelance and Full Time Work.
      </Heading.H1>
      <Heading.Quote className="text-white-three">
        If you&apos;re looking for a developer that likes to get stuff done,
        let&apos;s talk.
      </Heading.Quote>
      <div
        className={cn(
          "w-full grid grid-cols-2 grid-rows-2 gap-2",
          "text-white-two my-[32px] "
        )}
      >
        <Button
          className={cn(
            "bg-gradient-three",
            "col-start-1 col-span-2 row-start-1 row-span-1",
            "md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-2"
          )}
        >
          <Paragraph.Bold>sdewa6645@gmail.com</Paragraph.Bold>
        </Button>
        <Button
          className={cn(
            "bg-gradient-two",
            "col-start-1 col-span-2 row-start-2 row-span-1",
            "md:col-start-2 md:col-span-1 md:row-start-1 md:row-span-2"
          )}
        >
          <Paragraph.Bold>My linkedin</Paragraph.Bold>
        </Button>
      </div>
    </div>
  );
}
