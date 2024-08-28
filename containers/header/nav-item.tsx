"use client";
import { ComponentProps, PropsWithChildren } from "react";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
interface NavItemProps extends ComponentProps<"div">, PropsWithChildren {
  phatTo: string;
}

export default function NavItem({
  phatTo,
  children,
  ...resProps
}: NavItemProps) {
  const phatName = usePathname();
  const currentPhatName = phatName.length > 0 ? phatName : "Home";

  return (
    <div
      className={cn(
        "group",
        `${currentPhatName === phatTo ? "text-popover" : "text-white-one"} `
      )}
    >
      <Link href={phatTo}>
        <Heading.Nav>{children}</Heading.Nav>
      </Link>
      <hr
        className={cn(
          "h-1 duration-300 ease-in border-0  w-0 group-hover:w-full ",
          `${currentPhatName === phatTo ? "bg-popover" : "bg-white"} `
        )}
      />
    </div>
  );
}
