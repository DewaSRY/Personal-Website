/**
 * This component use to make reusable style from nav items
 */

import { ComponentProps, PropsWithChildren, ReactElement } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Paragraph from "@/components/common/paragraph";
interface NavItemProps extends ComponentProps<"div">, PropsWithChildren {
  Icons: React.FunctionComponent;
  to: string;
  isActive: boolean;
}
export default function NavItem({
  children,
  Icons,
  to,
  isActive,
  ...resProps
}: NavItemProps) {
  console.log(`${to} is active ${isActive}}`);
  return (
    <div
      className={cn(
        "relative active nav-items w-[60px] h-[50px] flex flex-col justify-between items-center cursor-pointer",
        "md:mx-4 md:h-[30px] "
      )}
    >
      <span className="md:hidden colors-svg ">
        <Icons />
      </span>
      <Link href={to}>
        <Paragraph.Nav>{children}</Paragraph.Nav>
      </Link>
      <hr
        className={cn(
          "absolute left-0 bottom-0 h-1 w-full bg-white rounded-xl",
          "scale-x-0 origin-right duration-500 transition-transform",
          `${isActive ? "scale-x-100 origin-left" : ""}`
        )}
      />
    </div>
  );
}
