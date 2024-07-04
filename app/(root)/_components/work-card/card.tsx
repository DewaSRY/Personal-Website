import {
  ComponentProps,
  PropsWithChildren,
  ElementRef,
  useRef,
  useEffect,
} from "react";
import { cn } from "@/lib/utils";

// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(useGSAP, ScrollTrigger);

interface CardProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Card({ children, className, ...resProps }: CardProps) {
  // const workContainer = useRef<HTMLElement>();
  // const workLayer = useRef<ElementRef<"div">>(null);
  // useEffect(() => {
  //   if (workLayer.current && workLayer.current.parentElement) {
  //     workContainer.current = workLayer.current.parentElement;
  //   }
  // }, []);
  // useGSAP(
  //   () => {
  //     gsap.to(workLayer.current, {
  //       x: 0,
  //       scale: 1,
  //       scrollTrigger: {
  //         trigger: workLayer.current,
  //         start: "-100 70%",
  //         end: "-100 bottom",
  //         scrub: true,
  //         // markers: true,
  //       },
  //     });
  //   },
  //   { scope: workContainer.current! }
  // );

  return (
    <div
      // ref={workLayer}
      className={cn(
        "w-11/12 xl:w-[1000px] mx-auto  px-2 py-6 grid grid-cols-auto-fit-300 ",
        className
      )}
    >
      {children}
    </div>
  );
}
