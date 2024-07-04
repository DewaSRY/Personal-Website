import Headers from "./_containers/headers";

import Home from "./_containers/home";
import MyProfile from "./_containers/my-profile";
import MyExperience from "./_containers/my-experience";
import Footer from "./_containers/footer";

export default function Portfolio() {
  return (
    <>
      <Headers />
      <main className="bg-primary-one">
        <Home />
        <MyProfile />
        <MyExperience />
      </main>
      <Footer />
    </>
  );
}
