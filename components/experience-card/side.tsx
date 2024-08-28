import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";

const sidesMap = {
  left: " md:col-start-1 md:col-span-1 md:mx-4 ",
  right: " md:col-start-2 md:col-span-1 md:mx-4  ",
};

interface sideProps extends ComponentProps<"div">, PropsWithChildren {
  sides: keyof typeof sidesMap;
}

export default function side({ sides, children, ...resProps }: sideProps) {
  return (
    <div
      className={cn(sidesMap[sides], "col-start-1 col-span-2", " ml-12 mr-4")}
    >
      {children}
    </div>
  );
}
