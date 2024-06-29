"use client";
import { useState, useEffect, useRef } from "react";

export default function useMode() {
  const [currentTheme, setTheme] = useState("");
  const htmlDocument = useRef<HTMLElement | null>(null);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    htmlDocument.current!.setAttribute("date-theme", currentTheme);
    console.log("hallo");
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
