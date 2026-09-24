import { useState } from 'react'
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  Download,
  ExternalLink,
  Sparkles,
  TrendingUp,
  MapPin,
  Code2,
  Users,
  Globe,
  ShieldCheck,
  ArrowRight,
  Clock,
  Award,
} from 'lucide-react'
import {
  experienceMetrics,
  careerStages,
  recruiterHighlights,
} from '../data/experience'

export default function Experience({ onNavigate }) {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const highlightIconMap = {
    Globe: <Globe className="text-[#c9f36c]" size={22} />,
    Users: <Users className="text-[#c9f36c]" size={22} />,
    Code2: <Code2 className="text-[#c9f36c]" size={22} />,
    TrendingUp: <TrendingUp className="text-[#c9f36c]" size={22} />,
  }

  const metricIconMap = [
    <Clock key="0" className="text-[#c9f36c]" size={20} />,
    <Globe key="1" className="text-[#c9f36c]" size={20} />,
    <ShieldCheck key="2" className="text-[#c9f36c]" size={20} />,
    <TrendingUp key="3" className="text-[#c9f36c]" size={20} />,
  ]

  const displayedStages =
    selectedFilter === 'all'
      ? careerStages
      : careerStages.filter((stage) => stage.id === selectedFilter)

  return (
    <section
      id="experience"
      className="section-grid relative min-h-screen overflow-hidden bg-[#101412] px-4 pb-24 pt-24 text-[#f4f7f2] sm:px-6 md:pt-32"
    >
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -right-24 top-16 h-96 w-96 rounded-full bg-[#c9f36c]/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-12 -left-20 h-80 w-80 rounded-full bg-[#8ee3d4]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-14 border-b border-[#dcffbc]/10 pb-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dcffbc]/15 bg-[#1b221d] px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-[#c9f36c]">
              <Sparkles size={14} /> Experience / Career Progression
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/Rishabh_Tripathi_Resume.pdf"
                download="Rishabh_Tripathi_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-[#c9f36c]/40 bg-[#c9f36c]/10 px-4 py-2 text-xs font-bold uppercase tracking-[.1em] text-[#c9f36c] transition hover:bg-[#c9f36c] hover:text-[#101412]"
              >
                <Download size={14} /> Resume (PDF)
              </a>
              {onNavigate && (
                <button
                  onClick={() => onNavigate('Contact')}
                  className="inline-flex items-center gap-2 rounded-full bg-[#c9f36c] px-4 py-2 text-xs font-bold uppercase tracking-[.1em] text-[#101412] transition hover:brightness-105"
                >
                  Hire Rishabh <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>

          <h2 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Growing through{' '}
            <em className="font-serif font-normal text-[#c9f36c]">real-world engineering.</em>
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#91a096] md:text-lg">
            A documented progression from rigorous foundational training to owning production web systems,
            scaling 16 enterprise portals for global clients, and collaborating directly in fast-paced Agile sprints.
          </p>
        </div>

        {/* Recruiter Glance Metrics */}
        <div className="mb-14 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {experienceMetrics.map((metric, idx) => (
            <div
              key={metric.label}
              className="group relative rounded-2xl border border-[#dcffbc]/12 bg-[#151b17]/90 p-5 shadow-lg backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#c9f36c]/40"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#c9f36c]/25 bg-[#c9f36c]/10">
                  {metricIconMap[idx]}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#91a096]">
                  Verified
                </span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-extrabold tracking-tight text-[#f4f7f2] sm:text-4xl">
                  {metric.value}
                </span>
                {metric.suffix && (
                  <span className="text-sm font-bold text-[#c9f36c] sm:text-base">
                    {metric.suffix}
                  </span>
                )}
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#f4f7f2]">
                {metric.label}
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-[#91a096]">
                {metric.sublabel}
              </p>
            </div>
          ))}
        </div>

        {/* Current Role Spotlight Banner */}
        <div className="mb-16 rounded-3xl border border-[#c9f36c]/30 bg-gradient-to-br from-[#1b221d] via-[#151b17] to-[#101412] p-6 shadow-2xl sm:p-8 md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#dcffbc]/12 pb-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#c9f36c]/40 bg-[#c9f36c]/10 text-[#c9f36c] shadow-[0_0_20px_rgba(201,243,108,0.15)]">
                <Building2 size={26} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c9f36c] opacity-75"></span>
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#c9f36c]"></span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[.18em] text-[#c9f36c]">
                    Active Role • Full-Time
                  </span>
                </div>
                <h3 className="mt-1 text-2xl font-bold text-[#f4f7f2] sm:text-3xl">
                  Software Engineer
                </h3>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#dcffbc]/15 bg-[#101412]/80 px-3.5 py-1.5 text-xs font-medium text-[#91a096]">
                <Calendar size={13} className="text-[#c9f36c]" /> March 2026 – Present
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#dcffbc]/15 bg-[#101412]/80 px-3.5 py-1.5 text-xs font-medium text-[#91a096]">
                <MapPin size={13} className="text-[#c9f36c]" /> Singsys Pvt Ltd • Lucknow
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-[#c9f36c]/30 bg-[#c9f36c]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#c9f36c]">
                <Award size={12} /> Promoted
              </span>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_.7fr]">
            <div>
              <p className="text-base leading-8 text-[#b2beb5]">
                Leading frontend initiatives, production deliveries, and enterprise CMS maintenance at{' '}
                <strong className="text-[#f4f7f2]">Singsys Software Services</strong>.
                Collaborating directly with international product owners, turning complex client specs into clean,
                scalable code, and ensuring zero-regression releases across global properties.
              </p>

              <div className="mt-6 space-y-3.5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#c9f36c]" />
                  <p className="text-sm leading-6 text-[#91a096]">
                    <strong className="text-[#f4f7f2]">16 Global Fujifilm Portals: </strong>
                    Solely responsible for multi-country UI updates, localized publishing workflows, metadata, and cross-browser consistency across APAC regions.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#c9f36c]" />
                  <p className="text-sm leading-6 text-[#91a096]">
                    <strong className="text-[#f4f7f2]">Modular React & Modern UI: </strong>
                    Crafting reusable component architectures with clean state management, responsive Tailwind layouts, and accessible UI patterns.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#c9f36c]" />
                  <p className="text-sm leading-6 text-[#91a096]">
                    <strong className="text-[#f4f7f2]">Direct Client Standups & Demos: </strong>
                    Engaging daily with clients to clarify requirements, demo sprint accomplishments, and resolve feedback with immediate turnaround.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#dcffbc]/10 bg-[#101412]/60 p-6">
              <p className="text-xs font-bold uppercase tracking-[.18em] text-[#c9f36c]">
                Core Competencies
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  'React.js',
                  'JavaScript (ES6+)',
                  'Drupal CMS',
                  'Tailwind CSS',
                  'HTML5 & CSS3',
                  'REST APIs',
                  'Git & GitHub',
                  'Direct Client Sync',
                  'Multilingual Portals',
                  'SEO & Hreflang',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-lg border border-[#c9f36c]/20 bg-[#c9f36c]/5 px-2.5 py-1 text-xs font-medium text-[#f4f7f2] transition hover:border-[#c9f36c]/50 hover:bg-[#c9f36c]/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-t border-[#dcffbc]/10 pt-4">
                <div className="flex items-center justify-between text-xs text-[#91a096]">
                  <span>Company:</span>
                  <a
                    href="https://www.singsys.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-[#f4f7f2] hover:text-[#c9f36c]"
                  >
                    Singsys Pvt Ltd <ExternalLink size={12} />
                  </a>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-[#91a096]">
                  <span>Flagship Project:</span>
                  <span className="font-bold text-[#c9f36c]">Fujifilm (16 Sites)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Career Timeline */}
        <div className="mb-20">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-[#dcffbc]/10 pb-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.25em] text-[#c9f36c]">
                Progression Timeline
              </p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#f4f7f2] sm:text-3xl">
                Roles & Professional Milestones
              </h3>
            </div>

            {/* Filter Tabs */}
            <div className="inline-flex rounded-xl border border-[#dcffbc]/15 bg-[#151b17] p-1 text-xs font-bold">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`rounded-lg px-3.5 py-1.5 transition ${
                  selectedFilter === 'all'
                    ? 'bg-[#c9f36c] text-[#101412]'
                    : 'text-[#91a096] hover:text-[#f4f7f2]'
                }`}
              >
                All Stages (2)
              </button>
              <button
                onClick={() => setSelectedFilter('software-engineer')}
                className={`rounded-lg px-3.5 py-1.5 transition ${
                  selectedFilter === 'software-engineer'
                    ? 'bg-[#c9f36c] text-[#101412]'
                    : 'text-[#91a096] hover:text-[#f4f7f2]'
                }`}
              >
                Software Engineer
              </button>
              <button
                onClick={() => setSelectedFilter('trainee-engineer')}
                className={`rounded-lg px-3.5 py-1.5 transition ${
                  selectedFilter === 'trainee-engineer'
                    ? 'bg-[#c9f36c] text-[#101412]'
                    : 'text-[#91a096] hover:text-[#f4f7f2]'
                }`}
              >
                Trainee Year
              </button>
            </div>
          </div>

          <div className="relative space-y-10 pl-4 before:absolute before:bottom-6 before:left-8 before:top-6 before:w-0.5 before:bg-gradient-to-b before:from-[#c9f36c] before:via-[#c9f36c]/40 before:to-transparent sm:pl-0 sm:before:left-10">
            {displayedStages.map((stage) => (
              <div
                key={stage.id}
                className="relative flex flex-col gap-6 sm:flex-row sm:gap-10"
              >
                {/* Node Marker */}
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#c9f36c]/50 bg-[#101412] text-sm font-extrabold text-[#c9f36c] shadow-[0_0_20px_rgba(201,243,108,0.2)] sm:h-20 sm:w-20">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] uppercase tracking-widest text-[#91a096]">
                      Stage
                    </span>
                    <span className="text-lg font-black text-[#c9f36c]">
                      {stage.stageNumber}
                    </span>
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`flex-1 rounded-2xl border p-6 transition sm:p-8 ${
                    stage.isCurrent
                      ? 'border-[#c9f36c]/40 bg-gradient-to-br from-[#1b221d] to-[#151b17] shadow-xl'
                      : 'border-[#dcffbc]/12 bg-[#151b17]/80 hover:border-[#c9f36c]/30'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#dcffbc]/10 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold uppercase tracking-[.2em] text-[#c9f36c]">
                          {stage.company}
                        </span>
                        {stage.isCurrent && (
                          <span className="rounded-full bg-[#c9f36c]/20 px-2 py-0.5 text-[10px] font-extrabold uppercase text-[#c9f36c]">
                            Current
                          </span>
                        )}
                      </div>
                      <h4 className="mt-1 text-2xl font-bold text-[#f4f7f2] sm:text-3xl">
                        {stage.role}
                      </h4>
                    </div>

                    <div className="text-right">
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-[#dcffbc]/15 bg-[#101412]/90 px-3 py-1 text-xs font-semibold text-[#f4f7f2]">
                        <Calendar size={13} className="text-[#c9f36c]" /> {stage.period}
                      </div>
                      <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#91a096]">
                        {stage.duration}
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-[#b2beb5] sm:text-base sm:leading-8">
                    {stage.overview}
                  </p>

                  {/* Bullet Responsibilities Grid */}
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {stage.responsibilities.map((resp) => (
                      <div
                        key={resp.title}
                        className="rounded-xl border border-[#dcffbc]/10 bg-[#101412]/50 p-4"
                      >
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-[#c9f36c]"
                          />
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wide text-[#f4f7f2]">
                              {resp.title}
                            </p>
                            <p className="mt-1 text-xs leading-5 text-[#91a096]">
                              {resp.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-[#dcffbc]/10 pt-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#91a096]">
                      Stack & Tools:
                    </span>
                    {stage.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-[#c9f36c]/20 bg-[#c9f36c]/5 px-2 py-0.5 text-[11px] font-medium text-[#f4f7f2]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Recruiters Value This Profile */}
        <div className="mb-20">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[.25em] text-[#c9f36c]">
              Why Recruiters Hire Rishabh
            </p>
            <h3 className="mt-2 text-3xl font-bold tracking-tight text-[#f4f7f2] sm:text-4xl">
              Proven value for fast-moving engineering teams
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#91a096]">
              Key capabilities demonstrated across 1.6+ years of real-world enterprise delivery and client ownership.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recruiterHighlights.map((hl) => (
              <div
                key={hl.title}
                className="group relative rounded-2xl border border-[#dcffbc]/12 bg-[#151b17] p-6 shadow-md transition hover:-translate-y-1 hover:border-[#c9f36c]/40 hover:bg-[#1b221d]"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#c9f36c]/30 bg-[#c9f36c]/10">
                  {highlightIconMap[hl.icon]}
                </div>
                <p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-[#c9f36c]">
                  {hl.subtitle}
                </p>
                <h4 className="mt-1 text-base font-bold text-[#f4f7f2]">
                  {hl.title}
                </h4>
                <p className="mt-3 text-xs leading-6 text-[#91a096]">
                  {hl.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recruiter Bottom Call to Action Card */}
        <div className="relative overflow-hidden rounded-3xl border border-[#c9f36c]/30 bg-gradient-to-r from-[#1b221d] via-[#151b17] to-[#1b221d] p-8 shadow-2xl sm:p-12">
          <div className="pointer-events-none absolute -right-10 -top-10 h-60 w-60 rounded-full bg-[#c9f36c]/10 blur-[80px]" />
          <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c9f36c]/30 bg-[#c9f36c]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#c9f36c]">
                <Briefcase size={13} /> Available For Opportunities
              </span>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#f4f7f2] sm:text-3xl md:text-4xl">
                Ready to contribute to your engineering organization
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#91a096] sm:text-base">
                Looking for a dependable developer with proven React.js skills, enterprise CMS proficiency, and direct client experience? Let's connect.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/Rishabh_Tripathi_Resume.pdf"
                download="Rishabh_Tripathi_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c9f36c] px-6 py-3 text-sm font-bold text-[#c9f36c] transition hover:bg-[#c9f36c] hover:text-[#101412]"
              >
                <Download size={16} /> Download Resume
              </a>
              {onNavigate && (
                <button
                  onClick={() => onNavigate('Contact')}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c9f36c] px-6 py-3 text-sm font-bold text-[#101412] shadow-lg transition hover:brightness-105"
                >
                  Start Conversation <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
