import AboutMeComponent from "../ui/text-gradiant-opacity";

const AboutMe = () => {
  const about = [
    "Hello! I’m Ahmed, a front-end developer. I have been honing my skills in front-end development for a year, during which I’ve built numerous websites using React and NextJs.",
    "My journey in tech began with front-end development, but I spent a year exploring Flutter. Although Flutter was an exciting experience, I realized my true passion lies in front-end development. This prompted me to return to my roots and continue building my expertise in this field.",
    //   "As a self-taught developer, I take pride in continuously learning and improving my craft. I thrive on challenges and enjoy turning complex problems into simple, beautiful, and intuitive designs.",
  ];
  return (
    <section className="container max-sm:px-2 py-32 relative">
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
