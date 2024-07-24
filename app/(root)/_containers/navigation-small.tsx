"use client";
import {
  ComponentProps,
  ElementRef,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";

import HamburgerButton from "../_components/hamburger-button";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import SocialCTA from "../_content/social-cta";
import RouteNavigation from "../_content/route-navigation";

interface NavigationSmallProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

export default function NavigationSmall({
  children,
  ...resProps
}: NavigationSmallProps) {
  const [isActive, setIsActive] = useState(false);
  const overLayElement = useRef<ElementRef<"div">>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsActive(false); // every element get render or re-render the overlay get in-active

    function resizeHandler() {
      setIsActive(false);
    }
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [pathname]); // ever phat name of rout change the element get re-render

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.to(overLayElement.current, {
        scaleY: isActive ? 1 : 0,
        ease: "power4.inOut",
      });

      tl.to(".route-navigation", {
        opacity: isActive ? 1 : 0,
      });
      tl.to(".social-cta", {
        opacity: isActive ? 1 : 0,
      });
    },
    {
      dependencies: [isActive],
    }
  );
  return (
    <>
      <div className="xl:hidden fixed top-4 right-2 z-10 ">
        <HamburgerButton
          isActive={isActive}
          onClick={setIsActive.bind(null, !isActive)}
        />
      </div>
      <div
        ref={overLayElement}
        className="origin-top fixed inset-0 z-[9]  xl:hidden bg-white-alfa flex text-center items-center"
      >
        <SocialCTA className="social-cta absolute  grid grid-rows-3 gap-8  " />
        <RouteNavigation className="route-navigation w-[200px] translate-x-[calc(50vw-50%)] flex flex-col gap-8" />
      </div>
    </>
  );
}
