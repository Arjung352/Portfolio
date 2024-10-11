import { motion } from "framer-motion";
import Navbar from "./Navbar";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import Footer from "./Footer";
import { useState } from "react";
import SkillCard from "./SkillCard";
const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-red-600" />, title: "Html" },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" />, title: "CSS" },
  {
    name: "Tailwind-CSS",
    icon: <RiTailwindCssFill className="text-blue-400" />,
    title: "Tailwind-CSS",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-500" />,
    title: "JAVASCRIPT",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-800" />,
    title: "GITHUB",
  },
  {
    name: "Git",
    icon: <FaGitAlt className=" text-red-500" />,
    title: "GIT",
  },
  {
    name: "React",
    icon: <FaReact className="text-blue-400" />,
    title: "REACT",
  },
  {
    name: "NodeJS",
    icon: <FaNodeJs className="text-green-600" />,
    title: "NODE-JS",
  },
  {
    name: "Express",
    icon: <SiExpress />,
    title: "EXPRESS",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600" />,
    title: "MongoDB",
  },
  {
    name: "Firebase",
    icon: <IoLogoFirebase className=" text-orange-400" />,
    title: "Firebase",
  },
];

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="h-svh w-full ">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col h-svh justify-between overflow-x-hidden"
      >
        {/* Navbar */}
        <Navbar />
        <section
          id="about"
          className="  text-white pt-3 overflow-hidden max-md:py-0 max-md:pt-4 max-md:overflow-scroll font-work"
        >
          {/* Hero Section */}
          <div className="flex flex-col items-center text-center max-md:px-4">
            <h1 className="text-4xl max-md:text-2xl font-bold pb-3 max-md:pb-2 bg-clip-text font-salsa text-transparent bg-gradient-to-r from-gray-600 to-white">
              Hello, I'm Arjun Gupta
            </h1>
            <h2 className="text-2xl max-md:text-xl text-gray-400 max-md:mb-2 mb-4">
              MERN Stack Developer & Tech Enthusiast
            </h2>
            <p className="text-lg max-w-3xl max-md:text-sm mx-auto">
              Passionate about building innovative solutions that bridge the gap
              between technology and user experience. With a strong foundation
              in web development and a knack for problem-solving, I’m always
              eager to tackle new challenges. Dedicated to continuous learning
              and staying up-to-date with the latest industry trends.
            </p>
          </div>

          {/* Skills Overview */}
          <div className="mt-10 max-md:mt-4 flex flex-col justify-between items-center">
            <h2 className="text-4xl max-md:text-2xl font-bold mb-8 text-center bg-clip-text  text-transparent bg-gradient-to-r from-gray-600 to-white">
              Skills & Expertise
            </h2>
            <div className="flex gap-5 flex-wrap w-3/4 max-md:gap-0 max-md:w-3/4 justify-between">
              {skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Professional Journey */}

          {/* Personal Story */}
          <div className="mt-12 mb-4 max-md:mt-6 max-md:px-4">
            <h2 className="text-4xl max-md:text-2xl max-md:mb-3 font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-white text-center">
              A Bit More About Me
            </h2>
            <p className="text-lg max-w-3xl max-md:text-sm mx-auto text-center">
              Over the years, I have honed my skills in web development,
              embracing challenges and continually learning. When I'm not
              coding, you'll find me exercising, sipping coffee, exploring new
              technologies, or sharing knowledge within the tech community.
            </p>
          </div>

          {/* Contact & Call to Action */}
          <Footer />
        </section>
      </motion.div>
    </div>
  );
};

export default About;
