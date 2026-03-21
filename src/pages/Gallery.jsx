import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import Sunburst from '../components/Sunburst'

/* Gallery items — replace src with real photos */
const GALLERY_ITEMS = [
  { id: 1, cat: 'food',     label: 'Teletina ispod peke',           src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=75', span: 'col-span-2 row-span-2' },
  { id: 2, cat: 'interior', label: 'Terasa u večeri',               src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=75', span: '' },
  { id: 3, cat: 'food',     label: 'Salata od hobotnice',            src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=75', span: '' },
  { id: 4, cat: 'wine',     label: 'Selekcija vina',                src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=75', span: '' },
  { id: 5, cat: 'interior', label: 'Detalji interijera',            src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=75', span: '' },
  { id: 6, cat: 'events',   label: "Chef's Table",                  src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=75', span: '' },
  { id: 7, cat: 'food',     label: 'Cheesecake sa šljivom',         src: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=75', span: '' },
  { id: 8, cat: 'team',     label: 'Naš tim',                      src: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=75', span: '' },
  { id: 9, cat: 'wine',     label: 'Rakije i likerije',             src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=75', span: '' },
  { id: 10, cat: 'interior', label: 'Trpezarija',                   src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=75', span: '' },
  { id: 11, cat: 'events',   label: 'Vjenčanje u Rogoznici',        src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&q=75', span: '' },
  { id: 12, cat: 'food',     label: 'Riblji ulov dana',             src: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=75', span: '' },
]

export default function Gallery() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filters = [
    { id: 'all',      label: t('gallery.filter_all') },
    { id: 'food',     label: t('gallery.filter_food') },
    { id: 'wine',     label: t('gallery.filter_wine') },
    { id: 'interior', label: t('gallery.filter_interior') },
    { id: 'events',   label: t('gallery.filter_events') },
    { id: 'team',     label: t('gallery.filter_team') },
  ]

  const filtered = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.cat === activeFilter)

  const openLightbox = (item) => setLightbox(item)
  const closeLightbox = () => setLightbox(null)

  return (
    <>
      <Header />

      {/* ── HERO ── */}
      <section
        className="relative flex items-end pt-20"
        style={{ minHeight: '50vh', background: 'var(--color-bg-dark)' }}
      >
        <div
          className="absolute inset-0 img-placeholder"
          aria-label="[ADD GALLERY HERO PHOTO]"
        >
          <span className="opacity-20">[ADD GALLERY HERO PHOTO]</span>
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(46,42,38,0.95) 0%, rgba(46,42,38,0.5) 60%, transparent 100%)' }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-14">
          <p className="section-subtitle text-left anim-fade-in-up delay-1">{t('nav.gallery')}</p>
          <h1
            className="font-['Georgia'] italic text-5xl md:text-7xl anim-fade-in-up delay-2"
            style={{ color: 'var(--color-text)' }}
          >
            {t('gallery.title')}
          </h1>
          <p
            className="mt-3 text-base anim-fade-in-up delay-3"
            style={{ color: 'var(--color-text)', opacity: 0.7 }}
          >
            {t('gallery.tagline')}
          </p>
        </div>
      </section>

      {/* ── FILTERS ── */}
      <div
        className="sticky top-0 z-30"
        style={{ background: 'var(--color-bg-dark)', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-0 flex gap-4 overflow-x-auto">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className="py-4 whitespace-nowrap text-sm font-['Georgia'] italic transition-all duration-200"
              style={{
                color: activeFilter === f.id ? 'var(--color-accent)' : 'var(--color-text-muted)',
                borderBottom: activeFilter === f.id ? '2px solid var(--color-accent)' : '2px solid transparent',
                background: 'none',
                border: 'none',
                borderBottom: activeFilter === f.id ? '2px solid var(--color-accent)' : '2px solid transparent',
                cursor: 'pointer',
                padding: '1rem 0',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── GRID ── */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]">
            {filtered.map((item, i) => (
              <ScrollReveal
                key={item.id}
                delay={i * 50}
                className={item.span || ''}
              >
                <div
                  className="relative overflow-hidden rounded cursor-pointer group h-full"
                  onClick={() => openLightbox(item)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View photo: ${item.label}`}
                  onKeyDown={e => e.key === 'Enter' && openLightbox(item)}
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                    style={{ background: 'linear-gradient(to top, rgba(46,42,38,0.85) 0%, transparent 60%)' }}
                  >
                    <p className="font-['Georgia'] italic text-sm" style={{ color: 'var(--color-text)' }}>
                      {item.label}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16" style={{ background: 'var(--color-bg-dark)' }}>
        <ScrollReveal>
          <div className="max-w-xl mx-auto px-6 text-center">
            <div className="flex justify-center mb-6"><Sunburst size={80} opacity={0.35} /></div>
            <h2 className="section-title mb-4">{t('gallery.subtitle')}</h2>
            <div className="divider" />
            <Link to="/contact#reserve" className="btn-outline mt-4 inline-block">{t('gallery.cta')}</Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center anim-fade-in"
          style={{ background: 'rgba(46,42,38,0.96)' }}
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-2xl"
            style={{ color: 'var(--color-accent)', background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Close lightbox"
            onClick={closeLightbox}
          >
            ✕
          </button>
          <div
            className="max-w-4xl max-h-[90vh] mx-4 anim-scale-in"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.label}
              className="max-w-full max-h-[80vh] object-contain rounded"
            />
            <p
              className="text-center mt-4 font-['Georgia'] italic"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {lightbox.label}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}
