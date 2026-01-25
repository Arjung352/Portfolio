import React from "react";

function Skills() {
  const categoryColors = {
    languages: "bg-blue-500/20 text-blue-400",
    frontend: "bg-green-500/20 text-green-400",
    backend: "bg-purple-500/20 text-purple-400",
    database: "bg-red-500/20 text-red-400",
    toolsAndPlatforms: "bg-yellow-500/20 text-yellow-400",
  } as const;

  const skills = {
    languages: ["JavaScript", "TypeScript", "Python", "Java"],

    frontend: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "Redux",
      "React Router",
      "Tailwind CSS",
      "Material UI",
    ],

    backend: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Clerk Authentication",
      "Razorpay",
      "Nodemailer",
    ],

    database: ["MongoDB", "MySQL", "Postgres"],

    toolsAndPlatforms: [
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "Netlify",
      "Linux",
      "Bash Scripting",
      "Linux Permissions",
    ],
  };

  return (
    <div className="mb-8">
      <section id="Skills">
        <h2 className="text-3xl font-bold mb-6 text-gray-100">Skills</h2>

        {Object.entries(skills).map(([category, items], index) => {
          // ✅ Type-safe cast
          const categoryKey = category as keyof typeof categoryColors;

          return (
            <div key={index} className="mb-6">
              <h4 className="text-xl font-semibold mb-3 text-gray-200 capitalize">
                {category.replace(/([A-Z])/g, " $1")}
              </h4>

              <div className="flex flex-wrap gap-2">
                {items.map((item, i) => (
                  <span
                    key={i}
                    className={`inline-block px-3 py-1.5 text-xs font-medium rounded-full ${
                      categoryColors[categoryKey] ||
                      "bg-gray-500/20 text-gray-400"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Skills;
