import PianoScrollVideo from "@/components/PianoScrollVideo";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Interactive Piano Scroll Video Component as the Hero */}
      <section className="relative w-full">
        <PianoScrollVideo />
      </section>

      {/* Outro/Features Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-8 py-32 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Interactive Precision.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              By combining GSAP ScrollTrigger with custom frame interpolation, we create a responsive performance where you control the speed of the keys.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                className="flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-black font-semibold hover:bg-zinc-200 transition-colors"
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
              <a
                className="flex h-12 items-center justify-center rounded-full border border-solid border-zinc-700 px-6 font-semibold hover:bg-zinc-900 transition-colors"
                href="https://vercel.com/new"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deploy Now
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">GSAP</h3>
              <p className="text-sm text-zinc-500">Industry standard high-performance web animations.</p>
            </div>
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">React 19</h3>
              <p className="text-sm text-zinc-500">Fully integrated with modern React hook features.</p>
            </div>
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">Tailwind v4</h3>
              <p className="text-sm text-zinc-500">Next generation utility-first styling.</p>
            </div>
            <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
              <h3 className="text-xl font-semibold mb-2">Smooth Scroll</h3>
              <p className="text-sm text-zinc-500">Scrub duration and frame rate control.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
