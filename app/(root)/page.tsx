import Headers from "./_containers/headers";

import Home from "./_containers/home";
import Works from "./_containers/works";
import Project from "./_containers/project";
import MyProfile from "./_containers/my-profile";
export default function Portfolio() {
  return (
    <>
      <Headers />
      <main className="bg-primary-one mb-[-5px]">
        <Home />
        <MyProfile />
      </main>
      <footer className="h-[300px] bg-footer "></footer>
    </>
  );
}
