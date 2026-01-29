import { profile } from "../data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-dark-800">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-dark-400 font-mono">
            &copy; {currentYear} {profile.name}
          </p>
          <p className="text-sm text-dark-500 font-mono">
            <span className="text-cyan-500/70">&lt;</span>
            Built with React + Tailwind
            <span className="text-cyan-500/70"> /&gt;</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
