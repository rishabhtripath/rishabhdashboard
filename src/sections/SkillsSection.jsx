import { ArrowUpRight } from 'lucide-react'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section className="section-grid relative min-h-screen overflow-hidden bg-[#101412] px-6 pb-24 pt-24 text-[#f4f7f2] md:pt-32">
      <div className="pointer-events-none absolute right-[-12%] top-16 h-80 w-80 rounded-full bg-[#c9f36c]/10 blur-[120px]" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="reveal mb-16 flex flex-col justify-between gap-8 border-b border-[#dcffbc]/10 pb-10 md:flex-row md:items-end">
          <div><h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">Tools I use to build <em className="font-serif font-normal text-[#c9f36c]">better.</em></h1></div>
          <p className="max-w-xs text-sm leading-6 text-[#91a096]">A practical toolkit shaped by shipping real products, not just collecting badges.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ name, category, icon: Icon, items }, index) => (
            <article key={name} className={`skill-card professional-panel reveal reveal-delay-${(index % 3) + 1} group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c9f36c]/40`}>
              <div className="skill-card-top mb-10 flex items-start justify-between"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c9f36c] text-[#101412]"><Icon size={20} /></div><ArrowUpRight size={18} className="text-[#91a096] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c9f36c]" /></div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[.18em] text-[#91a096]">{category}</p>
              <h2 className="mb-7 text-2xl font-bold">{name}</h2>
              <div className="skill-card-footer"><span className="skill-card-label">Core skills</span><span className="skill-card-dots" aria-hidden="true"><i /><i /><i /></span></div>
              <div className="skill-card-items" aria-label={`${name} skills`}>{items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}