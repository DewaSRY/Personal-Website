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
import HeaderBig from "./header-big";
import HeaderSmall from "./header-small";

export default function Header() {
  return (
    <header id="header" className={cn("", " ")}>
      <HeaderBig className="hidden lg:block" />
      <HeaderSmall className="lg:hidden" />
    </header>
  );
}
