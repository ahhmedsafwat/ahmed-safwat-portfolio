// import SectionTitle from "@/components/ui/section-title";
import AboutMeComponent from "../../ui/text-gradiant-opacity";
import "./layout.module.scss";

const AboutMe = () => {
  const about = [
    "Hello! I’m Ahmed, a passionate front-end developer dedicated to creating stunning and functional websites. I have been honing my skills in front-end development for a year, during which I’ve built numerous websites using React and various popular libraries like Redux and React Query.",
    //   "My journey in tech began with front-end development, but I spent a year exploring Flutter. Although Flutter was an exciting experience, I realized my true passion lies in front-end development. This prompted me to return to my roots and continue building my expertise in this field.",
    //   "As a self-taught developer, I take pride in continuously learning and improving my craft. I thrive on challenges and enjoy turning complex problems into simple, beautiful, and intuitive designs.",
  ];
  return (
    <section className="container px-2 sm:px-8 py-32 relative">
      {/* <SectionTitle title={"About Me"} className="" /> */}
      <hr className="my-20" />
      <div>
        {about.map((val, i) => (
          <AboutMeComponent key={i} words={val} />
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
