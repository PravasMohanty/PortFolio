import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects.json"; // make sure path is correct

const ProjectsSection = () => {
    return (
        <section
            id="projects"
            className="py-20 px-4 bg-gradient-to-b fromblue950/10 to-black"
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center textblue400 mb-12">
                    My Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
