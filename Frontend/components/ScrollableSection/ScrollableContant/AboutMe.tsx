import React from "react";

function AboutMe() {
  const aboutMeArray = [
    "I’m passionate about building innovative solutions that seamlessly bridge technology and user experience. With a strong foundation in web development and a problem-solving mindset, I enjoy turning complex challenges into simple, effective solutions. I’m driven by curiosity and a commitment to continuous learning, always staying up to date with the latest industry trends and best practices.",
    "I’m currently diving deep into DevOps to master reliable and scalable software deployment, while also strengthening my Data Structures & Algorithms skills to build efficient, high-performance applications. My goal is to design systems that are not only functional but also scalable and resilient.",
    "Over the years, I’ve honed my web development skills by embracing challenges and learning through hands-on experience. When I’m not coding, you’ll find me exercising, enjoying a good cup of coffee, exploring new technologies, or sharing knowledge within the tech community.",
  ];
  return (
    <div className="mb-8">
      <section id="About Me">
        <h2 className="text-3xl font-bold mb-6 text-gray-100">About Me</h2>
        {aboutMeArray.map((about, index) => (
          <p key={index} className="text-gray-300 mb-4">
            {about}
          </p>
        ))}
      </section>
    </div>
  );
}

export default AboutMe;
