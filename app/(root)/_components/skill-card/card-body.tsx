"use client";

import {
  ComponentProps,
  ElementRef,
  PropsWithChildren,
  useEffect,
  useRef,
} from "react";

import { cn } from "@/lib/utils";
interface CardBodyProps extends ComponentProps<"div">, PropsWithChildren {}

export default function CardBody({ children, ...resProps }: CardBodyProps) {
  const currentElement = useRef<ElementRef<"div">>(null);
  const parentElementIndex = useRef<number>(0);

  useEffect(() => {
    if (currentElement.current) {
      const parent = currentElement.current.parentElement as HTMLDivElement;
      parentElementIndex.current = Number(parent.getAttribute("card-number"));
    }
  }, []);

  return (
    <div ref={currentElement} className={cn("hidden body")}>
      <div>{children}</div>
    </div>
  );
}
