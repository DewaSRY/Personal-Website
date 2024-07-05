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
      className={cn(
        className,
        "w-[50px] border-2 border-transparent rounded-[100%] ",
        "hover:scale-[110%] duration-100 ease-in-out"
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={50}
        height={50}
        className="w-full h-full "
      />
    </Link>
  );
}
