import React, { useState } from 'react';
import { meals } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { Filter, Plus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [filter, setFilter] = useState('All');
    const { addToCart } = useCart();

    const filteredMeals = filter === 'All'
        ? meals
        : meals.filter(meal => meal.category === filter || meal.tags.includes(filter));

    const categories = ['All', 'Meals', 'Breakfasts', '健身', '素食', '低碳'];

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8">本周菜单</h1>

            {/* Filter Section */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 rounded-full border transition ${filter === cat
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Meals Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredMeals.map(meal => (
                    <div key={meal.id} className={`bg-white rounded-xl shadow-md overflow-hidden transition ${meal.available ? 'hover:shadow-lg' : 'opacity-60 grayscale'}`}>
                        <div className="h-48 overflow-hidden relative">
                            <img src={meal.image} alt={meal.name} className="w-full h-full object-cover" />
                            {meal.available ? (
                                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-bold text-primary">
                                    ¥{meal.price}
                                </div>
                            ) : (
                                <div className="absolute top-4 right-4 bg-gray-200 px-3 py-1 rounded-full text-sm font-bold text-gray-500">
                                    非本周供应
                                </div>
                            )}
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-dark">{meal.name}</h3>
                            </div>
                            <p className="text-gray-500 text-sm mb-4">{meal.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {meal.tags.map(tag => (
                                    <span key={tag} className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center border-t pt-4">
                                <div className="text-sm text-gray-500">
                                    <span className="font-bold">{meal.calories}</span> 卡路里
                                </div>
                                {meal.available ? (
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            addToCart(meal);
                                        }}
                                        className="bg-primary text-white p-2 rounded-full hover:bg-green-600 transition"
                                    >
                                        <Plus size={20} />
                                    </button>
                                ) : (
                                    <button disabled className="bg-gray-200 text-gray-400 p-2 rounded-full cursor-not-allowed">
                                        <Plus size={20} />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
