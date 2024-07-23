/**
 * This component use to make reusable style from nav items
 */

import { ComponentProps, PropsWithChildren, ReactElement } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Paragraph from "@/components/common/paragraph";

import { PARA } from "@/utils/fonts";
interface NavItemProps extends ComponentProps<"a">, PropsWithChildren {
  isActive: boolean;
  to: string;
}
export default function NavItem({
  children,
  isActive,
  to,
  ...resProps
}: NavItemProps) {
  function handleMouseIn() {}
  return (
    <Link
      href={to}
      scroll
      className={cn("cursor-pointer text-white-three")}
      {...resProps}
    >
      <p className={PARA.NAV}>{children}</p>
    </Link>
  );
}
