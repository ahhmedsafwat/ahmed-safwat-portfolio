import { motion } from "framer-motion";
import FlipLink from "./ui/flip-link";
import { anim } from "@/lib/utils";
import { Link } from "react-router-dom";

const fadeDown = {
  initial: { opacity: 0, y: "-100%" },
  enter: { opacity: 1, y: 0 },
};

const Header = () => {
  return (
    <motion.header
      {...anim(fadeDown)}
      transition={{ delay: 1, duration: 0.3 }}
      className={`fixed flex items-center  w-full min-h-[10vh] z-20 border-b border-primary backdrop-blur-md`}
    >
      <nav className="flex items-start justify-between w-full container px-2 sm:px-8 ">
        <Link to={"/"}>
          <FlipLink className="overflow-hidden font-anton">
            ahmed safwat
          </FlipLink>
        </Link>
        <ul className="flex gap-3 sm:gap-8 font-anton ">
          <Link to={"/work"}>
            <FlipLink>Work</FlipLink>
          </Link>
          <Link to={"/about"}>
            <FlipLink>about me</FlipLink>
          </Link>
          <Link to={"/about"}>
            <FlipLink>contact</FlipLink>
          </Link>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
