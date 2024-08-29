import { ComponentProps, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import MyIllustrationIMg from "../../public/hero/my-illustration.png";

interface HomeImageProps extends ComponentProps<"div">, PropsWithChildren {}

export default function HomeImage({
  children,
  className,
  ...resProps
}: HomeImageProps) {
  return (
    <div className={cn("relative ", className)}>
      <Image
        src="/hero/my-illustration.png"
        fill
        className="object-cover h-full hidden lg:block"
        alt="my-illustration"
        placeholder="blur"
        blurDataURL="/blure/hero.txt"
      />

      {/* Text Logo */}
      <div
        className={cn(
          "rotate-[-90deg] h-12 absolute left-0 top-0 text-8xl   lg:hidden ",
          "translate-x-[-48%] translate-y-[42vh] text-white"
        )}
      >
        <span>Dewa</span>
        <span>Surya</span>
        <span>Arista</span>
      </div>
    </div>
  );
}
