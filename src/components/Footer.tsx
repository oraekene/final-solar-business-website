import { Link } from 'react-router-dom';
import { Twitter, Instagram, Youtube, Linkedin, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Column 1: Brand */}
        <div className="space-y-6">
          <Link to="/" className="text-2xl font-bold font-heading tracking-tight">
            Solar<span className="text-primary italic font-black">One</span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Power That Works When NEPA Doesn't. Built and tested in Nigeria, for Nigeria. Every component we sell has been personally tested by us.
          </p>
          <div className="flex items-center gap-4 text-white/40">
            <Twitter className="w-5 h-5 hover:text-primary transition-colors cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-primary transition-colors cursor-pointer" />
            <Youtube className="w-5 h-5 hover:text-primary transition-colors cursor-pointer" />
            <Linkedin className="w-5 h-5 hover:text-primary transition-colors cursor-pointer" />
          </div>
        </div>

        {/* Column 2: Products */}
        <div>
          <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-xs">Our Products</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link to="/products/flagship" className="hover:text-primary transition-colors">SolarOne S1 Powerstation</Link></li>
            <li><Link to="/products/flagship" className="hover:text-primary transition-colors">SolarOne S2 Powerstation</Link></li>
            <li><Link to="/products/solar" className="hover:text-primary transition-colors">Solar Panels</Link></li>
            <li><Link to="/products/solar" className="hover:text-primary transition-colors">Lithium Batteries</Link></li>
            <li><Link to="/products/internet" className="hover:text-primary transition-colors">Internet & Remote Work Devices</Link></li>
          </ul>
        </div>

        {/* Column 3: Learn */}
        <div>
          <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-xs">Learn</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link to="/blog" className="hover:text-primary transition-colors">Why Modified Sine Wave Destroys Laptops</Link></li>
            <li><Link to="/blog" className="hover:text-primary transition-colors">How to Size a Solar System</Link></li>
            <li><Link to="/blog" className="hover:text-primary transition-colors">The Complete Remote Work Setup</Link></li>
            <li><Link to="/solar-sizer" className="flex items-center gap-2 group text-primary font-bold">
              Solar Sizer Calculator <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link></li>
          </ul>
        </div>

        {/* Column 4: Support */}
        <div className="space-y-8">
          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-xs">Community & Support</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-primary transition-colors">Join WhatsApp Community</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Join Telegram Channel</a></li>
              <li><Link to="/installation" className="hover:text-primary transition-colors">Custom Installation service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold text-white mb-4 uppercase tracking-wider text-[10px]">Wholesale</h4>
            <p className="text-white/40 text-xs italic">Interested in bulk pricing for businesses or schools? <a href="#" className="text-primary hover:underline">Get in touch</a></p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] text-white/30 uppercase tracking-widest">
        <span>© 2025 SolarOne Nigeria. All rights reserved.</span>
        <div className="flex gap-8">
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Use</Link>
          <Link to="#">Refund Policy</Link>
        </div>
        <div className="flex items-center gap-2">
          Made in Nigeria 🇳🇬
        </div>
      </div>
    </footer>
  );
}
