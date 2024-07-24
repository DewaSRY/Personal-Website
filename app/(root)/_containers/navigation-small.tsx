"use client";
import { ComponentProps, PropsWithChildren, useState } from "react";

import HamburgerButton from "../_components/hamburger-button";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

import SocialCTA from "../_content/social-cta";
import RouteNavigation from "../_content/route-navigation";
import { cn } from "@/lib/utils";

interface NavigationSmallProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

export default function NavigationSmall({
  children,
  ...resProps
}: NavigationSmallProps) {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="xl:hidden fixed top-4 right-2 z-10">
        <HamburgerButton
          isActive={isActive}
          onClick={setIsActive.bind(null, !isActive)}
        />
      </div>
      <div className="fixed inset-0 z-[9] xl:hidden bg-white-alfa flex text-center items-center">
        <SocialCTA className="absolute  grid grid-rows-3 gap-8  " />
        <RouteNavigation className="w-[200px] translate-x-[calc(50vw-50%)] gap-6" />
      </div>
    </>
  );
}
