import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'hr', label: '🇭🇷 HR' },
  { code: 'en', label: '🇬🇧 EN' },
  { code: 'de', label: '🇩🇪 DE' },
  { code: 'sl', label: '🇸🇮 SL' },
  { code: 'it', label: '🇮🇹 IT' },
]

export default function LanguageSwitcher({ className = '' }) {
  const { i18n } = useTranslation()
  const current = i18n.language?.slice(0, 2) || 'hr'

  return (
    <div className={`flex items-center gap-1 ${className}`} role="navigation" aria-label="Language selector">
      {LANGUAGES.map((lang, idx) => (
        <span key={lang.code} className="flex items-center">
          <button
            onClick={() => i18n.changeLanguage(lang.code)}
            aria-current={current === lang.code ? 'true' : undefined}
            style={{
              color: current === lang.code ? 'var(--color-accent)' : 'var(--color-text-muted)',
              fontStyle: 'italic',
              fontFamily: 'Georgia, serif',
              fontSize: '0.75rem',
              letterSpacing: '0.05em',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '2px 0',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={e => { if (current !== lang.code) e.target.style.color = 'var(--color-text)' }}
            onMouseLeave={e => { if (current !== lang.code) e.target.style.color = 'var(--color-text-muted)' }}
          >
            {lang.label}
          </button>
          {idx < LANGUAGES.length - 1 && (
            <span style={{ color: 'var(--color-border)', margin: '0 2px', fontSize: '0.65rem' }}>|</span>
          )}
        </span>
      ))}
    </div>
  )
}
