"use client";

import { Button } from "@repo/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] w-full flex-col items-center justify-center bg-slate-50 px-6 py-24">
      {/* Background Grid for tech aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm">
          <span className="text-sm font-semibold text-slate-600">
            ✨ AI Powered Resume Intelligence
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
          Smart Resume Analysis <br />
          <span className="text-blue-600">&amp; Talent Discovery</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
          Transform resumes into structured intelligence. Surface candidate
          strengths instantly and match talent to opportunities with precise AI
          analysis.
        </p>

        {/* Shadcn CTAs */}
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <Button
            size="lg"
            className="w-full rounded-md bg-blue-600 px-8 h-12 font-medium text-white hover:bg-blue-700 sm:w-auto"
          >
            Analyze My Resume
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full rounded-md border-slate-300 px-8 h-12 font-medium text-slate-700 hover:bg-slate-100 sm:w-auto"
          >
            HR / Company Analyze
          </Button>
        </div>

        {/* Phase 2 Anchor */}
        <div id="resume-upload-zone-anchor" className="mt-16 w-full" />
      </div>
    </section>
  );
}
