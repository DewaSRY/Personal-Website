import Heading from "@/components/common/heading";
import ContactForm from "@/containers/contact-form";
import { cn } from "@/lib/utils";

export default function Contact() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div
        className={cn(
          "lg:w-1/3 xl:w-1/2 lg:mx-8 text-white-one px-14 ",
          "lg:pt-[20vh]"
        )}
      >
        <Heading.H2>Get In Touch With Me</Heading.H2>
        <Heading.Quote setQuote>
          If you&apos;re looking for a developer that likes to get stuff done,
          let&apos;s talk.
        </Heading.Quote>
      </div>
      <ContactForm className="w-full lg:w-2/3 xl:w-1/2 mx-4 my-8 " />
    </div>
  );
}
