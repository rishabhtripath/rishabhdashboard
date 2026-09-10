import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react'
import { fujifilmSites, projects } from '../data/projects'

export function FujifilmSites({ onBack }) {
  return (
    <section className="section-grid min-h-screen bg-[#101412] px-6 pb-24 pt-24 text-[#f4f7f2] md:pt-32">
      <div className="mx-auto max-w-5xl">
        <button onClick={onBack} className="mb-12 inline-flex items-center gap-2 text-sm font-bold text-[#91a096] transition hover:text-[#c9f36c]"><ArrowLeft size={16} /> Back to projects</button>
        <div className="reveal mb-12 border-b border-[#dcffbc]/10 pb-10">
          <p className="mb-4 text-xs font-bold uppercase tracking-[.28em] text-[#c9f36c]">Fujifilm iLive {fujifilmSites.length} / Website collection</p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">Fujifilm <em className="font-serif font-normal text-[#c9f36c]">iLive.</em></h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#91a096]">This project includes {fujifilmSites.length} live, country-specific Fujifilm iLive websites. Select any country below to open its live URL.</p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {fujifilmSites.map((site, index) => (
            <a key={site.name} href={site.url} target="_blank" rel="noreferrer" className={`professional-panel reveal reveal-delay-${(index % 3) + 1} group flex items-center justify-between rounded-xl p-5 transition hover:-translate-y-1 hover:border-[#c9f36c]/40`}>
              <span><span className="mr-4 text-xs font-bold text-[#c9f36c]">{String(index + 1).padStart(2, '0')}</span><span className="font-bold">{site.name}</span></span>
              <ExternalLink size={16} className="text-[#91a096] transition group-hover:text-[#c9f36c]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Projects({ onNavigate }) {
  const featuredProject = projects[0]
  const secondaryProjects = projects.slice(1)

  return (
    <section className="section-grid min-h-screen bg-[#101412] px-6 pb-24 pt-24 text-[#f4f7f2] md:pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-16 flex flex-col justify-between gap-8 border-b border-[#dcffbc]/10 pb-10 md:flex-row md:items-end">
          <div>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">Projects that make an <em className="font-serif font-normal text-[#c9f36c]">impact.</em></h1>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[#91a096]">A selection of live websites and digital experiences built for real audiences.</p>
        </div>

        <article className="featured-project professional-panel reveal reveal-delay-1 group overflow-hidden rounded-2xl transition duration-300 hover:border-[#c9f36c]/40">
          <button onClick={() => onNavigate('FujifilmSites')} className="featured-project-visual project-preview-link" aria-label={`Explore all ${fujifilmSites.length} Fujifilm websites`}>
            <div className="project-preview project-preview-fujifilm" style={{ backgroundImage: `url("${featuredProject.imageUrl}")` }}>
              <span className="featured-project-number">{featuredProject.number}</span>
              <span className="project-preview-action">Explore collection <ArrowUpRight size={15} /></span>
            </div>
          </button>
          <div className="featured-project-content">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="featured-project-kicker">Featured case study</span>
                <span className="featured-project-count">{fujifilmSites.length} live regional websites</span>
              </div>
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">{featuredProject.title}</h2>
              <p className="max-w-2xl text-base leading-8 text-[#91a096]">{featuredProject.description} Explore the complete country-wise collection to see every live regional URL.</p>
              <div className="project-tech-stack" aria-label={`${featuredProject.title} technology stack`}>
                <span className="project-tech-label">Tech stack</span>
                <div className="project-tech-list">
                  {featuredProject.techStack.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
              </div>
            </div>
            <button onClick={() => onNavigate('FujifilmSites')} className="featured-project-cta inline-flex items-center gap-2 text-sm font-bold text-[#101412]">Explore all {fujifilmSites.length} websites <ExternalLink size={15} /></button>
          </div>
        </article>

        <div className="projects-secondary-heading reveal reveal-delay-2">
          <span>More selected work</span>
          <span>Live websites & digital experiences</span>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {secondaryProjects.map((project, index) => (
            <article key={project.title} className={`professional-panel reveal reveal-delay-${index + 1} group overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-[#c9f36c]/40`}>
              <a href={project.brandUrl || project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}>
                <div className={`project-preview project-preview-${project.accent}`} style={project.imageUrl ? { backgroundImage: `url("${project.imageUrl}")` } : undefined}>
                  <span>{project.number}</span>
                </div>
              </a>
              <div className="p-6">
                <div className="mb-5 flex items-center justify-between gap-3"><span className="text-xs font-bold uppercase tracking-[.16em] text-[#c9f36c]">{project.type}</span><ArrowUpRight size={18} className="text-[#91a096] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c9f36c]" /></div>
                <h2 className="mb-3 text-2xl font-bold">{project.title}</h2>
                <p className="mb-7 text-sm leading-7 text-[#91a096]">{project.description}</p>
                <div className="project-tech-stack project-tech-stack-secondary" aria-label={`${project.title} technology stack`}>
                  <span className="project-tech-label">Tech stack</span>
                  <div className="project-tech-list">
                    {project.techStack.map((technology) => <span key={technology}>{technology}</span>)}
                  </div>
                </div>
                <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#f4f7f2] transition hover:text-[#c9f36c]">View project <ExternalLink size={15} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
