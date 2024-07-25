import { ComponentProps, PropsWithChildren } from "react";

interface CardProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Card({ children, ...resProps }: CardProps) {
  return (
    <div className="grid grid-cols-6 grid-rows-4  w-[350px] md:w-[750px] px-1">
      {children}
    </div>
  );
}
