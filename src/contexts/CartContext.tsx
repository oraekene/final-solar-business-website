import React, { createContext, useContext, useState, useEffect } from 'react';

export type DeliveryType = 'PICKUP' | 'LAGOS' | 'NATIONWIDE';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: 'BASE' | 'ADDON';
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  deliveryType: DeliveryType;
  setDeliveryType: (type: DeliveryType) => void;
  total: number;
  subtotal: number;
  deliveryFee: number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const DELIVERY_FEES: Record<DeliveryType, number> = {
  PICKUP: 0,
  LAGOS: 600000, // In kobo
  NATIONWIDE: 1200000 // In kobo
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [deliveryType, setDeliveryType] = useState<DeliveryType>('PICKUP');

  const addItem = (newItem: CartItem) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === newItem.id);
      if (existing) {
        return prev.map(i => i.id === newItem.id ? { ...i, quantity: i.quantity + newItem.quantity } : i);
      }
      return [...prev, newItem];
    });
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: Math.max(0, quantity) } : i));
  };

  const clearCart = () => {
    setItems([]);
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = DELIVERY_FEES[deliveryType];
  const total = subtotal + deliveryFee;

  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      deliveryType,
      setDeliveryType,
      total,
      subtotal,
      deliveryFee,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
