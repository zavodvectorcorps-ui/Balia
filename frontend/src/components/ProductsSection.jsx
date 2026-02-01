import { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';

export const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productList = [
    {
      id: 1,
      name: 'Balia Okragla',
      description: 'Klasyczna forma, idealna na 4-6 osob.',
      image: 'https://i.imgur.com/MRg6kCG.jpeg',
      price: 'od 12 900 zl',
      tags: ['Srednica 180cm', '4-6 osob', 'Modrzew'],
      span: 'lg',
    },
    {
      id: 2,
      name: 'Balia Kwadratowa',
      description: 'Nowoczesny design, przestronne wnetrze.',
      image: 'https://i.imgur.com/XxdFKiy.jpeg',
      price: 'od 18 500 zl',
      tags: ['200x200cm', '6-8 osob', 'Swierk'],
      span: 'md',
    },
    {
      id: 3,
      name: 'Balia Deluxe',
      description: 'Luksusowa wersja z podswietleniem LED.',
      image: 'https://i.imgur.com/amflDBR.jpeg',
      price: 'od 24 900 zl',
      tags: ['LED RGB', 'Hydromasaz', 'System grzewczy'],
      span: 'md',
    },
    {
      id: 4,
      name: 'Akcesoria SPA',
      description: 'Pokrowce, termometry, olejki aromatyczne.',
      image: 'https://i.imgur.com/gRy3VqW.jpeg',
      price: 'od 199 zl',
      tags: ['Pokrowce', 'Termometry', 'Olejki'],
      span: 'sm',
    },
  ];

  const scrollToConfigurator = () => {
    const el = document.getElementById('konfigurator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setSelectedProduct(null);
  };

  const getSpanClass = (span) => {
    if (span === 'lg') return 'md:col-span-2 md:row-span-2';
    if (span === 'md') return 'md:row-span-1';
    return '';
  };

  return (
    <section 
      id="produkty" 
      className="py-24 lg:py-32 bg-[#0A0B0D]"
      data-testid="products-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <div className="gold-line mb-6" />
            <h2 className="section-title text-white mb-4" data-testid="products-title">
              Nasza <span className="text-gold">Kolekcja</span>
            </h2>
            <p className="section-subtitle">
              Wybierz idealna balie dla swojego ogrodu.
            </p>
          </div>
          <button 
            onClick={scrollToConfigurator}
            className="btn-gold-outline mt-6 md:mt-0 flex items-center gap-2"
            data-testid="products-cta"
          >
            Skonfiguruj wlasna
            <ArrowRight size={18} />
          </button>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]"
          data-testid="products-grid"
        >
          <ProductCard 
            product={productList[0]} 
            spanClass={getSpanClass(productList[0].span)}
            onClick={() => setSelectedProduct(productList[0])} 
          />
          <ProductCard 
            product={productList[1]} 
            spanClass={getSpanClass(productList[1].span)}
            onClick={() => setSelectedProduct(productList[1])} 
          />
          <ProductCard 
            product={productList[2]} 
            spanClass={getSpanClass(productList[2].span)}
            onClick={() => setSelectedProduct(productList[2])} 
          />
          <ProductCard 
            product={productList[3]} 
            spanClass={getSpanClass(productList[3].span)}
            onClick={() => setSelectedProduct(productList[3])} 
          />
        </div>
      </div>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)}
          onConfigure={scrollToConfigurator}
        />
      )}
    </section>
  );
};

const ProductCard = ({ product, spanClass, onClick }) => (
  <div
    className={`product-card ${spanClass}`}
    onClick={onClick}
    data-testid={`product-card-${product.id}`}
  >
    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
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
);

const ProductModal = ({ product, onClose, onConfigure }) => (
  <div className="lightbox-overlay" onClick={onClose} data-testid="product-lightbox">
    <div 
      className="glass max-w-4xl w-full mx-4 rounded-2xl overflow-hidden animate-scale-in"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="grid md:grid-cols-2">
        <div className="aspect-square md:aspect-auto">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-8 flex flex-col">
          <button
            onClick={onClose}
            className="self-end p-2 text-white/60 hover:text-white transition-colors"
            data-testid="lightbox-close"
          >
            <X size={24} />
          </button>
          <div className="flex-1">
            <span className="font-body text-sm uppercase tracking-widest text-gold">
              {product.price}
            </span>
            <h3 className="font-display text-3xl font-semibold text-white mt-2 mb-4">
              {product.name}
            </h3>
            <p className="font-body text-white/70 mb-6">{product.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              <Tag text={product.tags[0]} />
              <Tag text={product.tags[1]} />
              <Tag text={product.tags[2]} />
            </div>
          </div>
          <button onClick={onConfigure} className="btn-gold w-full" data-testid="lightbox-cta">
            Skonfiguruj ten model
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Tag = ({ text }) => (
  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/80">
    {text}
  </span>
);
