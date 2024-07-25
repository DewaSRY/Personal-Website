import { ComponentProps, PropsWithChildren } from "react";
import ProjectContent from "../_contents/project-content";
import WorksContent from "../_contents/works-content";

interface MyExperienceProps
  extends ComponentProps<"section">,
    PropsWithChildren {}

export default function MyExperience({
  children,
  ...resProps
}: MyExperienceProps) {
  return (
    <section id="experience" className="py-10 bg-primary-two">
      <WorksContent />
      <ProjectContent />
    </section>
  );
}
