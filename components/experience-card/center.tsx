import { ComponentProps, PropsWithChildren } from "react";

interface centerProps extends ComponentProps<"div">, PropsWithChildren {}

export default function center({ children, ...resProps }: centerProps) {
  return (
    <div className="absolute inset-y-0 left-4 translate-x-[100%]  md:left-[50%] md:translate-x-[100%] ">
      <div className="w-1 h-full bg-white-one rounded relative">
        <div className="absolute w-5 h-5 rounded-full ring-8 ring-popover bg-white -left-2"></div>
      </div>
    </div>
  );
}
