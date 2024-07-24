import { ComponentProps, PropsWithChildren } from "react";
import NextImage from "next/image";
import { cn } from "@/lib/utils";

interface ImageProps extends ComponentProps<"div">, PropsWithChildren {
  imgSrc: string;
  imgAlt: string;
}

export default function Image({
  children,
  imgAlt,
  imgSrc,
  ...resProps
}: ImageProps) {
  return (
    <div
      className={cn(
        "col-start-1 col-span-2 row-start-3 row-span-5",
        "md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-12",
        "xl:col-start-1 xl:col-span-2 xl:row-start-3 xl:row-span-5"
      )}
    >
      <NextImage
        className="m-auto"
        src={imgSrc}
        alt={imgAlt}
        width={300}
        height={300}
      />
    </div>
  );
}
