import html from "/assets/images/skills/html-5-svgrepo-com.svg";
import css from "/assets/images/skills/css-3-svgrepo-com.svg";
import js from "/assets/images/skills/js-official-svgrepo-com.svg";
import react from "/assets/images/skills/react-svgrepo-com.svg";
import framerMotion from "/assets/images/skills/framer-motion.svg";
import sass from "/assets/images/skills/sass-svgrepo-com.svg";
import tailwind from "/assets/images/skills/tailwind-svgrepo-com.svg";
import typescript from "/assets/images/skills/icons8-typescript.svg";
import nextjs from "/assets/images/skills/icons8-nextjs.svg";
import postgresql from "/assets/images/skills/postgresql.svg";
import supabase from "/assets/images/skills/icons8-supabase-240.svg";
import ScrollingSkillsComponent from "@/components/home/ui/scrolling-skills-component";

const skills = [
  { icon: html, name: "HTML" },
  { icon: css, name: "CSS" },
  { icon: js, name: "JavaScript" },
  { icon: typescript, name: "TypeScript" },
  { icon: react, name: "React" },
  { icon: nextjs, name: "Next.js" },
  { icon: tailwind, name: "Tailwind CSS" },
  { icon: sass, name: "Sass" },
  { icon: framerMotion, name: "Motion" },
  { icon: postgresql, name: "PostgreSQL" },
  { icon: supabase, name: "Supabase" },
];

const ScrollingSkills = () => {
  return (
    <section className="relative w-full overflow-hidden pt-28">
      <ScrollingSkillsComponent slides={skills} />
    </section>
  );
};

export default ScrollingSkills;
