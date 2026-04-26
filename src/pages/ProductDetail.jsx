import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { meals } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ShoppingBag, Clock, Flame, Info } from 'lucide-react';

const ProductDetail = () => {
    const { id } = useParams();
    const meal = meals.find(m => m.id === parseInt(id));
    const { addToCart } = useCart();

    if (!meal) {
        return <div className="container mx-auto px-4 py-12 text-center">未找到该菜品</div>;
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <Link to="/menu" className="inline-flex items-center text-gray-600 hover:text-primary mb-8 transition">
                <ArrowLeft size={20} className="mr-2" /> 返回菜单
            </Link>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="md:w-1/2 h-96 md:h-auto relative">
                        <img src={meal.image} alt={meal.name} className="w-full h-full object-cover" />
                    </div>

                    {/* Details Section */}
                    <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <h1 className="text-3xl font-bold text-dark">{meal.name}</h1>
                                <span className="text-2xl font-bold text-primary">¥{meal.price}</span>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {meal.tags.map(tag => (
                                    <span key={tag} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                {meal.description}
                            </p>

                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="bg-gray-50 p-4 rounded-xl text-center">
                                    <Flame className="mx-auto text-orange-500 mb-2" size={24} />
                                    <div className="font-bold text-gray-800">{meal.calories}</div>
                                    <div className="text-xs text-gray-500">卡路里</div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl text-center">
                                    <div className="font-bold text-gray-800 text-xl mb-1">{meal.protein}g</div>
                                    <div className="text-xs text-gray-500">蛋白质</div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl text-center">
                                    <div className="font-bold text-gray-800 text-xl mb-1">{meal.carbs}g</div>
                                    <div className="text-xs text-gray-500">碳水</div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="font-bold text-lg mb-3 flex items-center">
                                    <Info size={20} className="mr-2 text-gray-400" /> 主要配料
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {meal.ingredients && meal.ingredients.map((ing, index) => (
                                        <span key={index} className="border border-gray-200 px-3 py-1 rounded-lg text-gray-600 text-sm">
                                            {ing}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t">
                            <button
                                onClick={() => addToCart(meal)}
                                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition flex items-center justify-center shadow-lg shadow-green-200"
                            >
                                <ShoppingBag className="mr-2" /> 加入购物车
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
