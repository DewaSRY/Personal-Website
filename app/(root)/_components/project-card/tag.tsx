import { ComponentProps, PropsWithChildren } from "react";

interface TagProps extends ComponentProps<"span">, PropsWithChildren {}

export default function Tag({ children, ...resProps }: TagProps) {
  return (
    <span className=" ml-1 text-white ">
      <span className="text-white mr-1">#</span>
      <span className="text-primary-three underline">{children}</span>
    </span>
  );
}
