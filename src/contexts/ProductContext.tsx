import React, { createContext, useContext, useState, useEffect } from 'react';
import { sdk, type Product } from '@/src/sdk';

interface ProductContextType {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  fetchProductsByTag: (tag: string) => Promise<void>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProductsByTag = async (tag: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await sdk.getProducts(tag);
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProductContext.Provider value={{ products, isLoading, error, fetchProductsByTag }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}
