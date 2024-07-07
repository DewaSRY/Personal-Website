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
          <ProjectCard.TItle hrfTo="">My Personal Web</ProjectCard.TItle>
          <Paragraph.Date>July 5, 2024</Paragraph.Date>
          <ProjectCard.Image
            imageSrc="/projects/portfolio.png"
            imageAlt="my first project"
          />
        </ProjectCard.Header>
        <ProjectCard.Body>
          <ProjectCard.Description>
            This app is my Portfolio. This app use to prove my capability of
            code. I will build this app with next js because it
            <Paragraph.Quote />s good performance on SEO and easy to work with.
          </ProjectCard.Description>
          <Paragraph.Description>
            Several Feature this app have
          </Paragraph.Description>
          <ProjectCard.Ul>
            <Paragraph.List>Responsive</Paragraph.List>
            <Paragraph.List>Micro-interaction</Paragraph.List>
            <Paragraph.List>Interactive animation</Paragraph.List>
          </ProjectCard.Ul>

          <ProjectCard.Tag>Next JS</ProjectCard.Tag>
          <ProjectCard.Tag>React JS</ProjectCard.Tag>
          <ProjectCard.Tag>GSUP Animation Library</ProjectCard.Tag>
        </ProjectCard.Body>
      </ProjectCard.Card>
      <ProjectCard.Card>
        <ProjectCard.Header>
          <ProjectCard.TItle hrfTo="https://github.com/DewaSRY/Revou-Final-Project">
            Revou Final Project
          </ProjectCard.TItle>
          <Paragraph.Date>May 10, 2024</Paragraph.Date>
          <ProjectCard.Image
            imageSrc="/projects/revou-final-project.png"
            imageAlt="revou final project"
          />
        </ProjectCard.Header>
        <ProjectCard.Body>
          <ProjectCard.Description>
            Application to connect people interest with technology, innovations
            and Engineering is the theme of the application. I and my Team
            create the application as Final project from
            <Paragraph.Link hrfTo="https://revou.co/">Revou.</Paragraph.Link>
            On the Project i Responsible to be Backend. More then be Backend i
            am also take a charge to successful build the app.
          </ProjectCard.Description>
          <Paragraph.Description>
            There are what i do on the project:
          </Paragraph.Description>
          <ProjectCard.Ul>
            <Paragraph.List>
              Developed a robust data sharing system. The app allows users to
              publish and manage business profiles. It integrated with
              Cloudinary for efficient image storage and hosting, enhancing
              application performance.
            </Paragraph.List>
            <Paragraph.List>
              Achieved nearly 80% test coverage to ensure high reliability and
              maintainability, and documented application endpoint, to increase
              frontend development to over 50%.
            </Paragraph.List>
            <Paragraph.List>
              Designed a user-friendly data-sharing application, implementing
              parallax company face and micro-motion user interaction.
            </Paragraph.List>
            <Paragraph.List>
              Lead team to successfully develop the app.Created and explained
              the development workflow with clear language and insightful
              diagrams. Lead team on brainstorming to every feature the
              application has and every edge case need to handle in both backend
              and frontend side.
            </Paragraph.List>
          </ProjectCard.Ul>

          <ProjectCard.Tag>Python</ProjectCard.Tag>
          <ProjectCard.Tag>Flask</ProjectCard.Tag>
          <ProjectCard.Tag>Docker</ProjectCard.Tag>
          <ProjectCard.Tag>Claudinary</ProjectCard.Tag>
        </ProjectCard.Body>
      </ProjectCard.Card>
    </div>
  );
}
