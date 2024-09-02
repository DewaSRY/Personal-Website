import { ComponentProps, PropsWithChildren } from "react";
import SocialIcon from "./social-icon";
import { cn } from "@/lib/utils";

interface SocialContainerProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

const socialLink = [
  {
    imageAlt: "what app",
    imageSrc: "/socials-icons/whatsapp-logo.png",
    socialLink: "https://wa.me/0812 6811 1563",
  },
  {
    imageAlt: "linkedin",
    imageSrc: "/socials-icons/linkedin.png",
    socialLink: "https://www.linkedin.com/in/dewa-surya/",
  },
  {
    imageAlt: "gmail",
    imageSrc: "/socials-icons/gmail.png",
    socialLink:
      "https://mail.google.com/mail/?view=cm&fs=1&to=sdewa6645@gmail.com",
  },

  {
    imageAlt: "github",
    imageSrc: "/socials-icons/github.png",
    socialLink: "https://github.com/DewaSRY",
  },
];

export default function SocialContainer({
  children,
  className,
  ...resProps
}: SocialContainerProps) {
  return (
    <div className={cn(className, "")}>
      {socialLink.map((social, id) => (
        <SocialIcon
          key={id}
          imageAlt={social.imageAlt}
          imageSrc={social.imageSrc}
          socialLink={social.socialLink}
          className=""
        />
      ))}
    </div>
  );
}
