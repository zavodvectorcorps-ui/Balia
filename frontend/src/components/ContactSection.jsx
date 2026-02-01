import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Instagram, Facebook } from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Visual only - no backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section 
      id="kontakt" 
      className="py-24 lg:py-32 relative"
      data-testid="contact-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="gold-line mx-auto mb-6" />
          <h2 
            className="section-title text-white mb-4"
            data-testid="contact-title"
          >
            Skontaktuj się <span className="text-gold">z nami</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Masz pytania? Chętnie pomożemy dobrać idealną balię dla Ciebie.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div 
              className="grid sm:grid-cols-2 gap-4"
              data-testid="contact-info"
            >
              <div className="card-glass p-6 flex items-start gap-4">
                <div className="feature-icon w-12 h-12 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-display text-white font-semibold mb-1">Adres</h4>
                  <p className="font-body text-sm text-white/60">
                    Boryny 3<br />Warszawa
                  </p>
                </div>
              </div>

              <div className="card-glass p-6 flex items-start gap-4">
                <div className="feature-icon w-12 h-12 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-display text-white font-semibold mb-1">Telefon</h4>
                  <a 
                    href="tel:+48515995190" 
                    className="font-body text-sm text-gold hover:underline"
                    data-testid="contact-phone"
                  >
                    +48 515 995 190
                  </a>
                </div>
              </div>

              <div className="card-glass p-6 flex items-start gap-4">
                <div className="feature-icon w-12 h-12 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-display text-white font-semibold mb-1">Email</h4>
                  <a 
                    href="mailto:kontakt@wm-balia.pl" 
                    className="font-body text-sm text-gold hover:underline"
                    data-testid="contact-email"
                  >
                    kontakt@wm-balia.pl
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="card-glass p-6">
                <h4 className="font-display text-white font-semibold mb-3">Social Media</h4>
                <div className="flex gap-3" data-testid="social-links">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                    data-testid="social-instagram"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                    data-testid="social-facebook"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div 
              className="map-container h-[300px]"
              data-testid="contact-map"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.8!2d21.0122!3d52.2297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDEzJzQ2LjkiTiAyMcKwMDAnNDMuOSJF!5e0!3m2!1sen!2spl!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja WM-Balia"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className="card-glass p-8"
            data-testid="contact-form-wrapper"
          >
            <h3 className="font-display text-2xl text-white mb-6">
              Wyślij wiadomość
            </h3>

            {isSubmitted ? (
              <div 
                className="text-center py-12"
                data-testid="form-success"
              >
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                  <Send className="text-gold" size={28} />
                </div>
                <h4 className="font-display text-xl text-white mb-2">
                  Dziękujemy!
                </h4>
                <p className="font-body text-white/60">
                  Twoja wiadomość została wysłana. Odpowiemy najszybciej jak to możliwe.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} data-testid="contact-form">
                <div className="space-y-5">
                  <div>
                    <label className="font-body text-sm text-white/70 block mb-2">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-luxury"
                      placeholder="Jan Kowalski"
                      data-testid="form-name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-body text-sm text-white/70 block mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-luxury"
                        placeholder="jan@example.com"
                        data-testid="form-email"
                      />
                    </div>
                    <div>
                      <label className="font-body text-sm text-white/70 block mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-luxury"
                        placeholder="+48 123 456 789"
                        data-testid="form-phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-sm text-white/70 block mb-2">
                      Wiadomość *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="input-luxury resize-none"
                      placeholder="W czym możemy pomóc?"
                      data-testid="form-message"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="btn-gold w-full flex items-center justify-center gap-2"
                    data-testid="form-submit"
                  >
                    <Send size={18} />
                    Wyślij wiadomość
                  </button>

                  <p className="font-body text-xs text-white/40 text-center">
                    Wysyłając formularz, zgadzasz się na przetwarzanie danych osobowych 
                    zgodnie z naszą polityką prywatności.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
