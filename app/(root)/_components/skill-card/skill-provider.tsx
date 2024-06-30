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

  //   const iconList = useRef(new Map<string, string>());

  const [indexActive, setIndexActive] = useState(0);

  function setCard(cardElement: HTMLElement) {
    const newIndex = cardMap.current.size;
    cardElement.setAttribute("card-number", newIndex.toString());
    cardMap.current.set(newIndex, cardElement);
  }

  function handleIndexActive(index: number) {
    // }
    const elementGetClick = cardMap.current!.get(index)! as HTMLDivElement;
    const body = elementGetClick.querySelector(".body")!;
    if (contentElement.current) {
      contentElement.current.innerHTML = body.innerHTML;
    }

    setIndexActive(index);
  }
  useEffect(() => {
    const elementGetClick = cardMap.current!.get(
      indexActive
    )! as HTMLDivElement;
    if (elementGetClick) {
      const body = elementGetClick.querySelector(".body")!;
      if (contentElement.current) {
        contentElement.current.innerHTML = body.innerHTML;
      }
    }

    return () => {
      cardMap.current.clear();
    };
  }, []);

  return (
    <SkillProviderContext.Provider
      value={{ setCard, indexActive, handleIndexActive }}
    >
      <div className="relative mx-auto my-4 w-11/12 h-[600px] bg-primary-one-alfa rounded-sm ">
        <div
          ref={contentElement}
          className="flex justify-center items-center w-11/12 h-11/12 py-4"
        >
          See all my skill
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
