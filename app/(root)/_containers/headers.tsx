import { ComponentProps, PropsWithChildren } from "react";
import NavItems from "../_components/nav-items";

interface HeadersProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Headers({ children, ...resProps }: HeadersProps) {
  return (
    <header className="z-10">
      <NavItems />
    </header>
  );
}
