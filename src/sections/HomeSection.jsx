import { useEffect, useState } from "react";
import { Mail, ArrowRight, Sparkles } from "lucide-react";

const words = ["interfaces.", "experiences.", "products."];

const buildSteps = [
  { number: '01', title: 'Understand', description: 'Requirements aur business goals samajhta hoon.' },
  { number: '02', title: 'Plan', description: 'Structure, components aur technical approach define karta hoon.' },
  { number: '03', title: 'Build', description: 'Clean, responsive and maintainable interfaces develop karta hoon.' },
  { number: '04', title: 'Test', description: 'Responsive behaviour, functionality aur browser compatibility verify karta hoon.' },
  { number: '05', title: 'Deliver', description: 'Client feedback ke according refine karke production-ready solution deliver karta hoon.' },
];

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

      <section className="relative z-10 mx-auto grid min-h-[calc(100vh-76px)] max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.12fr_.78fr] lg:gap-16">
        <div className="max-w-4xl">
        <div className="reveal mb-8 inline-flex items-center gap-2 rounded-full border border-[#dcffbc]/15 bg-[#1b221d] px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-[#c9f36c]">
          <Sparkles size={14} /> Available for new opportunities
        </div>
        <p className="reveal reveal-delay-1 mb-5 text-sm font-bold uppercase tracking-[.25em] text-[#91a096]">Hi, I am <span className="home-name">Rishabh Tripathi</span></p>
        <h1 className="reveal reveal-delay-1 max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl md:text-8xl">
          I turn complex ideas into <span className="typed-word text-[.58em] text-[#c9f36c]">{words[wordIndex].slice(0, visibleLetters)}<span className="typing-cursor" aria-hidden="true">|</span></span>
        </h1>
        <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-lg leading-8 text-[#91a096] md:text-xl">
          Software Engineer specializing in React.js, JavaScript, Drupal and modern responsive web experiences.
        </p>
        <div className="reveal reveal-delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
          <button onClick={() => onNavigate('Projects')} className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#c9f36c] px-6 py-3 font-bold text-[#101412] transition hover:-translate-y-1">
            Explore my work <ArrowRight size={17} className="transition group-hover:translate-x-1" />
          </button>
          <button onClick={() => onNavigate('Contact')} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#dcffbc]/20 px-6 py-3 font-bold text-[#f4f7f2] transition hover:border-[#c9f36c] hover:text-[#c9f36c]">
            <Mail size={17} /> Start a conversation
          </button>
        </div>
        <div className="reveal reveal-delay-3 home-proof mt-12" aria-label="Professional highlights">
          <div className="home-proof-stat">
            <strong>1.6<span>+</span></strong>
            <span>Years experience</span>
          </div>
          <div className="home-proof-stat">
            <strong>16</strong>
            <span>Live websites</span>
          </div>
          <div className="home-proof-stat">
            <strong>4<span>+</span></strong>
            <span>Selected projects</span>
          </div>
          <div className="home-proof-stack">
            <span className="home-proof-stack-label">Working with</span>
            <p><b>React</b><b>Drupal</b><b>JavaScript</b><b>HTML</b><b>CSS</b><b>WordPress</b></p>
          </div>
        </div>
        </div>
        <figure className="profile-hero reveal reveal-delay-2">
          <div className="profile-hero-frame">
            <img src="/profile.jpg" alt="Rishabh Tripathi, software engineer" />
            <div className="profile-hero-shine" />
            <span className="profile-hero-label">Rishabh Tripathi</span>
          </div>
          <figcaption className="profile-hero-caption">
            <span>Software Engineer</span>
            <span>Lucknow, India</span>
          </figcaption>
        </figure>
      </section>
      <section className="how-i-build section-grid" aria-labelledby="how-i-build-heading">
        <div className="how-i-build-inner">
          <div className="how-i-build-heading reveal">
            <p className="how-i-build-kicker">My process</p>
            <h2 id="how-i-build-heading">How I <em>build.</em></h2>
            <p>Thoughtful decisions at every stage, from the first conversation to the final release.</p>
          </div>
          <div className="how-i-build-steps">
            {buildSteps.map((step, index) => (
              <article key={step.number} className={`how-i-build-step reveal reveal-delay-${(index % 3) + 1}`}>
                <span className="how-i-build-number">{step.number}</span>
                <div className="how-i-build-line" aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}