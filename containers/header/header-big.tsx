"use client";
import React, {
  ComponentProps,
  PropsWithChildren,
  useRef,
  useEffect,
  ComponentRef,
} from "react";

import "./sticky-header.css";
import Paragraph from "@/components/common/paragraph";

import NavContainer from "./nav-container";
import SocialContainer from "./social-container";
import { cn } from "@/lib/utils";
import Link from "next/link";
interface HeaderBigProps extends ComponentProps<"div">, PropsWithChildren {}

export default function HeaderBig({
  children,
  className,
  ...resProps
}: HeaderBigProps) {
  const headerElement = useRef<ComponentRef<"div">>(null);
  const navigationContainer = useRef<ComponentRef<"div">>(null);

  useEffect(() => {
    let prevScrollY = window.scrollY;
    function handlerHeaderSticky(event: Event) {
      const headerEl = headerElement.current;
      const navContainerEl = navigationContainer.current;
      /**This code use to hide header when window get scroll down */
      if (headerEl) {
        if (prevScrollY < window.scrollY) {
          headerEl.style.transition = "transform 0.8 ease-in";
          headerEl.style.transform = "translateY(-150%)";
        } else {
          headerEl.style.transition = "transform 0.3 ease-in";
          headerEl.style.transform = "translateY(0)";
        }
        prevScrollY = window.scrollY;
      }
      /**This code use to give navigation container background when scroll down  */
      if (navContainerEl) {
        const { offsetTop, style } = navContainerEl;
        if (window.scrollY > offsetTop) {
          style.backgroundColor = "#5778a9b6";
        } else {
          style.backgroundColor = "transparent";
        }
      }
    }
    document.addEventListener("scroll", handlerHeaderSticky);
    return () => {
      document.removeEventListener("scroll", handlerHeaderSticky);
    };
  }, []);
  return (
    <div
      ref={headerElement}
      className={cn(
        className,
        "duration-300 w-full max-h-max fixed top-0 z-20 "
      )}
    >
      <div
        ref={navigationContainer}
        className={cn(
          "h-12  flex justify-between max-w-[1200px] px-2  mx-auto items-center my-2 ",
          "rounded-md "
        )}
      >
        <NavContainer className="flex gap-4" />
        <div className=" bg-foreground text-white py-1 px-2">
          <Link href="/">
            <Paragraph.Description type="quote" className="">
              Dewa
            </Paragraph.Description>
          </Link>
        </div>
        <SocialContainer className="" />
      </div>
    </div>
  );
}
