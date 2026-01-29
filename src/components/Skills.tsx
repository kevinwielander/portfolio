import { skillCategories } from "../data/profile";

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-dark-800">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <span className="terminal-label">{category.name}</span>
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill, sIndex) => (
                  <span key={sIndex} className="skill-tag">
                    {skill}
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
