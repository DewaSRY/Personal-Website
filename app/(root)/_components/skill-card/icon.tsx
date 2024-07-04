import { ComponentProps, PropsWithChildren } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
interface IconProps extends ComponentProps<"img"> {
  imageSrc: string;
  imageAlt: string;
}

export default function Icon({
  imageSrc,
  imageAlt,
  className,
  ...resProps
}: IconProps) {
  return (
    <Image
      {...resProps}
      className={cn(className, "w-[50px] h-[50px] xl:w-[75px] xl:h-[75px]")}
      width={150}
      height={150}
      src={imageSrc}
      alt={imageAlt}
    />
  );
}
