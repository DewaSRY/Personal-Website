import { ComponentProps, PropsWithChildren } from "react";
import SkillLabel from "./skill-label";
interface SkillBannerProps extends ComponentProps<"div">, PropsWithChildren {}

export default function SkillBanner({
  children,
  ...resProps
}: SkillBannerProps) {
  return (
    <div className="flex gap-1 md:flex-col">
      <SkillLabel skills="frontend" />
      <SkillLabel skills="backend" />
      <SkillLabel skills="design" />
    </div>
  );
}
