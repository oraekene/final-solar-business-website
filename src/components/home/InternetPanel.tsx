import { motion } from 'motion/react';
import { Wifi, Router, Satellite, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

const bundles = [
  {
    title: 'THE STARLINK BUNDLE',
    price: '₦265,000',
    description: 'The ultimate zero-latency setup. Powers your Starlink and Laptop for a full workday even in total blackout.',
    features: ['SolarOne S1 Unit', 'Starlink DC Conversion Kit', '60W Foldable Panel', 'Anti-Surge Protection'],
    icon: Satellite,
    tag: 'MOST POPULAR'
  },
  {
    title: 'THE HUAWEI PREMIUM',
    price: '₦215,000',
    description: 'For 4G/5G users. Optimized for Huawei and TP-Link routers with direct DC power to avoid conversion loss.',
    features: ['SolarOne S1 Unit', 'Multi-voltage DC Cable', '60W Solar Panel', 'All-Day WiFi Guarantee'],
    icon: Router,
    tag: 'HIGH EFFICIENCY'
  },
  {
    title: 'THE MOBILE OFFICE',
    price: '₦320,000',
    description: 'For nomads. Everything you need to work from anywhere in Nigeria with a roof.',
    features: ['SolarOne S2 Unit', '120W Solar Array', 'Laptop Power Delivery', 'Router Direct-Connect'],
    icon: Wifi,
    tag: 'ULTIMATE'
  }
];

export default function InternetPanel() {
  return (
    <section className="py-32 bg-surface-elevated text-white border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20 text-left">
          <span className="text-[10px] font-heading font-bold uppercase tracking-[0.3em] text-primary mb-6 block">Productivity Ecosystem</span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight mb-8 tracking-tighter">
            Internet is not optional. <br />
            <span className="text-white/40 italic">Starlink is great, but NEPA is not.</span>
          </h2>
          <p className="text-white/40 text-lg leading-relaxed max-w-xl">
             We specialize in Starlink DC conversion and router direct-power setups. Stop using 220V inverters to power 12V routers. It's inefficient and wastes 30% of your battery. We do it better.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {bundles.map((bundle) => (
            <div key={bundle.title} className="lux-border bg-neutral rounded-subtle overflow-hidden flex flex-col group hover:border-primary/50 transition-all duration-500">
              <div className="p-10 border-b border-white/5 bg-gradient-to-br from-white/5 to-transparent relative overflow-hidden">
                <div className="absolute top-6 right-6 px-3 py-1 bg-primary text-black text-[8px] font-black tracking-widest rounded-full">{bundle.tag}</div>
                <bundle.icon className="w-10 h-10 text-primary mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-heading font-bold tracking-tight mb-2 uppercase">{bundle.title}</h3>
                <p className="text-2xl font-heading font-extrabold gold-gradient-text">{bundle.price}</p>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest leading-relaxed mb-10 group-hover:text-white/70 transition-colors">
                  {bundle.description}
                </p>
                
                <div className="space-y-4 mb-12">
                  {bundle.features.map(f => (
                    <div key={f} className="flex items-center gap-3">
                       <ShieldCheck className="w-4 h-4 text-primary/50" />
                       <span className="text-[10px] uppercase font-bold tracking-widest text-white/60">{f}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-auto flex items-center justify-between w-full p-4 lux-border rounded-subtle hover:bg-primary hover:text-black transition-all group/btn uppercase text-[10px] font-black tracking-[0.2em]">
                   Pre-order bundle
                   <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="p-12 lux-border bg-neutral rounded-subtle flex flex-col md:flex-row items-center justify-between gap-12 group hover:border-primary/30 transition-all">
           <div className="flex gap-8 items-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-primary border border-white/5">
                 <Satellite className="w-8 h-8" />
              </div>
              <div>
                 <h4 className="font-heading font-bold text-xl uppercase tracking-tight">Need a Starlink DC Conversion Kit Only?</h4>
                 <p className="text-sm text-white/40">Convert your Starlink to run on 12V/24V battery power. Skip the inverter entirely.</p>
              </div>
           </div>
           <button className="px-8 py-4 bg-surface-elevated lux-border rounded-subtle text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-black transition-all whitespace-nowrap">
              Shop Accessories →
           </button>
        </div>
      </div>
    </section>
  );
}
