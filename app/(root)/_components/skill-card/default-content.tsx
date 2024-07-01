import { ComponentProps, PropsWithChildren } from "react";
import Heading from "@/components/common/heading";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Paragraph from "@/components/common/paragraph";
interface DefaultContentProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

export default function DefaultContent({
  children,
  ...resProps
}: DefaultContentProps) {
  return (
    <div className={cn(resProps.className, "px-6")}>
      <Heading.H3>
        I Am Good At broad variety of Programming Language
      </Heading.H3>
      <div className="w-full my-5 flex flex-col md:flex-row">
        <Image
          src="/programming_image.png"
          width={400}
          height={250}
          alt="programming_image"
          className="w-[200px] h-[150px] md:w-[400px] md:h-[250px]"
        />
        <div>
          <Heading.H4>i am good at Frontend And backend</Heading.H4>
          <Paragraph.Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem animi
            natus libero maiores doloremque dicta quae id provident fugiat,
            voluptates, cumque quam fuga excepturi quis asperiores sequi dolores
            rerum officia.
          </Paragraph.Description>
          <ul className="my-6 pl-6 underline text-primary-two">
            <Paragraph.List>
              ! Click icon below to get skill content
            </Paragraph.List>
            <Paragraph.List>
              ! Click same icon again to back to main banner
            </Paragraph.List>
          </ul>
        </div>
      </div>
    </div>
  );
}
