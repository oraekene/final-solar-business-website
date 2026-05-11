import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Do I really not need an installer?",
    answer: "Correct. We pre-wire everything inside the box. You just need to connect the solar panel via a single plug (MC4 connector) and point it at the sun. We provide a video guide that's exactly 4 minutes long. If you can plug in a laptop charger, you can install SolarOne."
  },
  {
    question: "What happens if NEPA comes while I'm using solar?",
    answer: "SolarOne has a 'Grid-Pass' mode. You can keep it plugged into the wall. When NEPA is on, it powers your devices and charges the battery. When NEPA goes, it switches to battery power in less than 20ms — so fast your router or PC won't even reboot."
  },
  {
    question: "How long will the battery last?",
    answer: "We only use Grade A LiFePO4 (Lithium Iron Phosphate) cells. These are rated for 3,500 to 6,000 cycles. If you use it every single day, the battery will still have 80% capacity after 10 years."
  },
  {
    question: "Is it safe for my MacBook / PS5?",
    answer: "Yes. Unlike cheap 'modified sine wave' inverters that can cause electronics to buzz or fail, SolarOne uses Pure Sine Wave inverters that produce electricity even cleaner than what NEPA provides."
  },
  {
    question: "Where are you located in Nigeria?",
    answer: "We are based in Lagos with fulfillment centers in Abuja and Port Harcourt. We ship nationwide via GIGM or your preferred courier. Every unit is tested for 24 hours before it leaves our workshop."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-neutral text-white border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[10px] font-heading font-bold uppercase tracking-[0.3em] text-primary mb-6 block">Common questions</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight">Everything you need to know.</h2>
          <p className="text-white/40 max-w-lg mx-auto">No marketing fluff. Just technical answers to help you make an informed decision.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={cn(
                  "lux-border rounded-subtle overflow-hidden transition-all duration-500",
                  isOpen ? "border-primary/50 bg-white/5" : "bg-surface-elevated hover:bg-white/5"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-8 flex items-center justify-between text-left group"
                >
                  <div className="flex items-center gap-6">
                    <HelpCircle className={cn("w-5 h-5 transition-colors", isOpen ? "text-primary" : "text-white/20 group-hover:text-white/40")} />
                    <span className="font-heading font-bold uppercase tracking-widest text-xs">{faq.question}</span>
                  </div>
                  <div className={cn("w-6 h-6 rounded-full flex items-center justify-center transition-all", isOpen ? "bg-primary text-black rotate-0" : "bg-white/5 text-white/40 rotate-90")}>
                    {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-8 pb-8 pl-[68px]">
                        <p className="text-[11px] leading-relaxed text-white/50 uppercase font-medium tracking-widest border-l border-primary/20 pl-6 pb-2">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
            <p className="text-sm text-white/40 mb-6">Still have questions?</p>
            <button className="text-xs font-black uppercase tracking-[0.3em] text-primary hover:text-secondary transition-colors underline underline-offset-8">
                Speak to our engineers on WhatsApp →
            </button>
        </div>
      </div>
    </section>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
