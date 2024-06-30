import { ComponentProps, PropsWithChildren } from "react";
import SkillLabel from "./skill-label";
import { cn } from "@/lib/utils";
interface SkillBannerProps extends ComponentProps<"div">, PropsWithChildren {}

export default function SkillBanner({
  children,
  ...resProps
}: SkillBannerProps) {
  return (
    <div className={cn("flex gap-1 xl:flex-col", resProps.className)}>
      <SkillLabel skills="frontend" className="xl:translate-x-[-50%]" />
      <SkillLabel skills="backend" className="xl:translate-x-[30%]" />
      <SkillLabel skills="design" className="xl:translate-x-[-30%] " />
    </div>
  );
}
