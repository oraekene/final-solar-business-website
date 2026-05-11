import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Powerstations', path: '/products/flagship' },
    { name: 'Solar Products', path: '/products/solar' },
    { name: 'Accessories', path: '/products/internet' },
    { name: 'Blog', path: '/blog' },
    { name: 'Solar Sizer', path: '/solar-sizer' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-neutral/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-bold font-heading tracking-tight">
            Solar<span className="text-primary italic font-black">One</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                location.pathname === link.path ? 'text-primary' : 'text-white/70'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <Link to="/order" className="relative group">
            <ShoppingCart className="w-5 h-5 text-white/70 group-hover:text-primary transition-colors" />
            <span className="absolute -top-2 -right-2 bg-primary text-neutral text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>
          <Link
            to="/checkout"
            className="hidden sm:block bg-primary hover:bg-secondary text-neutral px-6 py-2 rounded-subtle font-bold text-sm transition-all active:scale-95"
          >
            Join the Waitlist
          </Link>
          
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-neutral border-b border-white/10 p-6 flex flex-col gap-4 lg:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                'text-lg font-medium',
                location.pathname === link.path ? 'text-primary' : 'text-white/70'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/checkout"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-primary text-neutral text-center p-4 rounded-subtle font-bold mt-4"
          >
            Join the Waitlist
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
