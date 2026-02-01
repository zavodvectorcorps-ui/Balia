import { useState, useMemo } from 'react';
import { 
  ChevronDown, Check, ShieldCheck, Truck, Phone,
  Waves, Lightbulb, ThermometerSun, Music, Armchair
} from 'lucide-react';

// Models data
const models = [
  { id: 'okragla200', name: 'Okrągła 200cm', seats: '6 osób', diameter: 200, depth: 95, capacity: 1000, basePrice: 8507, image: 'https://i.imgur.com/MRg6kCG.jpeg' },
  { id: 'okragla180', name: 'Okrągła 180cm', seats: '4-5 osób', diameter: 180, depth: 90, capacity: 800, basePrice: 7200, image: 'https://i.imgur.com/XxdFKiy.jpeg' },
  { id: 'kwadratowa', name: 'Kwadratowa', seats: '6-8 osób', diameter: 200, depth: 95, capacity: 1200, basePrice: 9800, image: 'https://i.imgur.com/amflDBR.jpeg' },
  { id: 'prostokatna', name: 'Prostokątna', seats: '8-10 osób', diameter: 250, depth: 100, capacity: 1500, basePrice: 12500, image: 'https://i.imgur.com/gRy3VqW.jpeg' },
  { id: 'owalna', name: 'Owalna', seats: '6-8 osób', diameter: 220, depth: 95, capacity: 1100, basePrice: 10200, image: 'https://i.imgur.com/ZlSOowr.jpeg' },
];

// Options data
const furnaceTypes = [
  { id: 'integrated', name: 'Piec zintegrowany', price: 1260, desc: 'Elegancki wygląd, oszczędność miejsca' },
  { id: 'external', name: 'Piec zewnętrzny', price: 0, desc: 'Łatwiejszy dostęp, szybsze nagrzewanie' },
];

const tubMaterials = [
  { id: 'fiberglass', name: 'Włókno szklane', price: 0, desc: 'Trwałe i łatwe w czyszczeniu' },
  { id: 'acrylic', name: 'Akryl premium', price: 1500, desc: 'Luksusowy wygląd, cieplejsze w dotyku' },
];

const hydroOptions = [
  { id: 'none', name: 'Bez hydromasażu', price: 0 },
  { id: 'hydro6', name: 'Hydromasaż 1.1kW (6-8 dysz)', price: 1638 },
  { id: 'hydro10', name: 'Hydromasaż 1.1kW (10 dysz)', price: 1748 },
];

const bubbleOptions = [
  { id: 'none', name: 'Bez systemu bąbelków', price: 0 },
  { id: 'bubble', name: 'System bąbelków 0.7kW (12-18 dysz)', price: 1638 },
];

const ledOptions = [
  { id: 'none', name: 'Bez oświetlenia', price: 0 },
  { id: 'led1', name: '1x LED wewnątrz', price: 273 },
  { id: 'led2', name: '2x LED wewnątrz', price: 437 },
  { id: 'led3', name: '3x LED wewnątrz', price: 601 },
  { id: 'ledext', name: 'LED zewnątrz + 12 mini', price: 819 },
  { id: 'ambilight', name: 'Taśma LED Ambilight', price: 983 },
];

const coverOptions = [
  { id: 'none', name: 'Bez pokrywy', price: 0 },
  { id: 'basic', name: 'Pokrywa termiczna standardowa', price: 650 },
  { id: 'premium', name: 'Pokrywa termiczna premium', price: 950 },
];

const woodFinishOptions = [
  { id: 'natural', name: 'Naturalny świerk', price: 0 },
  { id: 'thermowood', name: 'Thermodrewno', price: 1800 },
  { id: 'larch', name: 'Modrzew syberyjski', price: 2200 },
];

const extras = [
  { id: 'stairs', name: 'Schody drewniane', price: 450, icon: Armchair },
  { id: 'filter', name: 'System filtracji', price: 890, icon: Waves },
  { id: 'insulation', name: 'Izolacja premium', price: 750, icon: ThermometerSun },
  { id: 'heater', name: 'Grzałka elektryczna 3kW', price: 1200, icon: ThermometerSun },
  { id: 'holder', name: 'Uchwyt na napoje', price: 180, icon: Armchair },
  { id: 'pillow', name: 'Poduszka pod głowę', price: 82, icon: Armchair },
  { id: 'oiling', name: 'Olejowanie drewna', price: 273, icon: Armchair },
  { id: 'bluetooth', name: 'Radio Bluetooth', price: 1092, icon: Music },
];

