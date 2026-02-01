import { ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  const scrollToConfigurator = () => {
    const element = document.getElementById('konfigurator');
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToProducts = () => {
    const element = document.getElementById('produkty');
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1668461363398-1fd41bf2ca79?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NDh8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjB3b29kZW4lMjBob3QlMjB0dWIlMjBvdXRkb29yJTIwbmF0dXJlJTIwc3Vuc2V0fGVufDB8fHx8MTc2OTk3NTU1M3ww&ixlib=rb-4.1.0&q=85"
          alt="Luksusowa drewniana balia w ogrodzie"
          className="w-full h-full object-cover"
        />
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div 
          className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8 animate-fade-in"
          data-testid="hero-badge"
        >
          <span className="gold-dot" />
          <span className="font-body text-sm text-white/80">Ręcznie robione w Polsce</span>
        </div>

        {/* Headline */}
        <h1 
          className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up"
          data-testid="hero-headline"
        >
          Luksus w Twoim{' '}
          <span className="text-gold">Ogrodzie</span>
        </h1>

        {/* Subheadline */}
        <p 
          className="font-body text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200"
          data-testid="hero-subheadline"
        >
          Odkryj ręcznie robione balie i sauny, które zmienią Twój ogród 
          w prywatne SPA. Naturalne drewno, najwyższa jakość, polski kunszt.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <button 
            onClick={scrollToConfigurator}
            className="btn-gold text-lg px-8 py-4 animate-pulse-gold"
            data-testid="hero-cta-primary"
          >
            Zaprojektuj swoją balię
          </button>
          <button 
            onClick={scrollToProducts}
            className="btn-gold-outline text-lg px-8 py-4"
            data-testid="hero-cta-secondary"
          >
            Zobacz produkty
          </button>
        </div>

        {/* Stats */}
        <div 
          className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10 animate-fade-in-up delay-400"
          data-testid="hero-stats"
        >
          <div className="text-center">
            <div className="font-display text-3xl sm:text-4xl font-bold text-gold mb-2">500+</div>
            <div className="font-body text-sm text-white/60">Zadowolonych klientów</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl sm:text-4xl font-bold text-gold mb-2">2</div>
            <div className="font-body text-sm text-white/60">Lata gwarancji</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl sm:text-4xl font-bold text-gold mb-2">100%</div>
            <div className="font-body text-sm text-white/60">Eko materiały</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float cursor-pointer"
        onClick={scrollToProducts}
        data-testid="scroll-indicator"
      >
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="font-body text-xs uppercase tracking-widest">Odkryj więcej</span>
          <ChevronDown size={24} className="text-gold" />
        </div>
      </div>
    </section>
  );
};
