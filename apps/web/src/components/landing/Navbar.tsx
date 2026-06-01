export function Navbar() {
  return (
    <header className="relative">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 animate-fade-up">
        <a className="flex items-center gap-3" href="/">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-xs font-semibold text-white">
            RA
          </span>
          <span className="text-base font-semibold tracking-tight text-slate-900">
            Resume Analyzer
          </span>
        </a>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <a className="transition-colors hover:text-slate-900" href="#features">
            Features
          </a>
          <a className="transition-colors hover:text-slate-900" href="#how-it-works">
            How it Works
          </a>
          <a className="transition-colors hover:text-slate-900" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
