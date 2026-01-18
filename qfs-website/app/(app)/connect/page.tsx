'use client'


import { motion, AnimatePresence } from "motion/react";
import { Wallet, Shield, Check, ExternalLink, ArrowRight, Lock, Zap, Globe } from "lucide-react";
import { useState } from "react";


interface WalletOption {
    id: string;
    name: string;
    description: string;
    icon: string;
    popular?: boolean;
    recommended?: boolean;
}

const walletOptions: WalletOption[] = [
    {
        id: "metamask",
        name: "MetaMask",
        description: "Connect using browser extension or mobile app",
        icon: "🦊",
        popular: true
    },
    {
        id: "trustwallet",
        name: "Trust Wallet",
        description: "Secure multi-chain wallet with DApp browser",
        icon: "🛡️",
        popular: true,
        recommended: true
    },
   
    {
        id: "phantom",
        name: "Phantom",
        description: "Solana & Ethereum wallet",
        icon: "👻"
    },
    {
        id: "ledger",
        name: "Ledger",
        description: "Connect your Ledger hardware wallet",
        icon: "🔐"
    },
  
];

const benefits = [
    {
        icon: Shield,
        title: "Quantum Security",
        description: "Your connection is protected with quantum-resistant encryption"
    },
    {
        icon: Lock,
        title: "Non-Custodial",
        description: "You maintain complete control of your private keys"
    },
    {
        icon: Zap,
        title: "Fast Transactions",
        description: "Lightning-fast transaction processing on QFS network"
    },
    {
        icon: Globe,
        title: "Multi-Chain Support",
        description: "Access assets across multiple blockchain networks"
    }
];

