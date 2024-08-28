import { ComponentProps, PropsWithChildren } from "react";
import SkillIcon from "./skill-icon";

const skills = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "SCSS",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "Node.js",
  "Nest.js",
  "Express.js",
  "Spring Boot",
  "GraphQL",
  "Apollo",
  "Redux",
  "Framer Motion",
  "Three.js",
  "WebGL",
  "Webpack",
  "Vite",
  "Docker",
  "AWS",
  "Firebase",
  "Git",
  "Figma",
];
interface SkillContainerProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

export default function SkillContainer({
  children,
  ...resProps
}: SkillContainerProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {skills.map((skill, id) => (
        <SkillIcon key={id} text={skill} />
      ))}
    </div>
  );
}
