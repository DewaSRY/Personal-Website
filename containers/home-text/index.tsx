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
    <div className={cn(className)}>
      <Heading.H1 className="text-white-one text-center xl:text-left mb-8">
        Full Stack Developer
      </Heading.H1>
      <Paragraph.Description
        bold
        className=" text-white-one text-center xl:text-left"
        type="quote"
      >
        I will help you to build a beautiful and cool website
      </Paragraph.Description>

      <Heading.Quote
        setQuote
        className="mb-8 text-white-one text-center xl:text-left"
      >
        if you want to have someone to make something done,
        <br />
        let&apos;s talk !, it might me.
      </Heading.Quote>
      <div className="flex gap-4 w-full mt-12 justify-center xl:justify-start">
        <Button className="w-1/3">About me</Button>
        <Button className="w-1/3" variant="outline">
          Contact Me
        </Button>
      </div>
    </div>
  );
}
