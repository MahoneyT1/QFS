'use client'

import { motion } from 'motion/react'
import Button from '../UI/Button'
import { ArrowUpRight } from 'lucide-react'


export default function Hero () {

    return (
        // gradient grid style box for background
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-950 via-blue-950 to-slate-900">
            {/* Animated background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

            {/* Gradient orbs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                        <span className="text-blue-400 text-sm">Next Generation Financial System</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                        Welcome to the{" "}
                        <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Quantum Financial System
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Experience the future of secure, transparent, and lightning-fast digital transactions powered by quantum technology.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button name='Get Started'
                            icon={<ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                            className="bg-blue-600 hover:bg-blue-700 text-white group h-10 rounded-md px-6 has-[>svg]:px-4">
                        </Button>
                        <button className=" text-yellow hover:bg-white/10 h-10 rounded-md bg-white px-6">
                            Learn More
                        </button>
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto"
                >
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                        <div className="text-3xl font-bold text-blue-400 mb-2">$2.4T+</div>
                        <div className="text-gray-400">Total Volume</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">10M+</div>
                        <div className="text-gray-400">Active Users</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                        <div className="text-3xl font-bold text-purple-400 mb-2">0.001s</div>
                        <div className="text-gray-400">Transaction Speed</div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}