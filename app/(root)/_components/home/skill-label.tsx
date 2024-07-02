import { ComponentProps, PropsWithChildren } from "react";
import Image from "next/image";

import Heading from "@/components/common/heading";
import { cn } from "@/lib/utils";

const skillMap = {
  backend: "/icons/spring.png",
  frontend: "/icons/react.png",
  design: "/icons/figma.png",
};

interface SkillLabelProps extends ComponentProps<"div">, PropsWithChildren {
  skills: keyof typeof skillMap;
}

export default function SkillLabel({
  children,
  skills,
  ...resProps
}: SkillLabelProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center",
        "xl:flex-row gap-2",
        resProps.className
      )}
    >
      <Image src={skillMap[skills]} width={30} height={30} alt={skills} />
      <Heading.H4>{skills}</Heading.H4>
    </div>
  );
}
