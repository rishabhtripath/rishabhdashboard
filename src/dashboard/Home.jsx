import { useEffect, useState } from "react";
import { Mail, ArrowRight, Sparkles } from "lucide-react";

const words = ["interfaces.", "experiences.", "products."];

export default function Home({ onNavigate }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [visibleLetters, setVisibleLetters] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const finishedTyping = !deleting && visibleLetters === word.length;
    const finishedDeleting = deleting && visibleLetters === 0;
    const delay = finishedTyping ? 1500 : finishedDeleting ? 350 : deleting ? 55 : 105;
    const timer = setTimeout(() => {
      if (finishedTyping) setDeleting(true);
      else if (finishedDeleting) { setDeleting(false); setWordIndex((current) => (current + 1) % words.length); }
      else setVisibleLetters((count) => count + (deleting ? -1 : 1));
    }, delay);
    return () => clearTimeout(timer);
  }, [deleting, visibleLetters, wordIndex]);

  return (
    <div className="section-grid relative min-h-screen overflow-hidden bg-[#101412] text-[#f4f7f2]">
      <div className="pointer-events-none absolute -right-24 top-16 h-96 w-96 rounded-full bg-[#c9f36c]/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#8ee3d4]/5 blur-[100px]" />

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-76px)] max-w-6xl items-center px-6 py-20">
        <div className="max-w-4xl">
        <div className="reveal mb-8 inline-flex items-center gap-2 rounded-full border border-[#dcffbc]/15 bg-[#1b221d] px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-[#c9f36c]">
          <Sparkles size={14} /> Available for new opportunities
        </div>
        <p className="reveal reveal-delay-1 mb-5 text-sm font-bold uppercase tracking-[.25em] text-[#91a096]">Hi, I am <span className="home-name">Rishabh Tripathi</span></p>
        <h1 className="reveal reveal-delay-1 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl md:text-8xl">
          I turn complex ideas into <span className="typed-word text-[.58em] text-[#c9f36c]">{words[wordIndex].slice(0, visibleLetters)}<span className="typing-cursor" aria-hidden="true">|</span></span>
        </h1>
        <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-lg leading-8 text-[#91a096] md:text-xl">
          I am Rishabh Tripathi, a frontend developer who combines thoughtful design, clean code, and purposeful motion to make digital products feel effortless.
        </p>
        <div className="reveal reveal-delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
          <button onClick={() => onNavigate('Projects')} className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#c9f36c] px-6 py-3 font-bold text-[#101412] transition hover:-translate-y-1">
            Explore my work <ArrowRight size={17} className="transition group-hover:translate-x-1" />
          </button>
          <button onClick={() => onNavigate('Contact')} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#dcffbc]/20 px-6 py-3 font-bold text-[#f4f7f2] transition hover:border-[#c9f36c] hover:text-[#c9f36c]">
            <Mail size={17} /> Start a conversation
          </button>
        </div>
        </div>
      </section>
    </div>
  );
}