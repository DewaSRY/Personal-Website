import { ComponentProps, PropsWithChildren } from "react";

import SkillsContent from "../_content/skills-content";
interface MySkillSectionProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

export default function MySkillSection({
  children,
  ...resProps
}: MySkillSectionProps) {
  return (
    <div>
      <SkillsContent />
    </div>
  );
}
