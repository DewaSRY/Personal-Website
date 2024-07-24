"use client";
/**
 * This component use to make reusable style from nav items
 */

import { ComponentProps, PropsWithChildren, ReactElement } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Heading from "@/components/common/heading";

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
  return (
    <Link
      href={to}
      scroll
      className={cn(
        "duration-200 ease-in-out",
        `${isActive ? "hidden" : ""}`,
        "cursor-pointer text-white-three"
      )}
      {...resProps}
    >
      <Heading.Nav>{children}</Heading.Nav>
    </Link>
  );
}
