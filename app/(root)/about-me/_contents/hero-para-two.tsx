import { ComponentProps, PropsWithChildren } from "react";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import { cn } from "@/lib/utils";
interface HeroParaTwoProps extends ComponentProps<"div">, PropsWithChildren {}

export default function HeroParaTwo({
  children,
  className,
  ...resProps
}: HeroParaTwoProps) {
  return (
    <div className={cn(className, "px-4 md:border-l-2")}>
      <Paragraph.Description className="py-4 text-white-two">
        My first job was filled with challenges. I had to conduct meetings
        entirely in English, which was difficult since English is not my first
        language, and my coding skills were still developing at the time.
        However, through perseverance and hard work, our team successfully
        developed a microservice-based data management system for a warehouse.
        This system comprised 78 services and two dashboard systems. We
        modernized the codebase, making it easier to develop and integrate, and
        incorporated a real-time CCTV system to help warehouse workers maintain
        storage security efficiently.
      </Paragraph.Description>
      <Paragraph.Description className="py-4 text-white-two">
        As I progressed in my career, I delved deeper into various software
        technologies, enhancing my skills in both backend and frontend
        development, ultimately becoming a proficient full stack developer.
      </Paragraph.Description>
      <Paragraph.Description className="py-4 text-white-two">
        Looking ahead, I am eager to continuously refine my skills and character
        while sharing my knowledge and expertise with teams and individuals
        beyond our field.
      </Paragraph.Description>
    </div>
  );
}
