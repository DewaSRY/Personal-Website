"use client";
import Headers from "./_containers/headers";

import Home from "./_containers/home";
import Works from "./_containers/works";
import Skills from "./_containers/skills";
import Project from "./_containers/project";
import Profile from "./_containers/profile";

import SmoothScroll from "@/components/smooth-scroll";
export default function Portfolio() {
  return (
    <SmoothScroll.Provider>
      <Headers />
      <main>
        <Home />
        <Works />
        <Skills />
        <Project />
        <Profile />
      </main>
    </SmoothScroll.Provider>
  );
}
