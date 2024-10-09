import html from "/assets/images/skills/html-5-svgrepo-com.svg";
import css from "/assets/images/skills/css-3-svgrepo-com.svg";
import react from "/assets/images/skills/react-svgrepo-com.svg";
import js from "/assets/images/skills/js-official-svgrepo-com.svg";
import framerMotion from "/assets/images/skills/framer-motion.svg";
import mongoDb from "/assets/images/skills/mongodb-svgrepo-com.svg";
import sass from "/assets/images/skills/sass-svgrepo-com.svg";
import tailwind from "/assets/images/skills/tailwind-svgrepo-com.svg";
import gitHub from "/assets/images/skills/github-svgrepo-com.svg";
import ScrollingSkillsComponent from "@/components/home/ui/scrolling-skills-component";
// import SectionTitle from "@/components/ui/section-title";
const slides = [
  { icon: html },
  { icon: css },
  { icon: js },
  { icon: react },
  { icon: tailwind },
  { icon: sass },
  { icon: framerMotion },
  { icon: mongoDb },
  { icon: gitHub },
];
const ScrollingSkills = () => {
  return (
    <section>
      <ScrollingSkillsComponent slides={slides} />
    </section>
  );
};

export default ScrollingSkills;
