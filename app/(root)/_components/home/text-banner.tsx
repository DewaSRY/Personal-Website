import { ComponentProps, PropsWithChildren } from "react";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import { Button } from "@/components/ui/button";
interface TextBannerProps extends ComponentProps<"div">, PropsWithChildren {}

export default function TextBanner({ children, ...resProps }: TextBannerProps) {
  return (
    <div>
      <Heading.H1>Full Stack Web Developers</Heading.H1>
      <Paragraph.Description> Lets make miracle Happen</Paragraph.Description>
      <Button>Read My Blog</Button>
    </div>
  );
}
