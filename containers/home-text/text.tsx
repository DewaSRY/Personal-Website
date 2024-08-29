import { ComponentProps, PropsWithChildren } from "react";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import { cn } from "@/lib/utils";

interface TextProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Text({ children, className, ...resProps }: TextProps) {
  return (
    <div className={cn(className)} {...resProps}>
      <Heading.H1
        className={cn(
          "mt-24 md:mt-6",

          "text-white-one  xl:text-left mb-8",
          "transition-colors duration-300   hover:text-primary-foreground"
        )}
      >
        Full Stack Developer
      </Heading.H1>
      <Paragraph.Description
        bold
        className={cn(
          "text-white-one  xl:text-left block ",
          "transition-colors duration-300   hover:text-primary-foreground"
        )}
        type="quote"
      >
        I will help you to build a beautiful and cool website
      </Paragraph.Description>

      <Heading.Quote
        setQuote
        className={cn(
          " text-white-one  xl:text-left ",
          "transition-colors duration-300   hover:text-primary-foreground"
        )}
      >
        if you want to have someone to make something done,
        <br />
        let&apos;s talk !, it might me.
      </Heading.Quote>
    </div>
  );
}
