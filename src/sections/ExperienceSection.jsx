export default function Experience() {
  return (
    <section
      id="experience"
      className="section-grid relative min-h-screen overflow-hidden bg-[#101412] px-6 pb-24 pt-24 text-[#f4f7f2] md:pt-32"
    >
      <div className="pointer-events-none absolute right-[-12%] top-16 h-80 w-80 rounded-full bg-[#c9f36c]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-16 border-b border-[#dcffbc]/10 pb-10">
          <h2 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            My professional <em className="font-serif font-normal text-[#c9f36c]">journey.</em>
          </h2>
        </div>

        <div className="experience-summary">
          <h3>Software Engineer</h3>
          <p>I have 1.6+ years of experience working as a Software Engineer and contributing to several projects for different clients and business requirements. My work has helped me grow through real-world development, project collaboration, problem-solving, and the responsibility of delivering quality work on time.</p>
          <p>Along with development work, I communicate with clients on a daily basis to understand their needs, discuss updates, and keep projects moving in the right direction. I bring strong communication skills, a practical approach to problem-solving, and a willingness to learn and contribute throughout every stage of a project.</p>
        </div>
      </div>
    </section>
  )
}
