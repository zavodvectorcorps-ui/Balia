import { Settings, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ConfiguratorSection = () => {
  const navigate = useNavigate();

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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Content Card */}
        <div className="card-glass p-8 md:p-12 text-center">
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
          
          <p className="font-body text-white/60 max-w-xl mx-auto mb-8">
            Wybierz rozmiar, typ drewna, dodatki i akcesoria. 
            Stwórz balię idealnie dopasowaną do Twoich potrzeb i otrzymaj natychmiastową wycenę.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            <div className="text-center">
              <div className="text-2xl font-bold text-gold mb-1">5</div>
              <div className="text-sm text-white/50">Modeli do wyboru</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold mb-1">20+</div>
              <div className="text-sm text-white/50">Opcji konfiguracji</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gold mb-1">24h</div>
              <div className="text-sm text-white/50">Czas odpowiedzi</div>
            </div>
          </div>

          <button
            onClick={() => navigate('/konfigurator')}
            className="btn-gold text-lg px-10 py-4 inline-flex items-center gap-3 animate-pulse-gold"
            data-testid="configurator-cta"
          >
            Rozpocznij konfigurację
            <ArrowRight size={20} />
          </button>

          <p className="font-body text-xs text-white/40 mt-6">
            Bezpłatna wycena • Bez zobowiązań • Odpowiedź w 24h
          </p>
        </div>

        {/* Help Text */}
        <div className="text-center mt-8">
          <p className="font-body text-sm text-white/50">
            Masz pytania? Zadzwoń:{' '}
            <a href="tel:+48515995190" className="text-gold hover:underline">
              +48 515 995 190
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
