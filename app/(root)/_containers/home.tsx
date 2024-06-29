import { ComponentProps, PropsWithChildren } from "react";

import Heading from "@/components/common/heading";
interface HomeProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Home({ children, ...resProps }: HomeProps) {
  return (
    <section id="home">
      <div className="h-[100vh]">
        <Heading.H1>Home</Heading.H1>
      </div>
    </section>
  );
}
