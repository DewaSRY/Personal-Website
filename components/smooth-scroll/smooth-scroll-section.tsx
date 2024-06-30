import {
  ComponentProps,
  PropsWithChildren,
  useRef,
  useEffect,
  ElementRef,
} from "react";

import { useProvider } from "./provider";
import { cn } from "@/lib/utils";
interface SmoothScrollSectionProps
  extends ComponentProps<"div">,
    PropsWithChildren {
  sectionName: string;
}

export default function SmoothScrollSection({
  children,
  sectionName,
  ...resProps
}: SmoothScrollSectionProps) {
  const sectionRef = useRef<ElementRef<"section">>(null);
  const { setSection } = useProvider();

  useEffect(() => {
    if (sectionRef.current) {
      setSection(sectionName, sectionRef.current);
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id={sectionName}
      className={cn(resProps.className)}
      {...resProps}
    >
      {children}
    </section>
  );
}
