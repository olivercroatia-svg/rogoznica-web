import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import Sunburst from '../components/Sunburst'

function FormField({ label, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-xs uppercase tracking-widest"
        style={{ color: 'var(--color-accent)', letterSpacing: '0.12em' }}
      >
        {label}
        {required && <span style={{ color: 'var(--color-accent)', marginLeft: 4 }}>*</span>}
      </label>
      {children}
    </div>
  )
}

const inputStyle = {
  background: 'var(--color-bg-card)',
  border: '1px solid var(--color-border)',
  borderRadius: '2px',
  color: 'var(--color-text)',
  padding: '0.75rem 1rem',
  fontSize: '0.9rem',
  fontFamily: 'Georgia, serif',
  fontStyle: 'italic',
  outline: 'none',
  width: '100%',
  transition: 'border-color 0.2s ease',
}

export default function Contact() {
  const { t } = useTranslation()
  const [form, setForm] = useState({
    name: '', email: '', subject: 'Rezervacija', date: '', guests: '', message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    /* TODO: connect to backend / email service */
    setSent(true)
  }

  const infoItems = [
    { icon: '📞', label: t('info.phone'), value: t('info.phone_val'), href: 'tel:+3851000000' },
    { icon: '✉', label: t('info.email'), value: t('info.email_val'), href: 'mailto:reservations@restoran-rogoznica.hr' },
    { icon: '📍', label: t('info.location'), value: t('info.location_val'), href: null },
    { icon: '⏰', label: t('info.hours'), value: t('info.hours_val'), href: null },
  ]

  return (
    <>
      <Header />

      {/* ── HERO ── */}
      <section
        className="relative flex items-end pt-20"
        style={{ minHeight: '45vh', background: 'var(--color-bg-dark)' }}
      >
        <img
          src="https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?w=1600&q=80"
          alt="Contact hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(46,42,38,0.95) 0%, rgba(46,42,38,0.5) 60%, transparent 100%)' }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pb-14">
          <p className="section-subtitle text-left anim-fade-in-up delay-1">{t('nav.contact')}</p>
          <h1
            className="font-['Georgia'] italic text-5xl md:text-6xl anim-fade-in-up delay-2"
            style={{ color: 'var(--color-text)' }}
          >
            {t('contact.title')}
          </h1>
          <p
            className="mt-3 text-base anim-fade-in-up delay-3"
            style={{ color: 'var(--color-text)', opacity: 0.75 }}
          >
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* ── CONTACT INFO + FORM ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left: info */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <h2 className="font-['Georgia'] italic text-2xl mb-6" style={{ color: 'var(--color-text)' }}>
                {t('info.title')}
              </h2>
              <div className="space-y-6">
                {infoItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-xl mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--color-accent)' }}>
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm transition-colors duration-200"
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
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                alt="Map"
                className="w-full rounded mt-8 object-cover"
                style={{ height: '240px' }}
              />
            </ScrollReveal>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3" id="reserve">
            <ScrollReveal delay={100}>
              {sent ? (
                <div className="card text-center py-12">
                  <div className="flex justify-center mb-4"><Sunburst size={80} opacity={0.4} /></div>
                  <h2 className="font-['Georgia'] italic text-2xl mb-3" style={{ color: 'var(--color-accent)' }}>
                    Hvala!
                  </h2>
                  <p style={{ color: 'var(--color-text-muted)' }}>Odgovoriti ćemo u najkraćem roku.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <FormField label={t('contact.form_name')} required>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.form_name')}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--color-accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                    />
                  </FormField>

                  <FormField label={t('contact.form_email')} required>
                    <input
                      type="text"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder={t('contact.form_email')}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--color-accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                    />
                  </FormField>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField label={t('contact.form_subject')}>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: 'pointer' }}
                        onFocus={e => e.target.style.borderColor = 'var(--color-accent)'}
                        onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                      >
                        <option value="Rezervacija">{t('contact.form_subject_res')}</option>
                        <option value="Događaj">{t('contact.form_subject_event')}</option>
                        <option value="Ostalo">{t('contact.form_subject_other')}</option>
                      </select>
                    </FormField>

                    <FormField label={t('contact.form_date')}>
                      <input
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        style={{ ...inputStyle, colorScheme: 'dark' }}
                        onFocus={e => e.target.style.borderColor = 'var(--color-accent)'}
                        onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                      />
                    </FormField>
                  </div>

                  <FormField label={t('contact.form_guests')}>
                    <input
                      type="number"
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      min="1"
                      max="60"
                      placeholder="2"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--color-accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                    />
                  </FormField>

                  <FormField label={t('contact.form_message')}>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder={t('contact.form_message')}
                      style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={e => e.target.style.borderColor = 'var(--color-accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--color-border)'}
                    />
                  </FormField>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <button type="submit" className="btn-outline">
                      {t('contact.form_send')}
                    </button>
                    <button
                      type="button"
                      className="btn-outline"
                      style={{ borderColor: 'rgba(232,221,212,0.3)', color: 'var(--color-text-muted)' }}
                      onClick={() => { setForm(f => ({ ...f, subject: 'Događaj' })) }}
                    >
                      {t('contact.form_event')}
                    </button>
                  </div>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
