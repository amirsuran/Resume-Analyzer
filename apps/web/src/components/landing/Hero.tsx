import { Button } from "@repo/ui/button";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center px-6 pb-24 pt-16 text-center sm:pt-20">
      <span className="animate-fade-up inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-600 shadow-sm">
        AI Powered Resume Intelligence
      </span>
      <h1 className="animate-fade-up animate-fade-up-delay-1 mt-6 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
        Smart Resume Analysis & Talent Discovery
      </h1>
      <p className="animate-fade-up animate-fade-up-delay-2 mt-4 max-w-2xl text-pretty text-lg text-slate-600">
        Turn resumes into clear hiring signals with AI-driven insights, skill
        mapping, and instant shortlists built for modern teams.
      </p>
      <div className="animate-fade-up animate-fade-up-delay-3 mt-8 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
        <Button className="w-full sm:w-auto" size="lg">
          Analyze My Resume
        </Button>
        <Button className="w-full sm:w-auto" size="lg" variant="outline">
          HR / Company Login
        </Button>
      </div>
    </section>
  );
}
