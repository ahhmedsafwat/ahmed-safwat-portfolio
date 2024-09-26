import { Github, Linkedin, Mail } from "lucide-react";
import FlipLink from "./ui/flip-link";

const Footer = () => {
  return (
    <>
      <footer className="bg-black shadow-[0px_-20px_120px_0px,0px_5px_40px_20px] shadow-secondary min-h-14 flex items-center">
        <div className="container flex justify-between items-center">
          <div>
            <span className="text-xs font-noto">© Ahmed Safwat</span>
          </div>
          <div className="flex space-x-4 small:space-x-8 items-center">
            <a href="mailto:ahmedssafwatt@gmail.com" target="_blank">
              <FlipLink>
                <Mail strokeWidth={1.3} size={18} />
              </FlipLink>
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-safwat-54bb27220/"
              target="_blank"
            >
              <FlipLink>
                <Linkedin strokeWidth={1.3} size={18} />
              </FlipLink>
            </a>
            <a href="https://github.com/ahhmedsafwat" target="_blank">
              <FlipLink>
                <Github strokeWidth={1.3} size={18} />
              </FlipLink>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