export default function ConnectWallet() {
    const [showModal, setShowModal] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState<string | null>(null);
    const [isConnecting, setIsConnecting] = useState(false);
    const [isConnected, setIsConnected] = useState(false);

    const handleWalletSelect = async (walletId: string) => {
        setSelectedWallet(walletId);
        setIsConnecting(true);

        // Simulate connection process
        setTimeout(() => {
            setIsConnecting(false);
            setIsConnected(true);
            setTimeout(() => {
                setShowModal(false);
            }, 1500);
        }, 2000);
    };

    return (
        <div className="bg-slate-950">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-950 via-blue-950 to-slate-900">
                <div className="absolute inset-0 bg-[linear-linear(to_right,#4f4f4f2e_1px,transparent_1px),linear-linear(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                        animate={{
                            scale: [1.2, 1, 1.2],
                            opacity: [0.5, 0.3, 0.5],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-blue-500/10 border border-blue-500/20 rounded-full">
                            <Wallet className="h-5 w-5 text-blue-400" />
                            <span className="text-blue-400">Secure Connection</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
                            Connect Your{" "}
                            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                Wallet
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
                            Access the Quantum Financial System by connecting your preferred cryptocurrency wallet. Your keys, your crypto, your control.
                        </p>

                        <button
                            onClick={() => setShowModal(true)}
                            className="px-10 py-6 text-lg bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20"
                        >
                            <Wallet className="h-6 w-6 mr-3" />
                            Connect Wallet
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">Why Connect to QFS?</h2>
                        <p className="text-xl text-gray-300">Experience next-generation security and performance</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-slate-600 transition-all"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-6">
                                        <Icon className="h-7 w-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                                    <p className="text-gray-400">{benefit.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">How to Connect</h2>
                        <p className="text-xl text-gray-300">Get started in three simple steps</p>
                    </motion.div>

                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex gap-6 items-start"
                        >
                            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl font-bold text-blue-400">1</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white mb-2">Choose Your Wallet</h3>
                                <p className="text-gray-400 text-lg">Select from popular wallets like MetaMask, Trust Wallet, or WalletConnect</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex gap-6 items-start"
                        >
                            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl font-bold text-purple-400">2</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white mb-2">Authorize Connection</h3>
                                <p className="text-gray-400 text-lg">Approve the connection request in your wallet app securely</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex gap-6 items-start"
                        >
                            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                                <span className="text-2xl font-bold text-cyan-400">3</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white mb-2">Start Trading</h3>
                                <p className="text-gray-400 text-lg">Access QFS features and begin your quantum-secured trading journey</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Security Notice */}
            <section className="py-16 bg-slate-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-linear-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-2xl p-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                <Shield className="h-6 w-6 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3">Security First</h3>
                                <p className="text-gray-300 mb-4">
                                    QFS never asks for your private keys or seed phrases. We use secure wallet connections that keep your credentials safe. Always verify the URL and connection request before approving.
                                </p>
                                <ul className="space-y-2 text-gray-400">
                                    <li className="flex items-center gap-2">
                                        <Check className="h-5 w-5 text-green-400" />
                                        <span>End-to-end encrypted connections</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="h-5 w-5 text-green-400" />
                                        <span>Quantum-resistant security protocols</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="h-5 w-5 text-green-400" />
                                        <span>Non-custodial - you control your assets</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Wallet Selection Modal */}
            <AnimatePresence>
                {showModal && (
                    <div
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => !isConnecting && !isConnected && setShowModal(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden"
                        >
                            {/* Modal Header */}
                            <div className="p-6 border-b border-slate-700">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold text-white mb-1">Connect Wallet</h2>
                                        <p className="text-gray-400">Choose your preferred wallet to continue</p>
                                    </div>
                                    {!isConnecting && !isConnected && (
                                        <button
                                            onClick={() => setShowModal(false)}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 overflow-y-auto max-h-[calc(85vh-140px)]">
                                {!isConnected ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {walletOptions.map((wallet) => (
                                            <motion.button
                                                key={wallet.id}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => handleWalletSelect(wallet.id)}
                                                disabled={isConnecting}
                                                className={`relative p-5 rounded-xl border-2 transition-all text-left ${isConnecting && selectedWallet === wallet.id
                                                        ? 'border-blue-500 bg-blue-500/10'
                                                        : 'border-slate-700 bg-slate-800/50 hover:border-slate-600 hover:bg-slate-800'
                                                    } ${isConnecting && selectedWallet !== wallet.id ? 'opacity-50' : ''}`}
                                            >
                                                {wallet.recommended && (
                                                    <div className="absolute top-3 right-3 px-2 py-1 bg-blue-500/20 border border-blue-500/30 rounded text-xs text-blue-400 font-medium">
                                                        Recommended
                                                    </div>
                                                )}

                                                <div className="flex items-start gap-4">
                                                    <div className="text-4xl">{wallet.icon}</div>
                                                    <div className="flex-1">
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <h3 className="font-bold text-white">{wallet.name}</h3>
                                                            {wallet.popular && (
                                                                <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs rounded">Popular</span>
                                                            )}
                                                        </div>
                                                        <p className="text-sm text-gray-400">{wallet.description}</p>
                                                    </div>

                                                    {isConnecting && selectedWallet === wallet.id ? (
                                                        <div className="w-6 h-6">
                                                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-400"></div>
                                                        </div>
                                                    ) : (
                                                        <ArrowRight className="h-5 w-5 text-gray-400" />
                                                    )}
                                                </div>
                                            </motion.button>
                                        ))}
                                    </div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                                            <Check className="h-10 w-10 text-green-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Successfully Connected!</h3>
                                        <p className="text-gray-400">Your wallet is now connected to QFS</p>
                                    </motion.div>
                                )}

                                {/* Info Box */}
                                {!isConnected && (
                                    <div className="mt-6 p-4 bg-slate-800/50 border border-slate-700 rounded-xl">
                                        <div className="flex items-start gap-3">
                                            <Lock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                                            <div className="text-sm text-gray-400">
                                                <p className="font-medium text-white mb-1">Secure Connection</p>
                                                <p>
                                                    We do not have access to your funds. Connecting your wallet only allows you to interact with QFS smart contracts.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Modal Footer */}
                            {!isConnected && (
                                <div className="p-6 border-t border-slate-700 bg-slate-800/50">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-400">New to crypto wallets?</span>
                                        <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                                            Learn more
                                            <ExternalLink className="h-4 w-4" />
                                        </a>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
