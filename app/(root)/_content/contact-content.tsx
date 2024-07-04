import { ComponentProps, PropsWithChildren } from "react";
import Contact from "../_components/contact";
import Heading from "@/components/common/heading";
interface ContactContentProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

export default function ContactContent({
  children,
  ...resProps
}: ContactContentProps) {
  return (
    <div className="">
      <Heading.H2 className="mx-4 text-primary-one">Contact me</Heading.H2>
      <hr className="mt-2 mb-6 h-4" />
      <div className="grid gap-4">
        <Contact.Card hrfTo="https://github.com/DewaSRY">
          <Contact.Icon imageSrc="/contact-icon/github.png" imageAlt="github" />
          <Contact.text>https://github.com/DewaSRY</Contact.text>
        </Contact.Card>

        <Contact.Card hrfTo="https://www.linkedin.com/in/dewa-surya/">
          <Contact.Icon
            imageSrc="/contact-icon/linkedin.png"
            imageAlt="linkedin"
          />
          <Contact.text>https://www.linkedin.com/in/dewa-surya/</Contact.text>
        </Contact.Card>
        <Contact.Card hrfTo="sdewa6645@gmail.com">
          <Contact.Icon imageSrc="/contact-icon/gmail.png" imageAlt="gmail" />
          <Contact.text>sdewa6645@gmail.com</Contact.text>
        </Contact.Card>
      </div>
    </div>
  );
}
