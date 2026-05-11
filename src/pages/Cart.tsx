import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  AlertCircle,
  Truck,
  Package,
  MapPin,
  Clock
} from 'lucide-react';
import { useCart, DeliveryType } from '@/src/contexts/CartContext';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

const DELIVERY_OPTIONS: { id: DeliveryType; name: string; price: number; description: string; icon: any }[] = [
  { 
    id: 'PICKUP', 
    name: 'Self-Pickup', 
    price: 0, 
    description: 'Collect from our assembly hub in Ikeja. Technical orientation included.',
    icon: Package
  },
  { 
    id: 'LAGOS', 
    name: 'Within Lagos', 
    price: 6000, 
    description: 'White-glove courier service and professional mounting within Lagos metropolis.',
    icon: Truck
  },
  { 
    id: 'NATIONWIDE', 
    name: 'Nationwide Freight', 
    price: 12000, 
    description: 'Secure palletized shipping to any state in Nigeria. Remote support included.',
    icon: MapPin
  }
];

export default function Cart() {
  const { items, updateQuantity, removeItem, deliveryType, setDeliveryType, subtotal, deliveryFee, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-8 px-6">
        <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
          <ShoppingBag className="w-10 h-10 text-primary/40" />
        </div>
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-heading font-bold text-white uppercase tracking-tighter">Your cart is empty</h1>
          <p className="text-white/40 max-w-sm">Build your perfect configuration in the Solar Sizer or browse our products to get started.</p>
        </div>
        <Link to="/order" className="button-primary px-10 py-4 text-xs font-heading font-bold uppercase tracking-widest">
          Start Configuring —
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-neutral min-h-screen text-white pt-32 pb-40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Waitlist Banner */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-secondary/5 border border-secondary/20 rounded-subtle p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
              <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-50" />
            </div>
            <p className="text-sm font-body font-medium text-secondary">
              All orders ship within 21 working days of payment confirmation.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-secondary text-neutral px-4 py-1.5 rounded-full">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-[10px] font-heading font-black uppercase tracking-widest">Waitlist Active</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Cart Area */}
          <div className="lg:col-span-8 space-y-12">
            <div className="border-b border-white/5 pb-8">
              <h1 className="text-5xl font-heading font-bold text-white tracking-tighter uppercase mb-4">Your Cart</h1>
              <p className="text-white/40 font-body">Review your configuration and select a delivery method.</p>
            </div>

            <div className="space-y-6">
              {items.map((item) => (
                <motion.div 
                  layout
                  key={item.id}
                  className="bg-surface-elevated lux-border rounded-subtle p-8 flex flex-col md:flex-row items-center gap-8 group"
                >
                  <div className="w-24 h-24 bg-neutral rounded border border-white/5 flex items-center justify-center">
                    <Package className="w-8 h-8 text-primary/40" />
                  </div>
                  
                  <div className="flex-grow space-y-1">
                    <span className="text-[10px] font-heading font-bold text-primary uppercase tracking-widest">{item.type}</span>
                    <h3 className="text-xl font-heading font-bold text-white tracking-tight">{item.name}</h3>
                    <p className="text-sm text-white/40 font-body">₦{(item.price / 100).toLocaleString()}</p>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="flex items-center bg-neutral/80 rounded-subtle border border-white/10 p-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:text-primary transition-colors disabled:opacity-30"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-heading font-bold text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:text-primary transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="p-3 text-white/20 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="text-right min-w-[120px]">
                    <p className="text-xl font-heading font-bold text-white">₦{((item.price * item.quantity) / 100).toLocaleString()}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Delivery Logic */}
            <div className="pt-12 space-y-8">
              <h2 className="text-2xl font-heading font-bold text-white tracking-tight flex items-center gap-3">
                <Truck className="w-6 h-6 text-primary" />
                Delivery Options
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {DELIVERY_OPTIONS.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setDeliveryType(option.id)}
                    className={cn(
                      "flex flex-col text-left p-8 rounded-subtle transition-all duration-500 space-y-6 lux-border",
                      deliveryType === option.id 
                        ? "bg-primary/5 border-primary shadow-2xl shadow-primary/10" 
                        : "bg-surface-elevated/40 border-white/5 opacity-60 hover:opacity-100 hover:border-white/20"
                    )}
                  >
                    <div className="flex justify-between items-start">
                      <div className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center",
                        deliveryType === option.id ? "bg-primary text-neutral" : "bg-white/5 text-white/40"
                      )}>
                        <option.icon className="w-6 h-6" />
                      </div>
                      <span className="text-2xl font-heading font-bold text-primary">₦{(option.price).toLocaleString()}</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-white uppercase tracking-widest text-sm mb-2">{option.name}</h3>
                      <p className="text-[12px] text-white/40 font-body leading-relaxed">{option.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <aside className="lg:col-span-4 sticky top-32">
            <div className="bg-surface-elevated lux-border rounded-subtle p-10 space-y-10">
              <h2 className="text-[10px] font-heading font-bold text-primary uppercase tracking-[0.4em]">Order Summary</h2>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/40 font-body">Subtotal</span>
                  <span className="text-white font-heading font-bold">₦{(subtotal / 100).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/40 font-body">Delivery ({deliveryType === 'PICKUP' ? 'Self-Pickup' : deliveryType === 'LAGOS' ? 'Lagos' : 'Nationwide'})</span>
                  <span className="text-white font-heading font-bold">₦{(deliveryFee).toLocaleString()}</span>
                </div>
                <div className="pt-6 border-t border-white/5 flex justify-between items-end">
                  <span className="text-sm text-white/40 font-body">Total Amount</span>
                  <span className="text-4xl font-heading font-bold text-primary tracking-tighter leading-none">
                    ₦{((subtotal / 100) + deliveryFee).toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <Link to="/checkout" className="button-primary w-full py-5 text-sm font-heading font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 group">
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest text-center">
                  Payments SECURED BY PAYSTACK & CDCARE
                </p>
              </div>

              <div className="pt-10 border-t border-white/5 space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-[11px] text-white/40 leading-relaxed font-body italic">
                    "We build to order. This prevents old battery cycles and ensures your components are tested together before they ever leave our floor."
                  </p>
                </div>
              </div>
            </div>

            {/* Support CTA */}
            <div className="mt-8 p-8 bg-neutral rounded-subtle border border-white/5 flex items-center justify-between group cursor-pointer hover:border-primary/30 transition-all">
              <div className="space-y-1">
                <p className="text-xs font-heading font-bold text-white uppercase tracking-widest">Need help sizing?</p>
                <p className="text-[10px] text-white/30 uppercase tracking-widest">Chat with an engineer now</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary group-hover:text-primary transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
