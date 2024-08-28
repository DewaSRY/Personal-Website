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
    <Heading.Nav
      className={cn(
        "duration-300 transition-colors border-b-2 border-transparent  origin-right",
        `${currentPhatName === phatTo ? "text-muted" : "text-white-one"} `,
        `${
          currentPhatName === phatTo && "hover:border-b-2 hover:border-muted"
        } `,
        `${
          currentPhatName !== phatTo &&
          "hover:border-b-2 hover:border-white-one"
        } `
      )}
    >
      <Link href={phatTo}>{children}</Link>
    </Heading.Nav>
  );
}
