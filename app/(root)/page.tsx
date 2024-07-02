"use client";
import Headers from "./_containers/headers";

import Home from "./_containers/home";
import Works from "./_containers/works";
import Skills from "./_containers/skills";
import Project from "./_containers/project";
import Profile from "./_containers/profile";
import Moon from "./_components/moon";
export default function Portfolio() {
  return (
    <>
      <Headers />
      <main className="bg-main-bg mb-[-5px]">
        <Moon />
        <Home />
        <Works />
        <Skills />
        <Project />
        <Profile />
      </main>
      <footer className="h-[300px] bg-footer "></footer>
    </>
  );
}
