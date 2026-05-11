import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  Battery, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Plus, 
  Minus,
  AlertCircle,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import { useCart } from '@/src/contexts/CartContext';
import { cn } from '@/src/lib/utils';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  specs: string[];
  image: string;
  category: 'BASE' | 'ADDON';
}

const PRODUCTS: Product[] = [
  {
    id: 's1-base',
    name: 'SolarOne S1',
    price: 18500000, // ₦185,000 in kobo
    description: '300W Pure Sine Wave System. Perfect for students and light remote work setups.',
    specs: ['320Wh LiFePO4', '300W AC Output', '100W Solar Input'],
    image: 'https://picsum.photos/seed/s1/400/300',
    category: 'BASE'
  },
  {
    id: 's2-base',
    name: 'SolarOne S2',
    price: 30000000, // ₦300,000 in kobo
    description: '1000W Workhorse. Powers laptops, fans, and small fridges for professional setups.',
    specs: ['1024Wh LiFePO4', '1000W AC Output', '450W Solar Input'],
    image: 'https://picsum.photos/seed/s2/400/300',
    category: 'BASE'
  }
];

const ADDONS: Product[] = [
  {
    id: 'panel-expansion',
    name: 'Extra 450W Panel',
    price: 13500000,
    description: 'Higher harvest capacity for rainy days.',
    specs: ['Bifacial', 'Heavy-duty frame'],
    image: '',
    category: 'ADDON'
  },
  {
    id: 'battery-addon',
    name: 'Battery Add-on (100Ah)',
    price: 16500000,
    description: 'Double your storage for 12-hour sessions.',
    specs: ['LiFePO4', 'Bluetooth BMS'],
    image: '',
    category: 'ADDON'
  },
  {
    id: 'cable-kit',
    name: 'Standard Cable Kit',
    price: 1500000,
    description: 'MC4 connectors and 10m heavy-gauge wire.',
    specs: ['UV resistant', 'Low loss'],
    image: '',
    category: 'ADDON'
  }
];

