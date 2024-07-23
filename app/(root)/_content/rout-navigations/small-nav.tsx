import { ComponentProps, PropsWithChildren } from "react";

// import Link from "next/link";
import NavItem from "../../_components/navigation/nav-item";
import { User, HomeIcon } from "lucide-react";
import { cn } from "@/lib/utils";
interface SmallNavProps extends ComponentProps<"div">, PropsWithChildren {}

export default function SmallNav({
  children,
  className,
  ...resProps
}: SmallNavProps) {
  return (
    <div className={cn(className)}>
      <NavItem isActive={true} to="/">
        Home
      </NavItem>
      <NavItem isActive={true} to="/about-me">
        About me
      </NavItem>
      <NavItem isActive={true} to="/faq">
        F.A.Q
      </NavItem>
    </div>
  );
}
