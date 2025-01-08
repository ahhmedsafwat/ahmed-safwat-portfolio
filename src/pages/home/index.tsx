import AboutMe from "@/components/home/layout/about-me";
import Hero from "@/components/home/layout/hero";
import HomeProjects from "@/components/home/layout/home-projects";
import ScrollingSkills from "@/components/home/layout/scrolling-skills";
import Transition from "@/lib/transition/transition";

export const Home = () => {
  return (
    <Transition>
      <Hero />
      <ScrollingSkills />
      <AboutMe />
      <HomeProjects />
    </Transition>
  );
};
