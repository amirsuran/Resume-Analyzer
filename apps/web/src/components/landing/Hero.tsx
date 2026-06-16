"use client";

import { Button } from "@repo/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center bg-white px-6 py-16 lg:py-24 overflow-hidden">
      {/* Background Grid for tech aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Fade overlay to smoothly transition grid into background */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white pointer-events-none" />

      {/* Main Split-Screen Container */}
      <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start text-left max-w-xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm">
            <span className="text-sm font-semibold text-slate-600">
              ✨ AI Powered Resume Intelligence
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl leading-none">
            Smart Resume Analysis <br />
            <span className="text-blue-600 mt-2 inline-block">
              &amp; Talent Discovery
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg text-slate-600 sm:text-xl leading-relaxed">
            Transform resumes into structured intelligence. Surface candidate
            strengths instantly and match talent to opportunities with precise
            AI analysis.
          </p>

          {/* Secondary Action for HR */}
          <div className="mt-8">
            <Button
              size="lg"
              variant="outline"
              className="h-11 px-6 rounded-full font-medium bg-white/60 backdrop-blur-md border border-slate-200/80 text-slate-700 shadow-sm transition-all hover:bg-slate-50/80"
            >
              HR / Company Analyze →
            </Button>
          </div>
        </div>

        {/* Right Column: Glassmorphic Dropzone */}
        <div className="w-full max-w-md mx-auto lg:max-w-none">
          <div className="relative rounded-3xl border border-slate-200/60 bg-white/40 backdrop-blur-xl p-6 md:p-8 shadow-xl shadow-slate-100/50">
            {/* Inner Dashed Dropzone */}
            <div className="group flex flex-col items-center justify-center border-2 border-dashed border-slate-300/80 rounded-2xl p-8 md:p-12 bg-white/30 hover:bg-white/60 hover:border-blue-400 transition-all cursor-pointer text-center">
              {/* Modern SVG Upload Icon */}
              <div className="mb-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100 text-slate-400 group-hover:text-blue-500 group-hover:scale-105 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
              </div>

              {/* Dropzone Texts */}
              <h3 className="text-lg font-semibold text-slate-800">
                Analyze My Resume
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Drag &amp; drop your file here, or{" "}
                <span className="text-blue-600 font-medium group-hover:underline">
                  browse
                </span>
              </p>

              {/* File Constraints */}
              <div className="mt-6 flex items-center gap-4 text-xs text-slate-400 font-medium">
                <span>PDF, DOCX</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span>Max 5MB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
