import { ComponentProps, PropsWithChildren } from "react";

interface WorkCardsUlProps extends ComponentProps<"div">, PropsWithChildren {}

export default function WorkCardsUl({
  children,
  ...resProps
}: WorkCardsUlProps) {
  return <ul>{children}</ul>;
}
