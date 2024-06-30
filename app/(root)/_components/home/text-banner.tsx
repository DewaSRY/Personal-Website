import { ComponentProps, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import { Button } from "@/components/ui/button";
interface TextBannerProps extends ComponentProps<"div">, PropsWithChildren {}

export default function TextBanner({ children, ...resProps }: TextBannerProps) {
  return (
    <div className={cn(resProps.className, "w-11/12 md:w-8/12")}>
      <Heading.H1>Full Stack Web Developers</Heading.H1>
      <Heading.H4>Lets make miracle Happen</Heading.H4>
      <Button className="mr-2  my-5" variant="secondary">
        Read My Blog
      </Button>
      <Button className="ml-2  md:hidden" variant="primary">
        Hire me
      </Button>
    </div>
  );
}
