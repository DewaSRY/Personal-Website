import Headers from "./_containers/headers";

import Home from "./_containers/home";
import MyProfile from "./_containers/my-profile";
import MyExperience from "./_containers/my-experience";
export default function Portfolio() {
  return (
    <>
      <Headers />
      <main className="bg-primary-one mb-[-5px]">
        <Home />
        <MyProfile />
        <MyExperience />
      </main>
      <footer className="h-[300px] bg-primary-three "></footer>
    </>
  );
}
