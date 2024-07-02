"use client";

import {
  ComponentProps,
  ElementRef,
  PropsWithChildren,
  useEffect,
  useRef,
} from "react";
import { useSkillProvider } from "./skill-provider";

interface CardProps extends ComponentProps<"div">, PropsWithChildren {}

export default function Card({ children, ...resProps }: CardProps) {
  const { handleIndexActive, setCard } = useSkillProvider();
  const currentElement = useRef<ElementRef<"div">>(null);

  useEffect(() => {
    if (currentElement.current) {
      setCard(currentElement.current);
    }
  }, []);

  function handleClick() {
    if (currentElement.current) {
      handleIndexActive(
        Number(currentElement.current.getAttribute("card-number"))
      );
    }
  }
  return (
    <div ref={currentElement} onClick={handleClick}>
      {children}
    </div>
  );
}
