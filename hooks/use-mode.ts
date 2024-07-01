"use client";
import { useState, useEffect, useRef } from "react";

export default function useMode() {
  const [currentTheme, setTheme] = useState<"light" | "dark">("light");
  const htmlDocument = useRef<HTMLElement | null>(null);

  function setLayerImage(currentTheme: "light" | "dark") {
    const layerFive = document.getElementById("five-layer") as HTMLDivElement;
    const imageSrc =
      currentTheme === "dark"
        ? "/parallax/forest_layer_5-dark.png"
        : "/parallax/forest_layer_5.png";
    // layerFive.style.setProperty("background-image", `src(${imageSrc}) !import`);
    layerFive.setAttribute(
      "style",
      `
      background-image: url(${imageSrc}); background-size: cover; background-repeat: no-repeat; width: 100%; height: 782px; translate: none; rotate: none; scale: none; transform: translate(0px, 39.1px);
      `
    );
    console.log(layerFive);
  }

  function toggleTheme() {
    if (htmlDocument.current !== null) {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
      htmlDocument.current!.setAttribute("date-theme", currentTheme);
      localStorage.setItem("date-theme", currentTheme);
      setLayerImage(currentTheme);
    }
  }
  useEffect(() => {
    htmlDocument.current = document.documentElement;
    const getTheme = localStorage.getItem("date-theme") ?? "light";

    htmlDocument.current!.setAttribute("date-theme", getTheme);
    setTheme(getTheme as "light" | "dark");
    setLayerImage(getTheme as "light" | "dark");
  }, []);
  return {
    currentTheme,
    toggleTheme,
  };
}
