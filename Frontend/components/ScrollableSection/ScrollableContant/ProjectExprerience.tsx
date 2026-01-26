function ProjectExprerience() {
  const projects = {
    tasteBudsTreat: {
      title: "Taste Buds Treat – E-commerce Web Application",
      type: "E-commerce Web Application",
      url: "https://taste-buds-treat.vercel.app",
      image:
        "https://res.cloudinary.com/dzrjja888/image/upload/v1769271736/taste-buds-treat.vercel.app__1_y847bx.png",
      skills: [
        "React",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Clerk Authentication",
        "Razorpay",
        "Nodemailer",
        "REST APIs",
        "Redux",
      ],
      details: [
        "Engineered a full-stack food ordering platform using the MERN stack with dynamic menu management and cart functionality.",
        "Implemented a secure payment workflow using Razorpay Webhooks to verify transactions, reducing failed order states by 99% and ensuring data integrity.",
        "Integrated Clerk Authentication to enable secure session handling and role-based access control (RBAC) for users and admins.",
        "Built an admin dashboard to visualize real-time sales metrics and live order status updates.",
        "Automated order confirmation and notification workflows using Nodemailer to send instant transactional emails.",
      ],
    },

    shortify: {
      title: "Shortify – URL Shortener Micro-SaaS",
      type: "URL Shortener Micro-SaaS",
      url: "https://dacoidlinkshortner.netlify.app",
      image:
        "https://res.cloudinary.com/dzrjja888/image/upload/v1769271493/dacoidlinkshortner.netlify.app__1_ry1la4.png",
      skills: [
        "React",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Authentication",
        "QR Code Generation",
        "Data Analytics",
        "Redux",
      ],
      details: [
        "Architected a high-performance URL shortening service with instant redirection and QR code generation.",
        "Designed a custom analytics engine to track geolocation, device types, and click timestamps using interactive visualizations.",
        "Optimized database schemas to support efficient pagination and high-volume, user-specific link tracking.",
        "Secured user data with JWT authentication, ensuring private access to personal link history and analytics dashboards.",
      ],
    },

    dotBlog: {
      title: "DotBlog – Blogging Platform",
      type: "Blogging Platform",
      url: "https://blogingdotblog.netlify.app",
      image:
        "https://res.cloudinary.com/dzrjja888/image/upload/v1769271558/blogingdotblog.netlify.app_home_cgluzz.png",
      skills: [
        "React",
        "JavaScript",
        "Markdown Editor",
        "Cloudinary",
        "Performance Optimization",
        "Responsive Design",
        "Pagination",
        "ExpressJS",
      ],
      details: [
        "Built a full-featured blogging platform allowing users to create, edit, and manage rich-text content using an integrated Markdown editor.",
        "Improved Core Web Vitals by implementing lazy loading and Cloudinary image optimization, reducing initial page load time by ~55% (2.5s → 1.05s).",
        "Implemented advanced content filtering using tags, categories, and keyword-based search for improved content discovery.",
        "Designed a responsive and accessible UI to ensure seamless readability across mobile and desktop devices.",
      ],
    },
  };

  return (
    <div className="mb-10 opacity-[1] transform-none">
      <section id="Projects" className="relative ">
        <h2 className="text-3xl font-bold mb-6 text-gray-100">
          Project Experience
        </h2>
        <ul className="space-y-12 relative z-0">
          {Object.entries(projects).map(([key, project], index) => (
            <li
              key={key}
              className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6 flex flex-col justify-center">
                  <img
                    alt={project.type}
                    loading="lazy"
                    decoding="async"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                    src={project.image}
                  />
                </div>

                {/* Content */}
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-100">
                    {project.title}
                  </h3>

                  {/* Details */}
                  <ul className="space-y-2 text-gray-300 mb-4">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 mt-1.5 text-gray-500">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-block px-3 py-1.5 text-xs font-medium rounded-full bg-green-500/20 text-green-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="flex space-x-4 mt-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center font-semibold text-gray-300 hover:text-white transition-colors mx-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-box-arrow-up-right mr-2"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                        />
                        <path
                          fillRule="evenodd"
                          d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                        />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default ProjectExprerience;
