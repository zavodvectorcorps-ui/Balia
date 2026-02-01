import { Award, Users, Clock, MapPin } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Klientów' },
  { icon: Clock, value: '10+', label: 'Lat doświadczenia' },
  { icon: Award, value: '100%', label: 'Satysfakcji' },
  { icon: MapPin, value: 'PL', label: 'Produkcja' },
];

export const AboutSection = () => {
  return (
    <section 
      id="o-nas" 
      className="py-24 lg:py-32 bg-[#0A0B0D] relative overflow-hidden"
      data-testid="about-section"
    >
      {/* Decorative Image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[600px] opacity-30 hidden lg:block">
        <img
          src="https://i.imgur.com/ZlSOowr.jpeg"
          alt="Balia WM-Balia"
          className="w-full h-full object-cover"
          style={{ maskImage: 'linear-gradient(to right, transparent, black)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="gold-line mb-6" />
            <h2 
              className="section-title text-white mb-6"
              data-testid="about-title"
            >
              WM-Balia – <span className="text-gold">Pasja do Relaksu</span>
            </h2>
            <div className="space-y-6 font-body text-white/70 leading-relaxed">
              <p data-testid="about-text-1">
                Jesteśmy rodzinną firmą z wieloletnim doświadczeniem w produkcji 
                drewnianych balii i saun. Nasza pasja do rzemiosła i dbałość o 
                każdy detal sprawiają, że nasze produkty wyróżniają się na rynku.
              </p>
              <p data-testid="about-text-2">
                Każda balia, którą tworzymy, jest wykonywana ręcznie przez 
                doświadczonych rzemieślników. Używamy tylko najwyższej jakości 
                drewna certyfikowanego FSC, które gwarantuje trwałość i 
                bezpieczeństwo dla środowiska.
              </p>
              <p data-testid="about-text-3">
                Naszym celem jest dostarczenie Ci produktu, który stanie się 
                centrum relaksu w Twoim ogrodzie na długie lata. Dlatego oferujemy 
                2-letnią gwarancję oraz pełne wsparcie serwisowe.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="mt-8 pl-6 border-l-2 border-gold">
              <p className="font-display text-xl text-white italic">
                "Tworzymy miejsca, w których rodzą się wspomnienia."
              </p>
              <footer className="mt-3 font-body text-sm text-white/50">
                — Zespół WM-Balia
              </footer>
            </blockquote>
          </div>

          {/* Stats Grid */}
          <div 
            className="grid grid-cols-2 gap-6"
            data-testid="about-stats"
          >
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="card-glass p-8 text-center"
                data-testid={`about-stat-${index}`}
              >
                <div className="feature-icon mx-auto mb-4 w-14 h-14">
                  <stat.icon size={24} />
                </div>
                <div className="font-display text-4xl font-bold text-gold mb-2">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div 
          className="grid md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-white/5"
          data-testid="about-values"
        >
          <div className="text-center">
            <div className="font-display text-lg text-gold mb-2">Jakość</div>
            <p className="font-body text-sm text-white/60">
              Tylko najlepsze materiały i precyzyjne wykonanie.
            </p>
          </div>
          <div className="text-center">
            <div className="font-display text-lg text-gold mb-2">Tradycja</div>
            <p className="font-body text-sm text-white/60">
              Wielopokoleniowe rzemiosło polskich stolarzy.
            </p>
          </div>
          <div className="text-center">
            <div className="font-display text-lg text-gold mb-2">Ekologia</div>
            <p className="font-body text-sm text-white/60">
              Odpowiedzialność za środowisko w każdym produkcie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
