import React from 'react'
import skillsData from '../data/skills.json';

const SkillsGrid = () => {
    const skills = skillsData.skills;


    return (
        <div className="flex flex-wrap gap-3 mt-8">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className="px-4 py-2 bgblue900/30 border borderblue700/50 rounded-full text-sm hover:bgblue800/30 transition-colors duration-300"
                >
                    {skill}
                </span>
            ))}
        </div>
    );
};

export default SkillsGrid
