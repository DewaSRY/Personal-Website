import { ComponentProps, PropsWithChildren } from "react";
import Image from "next/image";
import Heading from "@/components/common/heading";
import ProjectCard from "../_components/project-card";
import Paragraph from "@/components/common/paragraph";
interface ProjectProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Project({ children, ...resProps }: ProjectProps) {
  return (
    <section id="projects" className="py-10">
      <Heading.H2>My Programming Project</Heading.H2>
      <ProjectCard.WorkContainer>
        <ProjectCard.WorkCard>
          <Image
            src="/projects/project-one.png"
            width={300}
            height={150}
            alt="my first project"
          />
          <ProjectCard.WorkBody>
            <Heading.H3>This is my first project</Heading.H3>
            <Paragraph.Date>27-06-2004</Paragraph.Date>

            <Paragraph.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur facilis laudantium magni vel, quisquam ducimus, culpa,
              facere in officiis esse commodi excepturi molestiae! Tempore, sit
              voluptatem! Quod ipsam sapiente laudantium.
            </Paragraph.Description>
          </ProjectCard.WorkBody>
        </ProjectCard.WorkCard>
      </ProjectCard.WorkContainer>
    </section>
  );
}
