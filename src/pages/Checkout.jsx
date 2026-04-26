import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { plans } from '../data/mockData';

const Checkout = () => {
    const [searchParams] = useSearchParams();
    const planId = searchParams.get('plan') || 'plan-2';
    const selectedPlan = plans.find(p => p.id === planId) || plans[1];

    const [step, setStep] = useState(1);
    const [deliveryTimes, setDeliveryTimes] = useState({});
    const [customTime, setCustomTime] = useState('');

    const timeSlots = [];
    for (let i = 8; i <= 18; i += 2) {
        timeSlots.push(`${i}:00 - ${i + 2}:00`);
    }

    const handleTimeSelect = (mealIndex, slot) => {
        setDeliveryTimes(prev => ({
            ...prev,
            [mealIndex]: slot
        }));
    };

    const getDeliveryDaysText = (days) => {
        if (!days || days.length === 0) return '自定义配送';
        const dayMap = { 1: '周一', 2: '周二', 3: '周三', 4: '周四', 5: '周五', 6: '周六', 7: '周日' };
        return days.map(d => dayMap[d]).join(', ');
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 text-center">结账</h1>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Left Column: Form */}
                <div className="lg:w-2/3">
                    {/* Progress Steps */}
                    <div className="flex items-center mb-8">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
                        <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
                        <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>3</div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-8">
                        <h2 className="text-xl font-bold mb-6">配送信息</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">名字</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">姓氏</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">地址</label>
                                <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">城市</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">邮编</label>
                                    <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">电话</label>
                                <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent" />
                            </div>

                            <div className="pt-4">
                                <button type="button" className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-green-600 transition">
                                    继续付款
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Delivery Time Selection */}
                    <div className="bg-white rounded-xl shadow-md p-8 mt-8">
                        <h2 className="text-xl font-bold mb-6">配送时间选择</h2>
                        <div className="mb-6">
                            <p className="text-gray-600 mb-2">配送周期: <span className="font-bold text-primary">{getDeliveryDaysText(selectedPlan.deliveryDays)}</span></p>
                            <p className="text-sm text-gray-500">{selectedPlan.description}</p>
                        </div>

                        {selectedPlan.deliveryType === 'custom' ? (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">预约配送时间 (需提前6小时)</label>
                                <input
                                    type="time"
                                    value={customTime}
                                    onChange={(e) => setCustomTime(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                                />
                                <p className="text-xs text-orange-500 mt-2">* 请确保提前至少6小时预约</p>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {Array.from({ length: selectedPlan.mealsPerDay }).map((_, index) => (
                                    <div key={index}>
                                        <h3 className="text-sm font-bold text-gray-700 mb-3">
                                            {selectedPlan.mealsPerDay === 2
                                                ? (index === 0 ? '午餐配送时间' : '晚餐配送时间')
                                                : (index === 0 ? '早餐配送时间' : (index === 1 ? '午餐配送时间' : '晚餐配送时间'))
                                            }
                                        </h3>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            {timeSlots.map(slot => (
                                                <button
                                                    key={slot}
                                                    type="button"
                                                    onClick={() => handleTimeSelect(index, slot)}
                                                    className={`py-3 px-4 rounded-lg border text-sm font-medium transition ${deliveryTimes[index] === slot
                                                        ? 'bg-primary text-white border-primary'
                                                        : 'bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary'
                                                        }`}
                                                >
                                                    {slot}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Column: Order Summary */}
                <div className="lg:w-1/3">
                    <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                        <h2 className="text-xl font-bold mb-6">订单摘要</h2>
                        <div className="flex justify-between mb-4">
                            <span className="text-gray-600">计划</span>
                            <span className="font-bold">{selectedPlan.name}</span>
                        </div>
                        <div className="flex justify-between mb-4">
                            <span className="text-gray-600">每餐价格</span>
                            <span>¥{selectedPlan.pricePerMeal}</span>
                        </div>
                        <div className="flex justify-between mb-4">
                            <span className="text-gray-600">运费</span>
                            {selectedPlan.excludeFreeShipping ? (
                                <span>¥{selectedPlan.shippingCost}</span>
                            ) : (
                                <span className="text-green-600">免费 (首单)</span>
                            )}
                        </div>
                        <div className="border-t pt-4 mt-4">
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-bold">总计</span>
                                <span className="text-2xl font-bold text-primary">
                                    ¥{selectedPlan.totalPrice + (selectedPlan.excludeFreeShipping ? selectedPlan.shippingCost : 0)}
                                </span>
                            </div>
                        </div>
                        <div className="mt-6 bg-green-50 p-4 rounded-lg text-sm text-green-800">
                            <p>包含首单保障：不满意可全额退款。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
