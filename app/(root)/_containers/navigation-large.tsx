import { ComponentProps, PropsWithChildren } from "react";

import SocialCTA from "../_content/social-cta";
import RouteNavigation from "../_content/route-navigation";
import { cn } from "@/lib/utils";
interface NavigationLargeProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

export default function NavigationLarge({
  children,
  className,
  ...resProps
}: NavigationLargeProps) {
  return (
    <div
      {...resProps}
      className={cn(
        className,
        "hidden fixed top-4 right-4 px-[32px]  w-[calc(60vw)] xl:flex justify-between items-center"
      )}
    >
      <RouteNavigation className="flex gap-[32px]" />
      <SocialCTA className="flex gap-[16px]" />
    </div>
  );
}
