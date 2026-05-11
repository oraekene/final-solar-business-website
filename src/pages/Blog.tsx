import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  ArrowRight, 
  Clock, 
  ChevronRight, 
  CheckCircle2,
  Zap,
  Star,
  Activity,
  Share2,
  Smartphone,
  Cpu,
  MessageSquare,
  Send,
  User,
  MapPin,
  Monitor
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

type Category = 'All' | 'Must Read' | 'Comparisons' | 'Setup Guides' | 'Solar Education' | 'Persona Stories' | 'Internet';

interface Article {
  id: string;
  category: Category;
  title: string;
  description: string;
  readTime: string;
  author?: string;
  image?: string;
  badge?: string;
  badgeType?: 'winner' | 'depends' | 'difficulty' | 'location' | 'cost';
  level?: 'Beginner' | 'Intermediate';
  location?: string;
  stats?: string;
}

const articles: Article[] = [
  // MUST READ
  {
    id: 'must-read-1',
    category: 'Must Read',
    title: 'The Inverter That Destroyed My Laptop. Three Times.',
    description: 'A detailed breakdown of how modified sine wave inverters silently degrade high-precision power supplies. Kene shares a cautionary tale.',
    readTime: '8 min read',
    author: 'Kene - SolarOne Founder',
    badge: 'Most Important',
    badgeType: 'difficulty'
  },
  {
    id: 'must-read-2',
    category: 'Must Read',
    title: "Why Your Solar Installer Quoted You Modified Sine Wave — And What It's Going to Cost You",
    description: 'Installers use modified sine wave because it costs less and they make more margin. This is what you should ask before you agree.',
    readTime: '6 min read'
  },
  {
    id: 'must-read-3',
    category: 'Must Read',
    title: "The Real Price of Cheap Solar in Nigeria: What the Quote Doesn't Include",
    description: 'A ₦250,000 quote sounds reasonable until you add the cost of wrong battery chemistry and repairs. The real number is different.',
    readTime: '7 min read'
  },

  // COMPARISONS
  {
    id: 'comp-1',
    category: 'Comparisons',
    title: 'SolarOne S1 vs Itel IESS 320T + 200W Panel: Same Price. Very Different Products.',
    description: 'Both cost ₦185,000 and run on LiFePO4. The differences in inverter expandability and modular design are where the decision lives.',
    readTime: '6 min read',
    badge: 'It Depends',
    badgeType: 'depends'
  },
  {
    id: 'comp-2',
    category: 'Comparisons',
    title: 'SolarOne S2 vs Itel 1000W Powerstation + 450W Panel: Is the ₦125,000 Gap Worth It?',
    description: 'The Itel 1000W is a strong product. At ₦425,000 vs ₦300,000, here is exactly what you gain and what you give up.',
    readTime: '7 min read',
    badge: 'It Depends',
    badgeType: 'depends'
  },
  {
    id: 'comp-3',
    category: 'Comparisons',
    title: "SolarOne S1 vs the ₦250,000 Local Installer Quote: What You're Actually Paying For",
    description: 'A student was quoted ₦250,000 for a modified sine wave setup. Here is why S1 beats it on every line item.',
    readTime: '8 min read',
    badge: 'SolarOne S1 Wins',
    badgeType: 'winner'
  },
  {
    id: 'comp-4',
    category: 'Comparisons',
    title: 'SolarOne S1 vs the 500W Chinese Powerstation: The Comparison Nobody Does Honestly',
    description: 'Cheap 500W stations use modified sine wave. We put them through a 24-hour discharge test to reveal usable watt-hours.',
    readTime: '7 min read',
    badge: 'SolarOne S1 Wins',
    badgeType: 'winner'
  },
  {
    id: 'comp-5',
    category: 'Comparisons',
    title: 'Itel IESS 320T vs Itel 1000W: How to Choose Between the Two Itel Powerstations',
    description: "Choosing within the Itel brand? We compare load profiles and runtimes to find where each unit is the obvious choice.",
    readTime: '5 min read',
    badge: 'It Depends',
    badgeType: 'depends'
  },
  {
    id: 'comp-6',
    category: 'Comparisons',
    title: 'SolarOne S1 vs SolarOne S2: Which One Is Actually Right for You?',
    description: 'The S1 and S2 are built for fundamentally different use cases. We map each to the daily usage patterns where they win.',
    readTime: '5 min read',
    badge: 'It Depends',
    badgeType: 'depends'
  },

  // SETUP GUIDES
  {
    id: 'setup-1',
    category: 'Setup Guides',
    title: 'The Complete Off-Grid Remote Work Setup for Nigerian Freelancers',
    description: 'Covers the full stack — city-specific internet, powerstation sizing, and battery expansion for an 8-hour workday.',
    readTime: '12 min read',
    badge: 'Beginner',
    badgeType: 'difficulty'
  },
  {
    id: 'setup-2',
    category: 'Setup Guides',
    title: 'How to Expand Your SolarOne System: Adding Batteries and Panels Safely',
    description: 'Adding capacity without voiding your warranty. The correct order of expansion and how to parallel batteries.',
    readTime: '10 min read',
    badge: 'Intermediate',
    badgeType: 'difficulty'
  },
  {
    id: 'setup-3',
    category: 'Setup Guides',
    title: 'SolarOne Unboxing and First Setup: Everything You Do on Day One',
    description: "First-day checklists: panel placement, BMS Bluetooth pairing, and the first charge cycle to get speed.",
    readTime: '8 min read',
    badge: 'Beginner',
    badgeType: 'difficulty'
  },
  {
    id: "setup-4",
    category: 'Setup Guides',
    title: 'How to Maintain Your SolarOne for Maximum Lifespan',
    description: "Monthly 10-minute routines that extend battery health and explain what BMS readings actually mean.",
    readTime: "6 min read",
    badge: "Beginner",
    badgeType: "difficulty"
  },
  {
    id: "setup-5",
    category: "Setup Guides",
    title: "How to Add a Second Solar Panel: Series vs Parallel Explained Simply",
    description: "Voltage and current ratings for charge controllers. Plain language guide to adding more solar harvest.",
    readTime: "7 min read",
    badge: "Intermediate",
    badgeType: "difficulty"
  },

  // SOLAR EDUCATION
  {
    id: 'edu-1',
    category: 'Solar Education',
    title: 'Pure Sine Wave vs Modified Sine Wave: The Difference That Could Cost You ₦200,000',
    description: 'Waveform physics and real device damage list. Why pure sine wave is the only choice for modern electronics.',
    readTime: '6 min read',
    level: 'Beginner'
  },
  {
    id: 'edu-2',
    category: 'Solar Education',
    title: 'How Solar Sizing Actually Works in Nigeria: Why Panel Wattage Is the Wrong Number',
    description: 'Usable watt-hours vs panel wattage. Calculating for city-specific peak sun hours and load profiles.',
    readTime: '8 min read',
    level: 'Beginner'
  },
  {
    id: 'edu-3',
    category: 'Solar Education',
    title: 'LiFePO4 vs Gel vs Lead Acid: Which Battery Chemistry Is Right for Nigeria',
    description: 'Chemistry comparisons, lifespan differences in tropical heat, and the cost-per-cycle calculation.',
    readTime: '7 min read',
    level: 'Beginner'
  },
  {
    id: 'edu-4',
    category: 'Solar Education',
    title: 'What Is MPPT and Why Does It Matter? The Charge Controller Explained',
    description: 'Maximum Power Point Tracking extracts 20-30% more energy from your panels than APWM controllers.',
    readTime: '5 min read',
    level: 'Beginner'
  },
  {
    id: 'edu-5',
    category: 'Solar Education',
    title: 'How to Read Your BMS Data: Every Number in the App Explained',
    description: 'Real-time battery health, charge rates, and trigger action thresholds in the JK BMS app.',
    readTime: '8 min read',
    level: 'Intermediate'
  },
  {
    id: 'edu-6',
    category: 'Solar Education',
    title: 'Peak Sun Hours in Nigeria: City-by-City Data mapping',
    description: 'Lagos vs Abuja vs PH irradiance mapping. How rainy seasons reduce daily generation capacity.',
    readTime: '6 min read',
    level: 'Intermediate'
  },
  {
    id: 'edu-7',
    category: 'Solar Education',
    title: 'What Is a Load Profile and Why You Need One Before Buying',
    description: 'Building your device usage list to stop guessing. Free Solar Sizer tool for automatic calculation.',
    readTime: '5 min read',
    level: 'Beginner'
  },

  // PERSONA STORIES
  {
    id: 'story-1',
    category: 'Persona Stories',
    title: 'How a Lagos Remote UX Designer Built a Full Off-Grid Workstation for ₦300,000',
    description: 'Tolu works for a UK startup from Yaba with 6 hours of NEPA. Here is her workflow setup.',
    readTime: '9 min read',
    location: 'Yaba, Lagos',
    badge: 'Yaba, Lagos',
    badgeType: 'location',
    stats: '₦300,000 Spend'
  },
  {
    id: 'story-2',
    category: 'Persona Stories',
    title: 'The University Student Setup: Powering Laptop, Fan, and Phone in a Hostel',
    description: 'Emeka is Graphic Designer at UNN with 4 hours of power. His minimum viable setup.',
    readTime: '8 min read',
    location: 'Enugu',
    badge: 'Enugu',
    badgeType: 'location',
    stats: '₦185,000 Spend'
  },
  {
    id: 'story-3',
    category: 'Persona Stories',
    title: 'The Freelance Developer Setup: Powering 10-Hour Coding Sessions in Abuja',
    description: 'Seun is a Full-stack dev in Wuse running two monitors. He sized for full workday reliability.',
    readTime: '9 min read',
    location: 'Abuja',
    badge: 'Abuja',
    badgeType: 'location',
    stats: '₦410,000 Spend'
  },
  {
    id: 'story-4',
    category: 'Persona Stories',
    title: 'The Home Office Setup: Powering a Family of Four in Port Harcourt',
    description: 'Chidi cut his fuel spend by 80% with an S2 + Expansion setup that survives the rainy season.',
    readTime: '10 min read',
    location: 'Port Harcourt',
    badge: 'Port Harcourt',
    badgeType: 'location',
    stats: '₦510,000 Spend'
  },
  {
    id: 'story-5',
    category: 'Persona Stories',
    title: 'How to Buy Solar for Your Family in Nigeria From Abroad',
    description: 'Remote purchase guide for Diaspora buyers: what to order and how to manage delivery logistics.',
    readTime: '8 min read',
    location: 'International',
    badge: 'International',
    badgeType: 'location',
    stats: 'From ₦185,000'
  },

  // INTERNET
  {
    id: 'net-1',
    category: 'Internet',
    title: 'The Complete Nigerian Remote Worker Internet Guide: Six Combinations',
    description: 'Ranked by budget and reliability. From single-device upgrades to enterprise-grade bonding.',
    readTime: '15 min read',
    badge: 'From ₦110,000',
    badgeType: 'cost'
  },
  {
    id: 'net-2',
    category: 'Internet',
    title: 'The Standard Dual CPE Setup: Huawei B818 + Cudy LT500 + ER605',
    description: 'Full setup guide for the combination we recommend for serious remote workers.',
    readTime: '12 min read',
    badge: '₦235,000 Build',
    badgeType: 'cost'
  },
  {
    id: 'net-3',
    category: 'Internet',
    title: 'Combination 1 — The Single Stack Upgrade: ZTE MC888 Setup Guide',
    description: 'Lowest effort upgrade from MiFi. 3-5x the speed by switching to a proper indoor 5G CPE.',
    readTime: '5 min read',
    badge: '₦110,000',
    badgeType: 'cost'
  },
  {
    id: 'net-4',
    category: 'Internet',
    title: 'Combination 2 — The Budget Dual Stack: Phone Tethering Setup Guide',
    description: 'Dual-network redundancy for ₦135,000 using your existing Android phone with a Cudy CPE.',
    readTime: '8 min read',
    badge: '₦135,000',
    badgeType: 'cost'
  },
  {
    id: 'net-5',
    category: 'Internet',
    title: 'MTN vs Airtel vs Glo 5G in Nigeria: Which Networks to Pair',
    description: 'City-by-city network strength data and optimal pairings for redundancy in major zones.',
    readTime: '6 min read'
  }
];

