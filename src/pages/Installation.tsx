import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Home, 
  Building2, 
  Search, 
  LineChart, 
  PenTool, 
  Wrench, 
  ShieldCheck, 
  Calendar,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Clock,
  Shield,
  Zap,
  Award
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import toast from 'react-hot-toast';

const PROCESS_STEPS = [
  {
    id: '01',
    label: 'Site Survey',
    icon: Search,
    description: 'Our engineer visits your property to assess layout and shading with LiDAR precision.'
  },
  {
    id: '02',
    label: 'Load Assessment',
    icon: LineChart,
    description: 'We map every appliance to size your system precisely for 99.9% uptime.'
  },
  {
    id: '03',
    label: 'Custom Design',
    icon: PenTool,
    description: 'A full system schematic built around your architectural constraints and energy goals.'
  },
  {
    id: '04',
    label: 'Installation',
    icon: Wrench,
    description: 'Clean, professional execution by certified technicians focusing on structural integrity.'
  },
  {
    id: '05',
    label: 'Aftercare',
    icon: ShieldCheck,
    description: 'Remote monitoring, maintenance schedules, and a 5-year comprehensive hardware warranty.'
  }
];

const TRUST_BADGES = [
  { label: 'Licensed Installer', icon: Award },
  { label: 'NASENI Aligned', icon: CheckCircle2 },
  { label: '5-Year Warranty', icon: Shield },
  { label: 'Post-Install Support', icon: Zap },
  { label: 'Free Site Survey', icon: Search }
];

