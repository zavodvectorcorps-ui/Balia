import { useState } from 'react';
import { Settings, Loader2 } from 'lucide-react';

export const ConfiguratorSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section 
      id="konfigurator" 
      className="py-24 lg:py-32 relative overflow-hidden"
      data-testid="configurator-section"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#8B5A2B] rounded-full blur-[150px] -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6">
            <Settings className="text-gold" size={18} />
            <span className="font-body text-sm text-gold">Interaktywny konfigurator</span>
          </div>
          <h2 
            className="section-title text-white mb-4"
            data-testid="configurator-title"
          >
            Zaprojektuj <span className="text-gold">Swoją Balię</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Wybierz rozmiar, typ drewna, dodatki i akcesoria. 
            Stwórz balię idealnie dopasowaną do Twoich potrzeb.
          </p>
        </div>

        {/* Configurator Wrapper */}
        <div 
          className="configurator-wrapper bg-[#1E2229] relative"
          data-testid="configurator-wrapper"
        >
          {/* Loading State */}
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#1E2229] z-10">
              <Loader2 className="w-12 h-12 text-gold animate-spin mb-4" />
              <p className="font-body text-white/60">Ładowanie konfiguratora...</p>
            </div>
          )}

          {/* Iframe */}
          <iframe
            src="https://wm-kalkulator.pl/embed/balia"
            title="Konfigurator balii WM-Balia"
            width="100%"
            height="900"
            frameBorder="0"
            style={{ 
              border: 'none', 
              borderRadius: '12px',
              minHeight: '900px'
            }}
            allow="clipboard-write"
            onLoad={() => setIsLoading(false)}
            data-testid="configurator-iframe"
          />
        </div>

        {/* Help Text */}
        <div className="text-center mt-8">
          <p className="font-body text-sm text-white/50">
            Masz pytania? Skontaktuj się z nami:{' '}
            <a href="tel:+48515995190" className="text-gold hover:underline">
              +48 515 995 190
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
