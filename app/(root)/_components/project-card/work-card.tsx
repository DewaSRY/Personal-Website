import { ComponentProps, PropsWithChildren } from "react";

interface WorkCardProps extends ComponentProps<"div">, PropsWithChildren {}

export default function WorkCard({ children, ...resProps }: WorkCardProps) {
  return <div className="flex flex-col gap-2 md:flex-row ">{children}</div>;
}
