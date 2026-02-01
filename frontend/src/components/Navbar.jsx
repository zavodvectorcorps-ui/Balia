import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Start' },
  { href: '#produkty', label: 'Produkty' },
  { href: '#konfigurator', label: 'Konfigurator' },
  { href: '#o-nas', label: 'O nas' },
  { href: '#kontakt', label: 'Kontakt' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section
      const sections = navLinks.map(link => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      data-testid="navbar"
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'scrolled py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-2 group"
            data-testid="navbar-logo"
          >
            <span className="font-display text-2xl font-bold text-white">
              WM<span className="text-gold">-Balia</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`nav-link font-body text-sm font-medium ${
                  activeSection === link.href.replace('#', '') ? 'active' : ''
                }`}
                data-testid={`nav-link-${link.href.replace('#', '')}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#konfigurator"
            onClick={(e) => scrollToSection(e, '#konfigurator')}
            className="hidden md:block btn-gold text-sm"
            data-testid="navbar-cta"
          >
            Zaprojektuj balię
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden absolute top-full left-0 right-0 glass-dark py-4 px-4 animate-fade-in"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`py-3 px-4 rounded-lg font-body text-sm font-medium transition-colors ${
                    activeSection === link.href.replace('#', '') 
                      ? 'bg-gold/10 text-gold' 
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#konfigurator"
                onClick={(e) => scrollToSection(e, '#konfigurator')}
                className="btn-gold text-center mt-2"
              >
                Zaprojektuj balię
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
