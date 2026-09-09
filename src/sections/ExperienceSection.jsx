import { ArrowUpRight, BriefcaseBusiness, Check } from 'lucide-react'

const responsibilities = [
  'Frontend Development',
  'Drupal Development',
  'Enterprise Websites',
  'CMS Implementation',
  'Responsive UI',
  'Client Communication',
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-grid relative min-h-screen overflow-hidden bg-[#101412] px-6 pb-24 pt-24 text-[#f4f7f2] md:pt-32"
    >
      <div className="pointer-events-none absolute right-[-12%] top-16 h-80 w-80 rounded-full bg-[#c9f36c]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="reveal mb-16 border-b border-[#dcffbc]/10 pb-10">
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            My professional <em className="font-serif font-normal text-[#c9f36c]">journey.</em>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr]">
          <div className="professional-panel reveal reveal-delay-1 rounded-2xl p-8 transition duration-300 hover:-translate-y-1 hover:border-[#c9f36c]/40">
            <div className="mb-10 flex items-start justify-between gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#c9f36c] text-[#101412]">
                <BriefcaseBusiness size={22} />
              </div>
              <span className="rounded-full border border-[#c9f36c]/30 px-3 py-1 text-xs font-bold uppercase tracking-[.14em] text-[#c9f36c]">Current</span>
            </div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[.18em] text-[#c9f36c]">2025 — Present</p>
            <h3 className="mb-3 text-3xl font-bold text-white">Software Engineer</h3>
            <p className="mb-8 text-base font-semibold text-[#f4f7f2]">Singsys Software Services Pvt. Ltd.</p>
            <div className="border-t border-[#dcffbc]/10 pt-6">
              <p className="text-sm leading-7 text-[#91a096]">
                Building and maintaining international enterprise websites, CMS experiences, and responsive interfaces for real-world clients.
              </p>
            </div>
          </div>

          <div className="professional-panel reveal reveal-delay-2 rounded-2xl p-8 transition duration-300 hover:-translate-y-1 hover:border-[#c9f36c]/40">
            <div className="mb-8 flex items-end justify-between gap-5 border-b border-[#dcffbc]/10 pb-6">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[.18em] text-[#91a096]">Role responsibilities</p>
                <h3 className="text-3xl font-bold text-white">What I work on</h3>
              </div>
              <ArrowUpRight className="text-[#c9f36c]" size={22} />
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {responsibilities.map((responsibility) => (
                <li key={responsibility} className="flex items-center gap-3 rounded-xl border border-[#dcffbc]/10 bg-[#151b17] px-4 py-4 text-sm font-semibold text-[#f4f7f2] transition hover:border-[#c9f36c]/40 hover:text-[#c9f36c]">
                  <Check size={16} className="shrink-0 text-[#c9f36c]" />
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
