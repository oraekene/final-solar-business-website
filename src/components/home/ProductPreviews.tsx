import { motion } from 'motion/react';
import { Smartphone, Zap, Battery, Boxes, ArrowRight, Laptop, Power, Router } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const products = [
  {
    id: 's1',
    name: 'SolarOne S1',
    subtitle: 'THE ESSENTIAL WORKSTATION',
    description: 'Powers your laptop, 24" monitor, WiFi router, and phone for 8-12 hours. Pure Sine Wave.',
    price: '₦185,000',
    oldPrice: '₦220,000',
    features: ['100W PD USB-C', '300W AC Output', '50Ah Battery', '60W Solar Panel Included'],
    image: 'https://lh3.googleusercontent.com/aida-public/ALy498U5p4B0B7-v9X0WzD8M8Z3bL9U2F1w4V5p9G6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5'
  },
  {
    id: 's2',
    name: 'SolarOne S2',
    subtitle: 'THE POWER USER SETUP',
    description: 'Double the capacity. Powers a creative setup with dual monitors or a small TV + PS5 setup.',
    price: '₦345,000',
    oldPrice: '₦420,000',
    features: ['1000W AC Output', '120Ah Battery', '120W Solar Panel Included', 'Expandable Hub'],
    image: 'https://lh3.googleusercontent.com/aida-public/ALy498U5p4B0B7-v9X0WzD8M8Z3bL9U2F1w4V5p9G6h7i8j9k0l1m2n3o4p5q6r7s8t9u0v1w2x3y4z5'
  }
];

const brandedSpecs = [
    { label: 'BATTERY', value: 'LiFePO4 12.8V 50Ah' },
    { label: 'INVERTER', value: '300W Pure Sine' },
    { label: 'SOLAR', value: '60W Monocrystalline' }
];

export default function ProductPreviews() {
  return (
    <section id="products" className="py-32 bg-neutral text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Core Series Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-heading font-bold uppercase tracking-[0.3em] text-primary mb-6 block">The hardware</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight">The Core Series.</h2>
            <p className="text-white/40 mt-6 text-lg">Engineered for endurance. Styled for your desk.</p>
          </div>
          <div className="flex gap-4">
             <button className="px-6 py-3 border border-white/5 rounded-subtle hover:bg-white/5 transition-colors text-xs font-bold uppercase tracking-widest">Compare Models</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col bg-surface-elevated rounded-subtle border border-white/5 overflow-hidden hover:border-primary/30 transition-all duration-700">
              <div className="relative aspect-[16/10] bg-[#1a1a1a] p-12 overflow-hidden">
                {/* Badge */}
                <div className="absolute top-6 right-6 waitlist-badge uppercase font-black tracking-widest text-[9px]">
                   PRE-ORDER OPEN
                </div>
                
                {/* Image Placeholder with Lux Accents */}
                <div className="w-full h-full rounded-subtle border border-white/5 bg-neutral relative flex flex-col items-center justify-center">
                    <Zap className="w-16 h-16 text-primary opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    {/* Decorative gold lines */}
                    <div className="absolute inset-4 border border-primary/10 pointer-events-none" />
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-[9px] font-heading font-black text-primary tracking-[0.4em] mb-2">{product.subtitle}</p>
                    <h3 className="text-3xl font-heading font-bold tracking-tight">{product.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-sm line-through text-white/20 font-bold mb-1">{product.oldPrice}</p>
                    <p className="text-3xl font-heading font-extrabold gold-gradient-text">{product.price}</p>
                  </div>
                </div>

                <p className="text-white/40 text-sm mb-10 leading-relaxed max-w-sm">{product.description}</p>

                <div className="grid grid-cols-2 gap-y-4 mb-10 pb-10 border-b border-white/5">
                  {product.features.map((feature, i) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      <span className="text-[10px] uppercase font-bold tracking-widest text-white/60">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="button-primary w-full py-5 text-sm uppercase tracking-[0.2em] font-black mt-auto active:scale-95 transition-transform">
                  Secure yours with a ₦10,000 deposit →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Branded / Note Section - Matching Screenshot 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-32 border-t border-white/5">
            <div className="lg:col-span-5">
                <span className="text-[10px] font-heading font-bold uppercase tracking-[0.2em] text-primary mb-6 block">Modular Branded Solutions</span>
                <h2 className="text-4xl font-heading font-bold leading-tight mb-8">
                   The SolarOne P1: <br />
                   <span className="text-white/40 italic">Waitlist only.</span>
                </h2>
                <p className="text-white/40 text-lg leading-relaxed mb-12">
                   Not a "power bank", but a core energy component. The SolarOne P1 is a 50Ah LiFePO4 battery hub designed for those who already have an inverter but need a safe, long-lasting energy storage solution that doesn't explode.
                </p>

                <div className="space-y-6 mb-12">
                   {brandedSpecs.map(spec => (
                     <div key={spec.label} className="flex justify-between items-center py-4 border-b border-white/5 group">
                        <span className="text-[10px] font-black tracking-[0.3em] text-white/30 group-hover:text-primary transition-colors">{spec.label}</span>
                        <span className="text-xs font-bold uppercase tracking-widest">{spec.value}</span>
                     </div>
                   ))}
                </div>

                <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-primary hover:text-secondary transition-colors group">
                   GET ACCESS TO THE P1 WAITLIST <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
            </div>

            <div className="lg:col-span-7 aspect-[4/3] bg-surface-elevated lux-border rounded-subtle p-12 relative overflow-hidden group">
                 <div className="w-full h-full bg-neutral rounded-subtle border border-white/5 flex items-center justify-center relative">
                    <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1/2 aspect-[3/4] bg-neutral border border-primary/30 rounded-subtle shadow-[0_40px_100px_rgba(0,0,0,0.5)] flex flex-col justify-between p-8"
                    >
                         <div className="flex justify-between items-start">
                            <Battery className="w-8 h-8 text-primary" />
                            <div className="px-3 py-1 bg-primary text-black text-[8px] font-black tracking-widest rounded-full">LFP SAFE</div>
                         </div>
                         <div className="space-y-4">
                            <div className="h-px bg-white/5 w-full" />
                            <div className="h-px bg-white/5 w-2/3" />
                            <p className="font-heading font-black text-xl tracking-tighter">P1 CORE</p>
                         </div>
                    </motion.div>
                    
                    {/* Grid texture overlay */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
}
