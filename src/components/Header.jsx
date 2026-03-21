import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header({ heroRef }) {
  const { t } = useTranslation()
  const [sticky, setSticky] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    const onScroll = () => {
      if (heroRef?.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom
        setSticky(heroBottom <= 0)
      } else {
        setSticky(window.scrollY > 80)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [heroRef])

  const navLinks = [
    { to: '/',        label: t('nav.home') },
    { to: '/about',   label: t('nav.about') },
    { to: '/menu',    label: t('nav.menu') },
    { to: '/events',  label: t('nav.events') },
    { to: '/gallery', label: t('nav.gallery') },
    { to: '/contact', label: t('nav.contact') },
  ]

  const headerBg = sticky
    ? 'bg-[#2b2260] shadow-lg'
    : 'bg-transparent'

  const headerStyle = sticky
    ? { animation: 'slideDown 0.35s ease both' }
    : {}

  return (
    <header
      className={`w-full z-50 transition-colors duration-300 ${sticky ? 'fixed top-0 left-0' : 'absolute top-0 left-0'} ${headerBg}`}
      style={headerStyle}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <Link
          to="/"
          className="font-['Georgia'] italic text-xl md:text-2xl tracking-wider transition-opacity duration-300"
          style={{ color: 'var(--color-text)', opacity: visible ? 1 : 0, letterSpacing: '0.12em' }}
        >
          Rogoznica
        </Link>

        {/* Desktop nav */}
        <nav 
          className="hidden md:flex items-center gap-6 lg:gap-8 px-6 py-2.5 rounded-full" 
          style={{ 
            backgroundColor: 'rgba(30, 60, 110, 0.45)', 
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.08)'
          }}
          aria-label="Main navigation"
        >
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Link to="/contact#reserve" className="btn-outline text-sm">
            {t('nav.reserve')}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: 'var(--color-accent)',
              transform: menuOpen ? 'translateY(5px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: 'var(--color-accent)',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{
              background: 'var(--color-accent)',
              transform: menuOpen ? 'translateY(-5px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 top-16 z-40 flex flex-col items-center justify-center gap-6 anim-fade-in"
          style={{ background: 'var(--color-bg-dark)' }}
          onClick={() => setMenuOpen(false)}
        >
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav-link text-xl ${isActive ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <LanguageSwitcher className="mt-4" />
          <Link
            to="/contact#reserve"
            className="btn-outline mt-2"
            onClick={() => setMenuOpen(false)}
          >
            {t('nav.reserve')}
          </Link>
        </div>
      )}
    </header>
  )
}
