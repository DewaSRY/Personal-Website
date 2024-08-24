import { ComponentProps, PropsWithChildren } from "react";

interface FooterProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Footer({ children, ...resProps }: FooterProps) {
  return <footer className=""></footer>;
}
