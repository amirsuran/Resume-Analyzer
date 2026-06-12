import { Button } from "@/components/ui/button";
import { DotPattern } from "@/components/magicui";

export function Navbar() {
  return (
    <header className="relative z-50 bg-white dark:bg-slate-800 shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 animate-fade-up">
        <a className="flex items-center gap-3" href="/">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-xs font-semibold text-white">
            RA
          </span>
          <span className="text-base font-semibold tracking-tight text-slate-900 dark:text-white">
            Resume Analyzer
          </span>
        </a>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a className="transition-colors hover:text-slate-900 dark:hover:text-white" href="#features">
            Features
          </a>
          <a className="transition-colors hover:text-slate-900 dark:hover:text-white" href="#how-it-works">
            How it Works
          </a>
          <a className="transition-colors hover:text-slate-900 dark:hover:text-white" href="#contact">
            Contact
          </a>
        </nav>
        <div className="flex gap-4">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button variant="default" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
