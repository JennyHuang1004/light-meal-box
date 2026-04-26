import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Layout = ({ children }) => {
    const { getCartCount } = useCart();
    const cartCount = getCartCount();

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold text-primary">
                        轻食盒子
                    </Link>

                    <nav className="hidden md:flex space-x-8">
                        <Link to="/menu" className="text-gray-600 hover:text-primary">每周菜单</Link>
                        <Link to="/plans" className="text-gray-600 hover:text-primary">订阅计划</Link>
                        <Link to="/about" className="text-gray-600 hover:text-primary">关于我们</Link>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <Link to="/cart" className="text-gray-600 hover:text-primary relative">
                            <ShoppingBag size={24} />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                        <Link to="/account" className="text-gray-600 hover:text-primary">
                            <User size={24} />
                        </Link>
                        <button className="md:hidden text-gray-600">
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-grow">
                {children}
            </main>

            <footer className="bg-dark text-white py-8">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">轻食盒子</h3>
                        <p className="text-gray-400">健康生活，从每一餐开始。</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">产品</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/menu">每周菜单</Link></li>
                            <li><Link to="/plans">订阅计划</Link></li>
                            <li><Link to="/gift-cards">礼品卡</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">支持</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link to="/faq">常见问题</Link></li>
                            <li><Link to="/contact">联系我们</Link></li>
                            <li><Link to="/accessibility">无障碍支持</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">联系方式</h4>
                        <p className="text-gray-400">电话: 1-800-123-4567</p>
                        <p className="text-gray-400">邮箱: support@lightmealbox.com</p>
                        <p className="text-gray-400">在线聊天: 8am - 5pm PST</p>
                    </div>
                </div>
                <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
                    &copy; 2024 Light Meal Box. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Layout;
