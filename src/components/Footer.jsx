export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-slate-900 text-slate-300 py-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-3xl">💼</span>
            <span className="text-2xl font-bold text-white">Job Tracking</span>
          </div>
          <p className="text-slate-400 mb-8">
            Empowering your career journey with intelligent job search tracking.
          </p>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-500">
              © 2025 Job Tracking. Made with ❤️ for job seekers everywhere.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
