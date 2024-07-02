import { ComponentProps, PropsWithChildren, ElementRef } from "react";
import Image from "next/image";

import SkillBanner from "./skill-banner";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
interface HeroBannerProps extends ComponentProps<"div">, PropsWithChildren {}

export default function HeroBanner({ children, ...resProps }: HeroBannerProps) {
  return (
    <div className={cn(resProps.className, "w-[230px] hidden md:block")}>
      <SkillBanner className="absolute md:bottom-[5%] xl:bottom-[15%] right-[50%] translate-x-[50%]" />
      <Image
        src="/profile/my_picture.png"
        width={330}
        height={500}
        alt="my self"
      />
      <Button
        className={cn(
          "w-[120%] h-[50px] text-[1rem]",
          "absolute bottom-[-10%] left-[50%] translate-x-[-50%]"
        )}
        variant="primary"
      >
        Hire Me
      </Button>
    </div>
  );
}
