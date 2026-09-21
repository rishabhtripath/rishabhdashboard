export default function Experience() {
  return (
    <section
      id="experience"
      className="section-grid relative min-h-screen overflow-hidden bg-[#101412] px-6 pb-24 pt-24 text-[#f4f7f2] md:pt-32"
    >
      <div className="pointer-events-none absolute right-[-12%] top-16 h-80 w-80 rounded-full bg-[#c9f36c]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-16 border-b border-[#dcffbc]/10 pb-10">
          <p className="mb-4 text-xs font-bold uppercase tracking-[.28em] text-[#c9f36c]">Experience / Career progression</p>
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Growing through <em className="font-serif font-normal text-[#c9f36c]">real work.</em>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#91a096]">A clear progression from hands-on training to owning software engineering work, collaborating with clients, and delivering dependable digital experiences.</p>
        </div>

        <div className="experience-overview">
          <div className="experience-overview-copy">
            <p className="experience-eyebrow">Current focus</p>
            <h3>Software Engineer</h3>
            <p>Building responsive, user-focused web experiences with React.js, JavaScript, Drupal, HTML, and CSS. I work closely with clients and teams to turn requirements into clear, reliable solutions and deliver updates on time.</p>
          </div>
          <div className="experience-overview-stats" aria-label="Experience highlights">
            <div><strong>2</strong><span>Career stages</span></div>
            <div><strong>2025</strong><span>Started my journey</span></div>
            <div><strong>Now</strong><span>Software Engineer</span></div>
          </div>
        </div>

        <div className="experience-timeline" aria-label="Professional experience timeline">
          <article className="experience-entry experience-entry-current">
            <div className="experience-entry-marker" aria-hidden="true"><span>02</span></div>
            <div className="experience-entry-content">
              <div className="experience-entry-meta"><span>March 2026 – Present</span><span>Current role</span></div>
              <h3>Software Engineer</h3>
              <p>Contribute to end-to-end web development across client projects, from understanding business requirements to implementing responsive interfaces and refining the final experience.</p>
              <div className="experience-tags"><span>React.js</span><span>JavaScript</span><span>Client collaboration</span><span>Delivery ownership</span></div>
            </div>
          </article>

          <article className="experience-entry">
            <div className="experience-entry-marker" aria-hidden="true"><span>01</span></div>
            <div className="experience-entry-content">
              <div className="experience-entry-meta"><span>March 2025 – March 2026</span><span>Foundation year</span></div>
              <h3>Trainee Software Engineer</h3>
              <p>Built a strong foundation in modern web development through hands-on project work, learning to create responsive interfaces, solve implementation challenges, and support the team throughout delivery.</p>
              <div className="experience-tags"><span>HTML & CSS</span><span>Drupal</span><span>Responsive UI</span><span>Problem-solving</span></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
