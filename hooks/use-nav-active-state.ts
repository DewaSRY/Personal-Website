/**
 * This hooks use to observe in-views section,
 * if the section in view the hooks will return the id name of the section
 */
import { useEffect, useState } from "react";

// Custom Hook
function useSectionObserver() {
  const [sections, setSections] = useState<string>("");

  useEffect(() => {
    const allSections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        const inViews = entries.find((e) => e.isIntersecting);
        if (inViews) {
          setSections(inViews.target.id);
        }
      },
      {
        threshold: 0.3, // 30 % of element need to be visible
      }
    );

    allSections.forEach((section) => {
      observer.observe(section);
    });
    return () => {
      allSections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return sections;
}

export default useSectionObserver;
