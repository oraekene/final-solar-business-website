import { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  CheckCircle2, 
  ChevronRight, 
  ArrowRight, 
  ShieldCheck, 
  Battery, 
  Cpu, 
  Sun,
  Cable,
  AlertTriangle
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const flagshipProducts = [
  {
    id: 'a300',
    name: 'SolarOne A300 Kit',
    price: '₦185,000',
    description: 'The definitive solution for university students and light remote workers. Compact, silent, and enough power to bridge every blackout.',
    specs: [
      '300W Pure Sine Wave Inverter',
      '50Ah LiFePO4 Grade A Battery',
      '60W Foldable Monocrystalline Panel',
      '100W PD USB-C Fast Charging',
      'Plug-and-Play Wiring Harness'
    ],
    features: ['Powers Laptop for 10-14 hrs', 'WiFi Router for 24+ hrs', 'Silent Operation (0dB)']
  },
  {
    id: 'a500',
    name: 'SolarOne A500 Kit',
    price: '₦300,000',
    description: 'Professional grade power for creative setups and heavy remote work. Higher peak currents for dual monitors and larger peripherals.',
    specs: [
      '500W Pure Sine Wave Inverter',
      '100Ah LiFePO4 Grade A Battery',
      '100W Foldable Monocrystalline Panel',
      'Integrated Smart BMS via Bluetooth',
      'Expansion Port for Extra Panels'
    ],
    features: ['Powers 27" Dual Monitor Setup', 'Pro Laptop + Monitor (8-10 hrs)', 'Expandable Solar Capacity']
  }
];

const addons = [
  {
    name: 'Kulpower 100W Mono Panel',
    price: '₦55,000',
    icon: Sun,
    desc: 'Grade A rigid solar panel for permanent roof installation.'
  },
  {
    name: '9Solar 200W Mono Panel',
    price: '₦85,000',
    icon: Sun,
    desc: 'High efficiency 12V monocrystalline panel for faster charging.'
  },
  {
    name: 'PowMr 100Ah LFP Battery',
    price: '₦210,000',
    icon: Battery,
    desc: 'Deep cycle expansion battery unit. Plug compatible.'
  },
  {
    name: 'SolarOne Extension Cables',
    price: '₦15,000',
    icon: Cable,
    desc: '10-meter heavy duty MC4 extension cables (8mm).'
  }
];

export default function ProductFlagship() {
  return (
    <div className="bg-neutral min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 border-b border-white/5 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8">
              <span className="text-[10px] font-heading font-bold uppercase tracking-[0.3em] text-primary">
                Engineering Excellence
              </span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-heading font-bold mb-8 leading-[0.95] tracking-tighter">
              Pure Solar Power. <br />
              <span className="text-white/40 italic">Zero Grid Drama.</span>
            </h1>
            
            <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed font-body">
              Engineered for absolute reliability in Nigeria. No noise, no fuel, no middleman. Just pure electricity when you need it most.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Flagship Products Grid */}
      <section className="py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {flagshipProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="group flex flex-col bg-surface-elevated rounded-subtle lux-border overflow-hidden hover:border-primary/50 transition-all duration-700"
              >
                {/* Visual Header */}
                <div className="relative aspect-[16/10] bg-[#1a1a1a] p-12 overflow-hidden flex items-center justify-center">
                  <div className="absolute top-6 left-6 z-20">
                    <div className="flex items-center gap-2 px-3 py-1 bg-secondary text-neutral rounded-subtle font-heading font-bold text-[9px] uppercase tracking-widest">
                      <div className="w-1.5 h-1.5 rounded-full bg-neutral animate-pulse" />
                      Waitlist active! Ships in 3 weeks
                    </div>
                  </div>
                  
                  <div className="w-full h-full border border-white/5 bg-neutral relative flex flex-col items-center justify-center rounded-subtle">
                    <Zap className="w-16 h-16 text-primary opacity-20" />
                    <div className="absolute inset-4 border border-primary/10 pointer-events-none" />
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <span className="text-[10px] font-heading font-bold text-primary tracking-[0.4em] mb-3 block uppercase">Flagship System</span>
                      <h2 className="text-4xl font-heading font-bold tracking-tight">{product.name}</h2>
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-heading font-bold text-white tracking-tighter">{product.price}</p>
                    </div>
                  </div>

                  <p className="text-white/40 text-sm mb-10 leading-relaxed max-w-sm font-body">
                    {product.description}
                  </p>

                  <div className="space-y-4 mb-10 pb-10 border-b border-white/5">
                    {product.specs.map(spec => (
                      <div key={spec} className="flex items-center gap-4 group/spec">
                        <CheckCircle2 className="w-5 h-5 text-secondary group-hover/spec:scale-110 transition-transform" />
                        <span className="text-[11px] uppercase font-heading font-bold tracking-widest text-white/70 group-hover/spec:text-white transition-colors">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-12">
                     <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 mb-4 font-heading">Performance Profile</p>
                     <div className="flex flex-wrap gap-4">
                        {product.features.map(f => (
                           <div key={f} className="px-3 py-1 bg-white/5 rounded-subtle border border-white/5 text-[9px] font-bold text-white/40 uppercase tracking-widest">
                              {f}
                           </div>
                        ))}
                     </div>
                  </div>

                  <button className="button-primary w-full py-6 text-sm uppercase tracking-[0.3em] font-heading font-bold group">
                    Join Waitlist — Reserve Now <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                  
                  <p className="text-[9px] text-center mt-6 text-white/20 uppercase font-bold tracking-widest font-body">
                    Delivery Nationwide via GIGM • batch 04 opening soon
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-32 bg-surface-elevated">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center md:text-left">
            <span className="text-[10px] font-heading font-bold uppercase tracking-[0.3em] text-primary mb-6 block">Ecosystem expansion</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mb-8">Modular Add-ons.</h2>
            <p className="text-white/40 text-lg max-w-2xl font-body">
              Every SolarOne system is built to grow. Add more generation or storage capacity as your setup evolves.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((item) => (
              <div 
                key={item.name}
                className="p-8 bg-neutral rounded-subtle border border-white/5 flex flex-col group hover:border-primary/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-subtle bg-white/5 border border-white/5 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                
                <h3 className="font-heading font-bold text-sm uppercase tracking-widest mb-3 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-white/40 mb-8 font-body leading-relaxed group-hover:text-white/60 transition-colors">
                  {item.desc}
                </p>

                <div className="mt-auto pt-8 border-t border-white/5 flex justify-between items-center">
                  <span className="font-heading font-bold text-lg tracking-tight">{item.price}</span>
                  <button className="text-primary hover:text-white transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 rounded-subtle bg-primary/5 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-secondary shrink-0" />
                <div>
                   <p className="text-xs font-heading font-black uppercase tracking-widest text-secondary mb-1">Compatibility Advisory</p>
                   <p className="text-[11px] text-white/40 uppercase font-bold tracking-wider leading-relaxed max-w-xl font-body">
                      Third-party batteries and panels must match voltage parameters. SolarOne S1 systems are 12V nominal. S2 systems are 24V nominal. Consult manual before connecting.
                   </p>
                </div>
             </div>
             <button className="whitespace-nowrap px-6 py-3 border border-white/10 rounded-subtle text-[10px] font-heading font-black uppercase tracking-widest hover:bg-white/5 transition-all font-body">
                Download Wiring Specs
             </button>
          </div>
        </div>
      </section>

      {/* Footer Strip */}
      <section className="py-20 bg-neutral text-center border-t border-white/5">
         <p className="text-[10px] font-heading font-bold uppercase tracking-[0.5em] text-white/20">
            Powered by the Sun. Built for Nigeria.
         </p>
      </section>
    </div>
  );
}
