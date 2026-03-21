import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import Sunburst from '../components/Sunburst'

export default function Events() {
  const { t } = useTranslation()

  const eventCards = [
    { title: t('events.e1_title'), desc: t('events.e1_desc'), icon: '🍷' },
    { title: t('events.e2_title'), desc: t('events.e2_desc'), icon: '💍' },
    { title: t('events.e3_title'), desc: t('events.e3_desc'), icon: '🏢' },
  ]

  return (
    <>
      <Header />

      {/* ── HERO ── */}
      <section
        className="relative flex items-end pt-20"
        style={{ minHeight: '65vh', background: 'var(--color-bg-dark)' }}
      >
        <div
          className="absolute inset-0 img-placeholder"
          aria-label="[ADD EVENTS HERO PHOTO — table setting or event]"
        >
          <span className="opacity-20">[ADD EVENTS HERO PHOTO]</span>
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(46,42,38,0.95) 0%, rgba(46,42,38,0.4) 70%, transparent 100%)' }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-16">
          <p className="section-subtitle text-left anim-fade-in-up delay-1">{t('nav.events')}</p>
          <h1
            className="font-['Georgia'] italic text-5xl md:text-7xl leading-tight anim-fade-in-up delay-2"
            style={{ color: 'var(--color-text)', maxWidth: '600px' }}
          >
            {t('events.subtitle')}
          </h1>
          <p
            className="mt-4 text-lg max-w-xl anim-fade-in-up delay-3"
            style={{ color: 'var(--color-text)', opacity: 0.82 }}
          >
            {t('events.intro')}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 anim-fade-in-up delay-4">
            <Link to="/contact" className="btn-outline">{t('events.cta_inquiry')}</Link>
            <Link to="/contact#reserve" className="btn-outline" style={{ borderColor: 'rgba(232,221,212,0.35)', color: 'var(--color-text-muted)' }}>
              {t('events.cta_reserve')}
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED EVENTS CARDS ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="section-subtitle">{t('events.title')}</p>
            <div className="divider" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {eventCards.map((card, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="card group">
                  {/* Placeholder image */}
                  <div
                    className="img-placeholder w-full mb-5 rounded"
                    style={{ height: '200px' }}
                    aria-label={`[ADD EVENT PHOTO: ${card.title}]`}
                  >
                    <span className="text-3xl">{card.icon}</span>
                  </div>
                  <h3 className="font-['Georgia'] italic text-xl mb-3" style={{ color: 'var(--color-accent)' }}>
                    {card.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.7' }}>
                    {card.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={350}>
            <div className="text-center mt-10">
              <Link to="/contact" className="btn-outline">{t('events.cta_inquiry')}</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── HOW TO FIND US ── */}
      <section className="py-20 md:py-24" style={{ background: 'var(--color-bg-dark)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <ScrollReveal>
            <div>
              <p className="section-subtitle text-left">{t('events.how_title')}</p>
              <h2 className="font-['Georgia'] italic text-4xl md:text-5xl mb-6" style={{ color: 'var(--color-text)' }}>
                {t('events.how_title')}
              </h2>
              <p className="mb-6 text-base leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                {t('events.how_text')}
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--color-accent)' }}>🚗</span> {t('events.parking')}
                </li>
                <li className="flex items-start gap-3" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--color-accent)' }}>♿</span> {t('events.access')}
                </li>
                <li className="flex items-start gap-3" style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--color-accent)' }}>📍</span> Zagreb, Sveti duh 38
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/contact" className="btn-outline">{t('events.cta_inquiry')}</Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            {/* Map placeholder */}
            <div
              className="img-placeholder w-full rounded"
              style={{ height: '380px' }}
              aria-label="[ADD GOOGLE MAPS EMBED]"
            >
              <div className="text-center p-6">
                <div className="text-4xl mb-3">📍</div>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                  Zagreb, Sveti duh 38<br />
                  [ADD GOOGLE MAPS EMBED]
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── HOSTS ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <ScrollReveal>
            <div
              className="img-placeholder w-full rounded"
              style={{ height: '400px' }}
              aria-label="[ADD HOSTS PHOTO]"
            >
              <span>[ADD HOSTS PHOTO]</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="flex justify-start mb-4">
              <Sunburst size={80} opacity={0.3} />
            </div>
            <p className="section-subtitle text-left">{t('events.hosts_title')}</p>
            <h2 className="font-['Georgia'] italic text-4xl mb-6" style={{ color: 'var(--color-text)' }}>
              Josipa &amp; Vjeko
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-muted)' }}>
              {t('events.hosts_text')}
            </p>
            <Link to="/about" className="btn-outline">{t('events.our_story')}</Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  )
}
