/**
 * This component use to make reusable style from nav items
 */

import { ComponentProps, PropsWithChildren, ReactElement } from "react";
import { cn } from "@/lib/utils";
import Paragraph from "@/components/common/paragraph";
interface NavItemProps extends ComponentProps<"div">, PropsWithChildren {
  Icons: React.FunctionComponent;
}
export default function NavItem({
  children,
  Icons,
  ...resProps
}: NavItemProps) {
  return (
    <div
      className={cn(
        "relative nav-items w-[60px] h-[50px] flex flex-col justify-between items-center cursor-pointer",
        "md:mx-4 md:h-[30px] "
      )}
    >
      <span className="md:hidden">
        <Icons />
      </span>
      <Paragraph.Nav>{children}</Paragraph.Nav>
      <hr className="absolute left-0 bottom-0 h-1 w-full bg-white rounded-xl" />
    </div>
  );
}
