import { ComponentProps, PropsWithChildren } from "react";
import NextImage from "next/image";
interface ImageProps extends ComponentProps<"img"> {
  imageSrc: string;
  imageAlt: string;
}

export default function Image({ imageSrc, imageAlt, ...resProps }: ImageProps) {
  return (
    <NextImage
      {...resProps}
      src={imageSrc}
      width={300}
      height={150}
      alt={imageAlt}
    />
  );
}
