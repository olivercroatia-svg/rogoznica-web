import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Sunburst from './Sunburst'

export default function Footer() {
  const { t } = useTranslation()

  const quickLinks = [
    { to: '/',        label: t('nav.home') },
    { to: '/about',   label: t('nav.about') },
    { to: '/menu',    label: t('nav.menu') },
    { to: '/events',  label: t('nav.events') },
    { to: '/gallery', label: t('nav.gallery') },
    { to: '/contact', label: t('nav.contact') },
  ]

  return (
    <footer style={{ background: 'var(--color-bg-dark)', borderTop: '1px solid var(--color-border)' }}>
      {/* Top sunburst divider */}
      <div className="flex justify-center pt-10 pb-4">
        <Sunburst size={80} opacity={0.4} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-8" style={{ borderTop: '1px solid var(--color-border)' }}>

          {/* Brand + tagline */}
          <div>
            <Link to="/" className="font-['Georgia'] italic text-2xl tracking-widest block mb-3" style={{ color: 'var(--color-text)', letterSpacing: '0.12em' }}>
              Rogoznica
            </Link>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: '1.7' }}>
              {t('footer.tagline')}
            </p>
            <div className="mt-4 space-y-1" style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
              <p>{t('info.location_val')}</p>
              <a href="tel:+3851000000" style={{ color: 'var(--color-accent)', display: 'block', transition: 'opacity 0.2s' }}>
                {t('info.phone_val')}
              </a>
              <a href="mailto:reservations@restoran-rogoznica.hr" style={{ color: 'var(--color-accent)', display: 'block', transition: 'opacity 0.2s', wordBreak: 'break-all' }}>
                {t('info.email_val')}
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-['Georgia'] italic text-sm tracking-widest mb-4 uppercase" style={{ color: 'var(--color-accent)', letterSpacing: '0.15em' }}>
              {t('footer.quick_links')}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="nav-link text-sm"
                    style={{ fontSize: '0.875rem' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours + social */}
          <div>
            <h3 className="font-['Georgia'] italic text-sm tracking-widest mb-4 uppercase" style={{ color: 'var(--color-accent)', letterSpacing: '0.15em' }}>
              {t('info.hours')}
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: '1.8' }}>
              {t('info.hours_val')}
            </p>

            <h3 className="font-['Georgia'] italic text-sm tracking-widest mt-6 mb-3 uppercase" style={{ color: 'var(--color-accent)', letterSpacing: '0.15em' }}>
              {t('footer.follow')}
            </h3>
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s ease' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s ease' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* TripAdvisor-ish */}
              <a
                href="#"
                aria-label="TripAdvisor"
                style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s ease' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 text-xs"
          style={{ borderTop: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}
        >
          <p>© {new Date().getFullYear()} Restoran Rogoznica. {t('footer.legal')}.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-[#5881e0] transition-colors">{t('footer.privacy')}</Link>
            <Link to="/terms" className="hover:text-[#5881e0] transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
