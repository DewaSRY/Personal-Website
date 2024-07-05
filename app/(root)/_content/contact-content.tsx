"use client";
import { ComponentProps, ElementRef, PropsWithChildren, useRef } from "react";
import Contact from "../_components/contact";
import Heading from "@/components/common/heading";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ContactContentProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

export default function ContactContent({
  children,
  ...resProps
}: ContactContentProps) {
  const hrElement = useRef<ElementRef<"hr">>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: hrElement.current,
          start: "top 70%",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
      });
      tl.from(hrElement.current, {
        scaleX: 0,
        transformOrigin: "left",
      });
      tl.to(hrElement.current, {
        scaleX: 1,
      });
    }
    // { scope: workContainer.current! }
  );
  return (
    <div className="">
      <Heading.H2 className="mx-4 text-primary-one">Contact me</Heading.H2>
      <hr ref={hrElement} className="mt-2 mb-6 h-4" />
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
