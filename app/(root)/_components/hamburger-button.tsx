import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";

interface HamburgerButtonProps
  extends ComponentProps<"button">,
    PropsWithChildren {
  isActive: boolean;
}

export default function HamburgerButton({
  children,
  isActive,

  ...resProps
}: HamburgerButtonProps) {
  return (
    <button
      {...resProps}
      type="button"
      className="text-white-two w-[50px] h-[50px] relative duration-150 ease-out transition-transform hover:scale-95"
    >
      <hr
        className={cn(
          "duration-300 ",
          "border-white-two border-2 w-full absolute top-[20%]",
          `${isActive ? "rotate-45 top-[47%]" : ""}`
        )}
      />
      <hr
        className={cn(
          "duration-300",
          "border-white-two border-2  w-full absolute top-[47%]",
          `${isActive ? "opacity-0" : ""}`
        )}
      />
      <hr
        className={cn(
          "duration-300",
          "border-white-two border-2  w-full absolute bottom-[20%]",
          `${isActive ? "rotate-[-45deg] bottom-[47%]" : ""}`
        )}
      />
    </button>
  );
}
