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
      className="w-[200px] h-[150px] my-10 md:w-[300px] md:h-[200px] xl:w-[400px] xl:h-[250px]"
    />
  );
}
