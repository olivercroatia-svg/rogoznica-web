import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import Sunburst from '../components/Sunburst'

export default function About() {
  const { t } = useTranslation()

  const values = [
    { title: t('about.val1_title'), text: t('about.val1_text'), icon: '🌿' },
    { title: t('about.val2_title'), text: t('about.val2_text'), icon: '⭐' },
    { title: t('about.val3_title'), text: t('about.val3_text'), icon: '✦' },
  ]

  return (
    <>
      <Header />

      {/* ── HERO ── */}
      <section
        className="relative flex items-end pt-20"
        style={{ minHeight: '70vh', background: 'var(--color-bg-dark)' }}
      >
        {/* Background placeholder image */}
        <div
          className="absolute inset-0 img-placeholder"
          aria-label="[ADD ABOUT HERO PHOTO — interior or fire/kitchen]"
        >
          <span className="opacity-30">[ADD ABOUT HERO PHOTO]</span>
        </div>
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(46,42,38,0.9) 0%, rgba(46,42,38,0.3) 60%, transparent 100%)' }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-16">
          <p className="section-subtitle text-left anim-fade-in-up delay-1">{t('nav.about')}</p>
          <h1
            className="font-['Georgia'] italic text-5xl md:text-7xl leading-tight anim-fade-in-up delay-2"
            style={{ color: 'var(--color-text)', maxWidth: '640px' }}
          >
            {t('about.hero_title')}
          </h1>
          <p
            className="mt-4 text-lg max-w-lg anim-fade-in-up delay-3"
            style={{ color: 'var(--color-text)', opacity: 0.8 }}
          >
            {t('about.hero_sub')}
          </p>
        </div>
      </section>

      {/* ── VALUES TEXT ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <ScrollReveal>
            <h2 className="section-title">{t('about.values_title')}</h2>
            <div className="divider" />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: 'var(--color-text)', opacity: 0.88 }}>
              {t('about.values_text')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: 'var(--color-text)', opacity: 0.88 }}>
              {t('about.values_text2')}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--color-text)', opacity: 0.88 }}>
              {t('about.values_text3')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── THREE VALUE CARDS ── */}
      <section className="py-16 md:py-24" style={{ background: 'var(--color-bg-dark)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex justify-center mb-8">
            <Sunburst size={90} opacity={0.35} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="card text-center">
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h3 className="font-['Georgia'] italic text-xl mb-3" style={{ color: 'var(--color-accent)' }}>
                    {v.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.7' }}>
                    {v.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div
              className="img-placeholder rounded w-full"
              style={{ height: '460px' }}
              aria-label="[ADD TEAM PHOTO — Josipa & Vjeko]"
            >
              <span>[ADD TEAM PHOTO]</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div>
              <p className="section-subtitle text-left">{t('about.team_title')}</p>
              <h2 className="font-['Georgia'] italic text-4xl md:text-5xl mb-6" style={{ color: 'var(--color-text)' }}>
                Josipa &amp; Vjeko
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-text-muted)' }}>
                {t('about.team_text')}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact#reserve" className="btn-outline">{t('about.cta_reserve')}</Link>
                <Link to="/events" className="btn-outline" style={{ borderColor: 'rgba(232,221,212,0.3)', color: 'var(--color-text-muted)' }}>
                  {t('about.cta_event')}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 relative overflow-hidden" style={{ background: 'var(--color-bg-dark)' }}>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Sunburst size={300} opacity={0.06} />
        </div>
        <ScrollReveal>
          <div className="max-w-xl mx-auto px-6 text-center relative z-10">
            <h2 className="section-title mb-4">{t('about.cta_reserve')}</h2>
            <div className="divider" />
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Link to="/contact#reserve" className="btn-outline">{t('about.cta_reserve')}</Link>
              <Link to="/events" className="btn-outline" style={{ borderColor: 'rgba(232,221,212,0.3)', color: 'var(--color-text-muted)' }}>
                {t('about.cta_event')}
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </>
  )
}
