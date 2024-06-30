"use client";
import { ComponentProps, PropsWithChildren, useState } from "react";

import MessageSquare from "@/components/svgs/message-square.svg";
import Paragraph from "@/components/common/paragraph";
interface SelectLanguageProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

export default function SelectLanguage({
  children,
  ...resProps
}: SelectLanguageProps) {
  const [open, setIsOpen] = useState();

  return (
    <div
      role="button"
      className="text-primary-four flex flex-col items-center cursor-pointer"
    >
      <MessageSquare />
      <Paragraph.Description>ID</Paragraph.Description>
    </div>
  );
}
