import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Leaf, Clock, Truck } from 'lucide-react';
import HeroImage from '../assets/hero-image.jpg';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-green-50 py-20">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6">
                            健康美味，<br />
                            <span className="text-primary">轻松送达</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            每周为您提供新鲜、营养均衡的轻食餐盒。无需烹饪，即刻享受健康生活。
                        </p>
                        <div className="flex space-x-4">
                            <Link to="/plans" className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition flex items-center">
                                开始订阅 <ArrowRight className="ml-2" size={20} />
                            </Link>
                            <Link to="/menu" className="bg-white text-primary border border-primary px-8 py-3 rounded-full font-bold hover:bg-green-50 transition">
                                查看菜单
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        {/* Hero Image */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-green-100/50 rounded-full blur-3xl -z-10"></div>
                            <img
                                src={HeroImage}
                                alt="Delicious healthy meal"
                                className="rounded-2xl shadow-2xl w-full object-cover transform hover:scale-[1.02] transition duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-16">为什么选择轻食盒子？</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="text-center p-6">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <Leaf size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">新鲜食材</h3>
                            <p className="text-gray-600">我们只选用当季最新鲜的有机食材，确保每一口都健康美味。</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <Clock size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">节省时间</h3>
                            <p className="text-gray-600">无需买菜、洗菜、做饭。只需加热几分钟，即可享受大厨级美食。</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <Truck size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">灵活配送</h3>
                            <p className="text-gray-600">根据您的日程安排配送时间。随时跳过、暂停或取消订阅。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-16">如何订购？</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-6xl font-bold text-green-200 mb-4">1</div>
                            <h3 className="text-xl font-bold mb-2">选择计划</h3>
                            <p className="text-gray-600">根据您的需求选择餐数和配送频率。</p>
                        </div>
                        <div>
                            <div className="text-6xl font-bold text-green-200 mb-4">2</div>
                            <h3 className="text-xl font-bold mb-2">挑选餐品</h3>
                            <p className="text-gray-600">从每周更新的菜单中选择您喜欢的餐点。</p>
                        </div>
                        <div>
                            <div className="text-6xl font-bold text-green-200 mb-4">3</div>
                            <h3 className="text-xl font-bold mb-2">新鲜烹饪</h3>
                            <p className="text-gray-600">我们的厨师为您精心烹饪每一份餐点。</p>
                        </div>
                        <div>
                            <div className="text-6xl font-bold text-green-200 mb-4">4</div>
                            <h3 className="text-xl font-bold mb-2">送货上门</h3>
                            <p className="text-gray-600">冷链配送，确保新鲜直达您的餐桌。</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
