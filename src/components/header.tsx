import { motion } from "motion/react";
import FlipLink from "./ui/flip-link";
import { anim } from "@/lib/utils";
import { Link } from "react-router-dom";
import avatar from "/ahmed-safwat.png";

const fadeDown = {
  initial: { opacity: 0, y: "-100%" },
  enter: { opacity: 1, y: 0 },
};

const Header = () => {
  return (
    <motion.header
      {...anim(fadeDown)}
      transition={{ delay: 1, duration: 0.3 }}
      className={`fixed flex items-center w-full min-h-[10vh] z-50 border-b border-primary backdrop-blur-md`}
    >
      <nav className="flex items-center justify-between container max-sm:px-2">
        <Link to={"/"}>
          <FlipLink className="overflow-hidden size-[8vh] rounded-xl">
            <img src={avatar} alt="my image" className="aspect-square" />
          </FlipLink>
        </Link>
        <ul className="flex gap-3 sm:gap-8 font-anton ">
          <Link to={"/work"}>
            <FlipLink>Work</FlipLink>
          </Link>
          <Link to={"/about"}>
            <FlipLink>about me</FlipLink>
          </Link>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
