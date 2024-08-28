import { ComponentProps, PropsWithChildren } from "react";

interface pageProps extends ComponentProps<"div">, PropsWithChildren {}

export default function AboutMe({ children, ...resProps }: pageProps) {
  return <div>About me</div>;
}
