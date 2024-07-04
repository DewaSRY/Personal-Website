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
    <div className="w-[150px]">
      <Image
        className="h-[50px]"
        width={150}
        height={150}
        src={imageSrc}
        alt={imageAlt}
      />
      <hr />
      <Paragraph.Description>{children}</Paragraph.Description>
    </div>
  );
}
