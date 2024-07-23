import { ComponentProps, PropsWithChildren } from "react";

interface AboutMeRouteProps extends ComponentProps<"div">, PropsWithChildren {}

export default function AboutMeRoute({
  children,
  ...resProps
}: AboutMeRouteProps) {
  return <div> about me page</div>;
}
