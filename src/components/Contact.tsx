import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-dark-800">
      <div className="section-container">
        <h2 className="section-title">Get in Touch</h2>

        <div className="max-w-2xl">
          <p className="text-dark-200 mb-8 leading-relaxed">
            I'm always interested in hearing about new opportunities,
            interesting projects, or just connecting with fellow developers.
            Feel free to reach out.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <a
              href={`mailto:${profile.email}`}
              className="card group flex items-center gap-4"
            >
              <div className="p-3 bg-dark-700/50 rounded-lg text-cyan-400 border border-dark-600/50 group-hover:border-cyan-500/30 transition-colors">
                <Mail size={18} />
              </div>
              <div>
                <span className="terminal-label">Email</span>
                <p className="text-white text-sm mt-1 group-hover:text-cyan-400 transition-colors">
                  {profile.email}
                </p>
              </div>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex items-center gap-4"
            >
              <div className="p-3 bg-dark-700/50 rounded-lg text-cyan-400 border border-dark-600/50 group-hover:border-cyan-500/30 transition-colors">
                <Linkedin size={18} />
              </div>
              <div>
                <span className="terminal-label">LinkedIn</span>
                <p className="text-white text-sm mt-1 group-hover:text-cyan-400 transition-colors">
                  /in/kwielander
                </p>
              </div>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex items-center gap-4"
            >
              <div className="p-3 bg-dark-700/50 rounded-lg text-cyan-400 border border-dark-600/50 group-hover:border-cyan-500/30 transition-colors">
                <Github size={18} />
              </div>
              <div>
                <span className="terminal-label">GitHub</span>
                <p className="text-white text-sm mt-1 group-hover:text-cyan-400 transition-colors">
                  kevinwielander
                </p>
              </div>
            </a>

            <div className="card flex items-center gap-4">
              <div className="p-3 bg-dark-700/50 rounded-lg text-cyan-400 border border-dark-600/50">
                <MapPin size={18} />
              </div>
              <div>
                <span className="terminal-label">Location</span>
                <p className="text-white text-sm mt-1">{profile.location}</p>
              </div>
            </div>
          </div>

          <a href={`mailto:${profile.email}`} className="btn-primary">
            <Mail size={16} />
            Send me an email
          </a>
        </div>
      </div>
    </section>
  );
}
