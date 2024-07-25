import { ComponentProps, PropsWithChildren } from "react";
import Image from "next/image";
import Paragraph from "@/components/common/paragraph";
import Heading from "@/components/common/heading";
interface ToolIconProps extends ComponentProps<"div">, PropsWithChildren {
  imageSrc: string;
  imageAlt: string;
}

export default function ToolIcon({
  children,
  imageSrc,
  imageAlt,
  ...resProps
}: ToolIconProps) {
  return (
    <div className="w-[100px] xl:w-[150px]  px-2 " {...resProps}>
      <Image
        className=" mx-auto"
        width={150}
        height={150}
        src={imageSrc}
        alt={imageAlt}
      />
      <Paragraph.Description className="text-center text-white-one">
        {imageAlt}
      </Paragraph.Description>
    </div>
  );
}
