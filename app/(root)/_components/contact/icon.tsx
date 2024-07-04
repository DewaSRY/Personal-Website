import { ComponentProps, PropsWithChildren } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
interface IconProps extends ComponentProps<"img">, PropsWithChildren {
  imageSrc: string;
  imageAlt: string;
}

export default function Icon({
  imageAlt,
  imageSrc,
  className,
  ...resProps
}: IconProps) {
  return (
    <div className="row-start-1 row-end-3 w-[50px] ">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={50}
        height={50}
        className="mx-auto w-[30px] h-[30px]"
      />
    </div>
  );
}