const filters: Category[] = ['All', 'Must Read', 'Comparisons', 'Setup Guides', 'Solar Education', 'Persona Stories', 'Internet'];

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPersonaActive, setIsPersonaActive] = useState('remote');

  const filteredArticles = articles.filter(article => {
    const matchesFilter = activeFilter === 'All' || article.category === activeFilter;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const featured = articles.find(a => a.id === 'must-read-1')!;

  const personas = [
    { id: 'student', name: 'University Student', icon: User },
    { id: 'remote', name: 'Remote Worker', icon: Monitor },
    { id: 'creator', name: 'Content Creator', icon: Smartphone },
    { id: 'pro', name: 'Young Professional', icon: Cpu }
  ];

  return (
    <div className="bg-neutral min-h-screen text-white pb-32 pt-20">
      {/* Blog Hero */}
      <section className="relative pt-12 pb-24 border-b border-white/5 bg-neutral overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="h-full w-full bg-[radial-gradient(#f2ca50_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-start"
              >
                <span className="text-[10px] font-heading font-bold uppercase tracking-[0.4em] text-primary mb-6 block">
                  The SolarOne Knowledge Base
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-[100px] font-heading font-bold mb-10 leading-[0.88] tracking-tighter">
                  Everything we know <br />
                  about solar in Nigeria — <br />
                  <span className="gold-gradient-text italic">written honestly.</span>
                </h1>
                <p className="text-white/60 text-lg md:text-xl leading-relaxed font-body mb-12 max-w-2xl">
                  No sponsored posts. No affiliate rankings. No manufacturer talking points. 
                  Everything here comes from personal experience, real testing, and three years of 
                  learning what the Nigerian solar market gets wrong.
                </p>

                <div className="w-full max-w-xl relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-primary transition-colors" />
                  <input 
                    type="text"
                    placeholder="Search guides, comparisons, setup stories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-subtle py-5 pl-12 pr-6 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all font-body"
                  />
                </div>
                
                <div className="flex gap-8 mt-6">
                  <button onClick={() => setActiveFilter('Comparisons')} className="text-[10px] font-heading font-bold text-primary uppercase tracking-[0.2em] border-b border-primary/30 hover:border-primary transition-colors">
                    Jump to comparisons
                  </button>
                </div>
              </motion.div>
            </div>
            
            <div className="hidden lg:col-span-5 relative">
              <div className="relative z-10 flex flex-col gap-6 rotate-2">
                {[
                  "Lagos Humidity vs. Panel Efficiency",
                  "What Is MPPT? The Charge Controller Explained",
                  "How to Maintain Your SolarOne for Maximum Lifespan"
                ].map((title, i) => (
                  <div key={i} className={cn(
                    "p-6 bg-surface-elevated/40 lux-border rounded-subtle backdrop-blur-md opacity-30 select-none",
                    i === 1 && "translate-x-12 opacity-50",
                    i === 2 && "translate-x-6 opacity-20"
                  )}>
                    <span className="text-[8px] font-heading font-black uppercase text-white/20 tracking-widest block mb-2">Technical Insight</span>
                    <h4 className="text-sm font-heading font-bold text-white/40">{title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured spotlight card */}
      <section className="py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-6">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="lux-border rounded-subtle overflow-hidden flex flex-col lg:flex-row group"
           >
              <div className="lg:w-3/5 relative min-h-[400px] bg-surface-elevated overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral to-primary/10 opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   <h2 className="text-5xl md:text-8xl font-heading font-black text-primary/10 select-none leading-none tracking-tighter text-center uppercase">
                     MODIFIED <br /> SINE WAVE <br /> TRAP
                   </h2>
                </div>
                <img 
                  src="https://picsum.photos/seed/failure/1200/800" 
                  alt="Damaged hardware" 
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 group-hover:scale-105 transition-transform duration-[2000ms]"
                />
                <div className="absolute top-8 left-8">
                  <span className="waitlist-badge bg-secondary text-neutral">🔥 Most Important</span>
                </div>
              </div>
              <div className="lg:w-2/5 p-12 flex flex-col justify-center bg-surface-elevated border-l border-white/5 relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-secondary" />
                <span className="text-[10px] font-heading font-bold text-secondary uppercase tracking-[0.4em] mb-6 block">Must Read</span>
                <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 tracking-tight group-hover:text-primary transition-colors duration-500">
                  {featured.title}
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed font-body mb-10">
                  {featured.description}
                </p>
                
                <div className="bg-primary/10 border border-primary/20 rounded-subtle p-6 mb-10 group/note">
                   <div className="flex items-center gap-2 mb-3">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-heading font-black uppercase text-primary tracking-widest">SolarOne Power Note</span>
                   </div>
                   <p className="text-[12px] text-white/50 leading-relaxed italic">
                      "We tested two M1 MacBook chargers on a 500W modified sine wave inverter. 
                      Within 4 hours, both chargers were too hot to touch. Pure sine wave is not a luxury; it's hardware insurance."
                   </p>
                </div>

                <div className="flex items-center justify-between mt-auto pt-10 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[11px] font-heading font-bold text-white uppercase tracking-widest">{featured.author}</p>
                      <p className="text-[10px] text-white/30 font-bold uppercase">{featured.readTime}</p>
                    </div>
                  </div>
                  <button className="button-primary p-3 rounded-full group/btn">
                    <ArrowRight className="w-4 h-4 text-neutral group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <div className="sticky top-0 z-50 w-full bg-neutral/80 backdrop-blur-xl border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto hide-scrollbar">
          <div className="flex items-center gap-4 py-6 whitespace-nowrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-6 py-2 rounded-subtle text-[10px] font-heading font-bold uppercase tracking-widest transition-all",
                  activeFilter === filter 
                    ? "bg-primary text-neutral" 
                    : "bg-secondary/10 text-secondary hover:bg-secondary/20"
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Categories / Search Results */}
      <main className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        {/* Dynamic Section rendering based on filter */}
        {activeFilter === 'All' ? (
          <>
            {/* Must Read Section */}
            <Section 
              title="Must Read" 
              subtitle="The information the industry hopes you never find."
              items={articles.filter(a => a.category === 'Must Read' && a.id !== 'must-read-1')}
            />
            {/* Comparisons Section with It Depends / Winner badges */}
            <Section 
              title="Comparisons" 
              subtitle="Head-to-head honest analysis. No brand loyalty."
              items={articles.filter(a => a.category === 'Comparisons')}
              bgColor="bg-surface-elevated/30"
              gridCols={3}
            />
            {/* Setup Guides */}
            <Section 
              title="Setup Guides" 
              subtitle="Step-by-step blueprints for building a working setup in Nigeria."
              items={articles.filter(a => a.category === 'Setup Guides')}
              accentColor="bg-neutral-900"
            />
            
            {/* Solar Education Section */}
            <Section 
              title="Solar Education" 
              subtitle="The foundational knowledge most Nigerian buyers never get."
              items={articles.filter(a => a.category === 'Solar Education')}
              bgColor="bg-[#1a1512]"
            />

            {/* MID-PAGE CALCULATOR CTA */}
            <section className="py-24 bg-surface-elevated rounded-subtle lux-border relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
                  <Zap className="w-64 h-64 text-primary" />
               </div>
               <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                  <span className="text-[10px] font-heading font-bold text-primary uppercase tracking-[0.4em] mb-8 block">Solar Sizer Interactive</span>
                  <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 tracking-tighter leading-none">Ready to find your exact setup?</h2>
                  <p className="text-white/40 text-lg md:text-xl font-body mb-16">
                    Select your profile and let Solar Sizer build your personalised system recommendation — 
                    with load calculations, runtime estimates, and a complete product list.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                     {personas.map(p => (
                        <button 
                          key={p.id}
                          onClick={() => setIsPersonaActive(p.id)}
                          className={cn(
                            "flex flex-col items-center p-6 rounded-subtle border transition-all duration-500",
                            isPersonaActive === p.id 
                               ? "bg-primary border-primary text-neutral scale-105 shadow-xl shadow-primary/20" 
                               : "bg-neutral/40 border-white/5 text-white hover:border-white/20"
                          )}
                        >
                           <p.icon className={cn("w-6 h-6 mb-3", isPersonaActive === p.id ? "text-neutral" : "text-primary")} />
                           <span className="text-[10px] uppercase font-heading font-black tracking-widest leading-tight">{p.name}</span>
                        </button>
                     ))}
                  </div>

                  <div className="flex flex-col items-center gap-6">
                    <button className="button-primary px-10 py-5 text-sm uppercase tracking-[0.3em] font-heading font-bold">
                        Find my perfect setup —
                    </button>
                    <button className="text-[10px] font-heading font-bold text-white/30 uppercase tracking-widest hover:text-white transition-colors">
                        Or build a custom load profile from scratch in Solar Sizer —
                    </button>
                  </div>
               </div>
            </section>

            {/* Persona Stories */}
            <Section 
              title="Persona Stories" 
              subtitle="Real-world results from students, freelancers, and families."
              items={articles.filter(a => a.category === 'Persona Stories')}
            />

            {/* Internet & Remote Work */}
            <Section 
              title="Internet & Remote Work" 
              subtitle="Solving Nigeria's connectivity problem with the right hardware stack."
              items={articles.filter(a => a.category === 'Internet')}
              bgColor="bg-surface-elevated/30"
              gridCols={3}
            />
          </>
        ) : (
          <Section 
            title={activeFilter} 
            items={filteredArticles}
            gridCols={3}
          />
        )}
      </main>

      {/* Newsletter / Community Section */}
      <section className="py-32 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
               <div>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight">Get new guides as we publish them.</h2>
                  <p className="text-white/40 text-lg font-body leading-relaxed max-w-lg">
                    No product announcements. No promotional emails. Just new articles — 
                    when they're published. Unsubscribe any time.
                  </p>
               </div>
               
               <div className="space-y-4">
                  <div className="relative group max-w-md">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full bg-white/5 border border-white/10 rounded-subtle py-5 px-6 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all font-body focus:bg-white/10"
                    />
                  </div>
                  <button className="button-primary px-10 py-5 text-sm uppercase tracking-[0.3em] font-heading font-bold">
                    Subscribe —
                  </button>
                  <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest">
                    We publish 2-4 articles per month. No spam.
                  </p>
               </div>
            </div>

            <div className="space-y-12 lg:pl-24 lg:border-l border-white/5">
                <div>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight">Join the conversation.</h2>
                  <p className="text-white/40 text-lg font-body leading-relaxed max-w-lg">
                    Thousands of Nigerian students and remote workers discussing solar setups, 
                    asking questions, and sharing real-world results.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <button className="flex items-center justify-between p-8 bg-white/5 border border-white/10 rounded-subtle hover:bg-primary/10 hover:border-primary/30 transition-all group">
                     <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                           <MessageSquare className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                           <p className="text-sm font-heading font-black uppercase tracking-widest text-white">Join WhatsApp Community</p>
                           <p className="text-[11px] text-white/30 font-medium">Real-time solar engineering discussions.</p>
                        </div>
                     </div>
                     <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
                  </button>

                  <button className="flex items-center justify-between p-8 bg-white/5 border border-white/10 rounded-subtle hover:bg-secondary/10 hover:border-secondary/30 transition-all group">
                     <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                           <Send className="w-6 h-6 text-secondary" />
                        </div>
                        <div>
                           <p className="text-sm font-heading font-black uppercase tracking-widest text-white">Join Telegram Channel</p>
                           <p className="text-[11px] text-white/30 font-medium">Daily system performance reports & updates.</p>
                        </div>
                     </div>
                     <ArrowRight className="w-5 h-5 text-secondary group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Section({ 
  title, 
  subtitle, 
  items, 
  bgColor = "", 
  gridCols = 2 
}: { 
  title: string, 
  subtitle?: string, 
  items: Article[], 
  bgColor?: string,
  accentColor?: string,
  gridCols?: number
}) {
  return (
    <section className={cn("py-24 rounded-subtle relative", bgColor)}>
       <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 border-l-4 border-primary pl-10">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-4">{title}</h2>
             {subtitle && <p className="text-white/40 text-lg font-body max-w-2xl">{subtitle}</p>}
          </div>

          <div className={cn(
            "grid gap-8",
            gridCols === 3 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 lg:grid-cols-2"
          )}>
             {items.map((item) => (
                <div key={item.id}>
                  <ArticleCard article={item} />
                </div>
             ))}
          </div>
       </div>
    </section>
  );
}

function ArticleCard({ article }: { article: Article }) {
  const isPersona = article.category === 'Persona Stories';
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="flex flex-col bg-surface-elevated rounded-subtle lux-border group hover:border-primary/40 transition-all duration-500 overflow-hidden"
    >
      <div className="h-48 relative overflow-hidden bg-neutral">
         {isPersona ? (
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-4xl font-heading font-black text-primary">{article.title.charAt(0)}</span>
               </div>
            </div>
         ) : (
            <img 
               src={`https://picsum.photos/seed/${article.id}/600/400`} 
               alt={article.title} 
               referrerPolicy="no-referrer"
               className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700" 
            />
         )}
         
         {article.badge && (
            <div className="absolute top-4 right-4">
               {article.badgeType === 'winner' ? (
                  <div className="flex items-center gap-2 bg-primary px-3 py-1 rounded-subtle shadow-xl shadow-primary/20">
                     <Star className="w-3 h-3 text-neutral fill-neutral" />
                     <span className="text-[9px] font-heading font-black uppercase text-neutral">{article.badge}</span>
                  </div>
               ) : article.badgeType === 'depends' ? (
                  <div className="bg-secondary/10 border border-secondary/30 px-3 py-1 rounded-subtle backdrop-blur-md">
                     <span className="text-[9px] font-heading font-black uppercase text-secondary">{article.badge}</span>
                  </div>
               ) : (
                  <span className="waitlist-badge bg-secondary text-neutral">{article.badge}</span>
               )}
            </div>
         )}

         {article.category === 'Solar Education' && article.level && (
            <div className="absolute top-4 right-4">
               <span className={cn(
                 "text-[9px] font-heading font-black uppercase px-3 py-1 rounded-subtle tracking-widest",
                 article.level === 'Beginner' ? "bg-green-500/20 text-green-500" : "bg-primary/20 text-primary"
               )}>
                 {article.level}
               </span>
            </div>
         )}
      </div>

      <div className="p-8 flex flex-col flex-grow">
         <span className="text-[10px] font-heading font-bold text-white/30 uppercase tracking-[0.2em] mb-4 block">{article.category}</span>
         <h3 className="text-xl font-heading font-bold mb-4 tracking-tight group-hover:text-primary transition-colors duration-500 line-clamp-2">
           {article.title}
         </h3>
         <p className="text-[12px] text-white/50 leading-relaxed font-body mb-8 line-clamp-3">
           {article.description}
         </p>

         <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between font-heading font-bold text-[10px] uppercase tracking-widest">
            <div className="flex items-center gap-3">
               {article.location && <span className="text-secondary flex items-center gap-1"><MapPin className="w-3 h-3" /> {article.location}</span>}
               {article.stats && <span className="text-white/40">{article.stats}</span>}
               {!article.stats && <span className="text-white/20">{article.readTime}</span>}
            </div>
            <button className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all">
               READ <ChevronRight className="w-4 h-4" />
            </button>
         </div>
      </div>
    </motion.div>
  );
}
