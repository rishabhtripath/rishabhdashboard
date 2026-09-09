import {
  BriefcaseBusiness,
  Clock3,
  Globe,
  Code2,
} from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <BriefcaseBusiness size={22} />,
      title: "CURRENTLY AT",
      value: "Singsys Software Services Pvt Ltd, Lucknow",
    },
    {
      icon: <Clock3 size={22} />,
      title: "EXPERIENCE",
      value: "1.6 Years",
    },
    {
      icon: <Globe size={22} />,
      title: "LIVE INTERNATIONAL PROJECTS",
      value: "Multiple",
    },
    {
      icon: <Code2 size={22} />,
      title: "FOCUS",
      value: "Frontend & Modern UI",
    },
  ];

  return (
    <section className="section-grid relative min-h-screen overflow-hidden bg-[#101412] py-24 text-[#f4f7f2] md:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute right-[-12%] top-16 h-80 w-80 rounded-full bg-[#c9f36c]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="reveal mb-16 border-b border-[#dcffbc]/10 pb-10">
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Crafting digital <em className="font-serif font-normal text-[#c9f36c]">experiences.</em>
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-[420px_1fr]">
          {/* Left Card */}
          <div className="professional-panel reveal reveal-delay-1 rounded-2xl p-8">
            <div className="mb-6 text-5xl font-bold text-[#c9f36c]">RT<span className="text-[#f4f7f2]">.</span></div>

            <h3 className="mb-6 text-4xl font-bold text-white">
              Frontend Engineer
            </h3>

            <p className="mb-6 text-base leading-8 text-[#91a096]">
              I have a strong passion for frontend development and modern UI
              design. I love turning complex problems into clean, intuitive
              interfaces that users genuinely enjoy.
            </p>

            <p className="text-base leading-8 text-[#91a096]">
              I've had the opportunity to work on multiple live international
              projects, shipping production-grade solutions used across the
              globe.
            </p>
          </div>

          {/* Right Grid */}
          <div className="grid gap-5 md:grid-cols-2">
            {cards.map((card, index) => (
              <div
                key={index}
                className="professional-panel reveal reveal-delay-2 group rounded-2xl p-7 transition duration-300 hover:-translate-y-1 hover:border-[#c9f36c]/40"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#c9f36c] text-[#101412]">
                  {card.icon}
                </div>

                <p className="mb-3 text-xs font-bold tracking-wider text-[#91a096]">
                  {card.title}
                </p>

                <h4 className="text-2xl font-semibold leading-relaxed text-white">
                  {card.value}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}