"use client";
import {
  HTMLAttributes,
  PropsWithChildren,
  createContext,
  useContext,
  useRef,
  ElementRef,
  useState,
  useEffect,
} from "react";

import DefaultContent from "./default-content";
import { cn } from "@/lib/utils";
import SkillSWrapper from "./skill-wrapper";

const SkillProviderContext = createContext({
  setCard: (_cardElement: HTMLElement) => {},
  indexActive: 0,
  handleIndexActive: (index: number) => {},
});

SkillProviderContext.displayName = " SkillProvider context";

interface ProviderProps
  extends HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {}
export default function Provider({ children }: ProviderProps) {
  const cardMap = useRef(new Map<number, HTMLElement>());
  const contentElement = useRef<ElementRef<"div">>(null);

  const [indexActive, setIndexActive] = useState(-1);

  function setCard(cardElement: HTMLElement) {
    const newIndex = cardMap.current.size;
    cardElement.setAttribute("card-number", newIndex.toString());
    cardMap.current.set(newIndex, cardElement);
  }

  function handleIndexActive(index: number) {
    const elementGetClick = cardMap.current!.get(index)! as HTMLDivElement;
    const body = elementGetClick.querySelector(".body")!;
    if (contentElement.current) {
      contentElement.current.innerHTML = body.innerHTML;
    }

    setIndexActive((prev) => (prev === index ? -1 : index));
  }
  useEffect(() => {
    return () => {
      cardMap.current.clear();
    };
  }, []);

  return (
    <SkillProviderContext.Provider
      value={{ setCard, indexActive, handleIndexActive }}
    >
      <SkillSWrapper className="relative z-[5] mx-auto my-4 w-11/12 h-full  py-4 px-4 bg-primary-one-alfa rounded-sm  xl:w-[1600px]  md:min-h-[400px] ">
        <div
          className={cn(
            `${indexActive !== -1 ? "block" : "hidden"}`,
            "min-h-[300px]"
          )}
          ref={contentElement}
        ></div>
        <DefaultContent className={indexActive !== -1 ? "hidden" : "block"} />
      </SkillSWrapper>
      {children}
    </SkillProviderContext.Provider>
  );
}
export function useSkillProvider() {
  const context = useContext(SkillProviderContext);

  if (!context) throw Error("use hook inside  SkillProvider provider");

  return context;
}
