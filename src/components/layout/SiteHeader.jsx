import { ArrowUpRight, Menu, X } from 'lucide-react'
import { navItems } from '../../config/navigation'

export default function SiteHeader({ activePage, menuOpen, onNavigate, onToggleMenu }) {
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <button className="brand-mark" onClick={() => onNavigate('Home')} aria-label="Go to home">
          RT<span>.</span>
        </button>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <button
              key={item.page}
              className={activePage === item.page ? 'active' : ''}
              onClick={() => onNavigate(item.page)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="talk-button" onClick={() => onNavigate('Contact')}>
            Let's talk <ArrowUpRight size={15} />
          </button>
          <button
            className="menu-button"
            onClick={onToggleMenu}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
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
                onClick={() => onNavigate(item.page)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
