import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";
import { ComponentProps, PropsWithChildren } from "react";
import ContactForm from "@/containers/contact-form";
import { cn } from "@/lib/utils";

interface pageProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Contact({ children, ...resProps }: pageProps) {
  return (
    <div className="flex flex-col lg:flex-row">
      <div
        className={cn(
          "lg:w-1/3 xl:w-1/2 lg:mx-8 text-white-one px-14 ",
          "lg:py-[10vh]"
        )}
      >
        <Heading.H1>Get In Touch With Me</Heading.H1>
        <Heading.Quote setQuote>
          If you&apos;re looking for a developer that likes to get stuff done,
          let&apos;s talk.
        </Heading.Quote>
      </div>
      <ContactForm className="w-full lg:w-2/3 xl:w-1/2 mx-4 my-8 " />
    </div>
  );
}
