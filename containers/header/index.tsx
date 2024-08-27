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
import { cn } from "@/lib/utils";

import "@/components/common/paragraph";

export default function index() {
  const headerElement = useRef<ComponentRef<"header">>(null);

  useEffect(() => {
    function handlerHeaderSticky(event: Event) {
      if (headerElement.current) {
        const { offsetTop, classList } = headerElement.current;
        if (window.scrollY > offsetTop) {
          classList.add("fixed-header");
          classList.remove("sticky-header");
        } else {
          classList.remove("fixed-header");
          classList.add("sticky-header");
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
      className="header min-w-max  py-4 h-[64px]  sticky-header "
    >
      <div className="navigation  flex justify-evenly">
        <Paragraph.Description
          id="header-logo"
          type="quote"
          className="text-white"
        >
          Dewa Surya Ariesta
        </Paragraph.Description>

        <div className="flex gap-4">
          <Paragraph.Description className="text-white">
            Home
          </Paragraph.Description>
          <Paragraph.Description className="text-white">
            Contact
          </Paragraph.Description>
        </div>
      </div>
    </header>
  );
}
