import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { ArrowRight, GraduationCap, Laptop, Camera, Briefcase, CheckCircle2 } from 'lucide-react';

const personas = [
  { id: 'student', name: 'University student', icon: GraduationCap },
  { id: 'remote', name: 'Remote worker', icon: Laptop },
  { id: 'creator', name: 'Content creator', icon: Camera },
  { id: 'pro', name: 'Young professional', icon: Briefcase },
];

const stats = [
  { text: 'Pure Sine Wave — Safe for laptops, MacBooks, all electronics' },
  { text: 'No installer needed — unbox and power up in minutes' },
  { text: 'Waitlist price: save up to ₦75,000 on your order' },
];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center py-20 bg-neutral overflow-hidden border-b border-border-subtle">
      {/* Background Texture - Grid dots from design */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#2A2A2A_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary bg-surface-elevated mb-8"
          >
            <span className="text-[10px] font-heading font-bold uppercase tracking-[0.2em] text-primary">
              Made for Nigeria. Built for blackouts.
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-heading font-bold leading-[0.95] mb-8 tracking-tighter"
          >
            Power That Works <br />
            <span className="text-white italic">When NEPA Doesn't.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg mb-12 max-w-xl leading-relaxed"
          >
            SolarOne is a plug-and-play solar powerstation that arrives pre-built, pre-wired, and ready to power your life — no installer, no electrician, no complicated setup. Just unbox and start generating.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/40 text-sm mb-12 max-w-lg"
          >
            Built specifically for Nigerian students, remote workers, and young professionals who are tired of losing hours of work, money, and sleep to NEPA.
          </motion.p>

          {/* Persona Selector - Required by structural template */}
          <div className="mb-12 w-full max-w-xl">
            <p className="text-[10px] uppercase font-bold text-primary tracking-[0.3em] mb-6">Select your setup profile:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {personas.map((persona) => (
                <button
                  key={persona.id}
                  className="flex flex-col items-center gap-3 p-6 lux-border rounded-subtle bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all group active:scale-95"
                >
                  <persona.icon className="w-5 h-5 text-white/40 group-hover:text-primary transition-colors" />
                  <span className="text-[9px] font-black text-center leading-tight uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">{persona.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 mb-16 w-full sm:w-auto">
            <button className="button-primary px-10 py-5 w-full sm:w-auto text-sm group">
              Join the Waitlist — Get Discounted Price →
            </button>
            <a href="#products" className="text-sm font-bold text-primary hover:text-secondary transition-colors underline underline-offset-8 decoration-primary/30">
              See all products →
            </a>
          </div>

          <div className="space-y-4 pt-8 border-t border-white/5 w-full">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-4 text-white/50 group">
                <CheckCircle2 className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-xs uppercase tracking-widest font-medium group-hover:text-white transition-colors">{stat.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image - High fidelity like design */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative aspect-square lg:aspect-auto h-full min-h-[600px] rounded-sm overflow-hidden lux-border bg-surface-elevated"
        >
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmC43d6N-Wav3LhrRvtOb1Q9OB8wha_MQd0noibeomU-vO3Sfg-VQ9EUi2FDh6vUQMXkynJlrObZv6N7vGA0NX2poraJjmDHnZJjyJwf3u7R6jCds3iotDZ8rH93Rquqll8CB9y1bWHciYR_p2x1kikGw_DREbK7t9j8yYW1ijmFN59JdBHeeEo3dAGD5ygQ71If5_NVuTDLxwn2rSTXn3leMcOIHHQAg98uW8RPrzObyPyBqz1ajWcIOxdRNlmlxMHaH6V9aiOKY" 
            alt="SolarOne High Fidelity Presentation"
            className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral via-transparent flex flex-col justify-end p-12 translate-y-1 group-hover:translate-y-0 transition-transform">
             {/* Decorative gold corners from design */}
             <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-primary" />
             <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
