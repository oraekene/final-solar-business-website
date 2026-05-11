import Hero from '../components/home/Hero';
import Problem from '../components/home/Problem';
import Solution from '../components/home/Solution';
import ProductPreviews from '../components/home/ProductPreviews';
import BlogPanel from '../components/home/BlogPanel';
import InternetPanel from '../components/home/InternetPanel';
import FAQ from '../components/home/FAQ';
import Community from '../components/home/Community';
import { ArrowRight, ShieldCheck, Zap, Laptop } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div id="homepage-funnel">
      <Hero />
      <Problem />
      <Solution />
      <ProductPreviews />
      <BlogPanel />
      <InternetPanel />
      <FAQ />
      <Community />

      {/* Component 11 — Final CTA / Waitlist Close */}
      <section className="py-40 bg-neutral text-white text-center relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#2A2A2A_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-[10px] font-heading font-bold uppercase tracking-[0.4em] text-primary mb-8 block">Your last outage</span>
            <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-[0.95] tracking-tighter">
              Stop patching the problem. <br/>
              <span className="text-white/40 italic">Power your potential.</span>
            </h2>
            <p className="text-white/40 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
              Every hour spent in a blackout is an hour of progress lost. Waitlist spots are limited per production batch. Lock in the early-bird pricing today and secure your energy independence.
            </p>

            <button className="button-primary px-16 py-6 text-lg group mb-6">
              Join the Waitlist — Get Exclusive Access →
            </button>
            <p className="text-[9px] uppercase font-black text-white/20 tracking-[0.3em] mb-24">No commitment required. We'll notify you when your batch is ready.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-24 border-t border-white/5">
             {[
               { icon: ShieldCheck, text: "Waitlist members save up to ₦75k" },
               { icon: Zap, text: "Pure sine wave — 100% electronics safe" },
               { icon: Laptop, text: "Built and tested by our experts" }
             ].map((item, i) => (
               <div key={i} className="flex flex-col items-center gap-6 group">
                  <div className="w-16 h-16 rounded-subtle bg-surface-elevated lux-border flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                     <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[9px] uppercase font-black tracking-[0.3em] text-white/30 group-hover:text-primary transition-colors max-w-[150px] leading-relaxed">
                    {item.text}
                  </span>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
