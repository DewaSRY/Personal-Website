import { ComponentProps, PropsWithChildren } from "react";
import Heading from "@/components/common/heading";
interface ProfileProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Profile({ children, ...resProps }: ProfileProps) {
  return (
    <section id="profile">
      <div className="h-[100vh]">
        <Heading.H1>Profile</Heading.H1>
      </div>
    </section>
  );
}
