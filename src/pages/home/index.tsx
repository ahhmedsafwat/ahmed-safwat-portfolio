import AboutMe from "@/components/home/layout/about-me";
import Hero from "@/components/home/layout/hero";
import HomeProject from "@/components/home/layout/home-project";
import ScrollingSkills from "@/components/home/layout/scrolling-skills";
import Transition from "@/lib/transition/transition";

export const Home = () => {
  return (
    <Transition>
      <Hero />
      <AboutMe />
      <HomeProject />
      <ScrollingSkills />
    </Transition>
  );
};
