import { ArrowLeft, ArrowUpRight, ExternalLink, LayoutTemplate } from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'Fujifilm Website',
    description: 'A live digital experience for Fujifilm, designed with a clear content structure and a polished, responsive interface For the 16 different countries.',
    type: 'Live website',
    accent: 'fujifilm',
    brandUrl: 'https://asset.fujifilm.com/www/in/files/2021-03/f311886a76f1c93272fa181656346f34/logo_06.jpg',
    imageUrl: 'https://asset.fujifilm.com/www/in/files/2021-03/f311886a76f1c93272fa181656346f34/logo_06.jpg',
  },
  {
    number: '02',
    title: 'Techcomp',
    description: 'A professional website experience focused on presenting technology solutions with clarity, trust, and strong visual hierarchy.',
    type: 'Live website',
    accent: 'techcomp',
    url: 'https://techcomp.in/',
  },
  {
    number: '03',
    title: 'Bharat Ecovolt',
    description: 'A modern web presence for a sustainability-focused brand, balancing approachable storytelling with a structured product experience.',
    type: 'Brand website',
    accent: 'ecovilt',
    url: 'https://bharatecovolt.com',
  },
  {
    number: '04',
    title: 'Shikhafab',
    description: 'A focused brand ecommerce website experience with a clean, accessible interface and a strong product-first presentation.',
    type: 'Brand website',
    accent: 'shikhafab',
    url: 'https://shikhafab.com',
  },
]

const fujifilmUrls = [
  'https://www.fujifilm.com/fbkr/ko',
  'https://www.fujifilm.com/fbau',
  'https://www.fujifilm.com/fbca',
  'https://www.fujifilm.com/fbcn',
  'https://www.fujifilm.com/fbhk',
  'https://www.fujifilm.com/fbhk/zh-hk',
  'https://www.fujifilm.com/fbmm',
  'https://www.fujifilm.com/fbmy',
  'https://www.fujifilm.com/fbnz',
  'https://www.fujifilm.com/fbph',
  'https://www.fujifilm.com/fbsg',
  'https://www.fujifilm.com/fbth',
  'https://www.fujifilm.com/fbtw',
  'https://www.fujifilm.com/fbtw/zh-tw',
  'https://www.fujifilm.com/fbvn',
  'https://www.fujifilm.com/fbvn/vi',
]

const fujifilmSites = fujifilmUrls.map((url, index) => ({
  name: `Fujifilm iLive website ${index + 1}`,
  url,
}))

export function FujifilmSites({ onBack }) {
  return (
    <section className="section-grid min-h-screen bg-[#101412] px-6 pb-24 pt-24 text-[#f4f7f2] md:pt-32">
      <div className="mx-auto max-w-5xl">
        <button onClick={onBack} className="mb-12 inline-flex items-center gap-2 text-sm font-bold text-[#91a096] transition hover:text-[#c9f36c]"><ArrowLeft size={16} /> Back to projects</button>
        <div className="reveal mb-12 border-b border-[#dcffbc]/10 pb-10">
          <p className="mb-4 text-xs font-bold uppercase tracking-[.28em] text-[#c9f36c]">Fujifilm iLive {fujifilmSites.length} / Website collection</p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">Fujifilm <em className="font-serif font-normal text-[#c9f36c]">iLive.</em></h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[#91a096]">All {fujifilmSites.length} Fujifilm iLive website URLs are listed below.</p>
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
  return (
    <section className="section-grid min-h-screen bg-[#101412] px-6 pb-24 pt-24 text-[#f4f7f2] md:pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-16 flex flex-col justify-between gap-8 border-b border-[#dcffbc]/10 pb-10 md:flex-row md:items-end">
          <div>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">Projects that make an <em className="font-serif font-normal text-[#c9f36c]">impact.</em></h1>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[#91a096]">A selection of live websites and digital experiences built for real audiences.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <article key={project.title} className={`professional-panel reveal reveal-delay-${index + 1} group overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-[#c9f36c]/40`}>
              <a href={project.brandUrl} target="_blank" rel="noreferrer" aria-label="View Fujifilm brand logo page">
                <div className={`project-preview project-preview-${project.accent}`} style={project.imageUrl ? { backgroundImage: `url("${project.imageUrl}")` } : undefined}>
                  <span>{project.number}</span>
                  <LayoutTemplate size={30} strokeWidth={1.4} />
                </div>
              </a>
              <div className="p-6">
                <div className="mb-5 flex items-center justify-between gap-3"><span className="text-xs font-bold uppercase tracking-[.16em] text-[#c9f36c]">{project.type}</span><ArrowUpRight size={18} className="text-[#91a096] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c9f36c]" /></div>
                <h2 className="mb-3 text-2xl font-bold">{project.title}</h2>
                <p className="mb-7 text-sm leading-7 text-[#91a096]">{project.description}</p>
                {project.number === '01' ? (
                  <button onClick={() => onNavigate('FujifilmSites')} className="inline-flex items-center gap-2 text-sm font-bold text-[#f4f7f2] transition hover:text-[#c9f36c]">View project <ExternalLink size={15} /></button>
                ) : (
                  <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#f4f7f2] transition hover:text-[#c9f36c]">View project <ExternalLink size={15} /></a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
