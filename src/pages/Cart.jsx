import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h2 className="text-3xl font-bold mb-6">您的购物车是空的</h2>
                <p className="text-gray-600 mb-8">看起来您还没有添加任何美味的餐点。</p>
                <Link to="/menu" className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition inline-flex items-center">
                    去点餐 <ArrowRight className="ml-2" size={20} />
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">购物车</h1>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Cart Items */}
                <div className="lg:w-2/3">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="p-6 border-b">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold">餐点列表</h2>
                                <button onClick={clearCart} className="text-red-500 hover:text-red-700 text-sm font-medium">
                                    清空购物车
                                </button>
                            </div>
                        </div>
                        <ul className="divide-y divide-gray-100">
                            {cartItems.map(item => (
                                <li key={item.id} className="p-6 flex flex-col sm:flex-row items-center gap-6">
                                    <img src={item.image} alt={item.name} className="w-24 h-24 rounded-xl object-cover" />

                                    <div className="flex-grow text-center sm:text-left">
                                        <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                                        <p className="text-gray-500 text-sm mb-2">{item.category}</p>
                                        <div className="font-bold text-primary">¥{item.price}</div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center border rounded-lg">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="p-2 hover:bg-gray-100 text-gray-600"
                                            >
                                                <Minus size={16} />
                                            </button>
                                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-2 hover:bg-gray-100 text-gray-600"
                                            >
                                                <Plus size={16} />
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="p-2 text-gray-400 hover:text-red-500 transition"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:w-1/3">
                    <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
                        <h2 className="text-xl font-bold mb-6">订单摘要</h2>

                        <div className="space-y-4 mb-6 border-b pb-6">
                            <div className="flex justify-between text-gray-600">
                                <span>小计</span>
                                <span>¥{getCartTotal().toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>配送费</span>
                                <span>免运费</span>
                            </div>
                        </div>

                        <div className="flex justify-between text-xl font-bold mb-8">
                            <span>总计</span>
                            <span className="text-primary">¥{getCartTotal().toFixed(2)}</span>
                        </div>

                        <Link to="/checkout" className="block w-full bg-primary text-white py-4 rounded-xl font-bold text-center hover:bg-green-600 transition shadow-lg shadow-green-200">
                            去结算
                        </Link>

                        <Link to="/menu" className="block w-full text-center text-gray-500 mt-4 hover:text-primary transition">
                            继续购物
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
