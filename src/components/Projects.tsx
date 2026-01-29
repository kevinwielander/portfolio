import { Folder } from "lucide-react";
import { projects } from "../data/profile";

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-dark-800">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="card group flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-dark-700/50 rounded-lg text-cyan-400 border border-dark-600/50 group-hover:border-cyan-500/30 transition-colors">
                  <Folder size={20} />
                </div>
                <span className="terminal-label">Project</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-dark-200 text-sm mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-dark-700/50">
                {project.technologies.map((tech, tIndex) => (
                  <span key={tIndex} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
