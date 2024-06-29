import { ComponentProps, PropsWithChildren, useState } from "react";

import BaseMode from "@/components/svgs/base-mode.svg";
import ActiveMode from "@/components/svgs/active.svg";
import Paragraph from "./paragraph";

interface ModeButtonProps extends ComponentProps<"div">, PropsWithChildren {}

export default function ModeButton({ children, ...resProps }: ModeButtonProps) {
  return (
    <div className="text-primary-four flex flex-col items-center cursor-pointer">
      <div className="w-[24px] h-[24px] relative">
        <span className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          <BaseMode />
        </span>
        <span>
          <ActiveMode className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" />
        </span>
      </div>
      <Paragraph.Description>Mode</Paragraph.Description>
    </div>
  );
}
