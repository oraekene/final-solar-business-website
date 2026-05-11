import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CreditCard, 
  Smartphone, 
  Banknote, 
  ArrowRight, 
  ShieldCheck, 
  Lock,
  ChevronRight,
  Info,
  ExternalLink,
  Wallet
} from 'lucide-react';
import { useCart } from '@/src/contexts/CartContext';
import { cn } from '@/src/lib/utils';
import toast from 'react-hot-toast';

export default function Checkout() {
  const { total, deliveryFee, subtotal, items } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePaystackInit = async () => {
    setIsProcessing(true);
    try {
      const response = await fetch('/api/payments/initiate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: total,
          email: 'customer@example.com', // In a real app, this would be from a form
          metadata: { items }
        })
      });
      
      const data = await response.json();
      if (data.authorization_url) {
        window.location.href = data.authorization_url;
      } else {
        throw new Error('Failed to initiate payment');
      }
    } catch (error) {
      toast.error('Payment initialization failed. Please try again.');
      setIsProcessing(false);
    }
  };

  const handleCDCareRedirect = () => {
    window.open('https://cdcare.ng', '_blank');
    toast.success('Redirecting to CDCare for installment setup');
  };

  return (
    <div className="bg-neutral min-h-screen text-white pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center space-y-4">
           <span className="text-[10px] font-heading font-bold text-primary uppercase tracking-[0.4em]">Step 03 — Settlement</span>
           <h1 className="text-5xl md:text-7xl font-heading font-bold text-white tracking-tighter uppercase">Checkout</h1>
           <p className="text-white/40 max-w-lg mx-auto font-body leading-relaxed">
             Secure your configuration with a full payment or a flexible installment plan.
           </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Payment Options */}
          <div className="lg:col-span-8 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Paystack Block */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-surface-elevated lux-border rounded-subtle p-10 flex flex-col justify-between space-y-12 relative overflow-hidden group"
              >
                <div className="space-y-8">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                      <CreditCard className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-[9px] font-heading font-black uppercase tracking-widest bg-white/5 px-3 py-1 rounded-full text-white/40">Powered by Paystack</span>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-3xl font-heading font-bold text-white uppercase tracking-tight">Pay In Full</h2>
                    <p className="text-sm text-white/40 font-body leading-relaxed">
                      Instant verification. Priority shipping slot allocation. 
                      Supports Cards, Bank Transfer, USSD, and OPay.
                    </p>
                  </div>
                  <div className="space-y-4">
                    {[
                      { name: 'Cards (Visa, Master, Verve)', icon: CreditCard },
                      { name: 'Bank Transfer / USSD', icon: Banknote },
                      { name: 'OPay / PalmPay Wallet', icon: Wallet }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-white/60">
                        <item.icon className="w-4 h-4 text-secondary" />
                        <span className="text-[11px] font-heading font-bold uppercase tracking-widest">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-6">
                  <button 
                    onClick={handlePaystackInit}
                    disabled={isProcessing}
                    className="button-primary w-full py-5 text-sm font-heading font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-opacity disabled:opacity-50"
                  >
                    {isProcessing ? 'Initializing...' : 'Pay Now —'}
                    {!isProcessing && <ArrowRight className="w-4 h-4" />}
                  </button>
                  <p className="text-[9px] text-white/20 font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2">
                    <Lock className="w-3 h-3" /> Secure Bank-Grade Encryption
                  </p>
                </div>
              </motion.div>

              {/* CDCare Block */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-surface-elevated lux-border rounded-subtle p-10 flex flex-col justify-between space-y-12 relative overflow-hidden group border-secondary/20"
              >
                <div className="space-y-8">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center border border-secondary/20">
                      <Smartphone className="w-6 h-6 text-secondary" />
                    </div>
                    <span className="text-[9px] font-heading font-black uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full text-secondary">Powered by CDCare</span>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-3xl font-heading font-bold text-white uppercase tracking-tight">Buy on Installment</h2>
                    <p className="text-sm text-white/40 font-body leading-relaxed">
                      Pay small small over 4–40 weeks. Zero interest. 
                      CDCare manages your delivery schedule.
                    </p>
                  </div>
                  
                  <div className="bg-secondary/5 border-l-2 border-secondary p-4 flex gap-3">
                    <Info className="w-4 h-4 text-secondary flex-shrink-0" />
                    <p className="text-[11px] text-secondary font-body leading-relaxed italic">
                      "CDCare delivers your system once you reach 50% of the total payment. 
                      Perfect for budgeting without the upfront load."
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <button 
                    onClick={handleCDCareRedirect}
                    className="w-full py-5 border border-secondary text-secondary rounded-subtle text-sm font-heading font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all hover:bg-secondary/10"
                  >
                    Continue to CDCare
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <p className="text-[9px] text-white/20 font-bold uppercase tracking-widest text-center">
                    Subject to CDCare terms & conditions
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Supporting Microcopy */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              {[
                { title: 'Tax Compliant', desc: 'Price includes 7.5% VAT. Automated invoice sent instantly.', icon: ShieldCheck },
                { title: 'Direct Support', desc: 'WhatsApp support available 24/7 for shipping updates.', icon: Smartphone },
                { title: 'Waitlist Shield', desc: 'Your payment locks in your hardware slot immediately.', icon: ShieldCheck }
              ].map((item, i) => (
                <div key={i} className="space-y-4">
                  <item.icon className="w-6 h-6 text-primary/40" />
                  <h3 className="text-[11px] font-heading font-black text-white uppercase tracking-widest">{item.title}</h3>
                  <p className="text-[11px] text-white/40 leading-relaxed font-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar: Final Summary */}
          <aside className="lg:col-span-4 sticky top-32">
            <div className="bg-surface-elevated lux-border rounded-subtle p-10 space-y-10">
              <h2 className="text-[10px] font-heading font-bold text-primary uppercase tracking-[0.4em]">Final Review</h2>
              
              <div className="space-y-6">
                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-4 custom-scrollbar">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between items-start text-xs">
                      <div className="space-y-1">
                        <p className="text-white font-body font-medium">{item.name}</p>
                        <p className="text-white/30 uppercase font-black tracking-tighter text-[8px]">{item.type} × {item.quantity}</p>
                      </div>
                      <span className="text-white/60 font-heading">₦{((item.price * item.quantity) / 100).toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-white/5 space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-white/40 font-body">Subtotal</span>
                    <span className="text-white font-heading">₦{(subtotal / 100).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-white/40 font-body">Delivery Fee</span>
                    <span className="text-white font-heading">₦{(deliveryFee).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-end pt-6">
                    <span className="text-[10px] font-heading font-black text-primary uppercase tracking-widest">Total to Pay</span>
                    <span className="text-3xl font-heading font-bold text-primary tracking-tighter leading-none">
                      ₦{((subtotal / 100) + deliveryFee).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => window.history.back()}
                className="w-full py-4 text-[10px] font-heading font-bold text-white/20 uppercase tracking-widest hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                Return to Configurator
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
