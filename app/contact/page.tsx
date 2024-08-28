import { ComponentProps, PropsWithChildren } from "react";

interface pageProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Contact({ children, ...resProps }: pageProps) {
  return <div>Contact</div>;
}
