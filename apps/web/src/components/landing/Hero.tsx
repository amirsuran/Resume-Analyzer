import { AnimatedShinyText } from "@/components/magicui";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center px-6 pb-24 pt-16 text-center sm:pt-20">
      <div>
        <AnimatedShinyText>✨ AI-Powered Resume Parsing</AnimatedShinyText>
      </div>
      <h1 className="mt-8 text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
        Optimize Your Resume for Global Opportunities
      </h1>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
        Discover tailored job opportunities with our advanced resume analysis.
      </p>
      <div className="mt-12 flex gap-4">
        <Button variant="default" size="lg">
          Get Started
        </Button>
        <Button variant="outline" size="lg">
          View Demo
        </Button>
      </div>
    </section>
  );
}
