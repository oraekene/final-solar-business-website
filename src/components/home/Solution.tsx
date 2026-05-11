import { Zap, Boxes, Bluetooth, Laptop, Smartphone, Router, Power, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    title: 'PURE SINE WAVE — ALWAYS',
    icon: Zap,
    desc: 'Every SolarOne powerstation runs a pure sine wave inverter. Your MacBook, monitor, WiFi router, phone — all safe, always.'
  },
  {
    title: 'MODULAR BY DESIGN',
    icon: Boxes,
    desc: 'Start with what you need today. Add panels, batteries, or a bigger inverter later — without buying a new unit. Your first investment never becomes obsolete.'
  },
  {
    title: 'SMART MONITORING',
    icon: Bluetooth,
    desc: 'Integrated JK BMS with Bluetooth lets you see battery level, charging status, and system health from your phone in real time.'
  }
];

export default function Solution() {
  return (
    <section className="py-32 bg-neutral text-white border-b border-white/5 relative overflow-hidden">
       {/* Background glow */}
       <div className="absolute top-1/2 left-2/3 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-[10px] font-heading font-bold uppercase tracking-[0.2em] text-primary mb-6 block">The solution</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-10 leading-[1.1] tracking-tight">
            A solar powerstation that thinks like a professional installation — but installs like a phone charger.
          </h2>
          <p className="text-white/40 mb-16 text-lg leading-relaxed max-w-xl">
            SolarOne is what you get when you combine the plug-and-play convenience of a portable power station with the expandable capacity and serious components of a professionally installed solar system. We build it, wire it, configure it, and test it — then ship it to you. You unbox it, point the panel at the sky, and plug in. No electrician. No conduit. No confusing wiring diagrams.
          </p>

          <div className="space-y-12 pl-8 border-l border-white/5 relative">
            {features.map((f) => (
              <div key={f.title} className="flex gap-6 group relative">
                {/* Custom dot connector */}
                <div className="absolute -left-[37px] top-1.5 w-2 h-2 rounded-full bg-primary border-4 border-neutral" />
                
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center text-primary">
                  <f.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[10px] uppercase tracking-[0.3em] mb-3 text-primary">{f.title}</h4>
                  <p className="text-sm text-white/40 group-hover:text-white/70 transition-colors leading-relaxed max-w-md">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Conceptual Architectural Diagram - Matching screenshot 3 */}
          <div className="p-16 bg-[#181818] rounded-subtle border border-white/5 relative overflow-hidden h-[600px] flex flex-col justify-center">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent_70%)]" />
             
             {/* Source Row */}
             <div className="flex justify-between items-center mb-24 relative">
                <div className="flex flex-col items-center gap-4 group">
                   <div className="w-20 h-20 rounded-subtle bg-neutral border border-primary/50 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(212,175,55,0.1)] group-hover:border-primary transition-colors">
                      <Zap className="w-8 h-8" />
                   </div>
                   <p className="text-[9px] uppercase font-bold tracking-[0.3em] text-white/40">Solar Panel</p>
                </div>
                
                <div className="flex flex-col items-center gap-4 group">
                   <div className="w-20 h-20 rounded-subtle bg-neutral border border-white/10 flex items-center justify-center text-white/20 group-hover:border-white/30 transition-colors">
                      <Power className="w-8 h-8" />
                   </div>
                   <p className="text-[9px] uppercase font-bold tracking-[0.3em] text-white/40 opacity-40">NEPA Grid</p>
                </div>

                {/* Connecting lines */}
                <div className="absolute left-1/2 top-10 -translate-x-1/2 w-48 h-px bg-white/5" />
                <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[1px] h-24 bg-white/5" />
             </div>

             {/* Central Hub */}
             <div className="flex flex-col items-center mb-24 relative">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-40 h-40 rounded-subtle border-2 border-primary bg-neutral flex flex-col items-center justify-center text-center p-4 shadow-[0_0_40px_rgba(212,175,55,0.1)]"
                >
                   <p className="font-heading font-black text-2xl tracking-tighter mb-1">SolarOne</p>
                   <p className="text-[9px] uppercase font-black tracking-[0.3em] text-primary">Powerstation</p>
                </motion.div>
                
                {/* Connecting line to devices */}
                <div className="absolute left-1/2 top-40 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-primary/50 to-transparent" />
             </div>

             {/* Device Outlet */}
             <div className="flex justify-center">
                <div className="lux-border bg-neutral p-4 rounded-subtle flex gap-6 items-center shadow-xl">
                   <Laptop className="w-5 h-5 text-white/20" />
                   <Router className="w-5 h-5 text-white/20" />
                   <Smartphone className="w-5 h-5 text-white/20" />
                   <div className="w-[1px] h-4 bg-white/10" />
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Your Devices</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
