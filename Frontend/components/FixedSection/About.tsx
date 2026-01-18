import Image from "next/image";
import axios from "axios";
function About() {
  return (
    <main>
      {/* Header containing info */}
      <header>
        <Image
          src="https://res.cloudinary.com/dzrjja888/image/upload/v1764665853/DPZommed_jhtz9i.jpg"
          alt="Arjun Gupta - Full Stack Developer"
          className="rounded-full overflow-hidden"
          height={200}
          width={200}
          priority
        />
        <h1 className=" text-4xl font-bold my-3">Arjun Gupta</h1>
        <h2 className="text-xl text-gray-400 mb-4">Full Stack Web Developer</h2>
        <h3 className="text-lg text-gray-400 mb-4">📍 NEW Delhi, DELHI IN</h3>
        <p className="text-gray-300 text-sm">
          Software Engineer | DevOps Learner | Building Scalable Applications
        </p>
      </header>
      {/* contain the resume aswell as social links */}
      <div className="mt-5">
        <div className="flex items-center space-x-3">
          <a
            href="https://portfolio-api-sigma-umber.vercel.app/resume"
            download="Arjun_Gupta_Resume.pdf"
            className="flex items-center py-1 px-2 gap-2 border border-white rounded
             hover:text-black hover:bg-white transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-file-earmark-arrow-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0" />
            </svg>
            Resume
          </a>
          <a
            href="https://github.com/Arjung352/"
            target="_Blank"
            className=" hover:text-white text-gray-400 transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </a>
          <a
            href="mailto:arjung.dev29@gmail.com"
            target="_Blank"
            className=" hover:text-white text-gray-400 transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="currentColor"
              className="bi bi-envelope-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/arjun-gupta-948b11291/"
            target="_Blank"
            className=" hover:text-white text-gray-400 transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>
          <a
            href="https://x.com/_arjungupta29"
            target="_Blank"
            className=" hover:text-white text-gray-400 transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="currentColor"
              className="bi bi-twitter-x"
              viewBox="0 0 16 16"
            >
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
          </a>
        </div>
      </div>
      <div className="my-4">
        <section>
          <h2 className="text-2xl font-bold mb-6">Want to Work Together?</h2>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors">
            Get in Touch
          </button>
        </section>
      </div>
    </main>
  );
}

export default About;
