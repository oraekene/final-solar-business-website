import { motion } from 'motion/react';
import { MessageCircle, Send, Users, ArrowRight } from 'lucide-react';

const communities = [
  {
    name: 'SolarOne Engineers & Owners',
    platform: 'WhatsApp',
    description: 'Get direct access to our technical team and other owners. Share setups, ask questions, and get firmware updates.',
    count: '250+ Members',
    icon: MessageCircle,
    color: '#25D366',
    link: '#'
  },
  {
    name: 'The Off-Grid Hustle',
    platform: 'Telegram',
    description: 'A community for remote workers and creators in Nigeria. We share tips on battery management and productivity.',
    count: '1,200+ Members',
    icon: Send,
    color: '#0088cc',
    link: '#'
  }
];

export default function Community() {
  return (
    <section className="py-32 bg-surface-elevated text-white border-b border-white/5 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-heading font-bold uppercase tracking-[0.3em] text-primary mb-6 block">Join the movement</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight">Don't go off-grid alone.</h2>
            <p className="text-white/40 mt-6 text-lg max-w-xl">
               SolarOne is more than hardware. It's a community of high-performers who refused to let bad infrastructure stop their growth.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-white/30">
             <Users className="w-5 h-5 text-primary" />
             <span>3,000+ total community reach</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {communities.map((c) => (
            <div key={c.name} className="lux-border bg-neutral rounded-subtle overflow-hidden flex flex-col group hover:border-primary/50 transition-all duration-500">
               <div className="p-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-10">
                     <div className="w-16 h-16 rounded-subtle bg-surface-elevated lux-border flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <c.icon className="w-8 h-8" style={{ color: c.color }} />
                     </div>
                     <span className="text-[9px] font-black uppercase tracking-widest text-white/20 bg-white/5 px-4 py-2 rounded-full group-hover:text-primary transition-colors">{c.count}</span>
                  </div>

                  <h3 className="text-2xl font-heading font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">{c.name}</h3>
                  <p className="text-[10px] uppercase font-black tracking-widest text-white/40 mb-10 leading-relaxed max-w-md group-hover:text-white/70 transition-colors">
                     {c.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5">
                     <span className="text-xs font-black uppercase tracking-[0.3em] text-white/60">Join on {c.platform}</span>
                     <button className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all">
                        <ArrowRight className="w-5 h-5" />
                     </button>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
