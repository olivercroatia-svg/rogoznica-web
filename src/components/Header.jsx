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

        {/* Right side - modified to move languages to hamburger */}
        <div className="flex items-center gap-4">
          <Link to="/contact#reserve" className="btn-outline text-sm hidden sm:inline-flex">
            {t('nav.reserve')}
          </Link>

          {/* Hamburger (always visible for languages) */}
          <button
            className="flex flex-col justify-center gap-1.5 p-2 ml-2"
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
      </div>

      {/* Mobile/Hamburger menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 top-16 md:top-20 z-40 flex flex-col items-center justify-center anim-fade-in"
          style={{ 
            backgroundColor: 'rgba(28, 11, 122, 0.95)', 
            backdropFilter: 'blur(15px)',
            transition: 'all 0.3s ease'
          }}
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex flex-col items-center gap-10 p-10">
            {/* Only show nav links in hamburger if they are hidden in desktop or on mobile */}
            <nav className="flex flex-col items-center gap-6 md:hidden">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => `nav-link text-2xl ${isActive ? 'active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div 
              className="flex flex-col items-center gap-6 p-10 rounded-3xl"
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.05)', 
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-xs uppercase tracking-[0.2em] text-[#a89880] font-bold opacity-80">
                {t('nav.change_language') || 'CHOOSE LANGUAGE'}
              </span>
              <LanguageSwitcher className="scale-125" />
            </div>

            <Link
              to="/contact#reserve"
              className="btn-solid mt-4 sm:hidden"
              onClick={() => setMenuOpen(false)}
            >
              {t('nav.reserve')}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
