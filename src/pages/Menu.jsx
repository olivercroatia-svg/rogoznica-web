import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import Sunburst from '../components/Sunburst'

function MenuSection({ title, items, accentColor }) {
  return (
    <div className="mb-12">
      <ScrollReveal>
        <h2
          className="font-['Georgia'] italic text-3xl md:text-4xl mb-2"
          style={{ color: 'var(--color-text)' }}
        >
          {title}
        </h2>
        <div style={{ width: '40px', height: '1px', background: 'var(--color-accent)', marginBottom: '1.5rem', opacity: 0.5 }} />
      </ScrollReveal>

      <div className="space-y-0">
        {items.map((item, i) => (
          <ScrollReveal key={i} delay={i * 60}>
            <div
              className="flex justify-between items-start py-4 group transition-all duration-200"
              style={{ borderBottom: '1px solid var(--color-border)' }}
            >
              <div className="flex-1 pr-8">
                <h3
                  className="font-['Georgia'] text-base md:text-lg mb-1 group-hover:text-[#5881e0] transition-colors duration-200"
                  style={{ color: 'var(--color-text)', fontStyle: 'normal', fontWeight: '400' }}
                >
                  {item.name}
                </h3>
                {item.desc && (
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>{item.desc}</p>
                )}
              </div>
              <span
                className="font-['Georgia'] italic text-sm whitespace-nowrap mt-1"
                style={{ color: 'var(--color-accent)' }}
              >
                {item.price || ''}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}

export default function Menu() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('food')

  const tabs = [
    { id: 'food', label: t('menu.small_plates') + ' & ' + t('menu.from_fire') },
    { id: 'sides', label: t('menu.sides') + ' & ' + t('menu.desserts') },
    { id: 'drinks', label: t('menu.cocktails') + ' & ' + t('menu.wines') },
  ]

  const items = t('menu.items', { returnObjects: true })

  return (
    <>
      <Header />

      {/* ── HERO ── */}
      <section
        className="relative flex items-end pt-20"
        style={{ minHeight: '55vh', background: 'var(--color-bg-dark)' }}
      >
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&q=80"
          alt="Menu hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(46,42,38,0.95) 0%, rgba(46,42,38,0.5) 60%, rgba(46,42,38,0.2) 100%)' }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-14">
          <p className="section-subtitle text-left anim-fade-in-up delay-1">{t('nav.menu')}</p>
          <h1
            className="font-['Georgia'] italic text-5xl md:text-7xl anim-fade-in-up delay-2"
            style={{ color: 'var(--color-text)' }}
          >
            {t('menu.title')}
          </h1>
          <p
            className="mt-4 text-sm max-w-lg anim-fade-in-up delay-3"
            style={{ color: 'var(--color-text-muted)' }}
          >
            {t('menu.subtitle')}
          </p>
        </div>
      </section>

      {/* ── ALLERGY NOTE + DOWNLOAD ── */}
      <div style={{ background: 'var(--color-bg-dark)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-sm" style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
            {t('menu.allergy')}
          </p>
          <a
            href="#"
            className="btn-outline text-xs"
            aria-label="Download menu PDF"
          >
            {t('menu.download')}
          </a>
        </div>
      </div>

      {/* ── TABS ── */}
      <div style={{ background: 'var(--color-bg-dark)', borderBottom: '1px solid var(--color-border)', position: 'sticky', top: '0', zIndex: 30 }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex gap-6 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="py-4 whitespace-nowrap text-sm font-['Georgia'] italic transition-all duration-200"
              style={{
                color: activeTab === tab.id ? 'var(--color-accent)' : 'var(--color-text-muted)',
                borderBottom: activeTab === tab.id ? '2px solid var(--color-accent)' : '2px solid transparent',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === tab.id ? '2px solid var(--color-accent)' : '2px solid transparent',
                cursor: 'pointer',
                padding: '1rem 0',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── MENU CONTENT ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 md:px-10">

          {activeTab === 'food' && (
            <>
              <MenuSection title={t('menu.small_plates')} items={items?.small || []} />
              <div className="my-8 flex justify-center"><Sunburst size={60} opacity={0.25} /></div>
              <MenuSection title={t('menu.from_fire')} items={items?.fire || []} />
            </>
          )}

          {activeTab === 'sides' && (
            <>
              <MenuSection title={t('menu.sides')} items={items?.sides || []} />
              <div className="my-8 flex justify-center"><Sunburst size={60} opacity={0.25} /></div>
              <MenuSection title={t('menu.desserts')} items={items?.desserts || []} />
            </>
          )}

          {activeTab === 'drinks' && (
            <>
              <MenuSection title={t('menu.cocktails')} items={items?.cocktails || []} />
              <div className="my-8 flex justify-center"><Sunburst size={60} opacity={0.25} /></div>
              <MenuSection title={t('menu.wines')} items={items?.wines || []} />
            </>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16" style={{ background: 'var(--color-bg-dark)' }}>
        <ScrollReveal>
          <div className="max-w-xl mx-auto px-6 text-center">
            <div className="flex justify-center mb-6"><Sunburst size={80} opacity={0.35} /></div>
            <h2 className="section-title mb-4">{t('hero.cta_reserve')}</h2>
            <div className="divider" />
            <Link to="/contact#reserve" className="btn-outline mt-4 inline-block">{t('hero.cta_reserve')}</Link>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </>
  )
}
