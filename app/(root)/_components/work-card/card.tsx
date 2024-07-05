import {
  ComponentProps,
  PropsWithChildren,
  ElementRef,
  useRef,
  useEffect,
} from "react";
import { cn } from "@/lib/utils";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { workerData } from "worker_threads";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface CardProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Card({ children, className, ...resProps }: CardProps) {
  return (
    <div
      className={cn(
        "w-11/12 xl:w-[1000px] mx-auto  px-2 py-6 grid grid-cols-auto-fit-300 ",
        className
      )}
    >
      {children}
    </div>
  );
}
