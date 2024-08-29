import { ComponentProps, PropsWithChildren } from "react";
import SkillIcon from "./skill-icon";
import { cn } from "@/lib/utils";

const skills = [
  "java",
  "python",
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
  className,
  ...resProps
}: SkillContainerProps) {
  return (
    <div
      className={cn(
        className,

        "flex flex-wrap gap-4"
      )}
    >
      {skills.map((skill, id) => (
        <SkillIcon key={id + skill} text={skill} />
      ))}
    </div>
  );
}
