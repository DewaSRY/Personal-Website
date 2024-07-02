import { ComponentProps, PropsWithChildren } from "react";
import Image from "next/image";
import Heading from "@/components/common/heading";
import Parallax from "../_components/parallax";
import Paragraph from "@/components/common/paragraph";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
interface ProfileProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Profile({
  children,
  className,
  ...resProps
}: ProfileProps) {
  return (
    <section
      id="profile"
      className={cn(" h-[100vh] mx-auto relative max-w-[1280px]  ", className)}
      {...resProps}
    >
      <div
        className={cn(
          "flex flex-col md:flex-row gap-4 justify-center items-center w-10/12 pt-6 pb-10 h-5/6 md:h-4/6 xl:h-3/6 rounded-lg z-[3] px-4 bg-primary-one-alfa",
          "absolute bottom-5 left-[50%] translate-x-[-50%] "
        )}
      >
        <Image
          src="/profile/me-tow.png"
          alt="my picture"
          width={200}
          height={250}
          className="rounded-xl w-[150px] h-[200px] md:w-[200px] md:h-[250px]"
        />
        <div>
          <Heading.H3>Dewa Surya Ariesta</Heading.H3>
          <Paragraph.Description className="my-4">
            Experienced software engineer with solid foundation in both frontend
            and backend technologies. My journey began as a freelance frontend
            developer, where I successfully designed and developed an
            enterprise-level data management system using Angular. As I
            progressed, I delved deeper into backend technologies, honing my
            skills in programming languages such as Java, Python and Rust.
            Looking ahead, my aim is to continuously refine my programming and
            communication skills while eagerly sharing my knowledge and
            expertise with teams and individuals beyond the confines of our
            field.
          </Paragraph.Description>
          <Button variant="primary">Connect with me On Linkedin</Button>
        </div>
      </div>
      <Parallax />
    </section>
  );
}
