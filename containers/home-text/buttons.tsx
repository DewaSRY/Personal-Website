import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren, useState } from "react";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import { Button } from "@/components/ui/button";
interface buttonsProps extends ComponentProps<"div">, PropsWithChildren {}

export default function buttons({ children, ...resProps }: buttonsProps) {
  return (
    <div
      className={cn(
        "mt-40 lg:mt-12 ",
        "flex flex-col lg:flex-row gap-4 w-full  xl:justify-start"
      )}
    >
      <Button className="lg:w-1/2">
        <Paragraph.Link hrfTo="/about-me">About me</Paragraph.Link>
      </Button>
      <Button className="lg:w-1/2" variant="outline">
        <Paragraph.Link hrfTo="/contact">Contact Me</Paragraph.Link>
      </Button>
    </div>
  );
}
