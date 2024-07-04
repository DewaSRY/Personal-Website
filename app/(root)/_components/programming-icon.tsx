import { ComponentProps, PropsWithChildren } from "react";
import Image from "next/image";
import Paragraph from "@/components/common/paragraph";
interface ProgrammingIconProps
  extends ComponentProps<"div">,
    PropsWithChildren {
  imageSrc: string;
  imageAlt: string;
}

export default function ProgrammingIcon({
  children,
  imageSrc,
  imageAlt,
  ...resProps
}: ProgrammingIconProps) {
  return (
    <div className="w-[100px] xl:w-[150px] px-2 " {...resProps}>
      <Image
        className="h-[50px] w-[50px] xl:h-[75px] xl:w-[75px] mx-auto"
        width={150}
        height={150}
        src={imageSrc}
        alt={imageAlt}
      />
      <hr />
      <Paragraph.Description className="text-center">
        {children}
      </Paragraph.Description>
    </div>
  );
}
