import { ComponentProps, PropsWithChildren } from "react";

interface HomeImageProps extends ComponentProps<"div">, PropsWithChildren {}

export default function HomeImage({ children, ...resProps }: HomeImageProps) {
  return <div>{children}</div>;
}
