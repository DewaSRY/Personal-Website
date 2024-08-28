import { ComponentProps, PropsWithChildren } from "react";
import SocialIcon from "./social-icon";
import { cn } from "@/lib/utils";

interface SocialContainerProps
  extends ComponentProps<"div">,
    PropsWithChildren {}

const socialLink = [
  {
    imageAlt: "github",
    imageSrc: "/socials-icons/github.png",
    socialLink: "/",
  },
  {
    imageAlt: "gmail",
    imageSrc: "/socials-icons/gmail.png",
    socialLink: "/",
  },
  {
    imageAlt: "linkedin",
    imageSrc: "/socials-icons/linkedin.png",
    socialLink: "/",
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
