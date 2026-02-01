import { Instagram, Facebook, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-[#0A0B0D] border-t border-white/5 py-12"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#hero" className="inline-block mb-4" data-testid="footer-logo">
              <span className="font-display text-2xl font-bold text-white">
                WM<span className="text-gold">-Balia</span>
              </span>
            </a>
            <p className="font-body text-sm text-white/60 max-w-md mb-6">
              Tworzymy luksusowe balie i sauny z najwyższej jakości drewna. 
              Ręczna produkcja w Polsce, 2 lata gwarancji, ekologiczne materiały.
            </p>
            <div className="flex gap-3" data-testid="footer-social">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-white font-semibold mb-4">Nawigacja</h4>
            <ul className="space-y-3">
              {[
                { href: '#produkty', label: 'Produkty' },
                { href: '#konfigurator', label: 'Konfigurator' },
                { href: '#o-nas', label: 'O nas' },
                { href: '#kontakt', label: 'Kontakt' },
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="font-body text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-3 font-body text-sm text-white/60">
              <li>Boryny 3, Warszawa</li>
              <li>
                <a href="tel:+48515995190" className="hover:text-gold transition-colors">
                  +48 515 995 190
                </a>
              </li>
              <li>
                <a href="mailto:kontakt@wm-balia.pl" className="hover:text-gold transition-colors">
                  kontakt@wm-balia.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-12 pt-8 border-t border-white/5">
          <p className="font-body text-xs text-white/40">
            © {currentYear} WM-Balia. Wszelkie prawa zastrzeżone.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 flex items-center gap-2 text-white/40 hover:text-gold transition-colors group"
            data-testid="scroll-to-top"
            aria-label="Przewiń do góry"
          >
            <span className="font-body text-xs uppercase tracking-widest">Do góry</span>
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
