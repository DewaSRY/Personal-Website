import Paragraph from "@/components/common/paragraph";
import { ComponentProps, PropsWithChildren } from "react";
import SocialCTA from "./social-cta";
import { cn } from "@/lib/utils";
interface FooterBottomProps extends ComponentProps<"div">, PropsWithChildren {}

export default function FooterBottom({
  children,
  ...resProps
}: FooterBottomProps) {
  return (
    <div
      className={cn(
        "w-full flex flex-col xl:flex-row px-2 gap-4 relative justify-between xl:items-center py-4 text-white-two",
        "border-t-2 border-primary-four"
      )}
    >
      <Paragraph.Bold>(c) Dewa surya ariesta 2024.</Paragraph.Bold>
      <div className="flex gap-2">
        <Paragraph.Description>Privacy Policy</Paragraph.Description>
        <Paragraph.Description>Terms & Conditions</Paragraph.Description>
      </div>
      <SocialCTA className="flex" />
    </div>
  );
}
