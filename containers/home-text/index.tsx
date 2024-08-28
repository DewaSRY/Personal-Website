import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import { Button } from "@/components/ui/button";

interface HomeTextProps extends ComponentProps<"div">, PropsWithChildren {}

export default function HomeText({
  children,
  className,
  ...resProps
}: HomeTextProps) {
  return (
    <div className={cn("mx-4 ", className)}>
      <Heading.H1
        className={cn("mt-24 md:mt-6", "text-white-one  xl:text-left mb-8")}
      >
        Full Stack Developer
      </Heading.H1>
      <Paragraph.Description
        bold
        className=" text-white-one  xl:text-left"
        type="quote"
      >
        I will help you to build a beautiful and cool website
      </Paragraph.Description>

      <Heading.Quote setQuote className="mb-8 text-white-one  xl:text-left">
        if you want to have someone to make something done,
        <br />
        let&apos;s talk !, it might me.
      </Heading.Quote>
      <div
        className={cn(
          "mt-40 lg:mt-12 ",
          "flex flex-col lg:flex-row gap-4 w-full   xl:justify-start"
        )}
      >
        <Button className="lg:w-1/2">
          <Paragraph.Link hrfTo="/about-me">About me</Paragraph.Link>
        </Button>
        <Button className="lg:w-1/2" variant="outline">
          <Paragraph.Link hrfTo="/contact">Contact Me</Paragraph.Link>
        </Button>
      </div>
    </div>
  );
}
