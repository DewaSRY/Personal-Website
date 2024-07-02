"use client";
import { ComponentProps, PropsWithChildren } from "react";

import Provider from "./skill-provider";

interface SkillContainerProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

export default function SkillContainer({
  children,
  ...resProps
}: SkillContainerProps) {
  return (
    <Provider>
      <div className="flex justify-center items-center w-11/12 gap-2 ">
        {children}
      </div>
    </Provider>
  );
}
