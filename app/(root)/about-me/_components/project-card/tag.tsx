import { ComponentProps, PropsWithChildren } from "react";

import Paragraph from "@/components/common/paragraph";
interface TagProps extends ComponentProps<"span">, PropsWithChildren {}

export default function Tag({ children, ...resProps }: TagProps) {
  return (
    <span className=" ml-1 text-white  ">
      <span className="text-white mr-1">#</span>
      <Paragraph.Description className="text-primary-three inline-block underline">
        {children}
      </Paragraph.Description>
    </span>
  );
}
