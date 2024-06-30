"use client";

import {
  ComponentProps,
  ElementRef,
  PropsWithChildren,
  useEffect,
  useRef,
} from "react";
import Image from "next/image";
import Paragraph from "@/components/common/paragraph";
import { cn } from "@/lib/utils";
import { useSkillProvider } from "./skill-provider";
interface CardIconProps extends ComponentProps<"div">, PropsWithChildren {
  imageSrc: string;
  imageAlter: string;
}

export default function CardIcon({
  children,
  imageSrc,
  imageAlter,
  ...resProps
}: CardIconProps) {
  const { handleIndexActive, setCard, indexActive } = useSkillProvider();
  const currentElement = useRef<ElementRef<"div">>(null);
  const parentElementIndex = useRef<number>(0);

  useEffect(() => {
    if (currentElement.current) {
      const parent = currentElement.current.parentElement as HTMLDivElement;
      parentElementIndex.current = Number(parent.getAttribute("card-number"));
    }
  }, []);

  return (
    <div
      ref={currentElement}
      //   disabled={parentElementIndex.current == indexActive}
      role="button"
      className={cn(
        "flex flex-col items-center p-4 bg-primary-one-beta rounded-lg border-2 border-transparent cursor-pointer",
        "hover:border-primary-one hover:bg-transparent",
        `${
          parentElementIndex.current == indexActive &&
          "border-primary-one bg-transparent "
        }`
      )}
    >
      <Image src={imageSrc} alt={imageAlter} width={50} height={50} />
      <Paragraph.Description>{imageAlter}</Paragraph.Description>
    </div>
  );
}