const SelectOption = ({ label, options, value, onChange, showPrice = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selected = options.find(o => o.id === value);
  
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-white/70 mb-2">{label}</label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between bg-[#1E2229] border border-white/10 rounded-xl px-4 py-3 text-left hover:border-[#D4AF37]/50 transition-colors"
        >
          <span className="text-white">{selected?.name}</span>
          <div className="flex items-center gap-3">
            {showPrice && selected?.price > 0 && (
              <span className="text-[#D4AF37] text-sm">+{selected.price.toLocaleString()} zł</span>
            )}
            <ChevronDown className={`w-5 h-5 text-white/50 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </button>
        
        {isOpen && (
          <div className="absolute z-20 w-full mt-2 bg-[#1E2229] border border-white/10 rounded-xl overflow-hidden shadow-xl">
            {options.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => { onChange(option.id); setIsOpen(false); }}
                className={`w-full flex items-center justify-between px-4 py-3 hover:bg-white/5 transition-colors ${
                  value === option.id ? 'bg-[#D4AF37]/10' : ''
                }`}
              >
                <div>
                  <span className={`block ${value === option.id ? 'text-[#D4AF37]' : 'text-white'}`}>
                    {option.name}
                  </span>
                  {option.desc && (
                    <span className="block text-xs text-white/50 mt-0.5">{option.desc}</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {showPrice && option.price > 0 && (
                    <span className="text-[#D4AF37] text-sm">+{option.price.toLocaleString()} zł</span>
                  )}
                  {value === option.id && <Check className="w-5 h-5 text-[#D4AF37]" />}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export const ConfiguratorPage = () => {
  const [selectedModel, setSelectedModel] = useState(null);
  const [furnace, setFurnace] = useState('external');
  const [material, setMaterial] = useState('fiberglass');
  const [hydro, setHydro] = useState('none');
  const [bubble, setBubble] = useState('none');
  const [led, setLed] = useState('none');
  const [cover, setCover] = useState('none');
  const [wood, setWood] = useState('natural');
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [contactForm, setContactForm] = useState({ name: '', phone: '', comment: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleExtra = (id) => {
    setSelectedExtras(prev => 
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  const totalPrice = useMemo(() => {
    if (!selectedModel) return 0;
    const model = models.find(m => m.id === selectedModel);
    let total = model?.basePrice || 0;
    
    total += furnaceTypes.find(f => f.id === furnace)?.price || 0;
    total += tubMaterials.find(m => m.id === material)?.price || 0;
    total += hydroOptions.find(h => h.id === hydro)?.price || 0;
    total += bubbleOptions.find(b => b.id === bubble)?.price || 0;
    total += ledOptions.find(l => l.id === led)?.price || 0;
    total += coverOptions.find(c => c.id === cover)?.price || 0;
    total += woodFinishOptions.find(w => w.id === wood)?.price || 0;
    
    selectedExtras.forEach(extraId => {
      total += extras.find(e => e.id === extraId)?.price || 0;
    });
    
    return total;
  }, [selectedModel, furnace, material, hydro, bubble, led, cover, wood, selectedExtras]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const model = models.find(m => m.id === selectedModel);

  return (
    <div className="min-h-screen bg-[#0F1115] py-12" data-testid="configurator-page">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="gold-line mx-auto mb-6" />
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Skonfiguruj <span className="text-[#D4AF37]">Swoją Balię</span>
          </h1>
          <p className="font-body text-white/60 max-w-2xl mx-auto">
            Wybierz model i dostosuj każdy element do swoich potrzeb. 
            Otrzymasz indywidualną wycenę w kilka minut.
          </p>
        </div>

        {/* Step 1: Model Selection */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0F1115] font-bold text-sm">1</div>
            <h2 className="font-display text-xl text-white">Wybierz model</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" data-testid="model-grid">
            {models.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setSelectedModel(m.id)}
                className={`relative overflow-hidden rounded-2xl border-2 transition-all duration-300 ${
                  selectedModel === m.id 
                    ? 'border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.3)]' 
                    : 'border-white/10 hover:border-white/30'
                }`}
                data-testid={`model-${m.id}`}
              >
                <div className="aspect-[4/3] relative">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115] via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-lg text-white mb-1">{m.name}</h3>
                  <p className="text-sm text-white/60">{m.seats}</p>
                  <p className="text-[#D4AF37] font-semibold mt-2">od {m.basePrice.toLocaleString()} zł</p>
                </div>
                {selectedModel === m.id && (
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#0F1115]" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {selectedModel && (
          <>
            {/* Model Specs */}
            <div className="bg-[#1E2229]/50 rounded-2xl p-6 mb-8 border border-white/5">
              <h3 className="font-display text-lg text-white mb-4">Specyfikacja: {model?.name}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="bg-[#0F1115]/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-[#D4AF37]">{model?.diameter}</div>
                  <div className="text-xs text-white/50">Średnica (cm)</div>
                </div>
                <div className="bg-[#0F1115]/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-[#D4AF37]">{model?.depth}</div>
                  <div className="text-xs text-white/50">Głębokość (cm)</div>
                </div>
                <div className="bg-[#0F1115]/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-[#D4AF37]">{model?.capacity}</div>
                  <div className="text-xs text-white/50">Pojemność (L)</div>
                </div>
                <div className="bg-[#0F1115]/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-[#D4AF37]">{model?.seats.split(' ')[0]}</div>
                  <div className="text-xs text-white/50">Miejsca</div>
                </div>
              </div>
            </div>

            {/* Step 2: Configuration */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0F1115] font-bold text-sm">2</div>
                <h2 className="font-display text-xl text-white">Konfiguracja</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-x-8">
                <SelectOption label="Typ pieca" options={furnaceTypes} value={furnace} onChange={setFurnace} />
                <SelectOption label="Materiał wanny" options={tubMaterials} value={material} onChange={setMaterial} />
                <SelectOption label="Hydromasaż" options={hydroOptions} value={hydro} onChange={setHydro} />
                <SelectOption label="System bąbelków" options={bubbleOptions} value={bubble} onChange={setBubble} />
                <SelectOption label="Oświetlenie LED" options={ledOptions} value={led} onChange={setLed} />
                <SelectOption label="Pokrywa termiczna" options={coverOptions} value={cover} onChange={setCover} />
                <SelectOption label="Wykończenie drewna" options={woodFinishOptions} value={wood} onChange={setWood} />
              </div>
            </div>

            {/* Step 3: Extras */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0F1115] font-bold text-sm">3</div>
                <h2 className="font-display text-xl text-white">Dodatki</h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" data-testid="extras-grid">
                {extras.map((extra) => {
                  const isSelected = selectedExtras.includes(extra.id);
                  return (
                    <button
                      key={extra.id}
                      type="button"
                      onClick={() => toggleExtra(extra.id)}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        isSelected 
                          ? 'border-[#D4AF37] bg-[#D4AF37]/10' 
                          : 'border-white/10 bg-[#1E2229]/50 hover:border-white/30'
                      }`}
                      data-testid={`extra-${extra.id}`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <extra.icon className={`w-5 h-5 ${isSelected ? 'text-[#D4AF37]' : 'text-white/50'}`} />
                        {isSelected && <Check className="w-5 h-5 text-[#D4AF37]" />}
                      </div>
                      <h4 className={`font-medium text-sm ${isSelected ? 'text-[#D4AF37]' : 'text-white'}`}>
                        {extra.name}
                      </h4>
                      <p className="text-[#D4AF37] text-sm mt-1">+{extra.price} zł</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Contact */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0F1115] font-bold text-sm">4</div>
                <h2 className="font-display text-xl text-white">Twoje dane kontaktowe</h2>
              </div>

              {isSubmitted ? (
                <div className="bg-[#1E2229]/50 rounded-2xl p-8 text-center border border-[#D4AF37]/30">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-[#D4AF37]" />
                  </div>
                  <h3 className="font-display text-2xl text-white mb-2">Dziękujemy!</h3>
                  <p className="text-white/60 mb-4">
                    Twoje zamówienie zostało wysłane. Skontaktujemy się z Tobą w ciągu 24 godzin.
                  </p>
                  <p className="text-[#D4AF37] font-semibold text-lg">
                    Wartość konfiguracji: {totalPrice.toLocaleString()} zł
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[#1E2229]/50 rounded-2xl p-6 border border-white/5">
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm text-white/70 mb-2">Imię i nazwisko *</label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        className="input-luxury"
                        placeholder="Jan Kowalski"
                        data-testid="config-name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/70 mb-2">Numer telefonu *</label>
                      <input
                        type="tel"
                        required
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                        className="input-luxury"
                        placeholder="+48 123 456 789"
                        data-testid="config-phone"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm text-white/70 mb-2">Komentarz (opcjonalnie)</label>
                    <textarea
                      value={contactForm.comment}
                      onChange={(e) => setContactForm({...contactForm, comment: e.target.value})}
                      className="input-luxury resize-none"
                      rows={3}
                      placeholder="Dodatkowe informacje lub pytania..."
                      data-testid="config-comment"
                    />
                  </div>

                  {/* Price Summary */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                    <div>
                      <div className="text-sm text-white/50">Suma</div>
                      <div className="text-3xl font-bold text-[#D4AF37]" data-testid="total-price">
                        {totalPrice.toLocaleString()} zł
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn-gold flex items-center gap-2 text-lg"
                      data-testid="submit-config"
                    >
                      <Truck className="w-5 h-5" />
                      Wyślij zamówienie
                    </button>
                  </div>
                </form>
              )}
            </div>
          </>
        )}

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-white/5">
          <div className="flex items-center gap-2 text-white/40">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-sm">2 lata gwarancji</span>
          </div>
          <div className="flex items-center gap-2 text-white/40">
            <Truck className="w-5 h-5" />
            <span className="text-sm">Dostawa w całej Polsce</span>
          </div>
          <div className="flex items-center gap-2 text-white/40">
            <Phone className="w-5 h-5" />
            <span className="text-sm">+48 515 995 190</span>
          </div>
        </div>
      </div>
    </div>
  );
};
