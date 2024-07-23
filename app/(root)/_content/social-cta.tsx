/**
 * Social CTA is an links, use to connect to my social media
 */

import ContactIcon from "../_components/navigation/contact-icon";
import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";

interface SocialCTAProps extends ComponentProps<"div">, PropsWithChildren {}

export default function SocialCTA({
  children,
  className,
  ...resProps
}: SocialCTAProps) {
  return (
    <div className={cn(className)}>
      <ContactIcon
        hrfTo="sdewa6645@gmail.com"
        imageSrc="/socials-icons/gmail.png"
        imageAlt="gmail"
      />
      <ContactIcon
        hrfTo="https://www.linkedin.com/in/dewa-surya/"
        imageSrc="/socials-icons/linkedin.png"
        imageAlt="linkedin"
      />
      <ContactIcon
        hrfTo="https://github.com/DewaSRY"
        imageSrc="/socials-icons/github.png"
        imageAlt="github"
      />
    </div>
  );
}
