import { ComponentProps, PropsWithChildren } from "react";
import Paragraph from "@/components/common/paragraph";
import Heading from "@/components/common/heading";
import Image from "next/image";
import { cn } from "@/lib/utils";
interface MySelfSectionProps
  extends ComponentProps<"section">,
    PropsWithChildren {}

export default function MySelfSection({
  children,
  ...resProps
}: MySelfSectionProps) {
  return (
    <section>
      <Heading.H2 className="text-white-one px-[8px]">
        Let me introduction my self
      </Heading.H2>
      <Heading.Quote className="text-white-three px-[8px]">
        I am an Extrovert person, it is might be more fun if we make schedule to
        talk
      </Heading.Quote>

      <div className="grid gap-8 xl:grid-cols-2 xl:grid-rows-1 my-[64px] xl:my-[128px] xl:h-[650px]">
        <div
          className={cn(
            "bg-primary-four xl:col-start-2 xl:row-span-1 mx-[16px]  py-[24px] px-[32px]",
            "flex justify-end items-center xl:justify-center",
            "rounded-bl-[64px] rounded-tr-[64px] xl:rounded-bl-[0px] xl:rounded-tr-[0px] xl:rounded-tl-[64px] xl:rounded-br-[64px] "
          )}
        >
          <Image
            src="/my-self/my_one.png"
            width={300}
            height={500}
            alt="me two"
          />
        </div>
        <div
          className={cn(
            "xl:row-start-1 text-white-two text-left px-[8px]",
            "py-[10%] xl:py-[30%]"
          )}
        >
          <hr className="my-2" />
          <Paragraph.Description className="mb-2">
            My name is Dewa Surya Ariesta, I was born in 2004 and I am gen-Z. If
            you want to know my MBTI, I am an ENTP. and for my star sign, I am
            Ariest.
          </Paragraph.Description>
          <Paragraph.Description className="mb-2">
            Someone can stereotype me, it might be good judgment or bad, but I
            focus more on what I can do : )
          </Paragraph.Description>
        </div>
      </div>
    </section>
  );
}
