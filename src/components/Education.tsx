import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { education } from "../data/profile";

export default function Education() {
  return (
    <section id="education" className="py-24 border-t border-dark-800">
      <div className="section-container">
        <h2 className="section-title">Education</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div key={index} className="card group">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-dark-700/50 rounded-lg text-cyan-400 border border-dark-600/50 group-hover:border-cyan-500/30 transition-colors">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <span className="terminal-label">{edu.degree}</span>
                  <h3 className="text-lg font-semibold text-white mt-1">
                    {edu.field}
                  </h3>
                  <p className="text-dark-200 text-sm">
                    {edu.institution}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-dark-300 font-mono mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-cyan-500/70" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-cyan-500/70" />
                  {edu.location}
                </span>
              </div>

              <ul className="space-y-2">
                {edu.details.map((detail, dIndex) => (
                  <li
                    key={dIndex}
                    className="flex items-start gap-3 text-dark-200 text-sm"
                  >
                    <span className="mt-1.5 w-1 h-1 bg-cyan-500 rounded-full shrink-0" />
                    {detail}
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
