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

export default function Header() {
  const headerElement = useRef<ComponentRef<"header">>(null);

  useEffect(() => {
    function handlerHeaderSticky(event: Event) {
      if (headerElement.current) {
        const { offsetTop, classList } = headerElement.current;
        if (window.scrollY > offsetTop) {
          console.log("hallo");
          // classList.add("fixed-header");
          // classList.remove("sticky-header");
        } else {
          console.log("hy");
          // classList.remove("fixed-header");
          // classList.add("sticky-header");
        }
      }
    }
    document.addEventListener("scroll", handlerHeaderSticky);
    return () => {
      document.removeEventListener("scroll", handlerHeaderSticky);
    };
  }, []);

  return (
    <header
      ref={headerElement}
      id="header"
      className="w-full max-h-max fixed top-0"
    >
      <div className="h-12  flex justify-between max-w-[1200px] px-2  mx-auto items-center my-2 ">
        {/* nav item */}
        <NavContainer className="" />
        <div className=" bg-foreground text-white py-1 px-2">
          <Paragraph.Description type="quote" className="">
            Dewa
          </Paragraph.Description>
        </div>
        <SocialContainer className="" />
      </div>
    </header>
  );
}
