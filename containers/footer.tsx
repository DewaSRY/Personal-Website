import Paragraph from "@/components/common/paragraph";
import { ComponentProps, PropsWithChildren } from "react";

interface FooterProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Footer({ children, ...resProps }: FooterProps) {
  return (
    <footer className="bg-muted-foreground  text-white h-24 py-8 px-2">
      <Paragraph.Description bold>
        (c) Dewa surya ariesta 2024.
      </Paragraph.Description>
    </footer>
  );
}
