import { useEffect } from 'react';
import { useProducts } from '@/src/contexts/ProductContext';

export default function ProductFlagship() {
  const { products, isLoading, fetchProductsByTag } = useProducts();

  useEffect(() => {
    fetchProductsByTag('flagship');
  }, []);

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-heading font-bold mb-12">Pure Solar Power. Zero Grid Drama.</h1>
      
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="h-[400px] bg-white/5 animate-pulse rounded-subtle lux-border" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product cards will go here */}
          <div className="p-8 lux-border rounded-subtle bg-white/5">
             <h2 className="text-2xl font-bold font-heading mb-4">SolarOne A300 Kit</h2>
             <p className="text-white/60 mb-6">Setup in a Box — unbox, plug in, and power up.</p>
          </div>
          <div className="p-8 lux-border rounded-subtle bg-white/5">
             <h2 className="text-2xl font-bold font-heading mb-4">SolarOne A500 Kit</h2>
             <p className="text-white/60 mb-6">Whole-house power without the installation.</p>
          </div>
        </div>
      )}
    </div>
  );
}
