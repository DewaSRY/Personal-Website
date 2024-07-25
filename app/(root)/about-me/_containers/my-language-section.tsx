import { ComponentProps, PropsWithChildren } from "react";
import LanguageContent from "../_content/language-content";
import Heading from "@/components/common/heading";
interface MyLanguageSectionProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

export default function MyLanguageSection({
  children,
  ...resProps
}: MyLanguageSectionProps) {
  return (
    <section>
      <div className="mt-[32px] mb-[128px] px-2">
        <Heading.H2 className="text-white-one text-center md:text-left ">
          There is several language i spick other then English and Indonesia
        </Heading.H2>
        <Heading.Quote className="text-white-three text-center md:text-left">
          I love Learn new things, I am also have experience on other language
          to, but i am good at this language
        </Heading.Quote>
      </div>
      <LanguageContent />
    </section>
  );
}
