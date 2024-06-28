/**
 * This component use to make reusable style from nav items
 */

import { ComponentProps, PropsWithChildren, ReactElement } from "react";

import Paragraph from "@/components/common/paragraph";
interface NavItemProps extends ComponentProps<"div">, PropsWithChildren {
  Icons: React.FunctionComponent;
}

export default function NavItem({
  children,
  Icons,
  ...resProps
}: NavItemProps) {
  return (
    <div className="w-[60px] h-[60px] flex flex-col justify-between">
      <Icons />
      <Paragraph.Nav>{children}</Paragraph.Nav>
      <hr />
    </div>
  );
}
