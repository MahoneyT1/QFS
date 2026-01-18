'use client'


import { motion } from "motion/react";
import { Shield, Lock, Network, Layers, Database, Zap, Key, Globe, Users, Cpu, ShieldCheck, Sparkles, Wallet, AlertTriangle, FileKey } from "lucide-react";
import { useState } from "react";

const topics = [
    {
        id: "web3",
        title: "Web3 & Cryptocurrency",
        icon: Globe,
        color: "from-blue-500 to-cyan-500",
        description: "Understanding the decentralized future"
    },
    {
        id: "quantum",
        title: "Quantum Security",
        icon: Shield,
        color: "from-purple-500 to-pink-500",
        description: "Future-proof encryption technology"
    },
    {
        id: "blockchain",
        title: "Blockchain Technology",
        icon: Layers,
        color: "from-green-500 to-emerald-500",
        description: "Distributed ledger foundation"
    },
    {
        id: "security",
        title: "Security Best Practices",
        icon: Lock,
        color: "from-red-500 to-orange-500",
        description: "Protecting your digital assets"
    }
];

export default function Learn() {
    const [activeTab, setActiveTab] = useState<"web3" | "quantum" | "blockchain" | "security">("web3");

    return (
        <div className="bg-slate-950">
            {/* Hero Section */}
            <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
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
                        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
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
                        <div className="inline-block mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
                            <span className="text-purple-400 text-sm">Knowledge Center</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
                            Learn About{" "}
                            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Web3 & Crypto
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Master the fundamentals of cryptocurrency, blockchain technology, quantum security, and how to keep your digital assets safe
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Topic Selector */}
            <section className="py-12 bg-slate-900 border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {topics.map((topic, index) => {
                            const Icon = topic.icon;
                            const isActive = activeTab === topic.id;
                            return (
                                <motion.button
                                    key={topic.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    onClick={() => setActiveTab(topic.id as typeof activeTab)}
                                    className={`relative p-6 rounded-xl transition-all ${isActive
                                            ? 'bg-slate-800 border-2 border-slate-600 shadow-lg shadow-blue-500/20'
                                            : 'bg-slate-800/50 border border-slate-700 hover:border-slate-600'
                                        }`}
                                >
                                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${topic.color} mb-3`}>
                                        <Icon className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="font-bold text-white mb-1 text-sm sm:text-base">{topic.title}</h3>
                                    <p className="text-xs text-gray-400">{topic.description}</p>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-t-full"
                                        />
                                    )}
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Web3 & Cryptocurrency Content */}
            {activeTab === "web3" && (
                <section className="py-16 bg-slate-950">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                        {/* What is Cryptocurrency */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl p-8">
                                <h2 className="text-3xl font-bold text-white mb-4">What is Cryptocurrency?</h2>
                                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                    Cryptocurrency is a digital or virtual form of currency that uses cryptography for security. Unlike traditional currencies issued by governments, cryptocurrencies operate on decentralized networks.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                                <Zap className="h-5 w-5 text-blue-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Digital Money</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Cryptocurrencies exist only in digital form and can be sent directly between users without intermediaries like banks.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                                                <Network className="h-5 w-5 text-cyan-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Decentralized Control</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            No single entity controls cryptocurrency networks. Instead, they're maintained by distributed networks of computers worldwide.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                                <Lock className="h-5 w-5 text-purple-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Cryptographic Security</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Advanced encryption techniques secure transactions and control the creation of new units, making cryptocurrencies extremely difficult to counterfeit.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                                                <Database className="h-5 w-5 text-green-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Popular Examples</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Bitcoin, Ethereum, and thousands of other cryptocurrencies serve different purposes, from digital cash to smart contract platforms.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* What is Web3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-2xl p-8">
                                <h2 className="text-3xl font-bold text-white mb-4">What is Web3?</h2>
                                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                    Web3 represents the third generation of internet services, built on blockchain technology. It emphasizes decentralization, user ownership, and removes the need for intermediaries. Unlike Web2, where companies own platforms and user data, Web3 puts control back in users' hands.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                                <Users className="h-5 w-5 text-blue-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">User Ownership</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Web3 gives users true ownership of their digital assets, data, and identity through cryptographic keys and blockchain technology, eliminating reliance on centralized platforms.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                                                <Globe className="h-5 w-5 text-cyan-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Permissionless Access</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Anyone can participate in Web3 without authorization from governing organizations. Financial services become accessible to anyone with an internet connection.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                                <Zap className="h-5 w-5 text-purple-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Smart Contracts</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Self-executing contracts with terms directly written into code enable trustless transactions and automation without intermediaries or central authorities.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                                                <Network className="h-5 w-5 text-green-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Interoperability</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Web3 enables seamless interaction between different platforms and protocols, creating a unified digital ecosystem where assets and data move freely.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* What is a Crypto Wallet */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-8">
                                <h2 className="text-3xl font-bold text-white mb-4">What is a Crypto Wallet?</h2>
                                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                    A cryptocurrency wallet is a digital tool that allows you to store, send, and receive cryptocurrencies. Unlike traditional wallets, crypto wallets don't actually store your coins—they store the cryptographic keys that give you access to your digital assets on the blockchain.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                                <Wallet className="h-5 w-5 text-purple-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Types of Wallets</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Hot wallets are connected to the internet for convenience, while cold wallets are offline hardware devices offering maximum security for long-term storage.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                                                <Key className="h-5 w-5 text-pink-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Public & Private Keys</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Your public key is like your bank account number (safe to share), while your private key is like your password (never share this with anyone).
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                                <ShieldCheck className="h-5 w-5 text-blue-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Self-Custody</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            With a non-custodial wallet, you have complete control over your assets. This means you're solely responsible for keeping your private keys secure.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                                                <Database className="h-5 w-5 text-cyan-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Backup Your Wallet</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Always backup your seed phrase (12-24 words) and store it in multiple secure physical locations. Losing this means losing access to your funds forever.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </section>
            )}

            {/* Blockchain Content */}
            {activeTab === "blockchain" && (
                <section className="py-16 bg-slate-950">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                        {/* What is Blockchain */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-8">
                                <h2 className="text-3xl font-bold text-white mb-4">What is Blockchain?</h2>
                                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                    Blockchain is the revolutionary technology that powers cryptocurrencies. It's a distributed ledger that records transactions across many computers in a way that makes the records difficult to alter retroactively.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                                                <Layers className="h-5 w-5 text-green-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Distributed Ledger</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            A blockchain is a chain of blocks containing transaction data, replicated across thousands of computers simultaneously, eliminating single points of failure.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                                                <Lock className="h-5 w-5 text-emerald-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Immutable Records</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Once data is recorded in a block and added to the chain, it becomes extremely difficult to change, creating a permanent and transparent record.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                                <Users className="h-5 w-5 text-blue-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Transparency & Trust</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            All participants can view the entire transaction history, creating transparency while maintaining user privacy through cryptographic addresses.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                                                <Network className="h-5 w-5 text-cyan-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">No Central Authority</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            The blockchain network operates without a central administrator, with consensus mechanisms ensuring all participants agree on the state of the ledger.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* How Blockchain Works */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-8">
                                <h2 className="text-3xl font-bold text-white mb-4">How Blockchain Works</h2>
                                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                    Understanding the blockchain process helps demystify how transactions are secured and verified without central authority.
                                </p>

                                <div className="space-y-6">
                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                                <span className="text-xl font-bold text-green-400">1</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2">Transaction Initiated</h3>
                                                <p className="text-gray-400">
                                                    A user initiates a transaction by creating a digital record. This transaction is broadcast to all nodes (computers) in the network, waiting to be verified and added to the blockchain.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                                                <span className="text-xl font-bold text-emerald-400">2</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2">Validation Process</h3>
                                                <p className="text-gray-400">
                                                    Network nodes validate the transaction using consensus mechanisms like Proof of Work or Proof of Stake. This ensures the transaction is legitimate and the sender has sufficient funds.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                                                <span className="text-xl font-bold text-teal-400">3</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2">Block Creation</h3>
                                                <p className="text-gray-400">
                                                    Verified transactions are combined with other transactions into a new block. This block contains transaction data, a timestamp, and a cryptographic hash linking it to the previous block.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                                                <span className="text-xl font-bold text-cyan-400">4</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2">Added to Chain</h3>
                                                <p className="text-gray-400">
                                                    The new block is permanently added to the blockchain in chronological order. Once added, the transaction is complete and becomes part of the immutable ledger visible to all network participants.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </section>
            )}

            {/* Quantum Security Content */}
            {activeTab === "quantum" && (
                <section className="py-16 bg-slate-950">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                        {/* What is Quantum Technology */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-8">
                                <h2 className="text-3xl font-bold text-white mb-4">What is Quantum Technology?</h2>
                                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                    Quantum technology harnesses the principles of quantum mechanics to create powerful computing systems and security solutions. In the context of cryptocurrency, quantum technology represents both a future threat and a revolutionary defense mechanism.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                                <Cpu className="h-5 w-5 text-purple-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Quantum Computing Power</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Quantum computers use quantum bits (qubits) that can exist in multiple states simultaneously, enabling them to solve certain problems exponentially faster than classical computers.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                                                <AlertTriangle className="h-5 w-5 text-red-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">The Quantum Threat</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Future quantum computers could potentially break current cryptographic methods used to secure cryptocurrencies and blockchain networks, putting digital assets at risk.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                                                <ShieldCheck className="h-5 w-5 text-green-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Quantum-Resistant Security</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            New cryptographic algorithms are being developed that can withstand attacks from quantum computers, ensuring long-term security for digital assets.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                                <Shield className="h-5 w-5 text-blue-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">QFS Protection</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Our platform implements quantum-resistant encryption today, protecting your assets against both current and future quantum computing threats.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Understanding Post-Quantum Cryptography */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/30 rounded-2xl p-8">
                                <h2 className="text-3xl font-bold text-white mb-4">Post-Quantum Cryptography</h2>
                                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                    Post-quantum cryptography refers to cryptographic algorithms that are secure against attacks by both quantum and classical computers. These advanced methods ensure your digital assets remain protected in the quantum era.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                                                <Key className="h-5 w-5 text-pink-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Quantum Key Distribution</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Uses quantum mechanics principles to create theoretically unbreakable encryption keys for secure communication, detecting any interception attempts automatically.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                                <Lock className="h-5 w-5 text-purple-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Lattice-Based Cryptography</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Mathematical problems based on lattice structures that are computationally infeasible for quantum computers to solve, providing robust long-term security.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                                <Sparkles className="h-5 w-5 text-blue-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Future-Proof Security</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Protects against emerging threats from quantum computing, safeguarding data for decades to come and ensuring compliance with future security standards.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                                                <Database className="h-5 w-5 text-cyan-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Hybrid Approaches</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Combining classical and quantum-resistant algorithms provides layered security, protecting against both current and future computational capabilities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </section>
            )}

            {/* Security Best Practices Content */}
            {activeTab === "security" && (
                <section className="py-16 bg-slate-950">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                        {/* How Can I Stay Secured */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-2xl p-8">
                                <h2 className="text-3xl font-bold text-white mb-4">How Can I Stay Secured?</h2>
                                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                    Security in the Web3 space requires a multi-layered approach. Following best practices and using advanced security tools like QFS can protect your digital assets from various threats.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                                                <ShieldCheck className="h-5 w-5 text-red-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Use Strong Authentication</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Always enable two-factor authentication (2FA) on all accounts. Use hardware security keys when possible for the highest level of protection.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                                                <Key className="h-5 w-5 text-orange-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Secure Your Private Keys</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Never share your private keys or seed phrases. Store them offline in multiple secure locations. Remember: not your keys, not your crypto.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                                <Shield className="h-5 w-5 text-purple-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Choose Quantum-Ready Solutions</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Use platforms like QFS that implement quantum-resistant encryption to future-proof your assets against emerging quantum computing threats.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                                <Sparkles className="h-5 w-5 text-blue-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Stay Informed & Vigilant</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Keep up with security updates, be wary of phishing attempts, and only use reputable platforms. Regularly audit your security practices and update your protection measures.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Understanding Private Keys */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-gradient-to-br from-orange-900/20 to-yellow-900/20 border border-orange-500/30 rounded-2xl p-8">
                                <h2 className="text-3xl font-bold text-white mb-4">Understanding Private Keys & Seed Phrases</h2>
                                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                    Private keys and seed phrases are the foundation of cryptocurrency ownership. Understanding how they work is crucial for maintaining control and security of your digital assets.
                                </p>

                                <div className="space-y-6">
                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                                                <Key className="h-5 w-5 text-orange-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2">What is a Private Key?</h3>
                                                <p className="text-gray-400">
                                                    A private key is a secret alphanumeric code that proves ownership of cryptocurrency. It's used to sign transactions and access your funds on the blockchain. Think of it as the master password to your digital wealth—losing it means losing access forever.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                                                <FileKey className="h-5 w-5 text-yellow-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2">Seed Phrase Basics</h3>
                                                <p className="text-gray-400">
                                                    A seed phrase (also called recovery phrase) is a human-readable sequence of 12-24 words that can regenerate all your private keys. It's essentially a backup of your entire wallet. Anyone with your seed phrase has complete access to your funds.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                                                <Lock className="h-5 w-5 text-red-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white mb-2">Physical Security</h3>
                                                <p className="text-gray-400">
                                                    Write your seed phrase on paper or metal plates—never store it digitally (no photos, no cloud storage, no password managers). Keep multiple copies in separate secure locations like safes or safety deposit boxes. Treat it like gold because that's exactly what it is.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Common Scams */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-gradient-to-br from-red-900/20 to-pink-900/20 border border-red-500/30 rounded-2xl p-8">
                                <h2 className="text-3xl font-bold text-white mb-4">Common Crypto Scams & How to Avoid Them</h2>
                                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                                    The cryptocurrency space, while innovative, attracts various scams and fraudulent schemes. Being aware of common tactics helps protect your investments and personal information.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                                                <AlertTriangle className="h-5 w-5 text-red-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Phishing Attacks</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Scammers send emails or messages impersonating legitimate services. Always verify URLs carefully and never click suspicious links or download unknown attachments. Bookmark official sites and use them directly.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                                                <AlertTriangle className="h-5 w-5 text-orange-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Ponzi Schemes</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Be wary of guaranteed returns or get-rich-quick schemes. If an investment promises unrealistic returns with no risk, it's almost certainly a scam. Do thorough research before investing.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                                                <AlertTriangle className="h-5 w-5 text-yellow-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Rug Pulls & Fake Tokens</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Research new projects thoroughly before investing. Check team credentials, audit reports, and community feedback. Be extremely cautious with unknown tokens promising massive gains.
                                        </p>
                                    </div>

                                    <div className="bg-slate-800/50 rounded-xl p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                                                <AlertTriangle className="h-5 w-5 text-pink-400" />
                                            </div>
                                            <h3 className="text-xl font-bold text-white">Social Engineering</h3>
                                        </div>
                                        <p className="text-gray-400">
                                            Scammers impersonate support staff or influential figures. Never share your seed phrase or private keys with anyone—legitimate support will NEVER ask for this information.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-24 bg-slate-900 border-t border-slate-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                            Ready to Secure Your Future?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Join QFS and experience quantum-secured, blockchain-powered Web3 technology today
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20">
                                Get Started Now
                            </button>
                            <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-600 transition-all">
                                Explore Platform
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
