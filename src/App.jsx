import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import './App.css'
import Home from './dashboard/Home'
import About from './dashboard/about'
import Experience from './dashboard/experiance'
import Skills from './dashboard/skill'
import Contact from './dashboard/contact'
import Projects, { FujifilmSites } from './dashboard/projects'

const navItems = [
  { label: 'Home', page: 'Home' },
  { label: 'Projects', page: 'Projects' },
  { label: 'About', page: 'About' },
  { label: 'Experience', page: 'Experience' },
  { label: 'Skills', page: 'Skills' },
  { label: 'Contact', page: 'Contact' },
]

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
      <header className="site-header">
        <div className="nav-wrap">
          <button className="brand-mark" onClick={() => handleNavigation('Home')} aria-label="Go to home">
            RT<span>.</span>
          </button>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <button
                key={item.page}
                className={activePage === item.page ? 'active' : ''}
                onClick={() => handleNavigation(item.page)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="nav-actions">
            <button className="talk-button" onClick={() => handleNavigation('Contact')}>
              Let's talk <ArrowUpRight size={15} />
            </button>
            <button
              className="menu-button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-nav">
            <div className="mobile-nav-list">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  className={activePage === item.page ? 'active' : ''}
                  onClick={() => handleNavigation(item.page)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

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
