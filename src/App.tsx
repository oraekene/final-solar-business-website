/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { ProductProvider } from './contexts/ProductContext';

// Page imports
import Home from './pages/Home';
import ProductFlagship from './pages/ProductFlagship';
import ProductSolar from './pages/ProductSolar';
import ProductInternet from './pages/ProductInternet';
import Installation from './pages/Installation';
import Blog from './pages/Blog';
import Order from './pages/Order';
import Checkout from './pages/Checkout';
import SolarSizer from './pages/SolarSizer';

export default function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/flagship" element={<ProductFlagship />} />
            <Route path="/products/solar" element={<ProductSolar />} />
            <Route path="/products/internet" element={<ProductInternet />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/order" element={<Order />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/solar-sizer" element={<SolarSizer />} />
          </Routes>
        </Layout>
      </ProductProvider>
    </BrowserRouter>
  );
}
