import { ComponentProps, PropsWithChildren } from "react";

import AboutMeBg from "./_components/about-me-bg";
import MyHeroSection from "./_containers/my-hero-section";
import MyLanguageSection from "./_containers/my-language-section";
import MyToolsSection from "./_containers/my-tools-section";

export default function AboutMeRoute() {
  return (
    <div>
      <AboutMeBg />
      <div className="relative z-[1] mb-[128px]">
        <MyHeroSection />
        <MyLanguageSection />
        <MyToolsSection />
      </div>
    </div>
  );
}
