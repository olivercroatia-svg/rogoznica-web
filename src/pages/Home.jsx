import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import Sunburst from '../components/Sunburst'

/* ── Placeholder hero images (replace with real photos) ── */
const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&q=80',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&q=80',
]

import { useState, useEffect } from 'react'

function HeroSlider() {
  const [index, setIndex] = useState(0)
  const len = HERO_IMAGES.length

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % len), 5000)
    return () => clearInterval(t)
  }, [len])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {HERO_IMAGES.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          loading={i === 0 ? 'eager' : 'lazy'}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}
      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-overlay" />
    </div>
  )
}

export default function Home() {
  const { t } = useTranslation()
  const heroRef = useRef(null)

  const featured = t('featured.items', { returnObjects: true })

  return (
    <>
      <Header heroRef={heroRef} />

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative w-full flex items-end"
        style={{ minHeight: '100svh' }}
        aria-label="Hero"
      >
        <HeroSlider />

        {/* Slider controls */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 z-10">
          <button
            aria-label="Previous slide"
            className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200"
            style={{ color: 'var(--color-accent)', border: '1px solid var(--color-border)' }}
            onClick={() => {}}
          >
            ‹
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 z-10">
          <button
            aria-label="Next slide"
            className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200"
            style={{ color: 'var(--color-accent)', border: '1px solid var(--color-border)' }}
            onClick={() => {}}
          >
            ›
          </button>
        </div>

        {/* Hero text */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24">
          <p
            className="anim-fade-in-up delay-1 mb-3 uppercase tracking-widest text-xs"
            style={{ color: 'var(--color-accent)' }}
          >
            Zagreb, Hrvatska
          </p>
          <h1
            className="anim-fade-in-up delay-2 font-['Georgia'] italic text-5xl md:text-7xl lg:text-8xl leading-none mb-4"
            style={{ color: 'var(--color-text)', maxWidth: '700px' }}
          >
            {t('hero.subtitle')}
          </h1>
          <p
            className="anim-fade-in-up delay-3 text-base md:text-lg mb-8"
            style={{ color: 'var(--color-text)', opacity: 0.85, maxWidth: '480px' }}
          >
            {t('hero.tagline')}
          </p>
          <div className="anim-fade-in-up delay-4 flex flex-wrap gap-3">
            <Link to="/contact#reserve" className="btn-outline">{t('hero.cta_reserve')}</Link>
            <Link to="/menu" className="btn-outline" style={{ borderColor: 'rgba(232,221,212,0.4)', color: 'var(--color-text)' }}>
              {t('hero.cta_menu')}
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY HERE ── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 pointer-events-none">
          <Sunburst size={280} opacity={0.15} />
        </div>

        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="section-subtitle">{t('why.title')}</p>
            <div className="divider" />
            <p
              className="text-center text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
              style={{ color: 'var(--color-text)', opacity: 0.88 }}
            >
              {t('why.text')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FEATURED DISHES ── */}
      <section className="py-20 md:py-28" style={{ background: 'var(--color-bg-dark)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <ScrollReveal>
            <p className="section-subtitle">{t('featured.subtitle')}</p>
            <h2 className="section-title">{t('featured.title')}</h2>
            <div className="divider" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {Array.isArray(featured) && featured.map((item, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="card group overflow-hidden">
                  {/* Placeholder food image */}
                  <div
                    className="img-placeholder w-full mb-4 rounded"
                    style={{ height: '200px' }}
                    aria-label={`[ADD PHOTO: ${item.name}]`}
                  >
                    <span className="text-center px-4">[ADD PHOTO]</span>
                  </div>
                  <div
                    className="text-xs uppercase tracking-widest mb-2"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    ✦
                  </div>
                  <h3
                    className="font-['Georgia'] italic text-xl mb-2"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {item.name}
                  </h3>
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="text-center mt-10">
              <Link to="/menu" className="btn-outline">{t('featured.cta')}</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SPLIT: image + why section ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <ScrollReveal>
            {/* Left: placeholder image */}
            <div
              className="img-placeholder rounded w-full"
              style={{ height: '420px' }}
              aria-label="[ADD INTERIOR PHOTO]"
            >
              <span>[ADD INTERIOR PHOTO]</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div>
              <p className="section-subtitle text-left">{t('space.subtitle')}</p>
              <h2
                className="font-['Georgia'] italic text-4xl md:text-5xl mb-6"
                style={{ color: 'var(--color-text)' }}
              >
                {t('space.title')}
              </h2>
              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center py-3" style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <span style={{ color: 'var(--color-text-muted)' }}>{t('space.indoor')}</span>
                  <span style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>{t('space.indoor_val')}</span>
                </div>
                <div className="flex justify-between items-center py-3" style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <span style={{ color: 'var(--color-text-muted)' }}>{t('space.terrace')}</span>
                  <span style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>{t('space.terrace_val')}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact#reserve" className="btn-outline">{t('hero.cta_reserve')}</Link>
                <Link to="/events" className="btn-outline" style={{ borderColor: 'rgba(232,221,212,0.3)', color: 'var(--color-text-muted)' }}>
                  {t('nav.events')}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── QUICK INFO ── */}
      <section className="py-16 md:py-24" style={{ background: 'var(--color-bg-dark)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <ScrollReveal>
            <div className="flex justify-center mb-8">
              <Sunburst size={100} opacity={0.45} />
            </div>
            <h2 className="section-title">{t('info.title')}</h2>
            <div className="divider" />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {[
              { icon: '📞', label: t('info.phone'), value: t('info.phone_val'), href: 'tel:+3851000000' },
              { icon: '✉', label: t('info.email'), value: t('info.email_val'), href: 'mailto:reservations@restoran-rogoznica.hr' },
              { icon: '📍', label: t('info.location'), value: t('info.location_val'), href: null },
              { icon: '⏰', label: t('info.hours'), value: t('info.hours_val'), href: null },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div
                  className="text-center p-6 rounded transition-all duration-300"
                  style={{ border: '1px solid var(--color-border)', background: 'var(--color-bg)' }}
                >
                  <div className="text-2xl mb-3 anim-shimmer">{item.icon}</div>
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'var(--color-accent)' }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="block text-sm transition-colors duration-200"
                      style={{ color: 'var(--color-text)', wordBreak: 'break-word' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text)'}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm" style={{ color: 'var(--color-text)' }}>{item.value}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2">
            <Sunburst size={200} opacity={0.1} />
          </div>
          <div className="absolute right-1/4 top-1/2 -translate-y-1/2 translate-x-1/2">
            <Sunburst size={150} opacity={0.08} />
          </div>
        </div>
        <ScrollReveal>
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="section-title text-4xl md:text-5xl mb-4">{t('about.hero_title')}</h2>
            <p className="mb-8" style={{ color: 'var(--color-text-muted)' }}>{t('about.hero_sub')}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact#reserve" className="btn-outline">{t('hero.cta_reserve')}</Link>
              <Link to="/about" className="btn-outline" style={{ borderColor: 'rgba(232,221,212,0.3)', color: 'var(--color-text-muted)' }}>
                {t('about.our_story')}
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </>
  )
}
