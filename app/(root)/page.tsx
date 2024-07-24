import Hero from "./_containers/hero";
import MySelfSection from "./_containers/my-self-section";
import MyWorkSection from "./_containers/my-work-section";
import MySkillSection from "./_containers/my-skill-section";
export default function HomeRoute() {
  return (
    <>
      <Hero />
      <MySelfSection />
      <MyWorkSection />
      <MySkillSection />
    </>
  );
}
