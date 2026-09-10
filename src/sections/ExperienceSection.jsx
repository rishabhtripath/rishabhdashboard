import { ArrowUpRight, BriefcaseBusiness, Check } from 'lucide-react'

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

        <div className="experience-timeline reveal reveal-delay-1">
          <div className="experience-timeline-axis" aria-hidden="true" />
          <article className="experience-timeline-entry experience-timeline-entry-start">
            <div className="experience-timeline-marker"><span>2025</span></div>
            <div className="experience-timeline-card">
              <p className="experience-timeline-date">March 2025</p>
              <h3>Joined Singsys as a Trainee Software Engineer</h3>
              <p>Started my professional journey by learning production workflows and contributing to responsive web experiences.</p>
            </div>
          </article>
          <article className="experience-timeline-entry">
            <div className="experience-timeline-marker"><BriefcaseBusiness size={18} /></div>
            <div className="experience-timeline-card">
              <p className="experience-timeline-label">Growth milestone</p>
              <h3>Frontend & CMS Development</h3>
              <p>Built and maintained responsive interfaces, enterprise websites and CMS experiences using modern frontend practices.</p>
            </div>
          </article>
          <article className="experience-timeline-entry">
            <div className="experience-timeline-marker"><Check size={18} /></div>
            <div className="experience-timeline-card">
              <p className="experience-timeline-label">Production experience</p>
              <h3>International Enterprise Projects</h3>
              <p>Contributed to live international websites while handling responsive UI, Drupal implementation and production support.</p>
            </div>
          </article>
          <article className="experience-timeline-entry">
            <div className="experience-timeline-marker"><ArrowUpRight size={18} /></div>
            <div className="experience-timeline-card">
              <p className="experience-timeline-label">Current focus</p>
              <h3>Client Communication & Delivery</h3>
              <p>Work directly with clients to clarify requirements, review changes and prepare updates for production publishing.</p>
            </div>
          </article>
          <article className="experience-timeline-entry experience-timeline-entry-current">
            <div className="experience-timeline-marker"><span>2026</span></div>
            <div className="experience-timeline-card experience-timeline-card-current">
              <p className="experience-timeline-date">Present</p>
              <h3>Software Engineer</h3>
              <p>Continuing to deliver maintainable frontend and CMS solutions at Singsys Software Services Pvt. Ltd.</p>
            </div>
          </article>
        </div>

        <div className="beyond-code-panel professional-panel reveal reveal-delay-3">
          <div className="beyond-code-heading">
            <p className="featured-project-kicker">Beyond code</p>
            <h3>Working closely with clients</h3>
          </div>
          <div className="beyond-code-content">
            <p>
              I regularly collaborate with clients to understand requirements, clarify tickets, discuss implementation details, review changes and ensure updates meet expectations before production publishing.
            </p>
            <div className="beyond-code-points" aria-label="Client collaboration responsibilities">
              <span>Requirement discussions</span>
              <span>Ticket clarification</span>
              <span>Implementation reviews</span>
              <span>Production readiness</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
