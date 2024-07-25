import { ComponentProps, PropsWithChildren } from "react";

import AboutMeBg from "./_components/about-me-bg";
interface AboutMeRouteProps extends ComponentProps<"div">, PropsWithChildren {}

export default function AboutMeRoute({
  children,
  ...resProps
}: AboutMeRouteProps) {
  return (
    <div>
      <AboutMeBg />
      about me page
    </div>
  );
}
