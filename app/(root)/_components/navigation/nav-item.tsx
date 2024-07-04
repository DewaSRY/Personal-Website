/**
 * This component use to make reusable style from nav items
 */

import { ComponentProps, PropsWithChildren, ReactElement } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Paragraph from "@/components/common/paragraph";
interface NavItemProps extends ComponentProps<"a">, PropsWithChildren {
  Icons: React.FunctionComponent;
  isActive: boolean;
  to: string;
}
export default function NavItem({
  children,
  Icons,
  isActive,
  to,
  ...resProps
}: NavItemProps) {
  function handleMouseIn() {}
  return (
    <Link
      href={`#${to}`}
      scroll
      className={cn(
        " cursor-pointer",
        "w-[100px] h-[50px] md:w-[150px] md:h-[30px]",
        "relative flex flex-col justify-evenly items-center md:items-start  ",
        "md:mx-4 md:h-[30px] z-20  "
      )}
      {...resProps}
    >
      <span className="md:hidden">
        <Icons />
      </span>
      <Paragraph.Nav>{children}</Paragraph.Nav>
      <hr
        className={cn(
          "absolute left-0 bottom-0 h-1 w-full border-transparent bg-primary-five rounded-xl",
          "scale-x-0 origin-right duration-500 transition-transform",
          `${isActive ? "scale-x-100 origin-left" : ""}`
        )}
      />
    </Link>
  );
}
