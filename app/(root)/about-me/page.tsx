import { ComponentProps, PropsWithChildren } from "react";

import AboutMeBg from "./_components/about-me-bg";
import MyHeroSection from "./_containers/my-hero-section";
interface AboutMeRouteProps extends ComponentProps<"div">, PropsWithChildren {}

export default function AboutMeRoute({
  children,
  ...resProps
}: AboutMeRouteProps) {
  return (
    <>
      <AboutMeBg />
      <div className="relative z-[1]">
        <MyHeroSection />
      </div>
    </>
  );
}
