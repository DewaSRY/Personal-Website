"use client";
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
      <p
        className={cn(
          PARA.NAV,
          "duration-150 ease-in-out transition-transform hover:scale-95 "
        )}
      >
        {children}
      </p>
    </Link>
  );
}
