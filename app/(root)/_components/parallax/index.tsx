import { ComponentProps, ElementRef, PropsWithChildren, useRef } from "react";

import ParallaxImage from "./parallax-image";
interface ParallaxProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Parallax({ children, ...resProps }: ParallaxProps) {
  return (
    <div className="h-[800px] ">
      <ParallaxImage
        imageSrc="/parallax/forest_layer_5.png"
        imageAlt="five layer"
        className="layer absolute top-0 translate-y-[5%] "
        id="five-layer"
      />
      <ParallaxImage
        imageSrc="/parallax/forest_layer_4.png"
        imageAlt="five layer"
        className="layer absolute top-0 translate-y-[10%] duration-500 "
      />
      <ParallaxImage
        imageSrc="/parallax/forest_layer_3.png"
        imageAlt="five layer"
        className="layer absolute top-0 translate-y-[15%] duration-300 "
      />
      <ParallaxImage
        imageSrc="/parallax/forest_layer_2.png"
        imageAlt="five layer"
        className="layer absolute top-0 translate-y-[20%] duration-200 "
      />
      <ParallaxImage
        imageSrc="/parallax/forest_layer_1.png"
        imageAlt="five layer"
        className="layer absolute top-0  translate-y-[25%] duration-150 "
      />
    </div>
  );
}

/**
 *
 */
