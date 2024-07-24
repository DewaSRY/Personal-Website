import { ComponentProps, PropsWithChildren } from "react";

import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
interface FooterBodyProps extends ComponentProps<"div">, PropsWithChildren {}

export default function FooterBody({ children, ...resProps }: FooterBodyProps) {
  return (
    <div className="grid xl:grid-cols-2">
      <div
        className={cn(
          "my-[100px] xl:col-start-1 xl:col-span-1 xl:row-start-1 xl:row-span-1",
          "h-[400px] w-10/12 mx-auto flex flex-col justify-between"
        )}
      >
        <Heading.H2 className="my-[30px] text-white-one">
          I&apos;m currently available for freelance and full time work
        </Heading.H2>
        <Heading.Quote className="my-[30px] text-white-three">
          If you&apos;re looking for a developer that likes to get stuff done,
          let&apos;s talk.
        </Heading.Quote>
        <Button className="w-full bg-gradient-three">
          <Paragraph.Description className="text-white-two">
            Got a project in mind? Let&apos;s talk!
          </Paragraph.Description>
        </Button>
      </div>
      <div
        className={cn(
          "xl:col-start-2 xl:col-span-1  xl:row-start-1 xl:row-span-1",
          "h-[100px] xl:h-[400px] w-10/12 mx-auto flex xl:justify-end items-center px-2"
        )}
      >
        <div className={cn("")}>
          <Paragraph.Bold className="text-primary-four">
            sdewa6645@gmail.com
          </Paragraph.Bold>
          <Paragraph.Bold className="text-white-two">
            +62 812 6811 1563
          </Paragraph.Bold>
        </div>
      </div>
    </div>
  );
}
