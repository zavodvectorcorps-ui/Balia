import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Balia Okrągła',
    description: 'Klasyczna forma, idealna na 4-6 osób. Wykonana z modrzewia syberyjskiego.',
    image: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&q=80',
    price: 'od 12 900 zł',
    features: ['Średnica 180cm', '4-6 osób', 'Modrzew syberyjski'],
    size: 'large',
  },
  {
    id: 2,
    name: 'Balia Kwadratowa',
    description: 'Nowoczesny design, przestronne wnętrze dla 6-8 osób.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    price: 'od 18 500 zł',
    features: ['Wymiary 200x200cm', '6-8 osób', 'Świerk skandynawski'],
    size: 'medium',
  },
  {
    id: 3,
    name: 'Balia Deluxe',
    description: 'Luksusowa wersja z podświetleniem LED i systemem hydromasażu.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    price: 'od 24 900 zł',
    features: ['LED RGB', 'Hydromasaż', 'System grzewczy'],
    size: 'medium',
  },
  {
    id: 4,
    name: 'Akcesoria SPA',
    description: 'Podłogowe termometry, olejki aromatyczne, pokrowce ochronne.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    price: 'od 199 zł',
    features: ['Pokrowce', 'Termometry', 'Olejki'],
    size: 'small',
  },
];

export const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const scrollToConfigurator = () => {
    const element = document.getElementById('konfigurator');
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setSelectedProduct(null);
  };

  return (
    <section 
      id="produkty" 
      className="py-24 lg:py-32 bg-[#0A0B0D]"
      data-testid="products-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <div className="gold-line mb-6" />
            <h2 
              className="section-title text-white mb-4"
              data-testid="products-title"
            >
              Nasza <span className="text-gold">Kolekcja</span>
            </h2>
            <p className="section-subtitle">
              Wybierz idealną balię dla swojego ogrodu. 
              Każdy model dostępny w wielu wariantach.
            </p>
          </div>
          <button 
            onClick={scrollToConfigurator}
            className="btn-gold-outline mt-6 md:mt-0 flex items-center gap-2"
            data-testid="products-cta"
          >
            Skonfiguruj własną
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Bento Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]"
          data-testid="products-grid"
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`product-card ${
                product.size === 'large' 
                  ? 'md:col-span-2 md:row-span-2' 
                  : product.size === 'medium' 
                  ? 'md:row-span-1' 
                  : ''
              }`}
              onClick={() => setSelectedProduct(product)}
              data-testid={`product-card-${product.id}`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-10 p-6 flex flex-col justify-end">
                <span className="font-body text-xs uppercase tracking-widest text-gold mb-2">
                  {product.price}
                </span>
                <h3 className="font-display text-2xl font-semibold text-white mb-2">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-white/60 line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedProduct && (
        <div 
          className="lightbox-overlay"
          onClick={() => setSelectedProduct(null)}
          data-testid="product-lightbox"
        >
          <div 
            className="glass max-w-4xl w-full mx-4 rounded-2xl overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2">
              <div className="aspect-square md:aspect-auto">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="self-end p-2 text-white/60 hover:text-white transition-colors"
                  data-testid="lightbox-close"
                  aria-label="Zamknij"
                >
                  <X size={24} />
                </button>
                <div className="flex-1">
                  <span className="font-body text-sm uppercase tracking-widest text-gold">
                    {selectedProduct.price}
                  </span>
                  <h3 className="font-display text-3xl font-semibold text-white mt-2 mb-4">
                    {selectedProduct.name}
                  </h3>
                  <p className="font-body text-white/70 mb-6">
                    {selectedProduct.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProduct.features.map((feature) => (
                      <span 
                        key={feature}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/80"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <button 
                  onClick={scrollToConfigurator}
                  className="btn-gold w-full"
                  data-testid="lightbox-cta"
                >
                  Skonfiguruj ten model
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
