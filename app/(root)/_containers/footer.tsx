import { ComponentProps, PropsWithChildren } from "react";

import FooterBottom from "../_content/footer-bottom";
import FooterBody from "../_content/footer-body";
interface FooterProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Footer({ children, ...resProps }: FooterProps) {
  return (
    <footer className="">
      <FooterBody />
      <FooterBottom />
    </footer>
  );
}
