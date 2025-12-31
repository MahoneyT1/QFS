'use client'

import { motion } from "motion/react";
import { Shield, Zap, Globe, TrendingUp } from "lucide-react";

const features = [
    {
        icon: Shield,
        title: "Quantum Security",
        description: "Military-grade quantum encryption ensures your assets are protected against all current and future threats.",
        color: "from-blue-400 to-blue-600"
    },
    {
        icon: Zap,
        title: "Instant Transactions",
        description: "Process transactions in milliseconds with our quantum-powered network infrastructure.",
        color: "from-cyan-400 to-cyan-600"
    },
    {
        icon: Globe,
        title: "Global Network",
        description: "Access your assets anywhere in the world with our decentralized quantum network.",
        color: "from-purple-400 to-purple-600"
    },
    {
        icon: TrendingUp,
        title: "Real-Time Analytics",
        description: "Advanced AI-powered analytics provide instant insights into market trends and opportunities.",
        color: "from-pink-400 to-pink-600"
    }
];

export default function Features() {
    return (
        <section className="py-24 bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Why Choose QFS?
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Experience the next evolution in digital finance with cutting-edge quantum technology
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors"
                        >
                            <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.color} mb-4`}>
                                <feature.icon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
