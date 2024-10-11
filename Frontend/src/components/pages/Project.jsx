import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
const projects = [
  {
    title: "Dot-Blog",
    img: "./images/project/DotBlog.png",
    description: "Dot-Blog is a Bloging ",
    technologies: ["React", "Tailwind CSS", "Express", "MongoDB"],
    liveLink: "https://blogingdotblog.netlify.app/",
    repoLink: "https://github.com/Arjung352/BlogApp",
  },
  {
    title: "Taste Buds Treat",
    img: "./images/project/TasteBudsTreat.png",
    description: "A full-featured e-commerce platform built with MERN stack.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    repoLink: "https://github.com/Arjung352/TasteBudsTreat",
  },
  {
    title: "Task Tracker",
    img: "./images/project/Task Tracker.png",
    description:
      "Task Tracker is a task tracking webapp that allows you to create and manage tasks.",
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "React-Router",
      "Redux",
      "Tailwind CSS",
    ],
    liveLink: "https://startfinish.netlify.app  ",
    repoLink: "https://github.com/Arjung352/Task-Tracker",
  },
  // Add more projects as needed
];

function ProjectCard({ project }) {
  return (
    <div className=" shadow  shadow-white rounded-lg overflow-hidden max-h-svh transition  transform hover:scale-105 duration-300">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-lg rounded-lg  "></div>
      <div className="p-5 flex flex-col justify-between h-full relative z-10">
        <img
          src={project.img}
          className="max-h-full mb-4 max-w-full rounded-md m-auto block"
        />
        <h3 className="text-3xl font-bold  bg-clip-text font-salsa text-transparent bg-gradient-to-r from-gray-600 to-white mb-2">
          {project.title}
        </h3>
        <p className="text-white mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className=" text-white text-sm font-medium px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Live Demo
            </a>
          )}
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}

function Project() {
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
        className="relative flex flex-col h-svh justify-between overflow-hidden"
      >
        {/* Navbar */}
        <Navbar />
        <section id="projects" className=" pt-3 max-md:overflow-scroll">
          <div className=" px-5">
            <h2 className="text-5xl max-md:text-4xl max-md:pb-5 font-bold text-center pb-10  bg-clip-text font-salsa text-transparent bg-gradient-to-r from-gray-600 to-white">
              Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
          <Footer />
        </section>
      </motion.div>
    </div>
  );
}
export default Project;
