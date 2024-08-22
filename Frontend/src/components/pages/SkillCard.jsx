import React, { useState } from "react";

function SkillCard({ skill }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      key={skill.name}
      className="relative text-center text-5xl p-4 rounded-md overflow-hidden"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div className="flex justify-center items-center">{skill.icon}</div>

      {/* Background layer with blur effect */}
      <div
        className={`absolute inset-0 transition-all duration-500 ${
          isHovered
            ? "bg-black/50 blur-md translate-y-0"
            : "bg-transparent translate-y-full"
        }`}
      />

      {/* Text layer unaffected by blur */}
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center text-white text-base font-bold rounded-md">
          {skill.name}
        </div>
      )}
    </div>
  );
}

export default SkillCard;
