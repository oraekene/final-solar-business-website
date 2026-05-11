/**
 * Mock SolarSizer Pro SDK implementation based on INTEGRATION_GUIDE.md
 */

export interface Product {
  id: string;
  name: string;
  price: number;
  slashedPrice?: number;
  tagline?: string;
  description: string;
  specs: string[];
  tags: string[];
  type: 'kit' | 'standalone' | 'accessory' | 'internet';
  imageUrl?: string;
  waitlist?: boolean;
}

export const sdk = {
  getProducts: async (tag: string): Promise<Product[]> => {
    // This is a stub that will eventually call /api/products
    console.log(`SolarSizerSDK: Fetching products for tag: ${tag}`);
    
    // Returning empty array for foundational skeleton
    return [];
  },
  
  calculateLoad: async (data: any) => {
    console.log('SolarSizerSDK: Calculating load...', data);
    return {
      recommendation: 'SolarOne S1',
      details: {}
    };
  }
};
