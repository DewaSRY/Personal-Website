import { ComponentProps, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface SocialNavProps extends ComponentProps<"div">, PropsWithChildren {}

export default function SocialNav({ children, ...resProps }: SocialNavProps) {
  return (
    <div className="fixed left-1 bottom-[50%] translate-y-[50%] flex h-[120px] flex-col justify-between   ">
      <Link
        href="/"
        className={cn(
          "flex justify-center items-center",
          "w-[50px] h-[50px] border-0 rounded-[100%] ",
          "transition-transform",
          "hover:border hover:scale-95"
        )}
      >
        <Image src="/icons/github.png" width={50} height={50} alt="github" />
      </Link>
      <Link
        className={cn(
          "flex justify-center items-center",
          "w-[50px] h-[50px] border-0 rounded-[100%] ",
          "transition-transform",
          "hover:border hover:scale-95"
        )}
        href="/"
      >
        <Image
          src="/icons/linkedin.png"
          width={50}
          height={50}
          alt="linkedin"
        />
      </Link>
    </div>
  );
}
