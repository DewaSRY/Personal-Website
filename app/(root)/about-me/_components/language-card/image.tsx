import { ComponentProps, PropsWithChildren } from "react";
import NextImage from "next/image";
import Paragraph from "@/components/common/paragraph";
import Heading from "@/components/common/heading";
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
        "col-start-1 col-span-6 row-start-1 row-span-2",
        "md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-4"
      )}
    >
      <NextImage
        width={150}
        height={150}
        src={imgSrc}
        alt={imgAlt}
        className="mx-auto"
      />
      <Heading.H4 className="text-center text-white-one">{imgAlt}</Heading.H4>
    </div>
  );
}
