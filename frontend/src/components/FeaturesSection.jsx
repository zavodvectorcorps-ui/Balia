import { ShieldCheck, Hammer, Leaf } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: '2 Lata Gwarancji',
    description: 'Pełne bezpieczeństwo i wsparcie serwisowe na wszystkie nasze produkty. Twój spokój to nasz priorytet.',
  },
  {
    icon: Hammer,
    title: 'Ręczna Produkcja',
    description: 'Każdy detal dopracowany przez polskich rzemieślników z wieloletnim doświadczeniem w obróbce drewna.',
  },
  {
    icon: Leaf,
    title: 'Eko Certyfikat',
    description: 'Drewno pozyskiwane wyłącznie z odpowiedzialnych, certyfikowanych źródeł. Dbamy o środowisko.',
  },
];

export const FeaturesSection = () => {
  return (
    <section 
      id="cechy" 
      className="py-24 lg:py-32 relative overflow-hidden"
      data-testid="features-section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="gold-line mx-auto mb-6" />
          <h2 
            className="section-title text-white mb-4"
            data-testid="features-title"
          >
            Dlaczego <span className="text-gold">WM-Balia</span>?
          </h2>
          <p className="section-subtitle mx-auto">
            Łączymy tradycyjne rzemiosło z nowoczesnym designem, 
            tworząc produkty najwyższej jakości.
          </p>
        </div>

        {/* Features Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          data-testid="features-grid"
        >
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-glass p-8 text-center group"
              data-testid={`feature-card-${index}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="feature-icon mx-auto mb-6">
                <feature.icon size={28} />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div 
          className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-16 border-t border-white/5"
          data-testid="trust-badges"
        >
          <div className="flex items-center gap-3 text-white/40">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L3 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V8.26l7-3.89v8.62z"/>
            </svg>
            <span className="font-body text-sm">Certyfikat FSC</span>
          </div>
          <div className="flex items-center gap-3 text-white/40">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
            </svg>
            <span className="font-body text-sm">Made in Poland</span>
          </div>
          <div className="flex items-center gap-3 text-white/40">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
            </svg>
            <span className="font-body text-sm">Premium Quality</span>
          </div>
        </div>
      </div>
    </section>
  );
};
