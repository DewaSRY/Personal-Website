import { ComponentProps, PropsWithChildren } from "react";
import Paragraph from "@/components/common/paragraph";
interface DescriptionProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Description({
  children,
  ...resProps
}: DescriptionProps) {
  return (
    <>
      <Paragraph.Description>{children}</Paragraph.Description>
      <hr className="my-2" />
    </>
  );
}
