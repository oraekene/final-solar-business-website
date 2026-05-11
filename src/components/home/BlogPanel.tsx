import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const articles = [
  {
    tag: 'Must Read',
    tagVariant: 'error',
    title: 'The Inverter That Destroyed My Laptop — Three Times.',
    desc: 'How modified sine wave quietly damages electronics, why every cheap Nigerian solar installation uses it, and what my three years of repair bills actually cost me.',
    time: '8 min read'
  },
  {
    tag: 'Comparison',
    tagVariant: 'primary',
    title: 'SolarOne S1 vs Itel IESS 320T: Same Price, Very Different Products.',
    desc: 'Both cost ₦185,000. One is modular and expandable. One is sealed. Here\'s the full side-by-side breakdown — including the column most comparisons leave out.',
    time: '6 min read'
  },
  {
    tag: 'Comparison',
    tagVariant: 'primary',
    title: 'SolarOne S2 vs Itel 1000W: Is the ₦125,000 Gap Worth It?',
    desc: 'The Itel 1000W is a genuinely good product. Here\'s an honest look at what you gain and what you give up at each price point.',
    time: '6 min read'
  },
  {
    tag: 'Setup Guide',
    tagVariant: 'neutral',
    title: 'The Complete Off-Grid Remote Work Setup for Nigerian Freelancers.',
    desc: 'Power and internet — both solved. The exact hardware combinations we recommend for working independently of NEPA and bad telco days.',
    time: '10 min read'
  },
  {
    tag: 'Education',
    tagVariant: 'muted',
    title: 'Why Panel Wattage Is the Wrong Number When Buying Solar.',
    desc: 'Most Nigerians buy solar based on panel size alone. Here\'s the number that actually tells you whether a system will cover your needs.',
    time: '5 min read'
  },
  {
    tag: 'Education',
    tagVariant: 'muted',
    title: 'What Nigerian Solar Installers Get Wrong — And How to Spot It.',
    desc: 'No certification standard. No enforced testing. Here\'s what to ask before you hand anyone money for a solar installation.',
    time: '7 min read'
  }
];

export default function BlogPanel() {
  return (
    <section className="py-32 bg-neutral text-white border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-heading font-bold uppercase tracking-[0.3em] text-primary mb-6 block">The Library</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">Read this before you buy anything.</h2>
            <p className="text-white/40 mt-6 text-lg leading-relaxed">
              We write about what we've personally experienced — not what sounds good in a marketing brochure.
            </p>
          </div>
          <button className="text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:text-secondary transition-colors border-b border-primary/20 pb-1">
            See all education →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.title} className="p-10 lux-border bg-surface-elevated rounded-subtle flex flex-col group hover:border-primary/50 transition-all duration-500">
               <div className="flex justify-between items-start mb-10">
                  <span className={cn(
                    "text-[8px] font-black uppercase px-2 py-0.5 rounded tracking-[0.1em]",
                    article.tagVariant === 'error' && "bg-red-500/10 text-red-400 border border-red-500/20",
                    article.tagVariant === 'primary' && "bg-primary/10 text-primary border border-primary/20",
                    article.tagVariant === 'neutral' && "bg-white/10 text-white border border-white/20",
                    article.tagVariant === 'muted' && "bg-white/5 text-white/40 border border-white/5"
                  )}>
                     {article.tag}
                  </span>
                  <div className="flex items-center gap-2 text-[9px] uppercase font-black tracking-widest text-white/20">
                     <Clock className="w-3 h-3" />
                     {article.time}
                  </div>
               </div>
               
               <h3 className="text-xl font-heading font-bold mb-6 leading-tight group-hover:text-primary transition-colors">{article.title}</h3>
               <p className="text-xs uppercase font-bold tracking-widest leading-relaxed text-white/30 mb-10 group-hover:text-white/50 transition-colors">
                 {article.desc}
               </p>
               
               <Link to="/blog" className="mt-auto inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-primary active:scale-95 transition-transform">
                  READ CASE STUDY <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
               </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
