export default function Experience() {
  return (
    <section
      id="experience"
      className="section-grid relative min-h-screen overflow-hidden bg-[#101412] px-6 pb-24 pt-24 text-[#f4f7f2] md:pt-32"
    >
      <div className="absolute -left-24 -top-24 h-[380px] w-[380px] rounded-full bg-cyan-500/20 blur-[140px] sm:-left-40 sm:-top-40 sm:h-[500px] sm:w-[500px]" />
      <div className="absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-violet-500/20 blur-[140px] sm:-right-40 sm:h-[500px] sm:w-[500px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="reveal mb-16 border-b border-[#dcffbc]/10 pb-10">
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            My professional <em className="font-serif font-normal text-[#c9f36c]">journey.</em>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="professional-panel reveal reveal-delay-1 rounded-2xl p-8 transition duration-300 hover:-translate-y-1 hover:border-[#c9f36c]/40">
            <h3 className="mb-4 text-3xl font-bold text-white">Current Role</h3>
            <p className="leading-8 text-[#91a096]">
              Software Engineer at Singsys Software Services Pvt Ltd, Lucknow.
              Building modern user interfaces with React and Tailwind CSS for
              international clients.
            </p>
          </div>

          <div className="professional-panel reveal reveal-delay-2 rounded-2xl p-8 transition duration-300 hover:-translate-y-1 hover:border-[#c9f36c]/40">
            <h3 className="mb-4 text-3xl font-bold text-white">Experience Highlights</h3>
            <ul className="space-y-4 text-[#91a096]">
              <li>1.5 years of frontend development experience</li>
              <li>Strong focus on responsive, accessible designs</li>
              <li>Worked on production-ready international projects</li>
              <li>Expertise in React, Tailwind CSS, and modern UI patterns</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
