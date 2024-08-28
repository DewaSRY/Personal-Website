import { ComponentProps, PropsWithChildren } from "react";
import Paragraph from "@/components/common/paragraph";
import Image from "next/image";
import { cn } from "@/lib/utils";
interface SocialIconProps extends ComponentProps<"div">, PropsWithChildren {
  imageAlt: string;
  imageSrc: string;
  socialLink: string;
}

export default function SocialIcon({
  imageAlt,
  imageSrc,
  socialLink,
  children,
  className,
  ...resProps
}: SocialIconProps) {
  return (
    <Paragraph.Link
      hrfTo={socialLink}
      className={cn("w-12 h-12 py-2 ", className)}
    >
      <Image
        className=" my-auto "
        src={imageSrc}
        alt={imageAlt}
        width={40}
        height={40}
      />
    </Paragraph.Link>
  );
}
