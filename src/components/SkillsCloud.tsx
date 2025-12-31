
import React from 'react';

interface SkillsCloudProps {
  skills: string[];
}

const SkillsCloud: React.FC<SkillsCloudProps> = ({ skills }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full border border-blue-200 transition-all hover:scale-105 hover:bg-blue-200"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

export default SkillsCloud;
