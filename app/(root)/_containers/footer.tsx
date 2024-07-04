import { ComponentProps, PropsWithChildren } from "react";
import ContactContent from "../_content/contact-content";

interface FooterProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Footer({ children, ...resProps }: FooterProps) {
  return (
    <footer className="pt-[50px] pb-[300px] bg-primary-three ">
      <div className="max-w-[1200px] mx-auto mt-10">
        <ContactContent />
      </div>
    </footer>
  );
}
