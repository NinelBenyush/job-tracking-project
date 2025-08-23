export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white shadow-2xl backdrop-blur-md border-b border-white/10 w-full">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="flex items-center gap-3 text-inherit no-underline relative z-10">
          <div className="relative">
            <span
              className="text-2xl drop-shadow-lg"
              aria-hidden
              style={{
                animation: "float 3s ease-in-out infinite",
                filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))",
              }}
            >
              💼
            </span>
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-150 opacity-30"></div>
          </div>
          <a
            href="/"
            className="font-black text-2xl tracking-tight bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent hover:from-indigo-100 hover:to-white transition-all duration-300 transform hover:scale-105"
          >
            Job Tracking
          </a>
        </div>

        <nav className="flex items-center gap-10 relative z-10">
          <a
            href="#how-it-works"
            className="text-white/90 hover:text-white no-underline font-semibold text-sm transition-all duration-300 py-3 px-4 relative group hover:-translate-y-1 hover:scale-105 after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-white after:to-indigo-200 after:transition-all after:duration-300 after:ease-out group-hover:after:w-full after:rounded-full before:content-[''] before:absolute before:inset-0 before:bg-white/10 before:rounded-lg before:opacity-0 before:transition-all before:duration-300 group-hover:before:opacity-100 before:backdrop-blur-sm"
          >
            How It Works
          </a>
          <a
            href="#about"
            className="text-white/90 hover:text-white no-underline font-semibold text-sm transition-all duration-300 py-3 px-4 relative group hover:-translate-y-1 hover:scale-105 after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-white after:to-indigo-200 after:transition-all after:duration-300 after:ease-out group-hover:after:w-full after:rounded-full before:content-[''] before:absolute before:inset-0 before:bg-white/10 before:rounded-lg before:opacity-0 before:transition-all before:duration-300 group-hover:before:opacity-100 before:backdrop-blur-sm"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-white/90 hover:text-white no-underline font-semibold text-sm transition-all duration-300 py-3 px-4 relative group hover:-translate-y-1 hover:scale-105 after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-white after:to-indigo-200 after:transition-all after:duration-300 after:ease-out group-hover:after:w-full after:rounded-full before:content-[''] before:absolute before:inset-0 before:bg-white/10 before:rounded-lg before:opacity-0 before:transition-all before:duration-300 group-hover:before:opacity-100 before:backdrop-blur-sm"
          >
            Contact
          </a>
        </nav>

        <button
          className="hidden flex-col gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 cursor-pointer p-3 rounded-lg transition-all duration-300 backdrop-blur-sm group relative z-10"
          aria-label="Menu"
        >
          <span className="block w-6 h-0.5 bg-white group-hover:bg-indigo-100 transition-colors duration-300 rounded-full"></span>
          <span className="block w-6 h-0.5 bg-white group-hover:bg-indigo-100 transition-colors duration-300 rounded-full"></span>
          <span className="block w-6 h-0.5 bg-white group-hover:bg-indigo-100 transition-colors duration-300 rounded-full"></span>
        </button>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-4px) rotate(-2deg);
          }
          66% {
            transform: translateY(-2px) rotate(2deg);
          }
        }

        header::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 100%
          );
          backdrop-filter: blur(10px);
          z-index: -1;
        }
      `}</style>
    </header>
  );
}
