import { motion } from 'motion/react';
import { 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  AlertTriangle, 
  Battery, 
  Sun, 
  Pocket, 
  Cable,
  Clock
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const itelKits = [
  {
    id: 'itel-320t',
    name: 'Itel Energy iESS 320T + 200W Panel Kit',
    oldPrice: '₦220,000',
    newPrice: '₦185,000',
    description: 'A student favorite. Compact, portable, and remarkably efficient for those late-night study sessions.',
    specs: [
      '130W Pure Sine Wave Inverter',
      '320Wh LiFePO4 Battery Cell',
      '200W Tier-1 Foldable Solar Panel',
      'Type-C to Type-C Cable Included'
    ],
    features: ['Tested & Verified Components', 'Intelligent Safety Protections'],
    waitlist: true
  },
  {
    id: 'itel-1000w',
    name: 'Itel 1000W Powerstation + 450W Panel',
    oldPrice: '₦435,000',
    newPrice: '₦425,000',
    description: 'The heavyweight for studio setups. Serious power for professionals who can\'t afford a single beep from their UPS.',
    specs: [
      '1000Wh LiFePO4 Battery',
      '500W Pure Sine Wave Inverter',
      '450W PID-Resistant Solar Panel',
      '20ms Auto-Switchover UPS'
    ],
    features: ['6,000+ Life Cycles Rated', 'Dual PV/Grid Charging'],
    waitlist: true
  },
  {
    id: 'combo-500w',
    name: '500W Powerstation + 350W Panel Combo',
    oldPrice: '₦350,000',
    newPrice: '₦310,000',
    description: 'Accessible off-grid power. Arrives pre-configured with dual combined solar panels for faster recovery.',
    specs: [
      '600Wh LiFePO4 Battery',
      '500W Modified Sine Wave Output',
      '350W Rigid Panel Setup (150W+200W)',
      'Multiple Output Ports (Type-C, DC, USB)'
    ],
    features: ['Dual Panel Recovery', 'Built-in Short-Circuit Guard'],
    warning: 'NOT FOR LAPTOPS. This unit uses a modified sine wave inverter. Perfect for fans, lights, and standard bulbs, but will damage laptop batteries and sensitive PC power blocks over time.',
    waitlist: true
  }
];

const addons = [
  {
    name: 'Kulpower Mono Panels',
    range: '100W - 450W',
    price: 'From ₦32,000',
    icon: Sun,
    note: 'Extreme PID and weather resistance with low-iron tempered glass.'
  },
  {
    name: '9Solar Mono Panels',
    range: '190W - 600W',
    price: 'From ₦45,000',
    icon: Sun,
    note: 'Reduced string mismatch losses for faster battery recovery.'
  },
  {
    name: 'Taico Smart LFP Batteries',
    range: '12V 100Ah - 200Ah',
    price: 'From ₦210,000',
    icon: Battery,
    note: 'Smart Bluetooth Monitoring via integrated BMS (4000+ cycles).'
  },
  {
    name: 'Cworth Modular Batteries',
    range: '12V 100Ah - 200Ah',
    price: 'From ₦230,000',
    icon: Battery,
    note: 'Grade A cells with 3200+ cycles at 80% Depth-of-Discharge.'
  },
  {
    name: 'Standalone Stations',
    range: '320Wh - 1000Wh',
    price: 'From ₦140,000',
    icon: Zap,
    note: 'Tested range including Itel Energy and SolarOne certified units.'
  },
  {
    name: 'Heavy-Duty Solar Cables',
    range: 'Pure Copper Core',
    price: '₦4,500/foot',
    icon: Cable,
    note: 'Thick gauge copper minimizes voltage drop for DIY extension.'
  }
];

export default function ProductSolar() {
  return (
    <div className="bg-[#121212] min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 border-b border-white/5 bg-neutral overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="h-full w-full bg-[radial-gradient(#f2ca50_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center md:items-start md:text-left"
          >
            <span className="text-[10px] font-heading font-bold uppercase tracking-[0.4em] text-primary mb-6 block">
              Curated Third-Party Hardware
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-8 leading-[0.95] tracking-tighter">
              Ditch the Grid. <br />
              <span className="text-primary italic">Power Your Hustle.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed font-body mb-12">
              No noise, no fuel, pure sine wave power for flawless exams and endless studio sessions. 
              We've tested the marketplace and picked the only hardware that actually survives the Nigerian climate.
            </p>
            <button className="button-primary px-10 py-5 text-sm uppercase tracking-[0.3em] font-heading font-bold group">
              Secure Your Setup Now <ArrowRight className="inline-block ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Main Kits Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {itelKits.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col bg-surface-elevated rounded-subtle lux-border overflow-hidden h-full group hover:border-primary/40 transition-all duration-500"
              >
                {/* Product Status Header */}
                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                    <span className="text-[9px] font-heading font-bold text-secondary uppercase tracking-[0.2em]">Waitlist Active</span>
                  </div>
                  <span className="text-[10px] font-heading font-bold text-white/30 uppercase tracking-widest">
                    Ships in 3 weeks
                  </span>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <h2 className="text-2xl font-heading font-bold mb-2 tracking-tight group-hover:text-primary transition-colors">
                    {product.name}
                  </h2>
                  <div className="flex items-baseline gap-4 mb-8">
                    <span className="text-3xl font-heading font-black tracking-tighter text-white">
                      {product.newPrice}
                    </span>
                    <span className="text-lg font-heading font-bold text-white/20 line-through">
                      {product.oldPrice}
                    </span>
                  </div>

                  <p className="text-xs text-white/40 mb-8 leading-relaxed font-body">
                    {product.description}
                  </p>

                  <div className="space-y-4 mb-10 pb-10 border-b border-white/5 flex-grow">
                    {product.specs.map(spec => (
                      <div key={spec} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        <span className="text-[10px] uppercase font-heading font-bold tracking-widest text-white/70">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Warning Callout for Combo */}
                  {product.warning && (
                    <div className="mb-10 p-4 bg-secondary/5 border border-secondary/20 rounded-subtle">
                      <div className="flex items-center gap-3 mb-2">
                        <AlertTriangle className="w-4 h-4 text-secondary" />
                        <span className="text-[9px] font-heading font-black uppercase tracking-[0.2em] text-secondary">
                          SolarOne Power Note
                        </span>
                      </div>
                      <p className="text-[10px] text-secondary/70 font-body leading-relaxed font-medium">
                        {product.warning}
                      </p>
                    </div>
                  )}

                  <button className="button-primary w-full py-5 text-[10px] uppercase tracking-[0.3em] font-heading font-bold">
                    Join Waitlist — Reserve Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Grid */}
      <section className="py-32 bg-surface-elevated border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <span className="text-[10px] font-heading font-bold uppercase tracking-[0.3em] text-primary mb-6 block">The Parts Bin</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mb-8">Modular Add-ons.</h2>
            <p className="text-white/40 text-lg max-w-2xl font-body">
              Hardcoded specs. Genuine components. No "fairly used" shortcuts. These are the building blocks of a resilient private grid.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon) => (
              <div 
                key={addon.name}
                className="p-8 bg-neutral lux-border rounded-subtle flex flex-col group hover:border-secondary/30 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-10 h-10 rounded-subtle bg-white/5 flex items-center justify-center text-secondary group-hover:bg-secondary/10 transition-colors">
                    <addon.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xl font-heading font-black tracking-tight text-white">{addon.price}</span>
                </div>

                <div className="mb-6">
                  <h3 className="font-heading font-bold text-sm uppercase tracking-[0.1em] mb-1 group-hover:text-secondary transition-colors">
                    {addon.name}
                  </h3>
                  <span className="text-[10px] font-heading font-bold text-white/30 uppercase tracking-widest">
                    {addon.range}
                  </span>
                </div>

                <p className="text-[11px] text-white/40 leading-relaxed font-body mb-8">
                  {addon.note}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-3">
                  <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                  <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/30">
                    Inventory Verified Original
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics & Payment Footer */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 p-4 rounded-subtle bg-white/5 border border-white/5">
                <Clock className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary mb-1">Waitlist Notice</p>
                  <p className="text-[10px] text-white/40 uppercase font-bold tracking-wider leading-relaxed">
                    All components are waitlisted. Allow up to 3 weeks for full testing and nationwide delivery.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-subtle bg-white/5 border border-white/5">
                <Pocket className="w-6 h-6 text-secondary" />
                <div>
                  <p className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-secondary mb-1">Bank Transfer Instruction</p>
                  <p className="text-[10px] text-white/40 uppercase font-bold tracking-wider leading-relaxed">
                    Secure your spot by completing a transfer to our OPay Account. DM receipt to WhatsApp immediately.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <p className="text-5xl md:text-7xl font-heading font-black text-white/5 tracking-tighter uppercase pointer-events-none select-none mb-4">
                SOLAR-ONE
              </p>
              <p className="text-[10px] font-heading font-bold uppercase tracking-[0.5em] text-white/20">
                Engineered for Excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
