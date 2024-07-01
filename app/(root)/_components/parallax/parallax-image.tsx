import { ComponentProps, PropsWithChildren } from "react";

import Image from "next/image";
import { cn } from "@/lib/utils";
interface ParallaxImageProps extends ComponentProps<"img">, PropsWithChildren {
  imageSrc: string;
  imageAlt: string;
}

export default function ParallaxImage({
  children,
  imageSrc,
  imageAlt,
  className,
  ...resProps
}: ParallaxImageProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "782px",
      }}
      className={cn(className, "transition-transform")}
    />
  );
}
