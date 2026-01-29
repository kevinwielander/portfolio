import { Calendar, MapPin } from "lucide-react";
import { experiences } from "../data/profile";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-dark-800">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="card group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <span className="terminal-label">{exp.type}</span>
                  <h3 className="text-xl font-semibold text-white mt-2 group-hover:text-cyan-400 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-dark-200 font-medium">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-dark-300 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-cyan-500/70" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-cyan-500/70" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mt-4">
                {exp.highlights.map((highlight, hIndex) => (
                  <li
                    key={hIndex}
                    className="flex items-start gap-3 text-dark-200 text-sm"
                  >
                    <span className="mt-2 w-1 h-1 bg-cyan-500 rounded-full shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
