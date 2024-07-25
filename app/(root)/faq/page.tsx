import { ComponentProps, PropsWithChildren } from "react";
import HeroSections from "./_containers/hero-sections";
interface FAQRouteProps extends ComponentProps<"div">, PropsWithChildren {}

export default function FAQRoute({ children, ...resProps }: FAQRouteProps) {
  return (
    <>
      <HeroSections />
    </>
  );
}
