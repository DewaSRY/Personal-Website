import { ComponentProps, PropsWithChildren } from "react";
import HeroSections from "./_containers/hero-sections";
import FeqSections from "./_containers/feq-sections";

export default function FAQRoute() {
  return (
    <>
      <HeroSections />
      <FeqSections />
    </>
  );
}
