"use client";
import { ComponentProps, PropsWithChildren } from "react";

import Provider from "./skill-provider";
import Heading from "@/components/common/heading";

interface SkillContainerProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

export default function SkillContainer({
  children,
  ...resProps
}: SkillContainerProps) {
  return (
    <Provider>
      <div className="min-w-min max-w-[1600px] mx-auto px-4 py-6 ">
        <Heading.H3 className="my-4 underline ">My Skill List :</Heading.H3>
        <div className="flex items-center flex-wrap gap-2 ">{children}</div>
      </div>
    </Provider>
  );
}
