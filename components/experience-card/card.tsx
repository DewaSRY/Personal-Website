import { ComponentProps, PropsWithChildren } from "react";
import Center from "./center";
interface cardProps extends ComponentProps<"div">, PropsWithChildren {}

export default function card({ children, ...resProps }: cardProps) {
  return (
    <div className="relative grid grid-cols-2">
      <Center />
      {children}
    </div>
  );
}
