import { useEffect, useState } from 'react'
import SiteHeader from './components/layout/SiteHeader'
import About from './sections/AboutSection'
import Contact from './sections/ContactSection'
import Experience from './sections/ExperienceSection'
import Home from './sections/HomeSection'
import Projects, { FujifilmSites } from './sections/ProjectsSection'
import Skills from './sections/SkillsSection'

function App() {
  const [activePage, setActivePage] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavigation = (page) => {
    setActivePage(page)
    setMenuOpen(false)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activePage])

  return (
    <div className="app-shell">
      <SiteHeader
        activePage={activePage}
        menuOpen={menuOpen}
        onNavigate={handleNavigation}
        onToggleMenu={() => setMenuOpen((open) => !open)}
      />

      <main className="page-transition" key={activePage}>
      {activePage === 'About' ? (
        <About />
      ) : activePage === 'Experience' ? (
        <Experience />
      ) : activePage === 'Skills' ? (
        <Skills />
      ) : activePage === 'Contact' ? (
        <Contact />
      ) : activePage === 'Projects' ? (
        <Projects onNavigate={handleNavigation} />
      ) : activePage === 'FujifilmSites' ? (
        <FujifilmSites onBack={() => handleNavigation('Projects')} />
      ) : (
        <Home onNavigate={handleNavigation} />
      )}
      </main>
    </div>
  )
}

export default App
