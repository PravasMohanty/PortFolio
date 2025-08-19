import React from "react";

const ProjectCard = ({ project }) => {
    return (
        <div className="group bg-gradient-to-br from-blue-900/15 to-violet-800/10 backdrop-blur-sm border border-blue-800/30 rounded-lg p-6 hover:border-violet-600/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20">

            {/* Project Image */}
            <div className="w-full h-48 bg-gradient-to-br from-blue-900/20 to-violet-800/15 rounded-lg mb-4 flex items-center justify-center overflow-hidden border border-blue-700/20">
                <img
                    src={project?.image || "/api/placeholder/400/300"}
                    alt={project?.projectName || "Project"}
                    className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                    }}
                />
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-800/30 to-violet-700/20">
                    {/* <span className="text-blue-400">Project Image</span> */}
                </div>
            </div>

            {/* Project Title */}
            <h3 className="text-xl font-semibold mb-2 text-blue-300 group-hover:text-violet-300 transition-colors duration-300">
                {project?.projectName || "Project Title"}
            </h3>

            {/* Project Description */}
            <p className="text-blue-200/80 text-sm mb-4 leading-relaxed">
                {project?.description || "A brief description of this amazing project that showcases cutting-edge technology and innovative solutions."}
            </p>

            {/* Footer with Technologies and Link */}
            <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                    {/* <span className="px-2 py-1 bg-blue-800/30 border border-blue-700/30 rounded text-xs text-blue-300">React</span>
                    <span className="px-2 py-1 bg-violet-800/30 border border-violet-700/30 rounded text-xs text-violet-300">Node</span> */}
                </div>
                <a
                    href={project?.hyperlink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-violet-400 transition-colors duration-300 font-medium hover:underline"
                >
                    View →
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;