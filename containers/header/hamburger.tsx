import { ComponentProps, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface hamburgerProps extends ComponentProps<"div">, PropsWithChildren {}

export default function hamburger({
  children,
  className,
  ...resProps
}: hamburgerProps) {
  return (
    <div className={cn("group text-2xl text-white w-10 h-auto ", className)}>
      <hr
        className={cn(
          "transition-transform duration-300",
          "h-[10px] bg-white-one mb-2 w-11/12 mx-auto rounded-tl-xl rounded-tr-xl ",
          "group-hover:translate-y-[-10%]"
        )}
      />
      <hr
        className={cn(
          "transition-transform duration-300",
          "bg-white-one mb-2",
          "h-0 group-hover:h-[6px] scale-0 group-hover:scale-100  group-hover:block "
        )}
      />
      <hr
        className={cn(
          "transition-transform duration-300",
          "h-[6px] bg-white-one mb-2 ",
          "translate-y-[-150%] group-hover:translate-y-0 "
        )}
      />
      <hr
        className={cn(
          "bg-white-one mb-2",
          "h-0 group-hover:h-[6px] scale-0 group-hover:scale-100 duration-300 group-hover:block "
        )}
      />
      <hr
        className={cn(
          "transition-transform duration-300",
          "h-[10px] bg-white-one mb-2  w-11/12 mx-auto",
          "translate-y-[-180%] group-hover:translate-y-0 "
        )}
      />
    </div>
  );
}
