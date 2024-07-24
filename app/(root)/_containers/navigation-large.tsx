import { ComponentProps, PropsWithChildren } from "react";

import SocialCTA from "../_content/social-cta";
import RouteNavigation from "../_content/route-navigation";
interface NavigationLargeProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

export default function NavigationLarge({
  children,
  ...resProps
}: NavigationLargeProps) {
  return (
    <div className="hidden fixed top-4 right-2  w-[calc(60vw)]  xl:flex justify-between items-center  ">
      <RouteNavigation className="flex gap-[32px]" />
      <SocialCTA className="flex gap-[16px]" />
    </div>
  );
}
