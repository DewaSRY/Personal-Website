import { ComponentProps, PropsWithChildren } from "react";

import NavItem from "./nav-item";
import { cn } from "@/lib/utils";
interface NavContainerProps extends ComponentProps<"div">, PropsWithChildren {}
const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Me",
    url: "/about-me",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export default function NavContainer({
  children,
  className,
  ...resProps
}: NavContainerProps) {
  return (
    <div className={cn(className)}>
      {links.map((phat, id) => (
        <NavItem key={id} phatTo={phat.url}>
          {phat.title}
        </NavItem>
      ))}
    </div>
  );
}
