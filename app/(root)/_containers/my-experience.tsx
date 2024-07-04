import { ComponentProps, PropsWithChildren } from "react";
import ProjectContent from "../_content/project-content";
import WorksContent from "../_content/works-content";

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