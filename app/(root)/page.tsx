import Hero from "./_containers/hero";
import MySelfSection from "./_components/my-self-section";
import MySkillSection from "./_containers/my-skill-section";
export default function HomeRoute() {
  return (
    <>
      <Hero />
      <MySelfSection />
      <MySkillSection />
    </>
  );
}
