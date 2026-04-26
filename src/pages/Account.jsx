import React from 'react';
import { User, Package, CreditCard, Settings, LogOut, Gift, Award } from 'lucide-react';
import { userLoyalty } from '../data/mockData';

const Account = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">我的账户</h1>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar */}
                <div className="md:w-1/4">
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                        <div className="p-6 bg-primary text-white text-center">
                            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                <User size={40} />
                            </div>
                            <h2 className="font-bold text-xl">Jenny Huang</h2>
                            <p className="text-green-100 text-sm">会员自 2024年</p>
                        </div>
                        <nav className="p-4">
                            <ul className="space-y-2">
                                <li>
                                    <button className="w-full flex items-center px-4 py-2 text-primary bg-green-50 rounded-lg font-medium">
                                        <Package size={20} className="mr-3" /> 订阅管理
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition">
                                        <CreditCard size={20} className="mr-3" /> 支付方式
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition">
                                        <Settings size={20} className="mr-3" /> 账户设置
                                    </button>
                                </li>
                                <li>
                                    <button className="w-full flex items-center px-4 py-2 text-red-500 hover:bg-red-50 rounded-lg transition">
                                        <LogOut size={20} className="mr-3" /> 退出登录
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* Main Content */}
                <div className="md:w-3/4">
                    <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
                        <h2 className="text-xl font-bold mb-6">当前订阅</h2>
                        <div className="border rounded-lg p-6 flex flex-col md:flex-row justify-between items-center">
                            <div>
                                <h3 className="font-bold text-lg text-primary mb-2">每周 6 餐计划</h3>
                                <p className="text-gray-600">下一次配送: 11月 25日, 周一</p>
                                <p className="text-gray-500 text-sm mt-2">包含: 香煎鸡胸肉, 照烧三文鱼...</p>
                            </div>
                            <div className="mt-4 md:mt-0 flex space-x-4">
                                <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:border-primary hover:text-primary transition">
                                    跳过本周
                                </button>
                                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-green-600 transition">
                                    修改菜单
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-8">
                        <h2 className="text-xl font-bold mb-6">配送历史</h2>
                        <div className="space-y-4">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="flex justify-between items-center py-4 border-b last:border-0">
                                    <div>
                                        <p className="font-bold text-gray-800">11月 {18 - item * 7}日 配送</p>
                                        <p className="text-sm text-gray-500">6 份餐点 • $71.94</p>
                                    </div>
                                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">
                                        已送达
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Loyalty Section */}
                    <div className="bg-white rounded-xl shadow-sm p-8 mt-8">
                        <h2 className="text-xl font-bold mb-6 flex items-center">
                            <Gift className="mr-2 text-primary" /> 会员权益
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Points System */}
                            <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-bold text-lg text-orange-800">我的积分</h3>
                                        <p className="text-sm text-orange-600">1元 = 10积分</p>
                                    </div>
                                    <span className="text-3xl font-bold text-orange-500">{userLoyalty.points}</span>
                                </div>

                                <div className="space-y-3">
                                    {userLoyalty.pointRewards.map(reward => (
                                        <div key={reward.id} className="bg-white p-3 rounded-lg flex justify-between items-center shadow-sm">
                                            <div>
                                                <p className="font-bold text-gray-800">{reward.name}</p>
                                                <p className="text-xs text-gray-500">满{reward.minSpend}元可用</p>
                                            </div>
                                            <button
                                                disabled={userLoyalty.points < reward.points}
                                                className={`px-3 py-1 rounded text-sm font-bold ${userLoyalty.points >= reward.points
                                                    ? 'bg-orange-500 text-white hover:bg-orange-600'
                                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                                    }`}
                                            >
                                                {reward.points}分兑换
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Stamp System */}
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-bold text-lg text-blue-800">集章卡</h3>
                                        <p className="text-sm text-blue-600">1产品 = 1章</p>
                                    </div>
                                    <span className="text-3xl font-bold text-blue-500">{userLoyalty.stamps}</span>
                                </div>

                                {/* Stamp Grid Visualization */}
                                <div className="grid grid-cols-5 gap-2 mb-6">
                                    {[...Array(10)].map((_, i) => (
                                        <div key={i} className={`aspect-square rounded-full flex items-center justify-center border-2 ${i < (userLoyalty.stamps % 10) || (userLoyalty.stamps >= 10 && i < 10) // Simplified logic for demo
                                            ? 'bg-blue-500 border-blue-500 text-white'
                                            : 'bg-white border-blue-200 text-gray-300'
                                            }`}>
                                            <Award size={16} />
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-3">
                                    {userLoyalty.stampRewards.map(reward => (
                                        <div key={reward.id} className="bg-white p-3 rounded-lg flex justify-between items-center shadow-sm">
                                            <div>
                                                <p className="font-bold text-gray-800">{reward.name}</p>
                                                <p className="text-xs text-gray-500">需 {reward.stamps} 个章</p>
                                            </div>
                                            <button
                                                disabled={userLoyalty.stamps < reward.stamps}
                                                className={`px-3 py-1 rounded text-sm font-bold ${userLoyalty.stamps >= reward.stamps
                                                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                                    }`}
                                            >
                                                兑换
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
