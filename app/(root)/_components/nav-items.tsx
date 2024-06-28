import { ComponentProps, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";
import HomeIcon from "@/components/svgs/home.svg";
import WorksIcon from "@/components/svgs/map.svg";
import SkillsIcon from "@/components/svgs/magic-skill.svg";
import ProjectIcon from "@/components/svgs/project-axe.svg";
import ProfileIcon from "@/components/svgs/user.svg";

import NavItem from "./nav-item";

interface NavItemsProps extends ComponentProps<"div">, PropsWithChildren {}

export default function NavItems({ children, ...resProps }: NavItemsProps) {
  return (
    <nav
      className={cn(
        "text-primary-four flex flex-row items-center justify-between w-max rounded-lg ",
        "bg-primary-one-alfa ",
        "fixed bottom-3 left-[50%] translate-x-[-50%]"
      )}
    >
      <NavItem Icons={HomeIcon}>Header</NavItem>
      <NavItem Icons={WorksIcon}>Works</NavItem>
      <NavItem Icons={SkillsIcon}>Skills</NavItem>
      <NavItem Icons={ProjectIcon}>Projects</NavItem>
      <NavItem Icons={ProfileIcon}>Profiles</NavItem>
    </nav>
  );
}
