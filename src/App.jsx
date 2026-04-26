import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import ProductDetail from './pages/ProductDetail';
import Plans from './pages/Plans';
import Checkout from './pages/Checkout';
import Account from './pages/Account';
import Cart from './pages/Cart';

function App() {
    return (
        <CartProvider>
            <Router basename="/light-meal-box">
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/menu" element={<Menu />} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/plans" element={<Plans />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </Layout>
            </Router>
        </CartProvider>
    );
}

export default App;
