import { ComponentProps, PropsWithChildren } from "react";
import ContactIcon from "../_components/navigation/contact-icon";
import { cn } from "@/lib/utils";
interface SocialNavProps extends ComponentProps<"div">, PropsWithChildren {}

export default function SocialNav({
  children,
  className,
  ...resProps
}: SocialNavProps) {
  return (
    <div className={cn(className, "flex flex-col gap-2")}>
      <ContactIcon
        hrfTo="https://github.com/DewaSRY"
        imageSrc="/contact-icon/github.png"
        imageAlt="github"
      />
      <ContactIcon
        hrfTo="https://www.linkedin.com/in/dewa-surya/"
        imageSrc="/contact-icon/linkedin.png"
        imageAlt="linkedin"
      />
      <ContactIcon
        hrfTo="sdewa6645@gmail.com"
        imageSrc="/contact-icon/gmail.png"
        imageAlt="gmail"
      />
    </div>
  );
}
