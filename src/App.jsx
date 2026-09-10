import { useEffect, useState } from 'react'
import SiteHeader from './components/layout/SiteHeader'
import ScrollMotion from './components/visuals/ScrollMotion'
import About from './sections/AboutSection'
import Contact from './sections/ContactSection'
import Experience from './sections/ExperienceSection'
import Home from './sections/HomeSection'
import Projects, { FujifilmSites } from './sections/ProjectsSection'
import Skills from './sections/SkillsSection'

const validPages = new Set(['Home', 'Projects', 'About', 'Experience', 'Skills', 'Contact', 'FujifilmSites'])

const getPageFromHash = () => {
  const hashPage = window.location.hash.slice(1).toLowerCase()
  const page = [...validPages].find((candidate) => candidate.toLowerCase() === hashPage)
  return page || 'Home'
}

function App() {
  const [activePage, setActivePage] = useState(getPageFromHash)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavigation = (page) => {
    setActivePage(page)
    setMenuOpen(false)
    const nextHash = page === 'Home' ? '' : `#${page.toLowerCase()}`
    window.history.pushState({}, '', `${window.location.pathname}${nextHash}`)
  }

  useEffect(() => {
    const syncPageFromUrl = () => setActivePage(getPageFromHash())
    window.addEventListener('hashchange', syncPageFromUrl)
    window.addEventListener('popstate', syncPageFromUrl)

    return () => {
      window.removeEventListener('hashchange', syncPageFromUrl)
      window.removeEventListener('popstate', syncPageFromUrl)
    }
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activePage])

  return (
    <div className="app-shell">
      <ScrollMotion pageKey={activePage} />
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
