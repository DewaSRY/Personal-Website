import { ComponentProps, PropsWithChildren } from "react";
import Heading from "@/components/common/heading";
import Parallax from "../_components/parallax";
interface ProfileProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Profile({ children, ...resProps }: ProfileProps) {
  return (
    <section id="profile" className="min-h-[100vh]    ">
      <Parallax />
    </section>
  );
}
