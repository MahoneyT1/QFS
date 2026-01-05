'use client'

import { motion } from "motion/react";
import { TrendingUp, TrendingDown, ArrowUpDown } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";

interface Crypto {
    id: string;
    name: string;
    symbol: string;
    price: number;
    change24h: number;
    volume24h: number;
    marketCap: number;
    chart: number[];
    icon: string;
}

export default function Markets() {
     const [cryptoData, setCryptoData] = useState<any[]>([]);
     const [marketStats, setMarketStats] = useState<any>(null);
    
        useEffect(() => {

            // coin url
            const urlSecond = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&sparkline=true&price_change_percentage=24h";

            // const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20&x_cg_demo_api_key=CG-8ZSVg7n4Nmj7u7AhBssMkweh";
            
            if (!urlSecond) {
                console.error('Crypto url is undefined');
                return;
            }
    
            async function fetchCryptoData() {
                try {
                    const response = await fetch(urlSecond);
                    const data = await response.json();
                    setCryptoData(data);
                } catch (error) {
                    console.error('Error fetching crypto data:', error);
                }
            }
    
            fetchCryptoData();
        }, []);

    useEffect(() => {
        const marketStatUrl = "https://api.coingecko.com/api/v3/global";

        async function fetchGlobalStats() {
            const res = await fetch(marketStatUrl);
            const data = await res.json();
            setMarketStats(data.data);
        }

        fetchGlobalStats();
    }, []);

    const formattedData = cryptoData?.map((coin: any) => ({
        id: coin.id,
        name: coin.name,
        symbol: coin.symbol.toUpperCase(),
        price: coin.current_price,
        change24h: coin.price_change_percentage_24h,
        marketCap: coin.market_cap,
        volume24h: coin.total_volume,
        image: coin.image,

        // 🔥 THIS is your chart data
        chart: coin.sparkline_in_7d.price.map((value: number) => ({
            value
        }))
    }));

    const stats = marketStats
        ? [
            {
                label: "Total Market Cap",
                value: `$${(marketStats.total_market_cap.usd / 1e12).toFixed(2)}T`,
                change: `${marketStats.market_cap_change_percentage_24h_usd.toFixed(2)}%`,
                isPositive: marketStats.market_cap_change_percentage_24h_usd >= 0,
            },
            {
                label: "24h Volume",
                value: `$${(marketStats.total_volume.usd / 1e9).toFixed(2)}B`,
                change: "Last 24h",
                isPositive: true,
            },
            {
                label: "BTC Dominance",
                value: `${marketStats.market_cap_percentage.btc.toFixed(2)}%`,
                change: "Market share",
                isPositive: true,
            },
            {
                label: "Active Cryptocurrencies",
                value: marketStats.active_cryptocurrencies.toLocaleString(),
                change: "Tracking",
                isPositive: true,
            },
        ]
        : [];

    return (
        <div className="bg-slate-950">
            {/* Hero Section */}
            <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                            <span className="text-blue-400 text-sm">Live Market Data</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
                            Cryptocurrency{" "}
                            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                Markets
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Track real-time prices, market caps, and trading volumes for top cryptocurrencies
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Market Stats */}
            <section className="py-12 bg-slate-900 border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
                            >
                                <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
                                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                <div className={`text-sm flex items-center gap-1 ${stat.isPositive ? "text-green-400" : "text-red-400"}`}>
                                    {stat.isPositive ? (
                                        <TrendingUp className="h-4 w-4" />
                                    ) : (
                                        <TrendingDown className="h-4 w-4" />
                                    )}
                                    {stat.change}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            
            {/* Cryptocurrency Table */}
            <section className="py-12 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Desktop Table */}
                        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-slate-800/80 border-b border-slate-700">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">#</th>

                                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 cursor-pointer hover:text-white">
                                                <div className="flex items-center gap-2">
                                                    Name
                                                    <ArrowUpDown className="h-4 w-4" />
                                                </div>
                                            </th>

                                            <th className="px-6 py-4 text-right text-sm font-medium text-gray-300 cursor-pointer hover:text-white">
                                                <div className="flex items-center justify-end gap-2">
                                                    Price
                                                    <ArrowUpDown className="h-4 w-4" />
                                                </div>
                                            </th>

                                            <th className="px-6 py-4 text-right text-sm font-medium text-gray-300 cursor-pointer hover:text-white">
                                                <div className="flex items-center justify-end gap-2">
                                                    24h Change
                                                    <ArrowUpDown className="h-4 w-4" />
                                                </div>
                                            </th>

                                            <th className="px-6 py-4 text-right text-sm font-medium text-gray-300 cursor-pointer hover:text-white">
                                                <div className="flex items-center justify-end gap-2">
                                                    24h Volume
                                                    <ArrowUpDown className="h-4 w-4" />
                                                </div>
                                            </th>

                                            <th className="px-6 py-4 text-right text-sm font-medium text-gray-300 cursor-pointer hover:text-white">
                                                <div className="flex items-center justify-end gap-2">
                                                    Market Cap
                                                    <ArrowUpDown className="h-4 w-4" />
                                                </div>
                                            </th>

                                            <th className="px-6 py-4 text-center text-sm font-medium text-gray-300">
                                                Last 7 Days
                                            </th>

                                            <th className="px-6 py-4 text-center text-sm font-medium text-gray-300">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-slate-700">
                                        {formattedData?.map((crypto, index) => (
                                            <motion.tr
                                                key={crypto.id}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                                className="hover:bg-slate-800/30 transition-colors"
                                            >
                                                <td className="px-6 py-4 text-gray-400">{index + 1}</td>

                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-xl">
                                                            <Image src={crypto.image} alt={crypto.name} width={100} height={100} />
                                                        </div>
                                                        <div>
                                                            <div className="font-medium text-white">{crypto.name}</div>
                                                            <div className="text-sm text-gray-400">{crypto.symbol}</div>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-4 text-right text-white">
                                                    {crypto.price}
                                                </td>

                                                <td className="px-6 py-4 text-right">
                                                    <div
                                                        className={`flex items-center justify-end gap-1 ${crypto.change24h >= 0
                                                                ? "text-green-400"
                                                                : "text-red-400"
                                                            }`}
                                                    >
                                                        {crypto.change24h >= 0 ? (
                                                            <TrendingUp className="h-4 w-4" />
                                                        ) : (
                                                            <TrendingDown className="h-4 w-4" />
                                                        )}
                                                        {Math.abs(crypto.change24h).toFixed(2)}%
                                                    </div>
                                                </td>

                                                <td className="px-6 py-4 text-right text-white">
                                                    {crypto.volume24h}
                                                </td>

                                                <td className="px-6 py-4 text-right text-white">
                                                    {crypto.marketCap}
                                                </td>

                                                {/* ✅ FIXED CHART */}
                                                <td className="px-6 py-4">
                                                    <div className="w-24 mx-auto">
                                                        <ResponsiveContainer width="100%" height={48}>
                                                            <AreaChart data={crypto.chart}>
                                                                <defs>
                                                                    <linearGradient
                                                                        id={`gradient-${crypto.id}`}
                                                                        x1="0"
                                                                        y1="0"
                                                                        x2="0"
                                                                        y2="1"
                                                                    >
                                                                        <stop
                                                                            offset="5%"
                                                                            stopColor={
                                                                                crypto.change24h >= 0
                                                                                    ? "#10b981"
                                                                                    : "#ef4444"
                                                                            }
                                                                            stopOpacity={0.3}
                                                                        />
                                                                        <stop
                                                                            offset="95%"
                                                                            stopColor={
                                                                                crypto.change24h >= 0
                                                                                    ? "#10b981"
                                                                                    : "#ef4444"
                                                                            }
                                                                            stopOpacity={0}
                                                                        />
                                                                    </linearGradient>
                                                                </defs>

                                                                <Area
                                                                    type="monotone"
                                                                    dataKey="value"
                                                                    stroke={
                                                                        crypto.change24h >= 0
                                                                            ? "#10b981"
                                                                            : "#ef4444"
                                                                    }
                                                                    fill={`url(#gradient-${crypto.id})`}
                                                                    strokeWidth={2}
                                                                    dot={false}
                                                                />
                                                            </AreaChart>
                                                        </ResponsiveContainer>
                                                    </div>
                                                </td>

                                               
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>

            
        </div>
    );
}