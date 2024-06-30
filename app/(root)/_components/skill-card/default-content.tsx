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
            <li>
              <Paragraph.List>
                ! Click icon below to get skill content
              </Paragraph.List>
            </li>
            <li>
              <Paragraph.List>
                ! Click same icon again to back to main banner
              </Paragraph.List>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
