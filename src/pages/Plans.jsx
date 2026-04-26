import React from 'react';
import { plans } from '../data/mockData';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Plans = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h1 className="text-4xl font-bold mb-4">选择您的订阅计划</h1>
                <p className="text-gray-600 text-lg">
                    灵活的计划，适应您的生活方式。随时跳过、暂停或取消。
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {plans.map((plan, index) => (
                    <div key={plan.id} className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 ${index === 2 ? 'border-primary transform scale-105 z-10' : 'border-transparent'}`}>
                        {index === 2 && (
                            <div className="absolute top-0 left-0 w-full bg-primary text-white text-center text-sm py-1 font-bold">
                                最受欢迎
                            </div>
                        )}
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-dark mb-2">{plan.name}</h3>
                            <p className="text-gray-500 mb-6">{plan.description}</p>

                            <div className="mb-6">
                                <span className="text-4xl font-bold text-primary">¥{plan.pricePerMeal}</span>
                                <span className="text-gray-400"> / 餐</span>
                            </div>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center text-gray-600">
                                    <Check size={18} className="text-primary mr-2" /> 每周 {plan.mealsPerWeek} 份餐点
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <Check size={18} className="text-primary mr-2" /> 免运费 (首单)
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <Check size={18} className="text-primary mr-2" /> 随时取消
                                </li>
                            </ul>

                            <Link
                                to={`/checkout?plan=${plan.id}`}
                                className={`block w-full py-3 rounded-xl font-bold text-center transition ${index === 2
                                    ? 'bg-primary text-white hover:bg-green-600'
                                    : 'bg-green-50 text-primary hover:bg-green-100'
                                    }`}
                            >
                                选择此计划
                            </Link>
                        </div>
                        <div className="bg-gray-50 p-4 text-center text-sm text-gray-500 border-t">
                            每周总计: ¥{plan.totalPrice}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Plans;