export default function Order() {
  const { addItem } = useCart();
  const navigate = useNavigate();
  const [selectedBase, setSelectedBase] = useState<Product | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set());

  const handleToggleAddon = (addon: Product) => {
    setSelectedAddons(prev => {
      const next = new Set(prev);
      if (next.has(addon.id)) {
        next.delete(addon.id);
      } else {
        next.add(addon.id);
      }
      return next;
    });
  };

  const calculateSubtotal = () => {
    let total = selectedBase ? selectedBase.price : 0;
    selectedAddons.forEach(id => {
      const addon = ADDONS.find(a => a.id === id);
      if (addon) total += addon.price;
    });
    return total;
  };

  const handleAddToCart = () => {
    if (!selectedBase) return;
    
    // Add base
    addItem({ 
      id: selectedBase.id, 
      name: selectedBase.name, 
      price: selectedBase.price, 
      quantity: 1, 
      type: 'BASE' 
    });

    // Add selected addons
    selectedAddons.forEach(id => {
      const addon = ADDONS.find(a => a.id === id);
      if (addon) {
        addItem({ 
          id: addon.id, 
          name: addon.name, 
          price: addon.price, 
          quantity: 1, 
          type: 'ADDON' 
        });
      }
    });

    navigate('/cart');
  };

  return (
    <div className="bg-neutral min-h-screen text-white pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Product Selection (60%) */}
          <div className="lg:col-span-7 space-y-20">
            <header className="space-y-4">
              <span className="text-[10px] font-heading font-bold text-primary uppercase tracking-[0.4em]">Step 01 — Configuration</span>
              <h1 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tighter uppercase leading-[0.9]">
                Build your <br />
                <span className="gold-gradient-text italic">Power Stack.</span>
              </h1>
              <p className="text-white/40 max-w-lg font-body leading-relaxed">
                Select your base station and add capacity based on your load profile. 
                All components are verified for compatibility.
              </p>
            </header>

            {/* Base Product Grid */}
            <div className="space-y-10">
              <h2 className="text-2xl font-heading font-bold uppercase tracking-tight flex items-center gap-3">
                <Zap className="w-6 h-6 text-primary" />
                Select Base Station
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PRODUCTS.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedBase(product)}
                    className={cn(
                      "flex flex-col text-left bg-surface-elevated lux-border rounded-subtle overflow-hidden transition-all duration-500",
                      selectedBase?.id === product.id 
                        ? "border-primary shadow-2xl shadow-primary/10 scale-[1.02]" 
                        : "opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
                    )}
                  >
                    <div className="h-48 overflow-hidden bg-neutral">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-8 space-y-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-heading font-bold text-white uppercase tracking-tight">{product.name}</h3>
                        <span className="text-primary font-heading font-bold">₦{(product.price / 100).toLocaleString()}</span>
                      </div>
                      <p className="text-sm text-white/40 font-body leading-relaxed">{product.description}</p>
                      <div className="flex flex-wrap gap-2 pt-4">
                        {product.specs.map((spec, i) => (
                          <span key={i} className="text-[9px] font-heading font-bold uppercase bg-white/5 px-2 py-1 rounded-full text-white/40">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Add-ons Grid */}
            <div className={cn("space-y-10 transition-opacity duration-500", !selectedBase && "opacity-20 pointer-events-none")}>
              <h2 className="text-2xl font-heading font-bold uppercase tracking-tight flex items-center gap-3">
                <Plus className="w-6 h-6 text-primary" />
                Performance Add-ons
              </h2>
              <div className="space-y-4">
                {ADDONS.map((addon) => (
                  <button
                    key={addon.id}
                    onClick={() => handleToggleAddon(addon)}
                    className={cn(
                      "w-full flex items-center justify-between p-8 bg-surface-elevated lux-border rounded-subtle transition-all duration-300 group",
                      selectedAddons.has(addon.id) ? "border-primary bg-primary/5" : "hover:border-white/20"
                    )}
                  >
                    <div className="flex items-center gap-6">
                      <div className={cn(
                        "w-12 h-12 rounded-full border flex items-center justify-center transition-colors",
                        selectedAddons.has(addon.id) ? "border-primary bg-primary text-neutral" : "border-white/10 text-white/20"
                      )}>
                        {selectedAddons.has(addon.id) ? <CheckCircle2 className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                      </div>
                      <div className="text-left">
                        <h4 className="text-lg font-heading font-bold text-white uppercase tracking-tight">{addon.name}</h4>
                        <p className="text-sm text-white/40 font-body">{addon.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-heading font-bold text-white">₦{(addon.price / 100).toLocaleString()}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Summary (40%) */}
          <aside className="lg:col-span-5 sticky top-32">
            <motion.div 
              layout
              className="bg-surface-elevated lux-border rounded-subtle p-10 space-y-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Cpu className="w-32 h-32 text-primary" />
              </div>

              <div className="space-y-2 relative z-10">
                <span className="text-[10px] font-heading font-bold text-primary uppercase tracking-[0.4em]">Summary</span>
                <h2 className="text-4xl font-heading font-bold text-white tracking-tighter uppercase leading-none">Your Configuration</h2>
              </div>

              <div className="space-y-6 relative z-10 border-t border-white/5 pt-10">
                {selectedBase ? (
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white font-body font-medium">{selectedBase.name}</span>
                    <span className="text-white font-heading font-bold text-lg">₦{(selectedBase.price / 100).toLocaleString()}</span>
                  </div>
                ) : (
                  <div className="h-12 flex items-center justify-center border border-dashed border-white/10 rounded-subtle animate-pulse">
                     <p className="text-[10px] font-heading font-bold text-white/20 uppercase tracking-widest">Select a base station to begin</p>
                  </div>
                )}

                {Array.from(selectedAddons).map(id => {
                  const addon = ADDONS.find(a => a.id === id);
                  return addon && (
                    <div key={id} className="flex justify-between items-center text-sm">
                      <span className="text-white/60 font-body">{addon.name}</span>
                      <span className="text-white font-heading font-bold">₦{(addon.price / 100).toLocaleString()}</span>
                    </div>
                  );
                })}

                <div className="pt-10 border-t border-white/5 flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-[10px] font-heading font-bold text-white/40 uppercase tracking-widest">Total Investment</p>
                    <p className="text-xs text-secondary font-body italic">Excl. delivery</p>
                  </div>
                  <span className="text-5xl font-heading font-bold text-primary tracking-tighter leading-none">
                    ₦{(calculateSubtotal() / 100).toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="space-y-4 relative z-10 pt-6">
                <button 
                  onClick={handleAddToCart}
                  disabled={!selectedBase}
                  className={cn(
                    "button-primary w-full py-5 text-sm font-heading font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 group",
                    !selectedBase && "opacity-20 cursor-not-allowed"
                  )}
                >
                  Configure Delivery —
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-white/20" />
                  <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">3-Year Standard Warranty Integrated</span>
                </div>
              </div>

              <div className="pt-10 border-t border-white/5 space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-heading font-bold text-white uppercase tracking-widest">Live Engineering Review</p>
                    <p className="text-[11px] text-white/40 leading-relaxed font-body">
                      Once added to cart, an engineer reviews your component pairing to ensure 
                      maximum discharge efficiency for your city's peak sun hours.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </aside>
        </div>
      </div>
    </div>
  );
}
