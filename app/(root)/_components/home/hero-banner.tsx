import { ComponentProps, PropsWithChildren } from "react";
import Image from "next/image";

import SkillBanner from "./skill-banner";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
interface HeroBannerProps extends ComponentProps<"div">, PropsWithChildren {}

export default function HeroBanner({ children, ...resProps }: HeroBannerProps) {
  return (
    <div className={cn(resProps.className, "w-[230px] hidden md:block")}>
      <SkillBanner className="absolute bottom-[15%] right-[50%] translate-x-[50%]" />
      <Image
        src="/profile/my_picture.png"
        width={300}
        height={480}
        alt="my self"
      />
      <Button className="w-full h-[50px] text-[1rem]" variant="primary">
        Hire Me
      </Button>
    </div>
  );
}
