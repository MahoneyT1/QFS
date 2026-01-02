'use client'

import { motion } from "motion/react";
import { TrendingUp, TrendingUpDown } from "lucide-react";
import { useState, useEffect } from "react";


export default function CryptoShowcase() {

    const [cryptoData, setCryptoData] = useState<any[]>([]);

    useEffect(() => {

        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20&x_cg_demo_api_key=CG-8ZSVg7n4Nmj7u7AhBssMkweh";
        
        if (!url) {
            console.error('Crypto url is undefined');
            return;
        }

        async function fetchCryptoData() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data)
                setCryptoData(data);
            } catch (error) {
                console.error('Error fetching crypto data:', error);
            }
        }

        fetchCryptoData();
    }, []);

    return (
        <section className="py-24 bg-linear-to-b from-slate-900 to-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-green-400 text-sm">Live Market Data</span>
                    </div>

                    <h2 className="text-4xl font-bold text-white mb-4">
                        Cryptocurrency Market
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Real-time cryptocurrency prices and market data powered by QFS
                    </p>
                </motion.div>

                

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-500 text-sm">
                        Last updated: {new Date().toLocaleString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                        })}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cryptoData.map((coin, index) => (
                        <motion.div
                            key={coin.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all hover:shadow-lg hover:shadow-blue-500/10"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    {/* Coin image */}
                                    <img
                                        src={coin.image}
                                        alt={coin.name}
                                        className="w-12 h-12 rounded-full"
                                    />

                                    <div>
                                        <h3 className="font-bold text-white">{coin.name}</h3>
                                        <p className="text-sm text-gray-400 uppercase">{coin.symbol}</p>
                                    </div>
                                </div>

                                {coin.price_change_percentage_24h >= 0 ? (
                                    <TrendingUp className="h-5 w-5 text-green-400" />
                                ) : (
                                    <TrendingUpDown className="h-5 w-5 text-red-400" />
                                )}
                            </div>

                            <div className="space-y-3">
                                <div>
                                    <div className="text-2xl font-bold text-white mb-1">
                                        ${coin.current_price.toLocaleString()}
                                    </div>

                                    <div
                                        className={`text-sm ${coin.price_change_percentage_24h >= 0
                                                ? "text-green-400"
                                                : "text-red-400"
                                            }`}
                                    >
                                        {coin.price_change_percentage_24h >= 0 ? "+" : ""}
                                        {coin.price_change_percentage_24h.toFixed(2)}% (24h)
                                    </div>
                                </div>

                                <div className="pt-3 border-t border-slate-700 space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Market Cap</span>
                                        <span className="text-gray-300 font-medium">
                                            ${coin.market_cap.toLocaleString()}
                                        </span>
                                    </div>

                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">Volume (24h)</span>
                                        <span className="text-gray-300 font-medium">
                                            ${coin.total_volume.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Mini chart */}
                            <div className="mt-4 h-12 flex items-end justify-between gap-1">
                                {[...Array(12)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={`flex-1 rounded-t ${coin.price_change_percentage_24h >= 0
                                                ? "bg-green-500/30"
                                                : "bg-red-500/30"
                                            }`}
                                        style={{ height: `${Math.random() * 60 + 40}%` }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}