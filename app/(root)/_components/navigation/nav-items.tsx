"use client";
import { ComponentProps, PropsWithChildren, MouseEvent } from "react";

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
        "flex flex-row items-center justify-between w-max rounded-lg  z-10",
        "bg-primary-one-alfa px-4 ",
        "fixed z-50 bottom-3 right-[50%] translate-x-[50%]",
        "xl:bg-transparent xl:bottom-[50%] xl:translate-y-[-50%] xl:translate-x-0 xl:right-0 xl:px-2 xl:flex-col "
      )}
    >
      <NavItem isActive={activeSection === "home"} to="home" Icons={HomeIcon}>
        Home
      </NavItem>
      <NavItem
        to="profile"
        isActive={activeSection === "my-profile"}
        Icons={ProfileIcon}
      >
        My Profile
      </NavItem>
      <NavItem
        isActive={activeSection === "works-experience"}
        to="works"
        Icons={WorksIcon}
      >
        Works Experience
      </NavItem>
    </nav>
  );
}
