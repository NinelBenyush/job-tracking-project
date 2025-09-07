import s from "./Header.module.css";

export default function PersonalHeader() {
  return (
    <header className={s.bar}>
      <div className={s.container}>
        <a href="/" className={s.logo}>
          <span
            className={s.crown}
            aria-hidden
            style={{
              animation: "float 3s ease-in-out infinite",
              filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))",
            }}
          >
            💼
          </span>
          <span className={s.title}>Job Tracking</span>
        </a>

        <nav className={s.navigation}>
          <a href="#how-it-works" className={s.navLink}>
            will be later
          </a>
          <a href="#about" className={s.navLink}>
            something
          </a>
          <a href="#ready" className={s.navLink}>
            Log-out
          </a>
        </nav>

        <button className={s.mobileMenuBtn} aria-label="Menu">
          <span className={s.menuIcon}></span>
          <span className={s.menuIcon}></span>
          <span className={s.menuIcon}></span>
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
      `}</style>
    </header>
  );
}
