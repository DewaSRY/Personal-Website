import { ComponentProps, PropsWithChildren } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
interface ContactIconProps extends ComponentProps<"a">, PropsWithChildren {
  hrfTo: string;
  imageSrc: string;
  imageAlt: string;
}

export default function ContactIcon({
  children,
  className,
  imageSrc,
  imageAlt,
  hrfTo,
  ...resProps
}: ContactIconProps) {
  return (
    <Link
      {...resProps}
      href={hrfTo}
      target="_blank"
      rel="noopener noreferrer"
      title={imageAlt}
      className={cn(className, "w-[40px]")}
    >
      <Image
        className="hover:rotate-12 duration-300 ease-in-out"
        src={imageSrc}
        alt={imageAlt}
        width={50}
        height={50}
      />
    </Link>
  );
}
