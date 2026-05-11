import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Activity,
  Layout,
  Box
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function SolarSizer() {
  const [isLoading, setIsLoading] = useState(true);

  // Iframe Source with specified parameters
  const iframeSrc = "https://sdk2.solarsizer.workers.dev/?tab=calculator&compact=true";

  return (
    <div className="bg-neutral min-h-screen text-white pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header/Intro Section */}
        <header className="mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-heading font-bold text-primary uppercase tracking-widest">Sizing Engine</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white tracking-tighter uppercase leading-[0.9] max-w-4xl">
            Solar Sizer Engine. <br />
            <span className="gold-gradient-text italic">Calculate your exact load profile</span> and find your perfect setup.
          </h2>
          <p className="text-lg text-white/40 font-body leading-relaxed max-w-2xl">
            Our proprietary sizing algorithm maps your daily energy habits against peak sun hours in your specific Nigerian region. 
            No guesswork, just engineering.
          </p>
        </header>

        {/* Calculator Organism */}
        <section className="relative">
          <div className={cn(
            "bg-surface-elevated lux-border rounded-subtle overflow-hidden transition-all duration-700 min-h-[800px] flex flex-col",
            isLoading ? "opacity-0" : "opacity-100"
          )}>
            <div className="flex-grow">
              <iframe 
                src={iframeSrc}
                className="w-full min-h-[800px] border-none"
                title="SolarSizer Pro"
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </div>

          {/* Skeleton / Loading State */}
          <AnimatePresence>
            {isLoading && (
              <motion.div 
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-10 bg-neutral/80 backdrop-blur-sm rounded-subtle border border-white/5 flex items-center justify-center"
              >
                <div className="space-y-8 text-center max-w-sm px-6">
                  <div className="relative mx-auto w-16 h-16">
                    <div className="absolute inset-0 border-2 border-primary/20 rounded-full" />
                    <div className="absolute inset-0 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                    <Cpu className="absolute inset-0 m-auto w-6 h-6 text-primary animate-pulse" />
                  </div>
                  <div className="space-y-3">
                    <p className="font-heading font-bold text-white uppercase tracking-[0.2em] text-sm">Initializing Engine</p>
                    <p className="text-xs text-white/30 font-body leading-relaxed">
                      Calibrating regional irradiance map and loading master device database...
                    </p>
                  </div>
                  
                  {/* Fake progress items */}
                  <div className="pt-4 space-y-2">
                    {[
                      "Connecting to Catalog API",
                      "Fetching Load Profiles",
                      "Optimizing View"
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-3 text-[10px] font-heading font-bold text-white/20 uppercase tracking-widest">
                        <div className="w-1 h-1 bg-primary/20 rounded-full" />
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Integration Badges */}
        <div className="mt-12 flex flex-wrap gap-8 items-center justify-center opacity-30 grayscale hover:opacity-60 transition-opacity">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-heading font-bold uppercase tracking-widest">Real-time Load Balancing</span>
          </div>
          <div className="w-px h-4 bg-white/20" />
          <div className="flex items-center gap-2">
            <Layout className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-heading font-bold uppercase tracking-widest">Multi-Device Synthesis</span>
          </div>
          <div className="w-px h-4 bg-white/20" />
          <div className="flex items-center gap-2">
            <Box className="w-4 h-4 text-primary" />
            <span className="text-[10px] font-heading font-bold uppercase tracking-widest">Inventory Sync Enabled</span>
          </div>
        </div>

      </div>
    </div>
  );
}
