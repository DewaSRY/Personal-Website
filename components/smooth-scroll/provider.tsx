import {
  FC,
  HTMLAttributes,
  PropsWithChildren,
  createContext,
  useContext,
  ElementRef,
  useRef,
} from "react";

const indexContext = createContext({
  setSection: (
    _sectionName: string,
    _sectionElement: ElementRef<"section">
  ) => {},
  scrollTo: (_sectionName: string) => {},
});

indexContext.displayName = " smooth scroll section";

interface ProviderProps extends HTMLAttributes<HTMLDivElement> {}
type ProviderComponents = FC<ProviderProps> & PropsWithChildren;

const Provider: ProviderComponents = ({ children }) => {
  const elementsMap = useRef(new Map<string, ElementRef<"section">>());

  function setSection(
    sectionName: string,
    sectionElement: ElementRef<"section">
  ) {
    if (elementsMap.current) {
      elementsMap.current.set(sectionName, sectionElement);
    }
  }

  function scrollTo(sectionName: string) {
    if (elementsMap.current) {
      const sectionElement = elementsMap.current.get(sectionName);
      if (sectionElement) {
        sectionElement.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }
  return (
    <indexContext.Provider
      value={{
        setSection,
        scrollTo,
      }}
    >
      {children}
    </indexContext.Provider>
  );
};

export function useProvider() {
  const context = useContext(indexContext);
  if (!context) throw Error("use hook inside  smooth scroll  provider");
  return context;
}

export default Provider;
