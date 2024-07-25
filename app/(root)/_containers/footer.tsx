import { ComponentProps, PropsWithChildren } from "react";

import FooterBottom from "../_contents/footer-bottom";
import FooterBody from "../_contents/footer-body";
interface FooterProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Footer({ children, ...resProps }: FooterProps) {
  return (
    <footer className="">
      <FooterBody />
      <FooterBottom />
    </footer>
  );
}