export default function Installation() {
  const [formData, setFormData] = useState({
    name: '',
    propertyType: '',
    bill: '',
    primaryGoal: '',
    contact: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate async submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success("Requirements submitted. An engineer will reach out within 24 hours.");
    setIsSubmitting(false);
    setFormData({
      name: '',
      propertyType: '',
      bill: '',
      primaryGoal: '',
      contact: '',
      details: ''
    });
  };

  return (
    <div className="bg-neutral min-h-screen text-white pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header & Intro */}
        <header className="max-w-3xl mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-heading font-bold text-primary uppercase tracking-widest text-primary">Engineering Excellence</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tighter uppercase leading-[0.9]">
            Total Energy Independence, <br />
            <span className="gold-gradient-text italic">Engineered</span> for Your Property.
          </h2>
          <p className="text-lg md:text-xl text-white/40 font-body leading-relaxed max-w-2xl">
            We don't sell solar panels; we architect power security. Custom-designed systems for estates, 
            duplexes, offices, and commercial facilities across Nigeria.
          </p>
        </header>

        {/* Target Demographics */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Residential */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 group"
            >
              <div className="bg-surface-elevated lux-border rounded-subtle p-10 md:p-14 h-full flex flex-col space-y-8 hover:border-primary/30 transition-colors">
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Home className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-[10px] font-heading font-black uppercase tracking-widest text-primary/40">Bespoke Design</span>
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl font-heading font-bold text-white uppercase tracking-tight">Residential</h2>
                  <span className="inline-block text-[10px] font-heading font-bold text-secondary uppercase tracking-[0.2em] bg-secondary/5 px-3 py-1 rounded-full">
                    Estates / Duplexes / Luxury Apartments
                  </span>
                </div>
                <p className="text-white/40 font-body leading-relaxed">
                  Full independence from the grid without compromising your architectural aesthetic. 
                  We integrate seamlessly with your property's structural DNA.
                </p>
                <div className="pt-6 border-t border-white/5">
                  <p className="text-xs text-white/20 font-heading font-bold uppercase tracking-widest">Typical Load Profile: Constant A/C + Security + Lighting</p>
                </div>
              </div>
            </motion.div>

            {/* Corporate */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-6 group"
            >
              <div className="bg-surface-elevated lux-border rounded-subtle p-10 md:p-14 h-full flex flex-col space-y-8 hover:border-secondary/30 transition-colors">
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20">
                    <Building2 className="w-7 h-7 text-secondary" />
                  </div>
                  <span className="text-[10px] font-heading font-black uppercase tracking-widest text-secondary/40">Load Analysis</span>
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl font-heading font-bold text-white uppercase tracking-tight">Corporate</h2>
                  <span className="inline-block text-[10px] font-heading font-bold text-secondary uppercase tracking-[0.2em] bg-secondary/5 px-3 py-1 rounded-full">
                    Offices / Hotels / Factories / Schools
                  </span>
                </div>
                <p className="text-white/40 font-body leading-relaxed">
                  Heavy-duty power infrastructure engineered for industrial load cycles. 
                  Reliable power at scale for organizations that cannot afford downtime.
                </p>
                <div className="pt-6 border-t border-white/5">
                  <p className="text-xs text-white/20 font-heading font-bold uppercase tracking-widest">Typical Load Profile: Data Centers + Lifts + Industrial Machinery</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="mb-40 space-y-20">
          <div className="text-center space-y-4">
            <span className="text-[10px] font-heading font-bold text-primary uppercase tracking-[0.4em]">The Solara Standard</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-tighter">Installation Logic</h2>
          </div>

          <div className="relative">
            {/* Desktop Connector Line */}
            <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[1px] bg-white/10" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={step.id} 
                  className="space-y-8 group"
                >
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                    <div className={cn(
                      "w-20 h-20 rounded-full flex items-center justify-center border-2 transition-all duration-500 bg-neutral",
                      i === 0 ? "border-primary shadow-xl shadow-primary/20 scale-110" : "border-white/10 group-hover:border-secondary/40"
                    )}>
                      <step.icon className={cn(
                        "w-8 h-8",
                        i === 0 ? "text-primary" : "text-white/20 group-hover:text-secondary/60"
                      )} />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center lg:justify-start gap-3">
                        <span className="text-[10px] font-heading font-bold text-white/20">{step.id}</span>
                        <h3 className="text-lg font-heading font-bold text-white uppercase tracking-tight">{step.label}</h3>
                      </div>
                      <p className="text-sm text-white/40 font-body leading-relaxed max-w-[200px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Intake Form */}
        <section className="mb-40 grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4 space-y-8">
            <span className="text-[10px] font-heading font-bold text-primary uppercase tracking-[0.4em]">Step 01 — Analysis</span>
            <h2 className="text-5xl font-heading font-bold text-white uppercase tracking-tighter leading-none">
              Project <br />
              Requirement <br />
              <span className="gold-gradient-text italic">Intake.</span>
            </h2>
            <p className="text-white/40 font-body leading-relaxed">
              Initiate your transition to sustainable prestige. Our engineers analyze your specific 
              architectural and energy needs to deliver a tailored technical proposal.
            </p>
            <div className="p-8 bg-surface-elevated/40 lux-border rounded-subtle flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-xs font-heading font-bold text-white uppercase tracking-widest">SLA Commitment</p>
                <p className="text-[10px] text-white/30 uppercase tracking-widest">Engineer Review within 24hrs</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-surface-elevated lux-border rounded-subtle p-8 md:p-14">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name */}
                  <div className="space-y-3">
                    <label className="text-[10px] font-heading font-bold text-white/40 uppercase tracking-widest">What's your name?</label>
                    <input 
                      required
                      type="text" 
                      placeholder="So we know how to address you"
                      className="w-full bg-neutral border border-white/5 px-6 py-4 rounded-subtle focus:border-primary focus:ring-0 transition-all font-body text-sm"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  {/* Property Type */}
                  <div className="space-y-3">
                    <label className="text-[10px] font-heading font-bold text-white/40 uppercase tracking-widest">Property Type</label>
                    <select 
                      required
                      className="w-full bg-neutral border border-white/5 px-6 py-4 rounded-subtle focus:border-primary focus:ring-0 transition-all font-body text-sm text-white/60 appearance-none"
                      value={formData.propertyType}
                      onChange={e => setFormData({ ...formData, propertyType: e.target.value })}
                    >
                      <option value="" disabled>Select property type</option>
                      <option value="residence">Private Residence (Duplex / Bungalow)</option>
                      <option value="estate">Estate</option>
                      <option value="units">Multiple Units</option>
                      <option value="office">Office Building</option>
                      <option value="hotel">Hotel / Hospitality</option>
                      <option value="factory">Factory / Industrial</option>
                      <option value="school">School / Institution</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* NEPA Bill */}
                  <div className="space-y-3">
                    <label className="text-[10px] font-heading font-bold text-white/40 uppercase tracking-widest">Estimated monthly NEPA bill?</label>
                    <div className="relative">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-primary font-bold">₦</span>
                      <input 
                        required
                        type="number" 
                        placeholder="Helps us size your system correctly"
                        className="w-full bg-neutral border border-white/5 px-12 py-4 rounded-subtle focus:border-primary focus:ring-0 transition-all font-body text-sm"
                        value={formData.bill}
                        onChange={e => setFormData({ ...formData, bill: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Primary Goal */}
                  <div className="space-y-3">
                    <label className="text-[10px] font-heading font-bold text-white/40 uppercase tracking-widest">What's your primary goal?</label>
                    <select 
                      required
                      className="w-full bg-neutral border border-white/5 px-6 py-4 rounded-subtle focus:border-primary focus:ring-0 transition-all font-body text-sm text-white/60 appearance-none"
                      value={formData.primaryGoal}
                      onChange={e => setFormData({ ...formData, primaryGoal: e.target.value })}
                    >
                      <option value="" disabled>Select your goal</option>
                      <option value="independence">Full grid independence</option>
                      <option value="backup">Backup power only</option>
                      <option value="costs">Reduce electricity costs</option>
                      <option value="construction">Power a new construction</option>
                    </select>
                  </div>
                </div>

                {/* Contact */}
                <div className="space-y-3">
                  <label className="text-[10px] font-heading font-bold text-white/40 uppercase tracking-widest">How can we reach you?</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Email and phone number"
                    className="w-full bg-neutral border border-white/5 px-6 py-4 rounded-subtle focus:border-primary focus:ring-0 transition-all font-body text-sm"
                    value={formData.contact}
                    onChange={e => setFormData({ ...formData, contact: e.target.value })}
                  />
                </div>

                {/* Details */}
                <div className="space-y-3">
                  <label className="text-[10px] font-heading font-bold text-white/40 uppercase tracking-widest">Anything else to add?</label>
                  <textarea 
                    placeholder="Tell us more about your setup... (Location, timeline, specific requirements)"
                    className="w-full bg-neutral border border-white/5 px-6 py-4 rounded-subtle focus:border-primary focus:ring-0 transition-all font-body text-sm min-h-[140px] resize-none"
                    value={formData.details}
                    onChange={e => setFormData({ ...formData, details: e.target.value })}
                  />
                </div>

                <button 
                  disabled={isSubmitting}
                  className="button-primary w-full py-6 text-sm font-heading font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-4 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Processing Audit...' : 'Submit Requirements —'}
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Consultation Block */}
        <section className="mb-40">
          <div className="bg-surface-elevated lux-border rounded-subtle p-12 md:p-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
              <Calendar className="w-80 h-80 text-primary" />
            </div>
            
            <div className="max-w-3xl space-y-10 relative z-10">
              <div className="space-y-4">
                <span className="text-[10px] font-heading font-bold text-secondary uppercase tracking-[0.4em]">Prefer to Talk?</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase tracking-tighter">Book a Consultation</h2>
                <p className="text-lg text-white/40 font-body leading-relaxed">
                  Book a free 30-minute call with our lead engineer — no sales pressure, 
                  just honest advice about what your property actually needs to achieve autonomy.
                </p>
              </div>

              <div className="flex flex-wrap gap-8 items-center pt-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-heading font-bold uppercase tracking-widest">30 min</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-heading font-bold uppercase tracking-widest">Free</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-secondary" />
                  <span className="text-sm font-heading font-bold uppercase tracking-widest">Google Meet / Phone</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <button 
                  onClick={() => window.open('https://cal.com/solara-luxe', '_blank')}
                  className="button-primary px-10 py-5 text-sm font-heading font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 group"
                >
                  See Available Slots
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center justify-center px-6">
                  <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em]">Powered by Cal.com · Free & Open Source</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Badges Strip */}
        <section className="pt-20 border-t border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
            {TRUST_BADGES.map((badge, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start space-y-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:border-primary/40 transition-colors">
                  <badge.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="text-[10px] font-heading font-black text-white uppercase tracking-[0.2em]">{badge.label}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

