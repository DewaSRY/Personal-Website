import { ComponentProps, PropsWithChildren } from "react";
import { Copyright } from "lucide-react";
import Heading from "@/components/common/heading";
import Paragraph from "@/components/common/paragraph";

interface FooterProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Footer({ children, ...resProps }: FooterProps) {
  return (
    <footer className="pt-[50px] pb-[300px] bg-primary-three ">
      <div className="max-w-[1200px] mx-auto mt-10">
        <Heading.H2 className="text-primary-one">
          <Copyright className="inline-block mr-2" />
          Dewa Surya Ariesta
        </Heading.H2>
        <hr />
        <Paragraph.Description className="text-primary-one">
          NTT, Indonesia
        </Paragraph.Description>
      </div>
    </footer>
  );
}
