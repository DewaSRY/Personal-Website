"use client";

import { ComponentProps, PropsWithChildren, useState } from "react";

import BaseMode from "@/components/svgs/base-mode.svg";
import ActiveMode from "@/components/svgs/active.svg";
import Paragraph from "./paragraph";
import useMode from "@/hooks/use-mode";
import { cn } from "@/lib/utils";
interface ModeButtonProps extends ComponentProps<"div">, PropsWithChildren {}

export default function ModeButton({ children, ...resProps }: ModeButtonProps) {
  const { toggleTheme, currentTheme } = useMode();

  return (
    <div
      className="text-primary-four flex flex-col items-center cursor-pointer"
      onClick={toggleTheme}
      role="button"
    >
      <div className="w-[24px] h-[24px] relative">
        <span className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          <BaseMode />
        </span>
        <span>
          <ActiveMode
            className={cn(
              "absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]",
              `${currentTheme == "dark" && "hidden"}`
            )}
          />
        </span>
      </div>
      <Paragraph.Description className="capitalize">
        {currentTheme}
      </Paragraph.Description>
    </div>
  );
}
