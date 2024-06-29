"use client";
import { ComponentProps, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";
import HomeIcon from "@/components/svgs/home.svg";
import WorksIcon from "@/components/svgs/map.svg";
import SkillsIcon from "@/components/svgs/magic-skill.svg";
import ProjectIcon from "@/components/svgs/project-axe.svg";
import ProfileIcon from "@/components/svgs/user.svg";
import useNavActiveState from "@/hooks/use-nav-active-state";

import NavItem from "./nav-item";

interface NavItemsProps extends ComponentProps<"div">, PropsWithChildren {}

export default function NavItems({ children, ...resProps }: NavItemsProps) {
  const activeSection = useNavActiveState();
  return (
    <nav
      className={cn(
        "text-primary-four flex flex-row items-center justify-between w-max rounded-lg ",
        "bg-primary-one-alfa px-4 ",
        "fixed bottom-3 left-[50%] translate-x-[-50%]",
        "xl:top-3 xl:bottom-[95%] xl:bg-transparent"
      )}
    >
      <NavItem isActive={activeSection == "home"} to="#home" Icons={HomeIcon}>
        Home
      </NavItem>
      <NavItem
        isActive={activeSection == "works"}
        to="#works"
        Icons={WorksIcon}
      >
        Works
      </NavItem>
      <NavItem
        isActive={activeSection == "skills"}
        to="#skills"
        Icons={SkillsIcon}
      >
        Skills
      </NavItem>
      <NavItem
        isActive={activeSection == "projects"}
        to="#projects"
        Icons={ProjectIcon}
      >
        Projects
      </NavItem>
      <NavItem
        isActive={activeSection == "profile"}
        to="#profile"
        Icons={ProfileIcon}
      >
        Profile
      </NavItem>
    </nav>
  );
}
