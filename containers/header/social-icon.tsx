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
      className={cn(
        "w-12 h-12 py-2 relative ",
        className,
        "border-2 border-transparent rounded-full transition-colors duration-300 ease-in-out",
        "hover:border-primary"
      )}
    >
      <Image className=" my-auto " src={imageSrc} alt={imageAlt} fill />
    </Paragraph.Link>
  );
}
