import { MapPin, Mail, Linkedin, Github, ChevronDown } from "lucide-react";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-24 relative grid-bg">
      {/* Gradient orb */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12">
          <div className="max-w-2xl">
            <div className="animate-fade-in-up opacity-0">
              <span className="terminal-label">
                // Full Stack Developer
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-4 animate-fade-in-up opacity-0 animate-delay-100">
              <span className="gradient-text">{profile.name}</span>
            </h1>

            <p className="text-lg text-dark-200 mb-8 leading-relaxed animate-fade-in-up opacity-0 animate-delay-200">
              {profile.summary}
            </p>

            <div className="flex items-center gap-4 mb-10 text-dark-300 animate-fade-in-up opacity-0 animate-delay-200">
              <span className="flex items-center gap-2 font-mono text-sm">
                <MapPin size={14} className="text-cyan-500" />
                {profile.location}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in-up opacity-0 animate-delay-300">
              <a href={`mailto:${profile.email}`} className="btn-primary">
                <Mail size={16} />
                Get in Touch
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>

          {/* Profile Image with animated ring */}
          <div className="flex justify-center md:justify-end animate-fade-in-up opacity-0 animate-delay-100">
            <div className="relative">
              {/* Animated rotating ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-transparent border-t-cyan-500 border-r-cyan-500/50 animate-spin-slow" />
              <div className="absolute -inset-4 rounded-full border-2 border-transparent border-b-cyan-400/30 border-l-cyan-400/10 animate-spin-slow-reverse" />

              {/* Glow effect */}
              <div className="absolute -inset-2 bg-cyan-500/20 rounded-full blur-xl animate-pulse-slow" />

              {/* Image container */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-dark-600 hover:border-cyan-500/50 transition-colors duration-500">
                <img
                  src="/profile.jpg"
                  alt={profile.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <a
            href="#experience"
            className="text-dark-400 hover:text-cyan-400 transition-colors"
            aria-label="Scroll to experience"
          >
            <ChevronDown size={24} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
