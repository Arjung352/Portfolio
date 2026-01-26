import Image from "next/image";

function Certification() {
  const certifications = {
    SoftwareEngineer: {
      title: "Software Engineer Certification",
      provider: "HackerRank",
      url: "https://www.hackerrank.com/certificates/iframe/bd668052851c",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAWlBMVEUNFB4A6mT///8AAAANEh4NABwA62QNABoADBgEDhoNABg0OD8ImkgA72YFv1UnLDIAABC4ubvCw8Xv7/AAAAj29vaPkZOcnaAAABIKdjsHnkmztLW+v8ESGSLs8eGCAAAA/0lEQVR4nO3cOQ7CMBBAUcDsENaEnftfkwYapkEWCsR6r80U/nIVR3GvBwAAAAAAAAAAAAAAAAAAANCeYZ62ljdLm3d1nKrDUJq9no0yTVoKvDeDd4eQmI5haH96BZ6rfo7xpZ3E6SKsfbBNoXAXp9bPTZxcqnGOajXvSuEybw8VKlSoUKFChQoVKlSoUKFChQoVKlSoUOHvC68puJVV2OyD+HGj04WfUahQoUKFChUqVKhQoUKFCrteWP47fvnnNOWftSlUqFChQoUKFSpUqFChQoUKFSpUqFChwqzCP/8fv/w7Fcq/F+Mb/vxuEwAAAAAAAAAAAAAAAAAAAKDTHoDCYDr8qkOBAAAAAElFTkSuQmCC",
      skills: [
        "React",
        "JavaScript",
        "Node.js",
        "Express.js",
        "SQL",
        "REST APIs",
        "Problem Solving",
        "Java",
      ],
      date: "January 2026",
    },
    FrontEndDeveloper: {
      title: "Frontend Developer (React) Certification",
      provider: "HackerRank",
      url: "https://www.hackerrank.com/certificates/iframe/a6e69aa8d4d6",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAWlBMVEUNFB4A6mT///8AAAANEh4NABwA62QNABoADBgEDhoNABg0OD8ImkgA72YFv1UnLDIAABC4ubvCw8Xv7/AAAAj29vaPkZOcnaAAABIKdjsHnkmztLW+v8ESGSLs8eGCAAAA/0lEQVR4nO3cOQ7CMBBAUcDsENaEnftfkwYapkEWCsR6r80U/nIVR3GvBwAAAAAAAAAAAAAAAAAAANCeYZ62ljdLm3d1nKrDUJq9no0yTVoKvDeDd4eQmI5haH96BZ6rfo7xpZ3E6SKsfbBNoXAXp9bPTZxcqnGOajXvSuEybw8VKlSoUKFChQoVKlSoUKFChQoVKlSoUOHvC68puJVV2OyD+HGj04WfUahQoUKFChUqVKhQoUKFCrteWP47fvnnNOWftSlUqFChQoUKFSpUqFChQoUKFSpUqFChwqzCP/8fv/w7Fcq/F+Mb/vxuEwAAAAAAAAAAAAAAAAAAAKDTHoDCYDr8qkOBAAAAAElFTkSuQmCC",
      skills: [
        "React",
        "JavaScript",
        "Object-Oriented Programming (OOP)",
        "Cascading Style Sheets (CSS)",
      ],
      date: "January 2026",
    },
    CloudandVirtualizationConcepts: {
      title: "Cloud and Virtualization Concepts",
      provider: "VMWARE",
      url: "https://www.credly.com/badges/c3455e09-75a3-472f-a939-92a582fdf366",
      image:
        "data:image/jpeg;base64,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",
      skills: [
        "Cloud",
        "Hypervisor",
        "IaaS",
        "PaaS",
        "Private Cloud",
        "Public Cloud",
        "SaaS",
        "Snapshots",
        "Storage",
        "Vcenter",
        "Virtualization",
      ],
      date: "September 2025",
    },
    WebDevelopmentCertification: {
      title: "Web Development Proffesional Certification",
      provider: "Institute of Management Technology and Finance,Portugal",
      url: "https://edu.gtf.pt/pluginfile.php/1/tool_certificate/issues/1719237559/1977400114AG.pdf",
      image:
        "data:image/jpeg;base64,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",
      skills: [
        "React",
        "JavaScript",
        "Object-Oriented Programming (OOP)",
        "Cascading Style Sheets (CSS)",
        "Web Development",
        "Full-Stack Development",
      ],
      date: "June 2025",
    },
  };
  return (
    <div>
      <section id="Certification">
        <h2 className="text-3xl font-bold mb-6 text-gray-100">Certification</h2>
        <ul className="space-y-12 ">
          {Object.entries(certifications).map(([key, certificate], index) => (
            <li
              key={key}
              className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600"
            >
              <div className="flex items-start mb-2">
                <div className="bg-[#111111] rounded-full pl-0.5 pt-0.5 mr-4 w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    width={80}
                    height={80}
                    className=" object-fill w-12 h-12 sm:w-20 sm:h-20"
                    loading="lazy"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-100">
                    {certificate.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-300">
                    {certificate.provider}
                  </p>
                  <p className="text-sm sm:text-base text-gray-400 my-2 mb-3">
                    {certificate.date}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {certificate.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-block px-3 py-1.5 text-xs font-medium rounded-full bg-green-500/20 text-green-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 mt-4 ml-2 text-sm sm:text-base text-gray-400">
                    <a
                      href={certificate.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center font-semibold text-gray-300 hover:text-white transition-colors mr-3"
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
                      Learn More
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

export default Certification;
