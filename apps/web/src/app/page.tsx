import { Hero } from "@/components/landing/Hero";
import { Navbar } from "@/components/landing/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900">
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-[-140px] h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.14),transparent)] blur-3xl" />
        <div className="absolute right-[-120px] top-[240px] h-[260px] w-[260px] rounded-full bg-[radial-gradient(closest-side,rgba(15,23,42,0.08),transparent)] blur-3xl" />
      </div>
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
