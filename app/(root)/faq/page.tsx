import { ComponentProps, PropsWithChildren } from "react";

interface FAQRouteProps extends ComponentProps<"div">, PropsWithChildren {}

export default function FAQRoute({ children, ...resProps }: FAQRouteProps) {
  return <div>FAQ</div>;
}
