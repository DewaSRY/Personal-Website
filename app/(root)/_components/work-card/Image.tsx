import { ComponentProps, PropsWithChildren } from "react";
import NextImage from "next/image";
interface ImageProps extends ComponentProps<"img"> {
  imageSrc: string;
  imageAlt: string;
}

export default function Image({ imageAlt, imageSrc, ...resProps }: ImageProps) {
  return (
    <NextImage
      {...resProps}
      width={400}
      height={250}
      src={imageSrc}
      alt={imageAlt}
    />
  );
}
