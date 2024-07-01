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
      <div className="relative mx-auto my-4 w-11/12 h-full  md:h-[400px] bg-primary-one-alfa rounded-sm ">
        <div className="flex justify-center items-center w-11/12 h-11/12 pt-4 pb-[4rem]">
          <div
            className={indexActive !== -1 ? "block" : "hidden"}
            ref={contentElement}
          ></div>
          <DefaultContent className={indexActive !== -1 ? "hidden" : "block"} />
        </div>

        <div className="absolute bottom-5 left-[50%] translate-x-[-50%]">
          {children}
        </div>
      </div>
    </SkillProviderContext.Provider>
  );
}
export function useSkillProvider() {
  const context = useContext(SkillProviderContext);

  if (!context) throw Error("use hook inside  SkillProvider provider");

  return context;
}
