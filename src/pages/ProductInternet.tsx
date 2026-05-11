import { motion } from 'motion/react';
import { 
  Wifi, 
  Zap, 
  ArrowRight, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldCheck, 
  Share2, 
  Globe, 
  Smartphone,
  Cpu,
  Star,
  Activity,
  Info,
  Clock
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const devices = {
  tierA: {
    label: 'Tier A',
    title: 'Single CPE Devices',
    description: 'Same SIM. Same plan. Dramatically better signal. The most underused upgrade in Nigeria.',
    items: [
      {
        name: 'Huawei B818-263',
        type: '4G LTE Cat19 Indoor CPE',
        price: '₦85,000 — ₦115,000',
        where: 'Jiji Nigeria — Ikeja (imported)',
        specs: ['Cat19 LTE (1.6Gbps DL)', '8x8 MIMO downlink', '2x TS9 ports', 'Up to 64 users'],
        why: 'The B818\'s larger radio pulls tower signal that a phone or MiFi physically cannot reach. Works on all four Nigerian networks.',
        powerNote: 'A SolarOne powerstation runs the B818 continuously through an 8-hour blackout on pure sine wave, protecting it from restoration spikes.'
      },
      {
        name: 'ZTE MC888',
        type: '5G Indoor CPE, WiFi 6',
        price: '₦95,000 — ₦125,000',
        where: 'Lagos Island / specialist importers',
        specs: ['5G NR bands n78/n77/n28', 'WiFi 6 AX3600', '2x Gigabit LAN ports', 'Dual-mode NSA+SA'],
        why: 'Targets exactly the 5G bands MTN uses. WiFi 6 handles peak hour congestion better than any MiFi or phone hotspot.',
        powerNote: 'Draws under 20W — your SolarOne unit keeps it live for 10+ hours through overnight blackouts.'
      },
      {
        name: 'ZTE MC888 PRO',
        type: '5G Indoor CPE, WiFi 6 (upgraded)',
        price: '₦120,000 — ₦148,000',
        where: 'Lagos Island / specialist importers',
        specs: ['5G DL up to 2.7Gbps', 'WiFi 6 AX5400', 'Snapdragon X62', 'RJ11 Voice Port'],
        why: 'Captures more carrier aggregation from MTN\'s growing 5G rollout. Critical in dense urban environments like VI and Yaba.',
        powerNote: 'Run on pure sine wave to protect the sensitive Snapdragon chipset from the voltage spikes hit when PHCN power returns.'
      },
      {
        name: 'Huawei CPE Pro 2',
        type: '5G Indoor/Outdoor Hybrid',
        price: '₦70,000 — ₦95,000',
        where: 'Jiji / Lagos Island (imported)',
        specs: ['5G Sub-6GHz', 'WiFi 6 AX3000', '4x Gigabit LAN ports', 'HiLink App support'],
        why: 'Cheapest 5G CPE entry point. Hybrid form factor: use indoors today, mount externally facing the tower later.',
        powerNote: 'Low idle draw means your SolarOne unit keeps it and your full desk setup running all night.'
      },
      {
        name: 'Cudy LT500 / LT700',
        type: 'Budget 4G Indoor CPE',
        price: '₦45,000 — ₦65,000',
        where: 'Jumia Nigeria',
        specs: ['4G Cat6 or Cat12', 'WiFi 5 AC1200', 'Dual SIM slots', 'External SMA ports'],
        why: 'The most accessible upgrade from a MiFi. Available on Jumia with standard delivery — no navigating imports.',
        powerNote: 'Runs comfortably on a single SolarOne charge all day. Your most affordable path to solar-backed internet.'
      }
    ]
  },
  tierB: {
    label: 'Tier B',
    title: 'Load Balancing Routers',
    description: 'Distribute your traffic intelligently across multiple connections. One network for Zoom, another for background downloads.',
    items: [
      {
        name: 'TP-Link ER605 (V2)',
        type: 'Multi-WAN Load Balancer',
        price: '₦65,000 — ₦80,000',
        where: 'Jiji (Ikeja) / Jumia',
        specs: ['Up to 3 WAN ports', 'USB WAN (phone tether)', 'Omada Cloud App', 'Lightning Protection'],
        why: 'Cheapest genuine multi-WAN router. USB port lets you use an Android phone as a third network leg.',
        powerNote: 'Draws under 10W. SolarOne keeps it live indefinitely, protecting Gigabit components from back-to-grid surge damage.'
      },
      {
        name: 'GL.iNet Spitz AX (GL-X3000)',
        type: 'All-in-One 5G Router',
        price: '₦145,000 — ₦185,000',
        where: 'Imported / Amazon / Lagos specialist',
        specs: ['Built-in 5G modem', 'Dual SIM slots', 'WiFi 6 AX3000', 'WireGuard VPN builtin'],
        why: 'Replaces a CPE plus a balancer. MTN SIM plus Airtel SIM in one unit. Professional choice for secure tunneling.',
        powerNote: 'Powers your GL-X3000 plus laptop and monitor from a single SolarOne plug point.'
      },
      {
        name: 'GL.iNet Slate AX',
        type: 'Travel Multi-WAN Router',
        price: '₦75,000 — ₦100,000',
        where: 'Jiji / Amazon',
        specs: ['Compact Travel form', 'WiFi 6 AX1800', 'USB Phone Tethering', 'OpenWrt Pre-installed'],
        why: 'Turns a second SIM in your phone into a second WAN. Fits in a laptop bag for work trips while maintaining your dual-network stack.',
        powerNote: 'Ultra-low wattage makes it the easiest device to keep solar-backed along with your laptop.'
      }
    ]
  },
  tierC: {
    label: 'Tier C',
    title: 'Bonding Hardware',
    description: 'Combine multiple connections at the packet level. One unbreakable pipe built from two or three networks.',
    items: [
      {
        name: 'Pepwave MAX BR1 Mini',
        type: 'Hardware Bonding Router',
        price: '₦350,000 — ₦430,000',
        where: 'Specialist importers — Lagos only',
        specs: ['Peplink SpeedFusion™', 'Forward Error Correction', 'Dual SIM + Cloud Dashboard', 'Metal Chassis'],
        why: 'True packet-level bonding. SpeedFusion Hot Failover is seamless — zero interruption if a network drops mid-client call.',
        powerNote: 'Pair with the whole-house outlet port to keep your entire workstation live from one plug point.'
      },
      {
        name: 'Speedify (Software)',
        type: 'Software Bonding App',
        price: '₦4,500 — ₦8,000/mo',
        where: 'speedify.com',
        specs: ['Bonds WiFi + Data + Lan', 'Redundancy Mode', 'Encryption & Speed', 'Zero hardware buy'],
        why: 'Cheapest path to bonded performance. Sends every packet over both connections to fill gaps in degraded Nigerian networks.',
        powerNote: 'Speedify runs on your existing devices — keep them charged and live by connecting to your SolarOne unit.'
      }
    ]
  }
};

const combinations = [
  {
    id: 1,
    name: 'The Single Stack Upgrade',
    who: 'Students and light remote workers on MiFi/Hotspot who want a meaningful upgrade on a tight budget.',
    hardwareCost: '₦110,000 — ₦125,000',
    monthlyCost: 'None',
    performance: { dl: '40-70 Mbps', ul: '15-25 Mbps', latency: '35-55ms', stars: 3 },
    devices: ['ZTE MC888 ($110k)', 'Standard WiFi Router ($0-15k)'],
    how: 'Insert your SIM into the MC888. Superior antennas capture signal a MiFi cannot reach. 3-5x current output.',
    powerNote: 'SolarOne keeps the MC888 live for 8-12 hours through overnight blackouts. Pure sine protects 5G radios.'
  },
  {
    id: 2,
    name: 'The Budget Dual Stack',
    who: 'Remote workers who cannot afford downtime; students in shared apartments splitting costs.',
    hardwareCost: '₦135,000',
    monthlyCost: 'None',
    performance: { dl: '25-45 Mbps', ul: '10-18 Mbps', latency: '38-60ms', stars: 4 },
    devices: ['Cudy LT500 ($60k)', 'TP-Link ER605 ($75k)', 'Android Phone USB ($0)'],
    how: 'Cudy (MTN) + Phone (Airtel) plug into ER605. If either network drops, the other absorbs traffic automatically.',
    powerNote: 'SolarOne powers ER605 and Cudy while keeping your phone charged via USB. Triple-redemption.'
  },
  {
    id: 3,
    name: 'The Standard Dual CPE',
    who: 'Established remote workers and small home offices. Full reliability without enterprise cost.',
    hardwareCost: '₦235,000',
    monthlyCost: 'None',
    performance: { dl: '35-65 Mbps', ul: '14-28 Mbps', latency: '38-52ms', stars: 5 },
    devices: ['Huawei B818 ($100k)', 'Cudy LT500 ($60k)', 'TP-Link ER605 ($75k)'],
    how: 'Two router-grade CPEs for full signal quality. MTN + Airtel diversity protects against operator-level outages.',
    powerNote: 'Full stack draws under 40W. SolarOne powers them all through any blackout with zero connectivity drop.'
  },
  {
    id: 4,
    name: 'The All-in-One Powerhouse',
    who: 'Frequent travellers and tech-forward users who want a clean, minimal setup that manages everything.',
    hardwareCost: '₦160,000',
    monthlyCost: 'None',
    performance: { dl: '40-80 Mbps', ul: '16-30 Mbps', latency: '35-50ms', stars: 4 },
    devices: ['GL.iNet Spitz AX ($160k)', 'MTN + Airtel SIMs ($0)'],
    how: 'Dual SIM management, 5G modem, and load balancer in a single portable unit. Zero installation.',
    powerNote: 'One SolarOne unit powers the GL-X3000 plus laptop, monitor, and lighting from a single plug point.'
  },
  {
    id: 5,
    name: 'The Dual CPE Pro',
    who: 'Power users and content creators sharing connections or uploading large files.',
    hardwareCost: '₦310,000',
    monthlyCost: 'None',
    performance: { dl: '45-90 Mbps', ul: '18-35 Mbps', latency: '35-48ms', stars: 5 },
    devices: ['ZTE MC888 Pro ($135k)', 'Huawei B818 ($100k)', 'TP-Link ER605 ($75k)'],
    how: 'MTN 5G Primary for speed + Airtel 4G Secondary for stability. Sessions distributed across both links.',
    powerNote: 'Two premium CPEs + Balancer run on pure sine wave. Keep your entire stack live at any hour.'
  },
  {
    id: 6,
    name: 'The Bonded Stack (Elite)',
    who: 'Serious workers whose income depends on stability. Achieves true aggregate speed across networks.',
    hardwareCost: '₦310,000',
    monthlyCost: '₦6,000/mo',
    performance: { dl: '55-110 Mbps', ul: '22-45 Mbps', latency: '35-48ms', stars: 5 },
    devices: ['ZTE MC888 Pro ($135k)', 'Huawei B818 ($100k)', 'Speedify App ($6k)'],
    how: 'Packet-level bonding aggregation. Uploads use both networks simultaneously. 99.9% uptime guaranteed.',
    powerNote: 'SolarOne keeps your laptop powered and Speedify running. Solar takes over with zero interruption to bonded tunnels.'
  }
];

export default function ProductInternet() {
  return (
    <div className="bg-[#121212] min-h-screen text-white pb-24">
      {/* Disclaimer Banner */}
      <div className="bg-secondary/5 border-b border-secondary/20 p-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-secondary">Pricing Advisory</span>
              <p className="text-[11px] text-secondary/80 font-body uppercase font-bold tracking-wider">
                Prices below are naira-range estimates sourced from Jiji, Jumia, and Lagos import-market data. 
                TP-Link ER605 is confirmed at ₦75,000 in Ikeja — all others are market estimates. Verify before purchase.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-[9px] font-heading font-bold text-secondary uppercase tracking-widest">Market Scan: Live</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 border-b border-white/5 bg-neutral overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="h-full w-full bg-[linear-gradient(rgba(212,175,55,0.1)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(212,175,55,0.1)_1.5px,transparent_1.5px)] [background-size:64px_64px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <span className="text-[10px] font-heading font-bold uppercase tracking-[0.4em] text-primary mb-6 block">
              Network Infrastructure Stack
            </span>
            <h1 className="text-5xl md:text-8xl font-heading font-bold mb-8 leading-[0.9] tracking-tighter">
              Your Internet Stack. <br />
              <span className="gold-gradient-text italic">Built for Nigeria.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl leading-relaxed font-body mb-12 max-w-2xl">
              The same SIM. The right hardware. Three to five times the speed — 
              and a connection that doesn't die when NEPA does. Curated for the Nigerian reality.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <button onClick={() => document.getElementById('combinations')?.scrollIntoView({ behavior: 'smooth' })} className="button-primary px-10 py-5 text-sm uppercase tracking-[0.3em] font-heading font-bold group">
                Jump to Recommended Combinations <ArrowRight className="inline-block ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Device Tiers */}
      {(['tierA', 'tierB', 'tierC'] as const).map((tierKey, tierIdx) => (
        <section key={tierKey} className={cn("py-24 border-b border-white/5", tierIdx % 2 === 1 && "bg-surface-elevated/30")}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <span className="text-[10px] font-heading font-bold uppercase tracking-[0.4em] text-primary mb-4 block">
                {devices[tierKey].label}
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 tracking-tight">
                {devices[tierKey].title}
              </h2>
              <p className="text-white/40 text-lg max-w-2xl font-body">
                {devices[tierKey].description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devices[tierKey].items.map((item) => (
                <div key={item.name} className="flex flex-col bg-surface-elevated rounded-subtle lux-border group hover:border-primary/40 transition-all duration-500">
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-10 h-10 rounded-subtle bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                        <Wifi className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-heading font-bold text-white/30 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">
                        {item.type}
                      </span>
                    </div>

                    <h3 className="text-2xl font-heading font-bold mb-1 tracking-tight group-hover:text-primary transition-colors">{item.name}</h3>
                    <p className="text-xl font-heading font-bold text-white tracking-tighter mb-4">{item.price}</p>
                    
                    <div className="bg-primary/10 border border-primary/20 rounded-subtle p-3 mb-6">
                       <p className="text-[9px] font-heading font-black uppercase text-primary tracking-widest mb-1 italic">Procurement Route</p>
                       <p className="text-[10px] text-white/60 font-bold uppercase tracking-widest">{item.where}</p>
                    </div>

                    <div className="space-y-3 mb-8 flex-grow">
                      {item.specs.map(spec => (
                        <div key={spec} className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                          <span className="text-[10px] uppercase font-heading font-bold tracking-widest text-white/70">
                            {spec}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="text-[11px] text-white/40 leading-relaxed font-body mb-8 italic">
                      {item.why}
                    </p>

                    <div className="p-4 bg-secondary/5 border border-secondary/20 rounded-subtle">
                      <div className="flex items-center gap-3 mb-2">
                        <Zap className="w-4 h-4 text-secondary" />
                        <span className="text-[9px] font-heading font-black uppercase tracking-[0.2em] text-secondary">
                          SolarOne Power Note
                        </span>
                      </div>
                      <p className="text-[10px] text-secondary/70 font-body leading-relaxed font-medium">
                        {item.powerNote}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Combinations Section */}
      <section id="combinations" className="py-32 bg-neutral">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-[10px] font-heading font-bold uppercase tracking-[0.4em] text-primary mb-6 block">The Build Guide</span>
            <h2 className="text-4xl md:text-7xl font-heading font-bold tracking-tighter">Recommended Combinations.</h2>
            <p className="text-white/40 mt-8 text-xl max-w-2xl mx-auto font-body">
              Stop guessing. We've done the math on interference, packet loss, and power draw. 
              Pick your reliability tier and get online.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {combinations.map((combo) => (
              <motion.div
                key={combo.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group flex flex-col bg-surface-elevated rounded-subtle lux-border overflow-hidden hover:border-primary/50 transition-all duration-700"
              >
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] font-heading font-bold text-primary tracking-[0.4em] uppercase">Combo {combo.id}</span>
                        {combo.id === 6 && <span className="waitlist-badge">Elite Stack</span>}
                      </div>
                      <h3 className="text-4xl font-heading font-bold tracking-tight mb-4 group-hover:text-primary transition-colors">{combo.name}</h3>
                      <div className="flex items-center gap-1 mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                           <Star key={i} className={cn("w-3 h-3", i < combo.performance.stars ? "text-primary fill-primary" : "text-white/10")} />
                        ))}
                        <span className="text-[9px] font-heading font-bold text-white/30 ml-2 uppercase tracking-widest">Reliability Rating</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-2 px-3 py-1 bg-secondary text-neutral rounded-subtle font-heading font-bold text-[18px] tracking-tighter">
                        {combo.hardwareCost}
                      </div>
                      <span className="text-[10px] font-heading font-bold text-white/30 uppercase tracking-widest mt-2">
                        Total Hardware Cost
                      </span>
                      {combo.monthlyCost !== 'None' && (
                         <span className="text-[10px] font-heading font-bold text-secondary uppercase tracking-widest mt-1">
                            {combo.monthlyCost} Add-on Cost
                         </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-10 mb-12 py-10 border-y border-white/5">
                     <div className="flex-1 space-y-6">
                        <div>
                           <span className="text-[10px] font-heading font-bold text-white/30 uppercase tracking-[0.2em] mb-3 block">Who It's For</span>
                           <p className="text-sm text-white/80 leading-relaxed font-body">
                              {combo.who}
                           </p>
                        </div>
                        <div>
                           <span className="text-[10px] font-heading font-bold text-white/30 uppercase tracking-[0.2em] mb-4 block">Devices</span>
                           <div className="flex flex-wrap gap-2">
                              {combo.devices.map(d => (
                                 <span key={d} className="px-3 py-1 bg-white/5 border border-white/10 rounded-subtle text-[9px] font-bold text-white/60 uppercase tracking-widest">
                                    {d}
                                 </span>
                              ))}
                           </div>
                        </div>
                     </div>
                     <div className="flex-1 bg-white/5 rounded-subtle p-6 space-y-4">
                        <span className="text-[10px] font-heading font-bold text-white/30 uppercase tracking-[0.2em] block mb-2">Est. Performance</span>
                        <div className="flex justify-between items-center bg-black/20 p-3 rounded border border-white/5">
                           <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                              <Activity className="w-3.5 h-3.5 text-primary" /> DL SPEED
                           </span>
                           <span className="text-[11px] font-heading font-black text-white">{combo.performance.dl}</span>
                        </div>
                        <div className="flex justify-between items-center bg-black/20 p-3 rounded border border-white/5">
                           <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                              <Share2 className="w-3.5 h-3.5 text-secondary" /> UP SPEED
                           </span>
                           <span className="text-[11px] font-heading font-black text-white">{combo.performance.ul}</span>
                        </div>
                        <div className="flex justify-between items-center bg-black/20 p-3 rounded border border-white/5">
                           <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                              <Clock className="w-3.5 h-3.5 text-white/40" /> LATENCY
                           </span>
                           <span className="text-[11px] font-heading font-black text-white">{combo.performance.latency}</span>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-8 flex-grow">
                     <div>
                        <h4 className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-white mb-3">Deployment Strategy</h4>
                        <p className="text-xs text-white/50 leading-relaxed font-body">
                           {combo.how}
                        </p>
                     </div>

                     <div className="p-6 bg-primary/5 border border-primary/20 rounded-subtle relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                           <Zap className="w-12 h-12 text-primary" />
                        </div>
                        <div className="flex items-center gap-3 mb-3">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          <span className="text-[10px] font-heading font-black uppercase tracking-[0.2em] text-primary">
                            SolarOne Integration
                          </span>
                        </div>
                        <p className="text-[11px] text-white/60 font-body leading-relaxed font-medium relative z-10">
                          {combo.powerNote}
                        </p>
                      </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparisons Table */}
      <section className="py-32 border-y border-white/5 bg-surface-elevated/40">
         <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
               <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight">Quick Comparison.</h2>
               <p className="text-white/40 text-lg font-body">Every combination compared by budget and core reliability.</p>
            </div>

            <div className="overflow-x-auto lux-border rounded-subtle bg-neutral">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="border-b border-white/10 bg-white/5">
                        <th className="p-6 text-[10px] font-heading font-bold uppercase tracking-[0.3em] text-white/40">Combination</th>
                        <th className="p-6 text-[10px] font-heading font-bold uppercase tracking-[0.3em] text-white/40 text-right">Hardware Cost</th>
                        <th className="p-6 text-[10px] font-heading font-bold uppercase tracking-[0.3em] text-white/40 text-right">Monthly Add-on</th>
                        <th className="p-6 text-[10px] font-heading font-bold uppercase tracking-[0.3em] text-white/40">Est. DL</th>
                        <th className="p-6 text-[10px] font-heading font-bold uppercase tracking-[0.3em] text-white/40">Reliability</th>
                        <th className="p-6 text-[10px] font-heading font-bold uppercase tracking-[0.3em] text-white/40">Best For</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 font-body">
                     {combinations.map(c => (
                        <tr key={c.id} className="hover:bg-white/5 transition-colors group">
                           <td className="p-6 text-sm font-heading font-bold group-hover:text-primary transition-colors">{c.name}</td>
                           <td className="p-6 text-sm text-right font-black tracking-tight">{c.hardwareCost}</td>
                           <td className="p-6 text-sm text-right text-white/40 font-bold">{c.monthlyCost === 'None' ? '—' : c.monthlyCost}</td>
                           <td className="p-6 text-sm text-white/60">{c.performance.dl}</td>
                           <td className="p-6 text-sm">
                              <div className="flex gap-0.5">
                                 {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} className={cn("w-2.5 h-2.5", i < c.performance.stars ? "text-secondary fill-secondary" : "text-white/10")} />
                                 ))}
                              </div>
                           </td>
                           <td className="p-6 text-xs text-white/40 uppercase font-black tracking-widest leading-tight w-48">
                              {c.who.split('.')[0]}
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* Where to buy summary */}
      <section className="py-32">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <div className="space-y-6">
                  <div className="flex items-center gap-3">
                     <div className="w-1.5 h-6 bg-primary" />
                     <h3 className="text-xl font-heading font-bold tracking-tight uppercase">Jiji Nigeria</h3>
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed font-body">
                     Best source for TP-Link routers, Huawei CPEs, and ZTE devices. Search by model number and verify listings in Lagos/Ikeja for faster pickup.
                  </p>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Market Verified: Ikeja Computer Village</span>
               </div>
               <div className="space-y-6">
                  <div className="flex items-center gap-3">
                     <div className="w-1.5 h-6 bg-secondary" />
                     <h3 className="text-xl font-heading font-bold tracking-tight uppercase">Jumia Nigeria</h3>
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed font-body">
                     Official source for Cudy and select TP-Link models with standard nationwide delivery. No grey-market risk, returns available.
                  </p>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Convenience Route</span>
               </div>
               <div className="space-y-6">
                  <div className="flex items-center gap-3">
                     <div className="w-1.5 h-6 bg-white/20" />
                     <h3 className="text-xl font-heading font-bold tracking-tight uppercase">Lagos Island</h3>
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed font-body">
                     Only reliable source for GL.iNet, Pepwave, and pro-market 5G hardware. Specialist importers only. Verify IMEI/bands in person.
                  </p>
                  <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Specialist Route</span>
               </div>
            </div>
         </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 border-t border-white/5 text-center">
         <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">Keep your stack live.</h2>
            <p className="text-white/40 mb-12 text-lg font-body">
               Every device on this page runs on medical-grade pure sine wave power from a SolarOne unit. Never lose a packet.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
               <button className="button-primary px-10 py-5 text-sm uppercase tracking-[0.3em] font-heading font-bold">
                  Size My Powerstation
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
