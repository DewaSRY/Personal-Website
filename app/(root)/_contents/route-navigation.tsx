"use client";
import { ComponentProps, PropsWithChildren } from "react";

// import Link from "next/link";
import NavItem from "../_components/navigation/nav-item";
import { User, HomeIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface RouteNavigationProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

export default function RouteNavigation({
  children,
  className,
  ...resProps
}: RouteNavigationProps) {
  const pathname = usePathname().replace("/", "");
  return (
    <div className={cn(className)}>
      <NavItem isActive={pathname === ""} to="/">
        Home
      </NavItem>
      <NavItem isActive={pathname === "about-me"} to="/about-me">
        About me
      </NavItem>
      <NavItem isActive={pathname === "faq"} to="/faq">
        F.A.Q
      </NavItem>
    </div>
  );
}
