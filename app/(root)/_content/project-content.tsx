import { ComponentProps, PropsWithChildren } from "react";
import Heading from "@/components/common/heading";

import ProjectCard from "../_components/project-card";
import Paragraph from "@/components/common/paragraph";
import { cn } from "@/lib/utils";
interface ProjectContentProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

export default function ProjectContent({
  children,
  className,
  ...resProps
}: ProjectContentProps) {
  return (
    <div className={cn("py-[100px] ", className)} {...resProps}>
      <Heading.H2 className="underline text-center my-10">
        My Project
      </Heading.H2>
      <ProjectCard.Card>
        <ProjectCard.Header>
          <Heading.H2>This is my first project</Heading.H2>
          <Paragraph.Date>27-06-2004</Paragraph.Date>
          <ProjectCard.Image
            imageSrc="/projects/project-one.png"
            imageAlt="my first project"
          />
        </ProjectCard.Header>
        <ProjectCard.Body>
          <ProjectCard.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            facilis laudantium magni vel, quisquam ducimus, culpa, facere in
            officiis esse commodi excepturi molestiae! Tempore, sit voluptatem!
            Quod ipsam sapiente laudantium.
          </ProjectCard.Description>

          <ProjectCard.Tag>Next JS</ProjectCard.Tag>
          <ProjectCard.Tag>React JS</ProjectCard.Tag>
          <ProjectCard.Tag>GSUP Animation Library</ProjectCard.Tag>
        </ProjectCard.Body>
      </ProjectCard.Card>
      <ProjectCard.Card>
        <ProjectCard.Header>
          <Heading.H2>This is my first project</Heading.H2>
          <Paragraph.Date>27-06-2004</Paragraph.Date>
          <ProjectCard.Image
            imageSrc="/projects/project-one.png"
            imageAlt="my first project"
          />
        </ProjectCard.Header>
        <ProjectCard.Body>
          <ProjectCard.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            facilis laudantium magni vel, quisquam ducimus, culpa, facere in
            officiis esse commodi excepturi molestiae! Tempore, sit voluptatem!
            Quod ipsam sapiente laudantium.
          </ProjectCard.Description>
          <ProjectCard.Tag>Next JS</ProjectCard.Tag>
          <ProjectCard.Tag>React JS</ProjectCard.Tag>
          <ProjectCard.Tag>GSUP Animation Library</ProjectCard.Tag>
        </ProjectCard.Body>
      </ProjectCard.Card>
    </div>
  );
}
