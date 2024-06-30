"use client";
import { useState, useEffect, useRef } from "react";

export default function useMode() {
  const [currentTheme, setTheme] = useState("");
  const htmlDocument = useRef<HTMLElement | null>(null);

  function toggleTheme() {
    if (htmlDocument.current !== null) {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
      htmlDocument.current!.setAttribute("date-theme", currentTheme);
      localStorage.setItem("date-theme", currentTheme);
    }
  }
  useEffect(() => {
    htmlDocument.current = document.documentElement;
    const getTheme = localStorage.getItem("date-theme") ?? "light";

    htmlDocument.current!.setAttribute("date-theme", getTheme);
    setTheme(getTheme);
  }, []);
  return {
    currentTheme,
    toggleTheme,
  };
}
