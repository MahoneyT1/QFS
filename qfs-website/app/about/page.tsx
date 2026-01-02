'use client'

import { motion } from "motion/react";
import { Target, Users, Rocket, Sparkles, Award, Heart, Lightbulb, Shield } from "lucide-react";

const timeline = [
    {
        year: "2020",
        title: "Foundation",
        description: "QFS was founded with a vision to revolutionize digital finance through quantum technology."
    },
    {
        year: "2021",
        title: "Research & Development",
        description: "Assembled a world-class team of quantum physicists and blockchain engineers."
    },
    {
        year: "2022",
        title: "Prototype Launch",
        description: "Successfully deployed first quantum-secured transaction network in controlled environment."
    },
    {
        year: "2023",
        title: "Public Beta",
        description: "Opened platform to early adopters, processing over 1M transactions in first quarter."
    },
    {
        year: "2024",
        title: "Global Expansion",
        description: "Reached 10M+ users worldwide with 99.99% uptime and zero security breaches."
    },
    {
        year: "2025",
        title: "Future Vision",
        description: "Expanding quantum network infrastructure across 50+ countries."
    }
];

const team = [
    {
        name: "Dr. Sarah Chen",
        role: "Chief Executive Officer",
        bio: "Former quantum computing researcher at MIT with 15+ years in fintech innovation.",
        image: "👩‍💼"
    },
    {
        name: "Marcus Rodriguez",
        role: "Chief Technology Officer",
        bio: "Pioneering blockchain architect with expertise in quantum cryptography.",
        image: "👨‍💻"
    },
    {
        name: "Dr. Amara Okafor",
        role: "Head of Quantum Research",
        bio: "PhD in Quantum Physics, published author with 50+ research papers.",
        image: "👩‍🔬"
    },
    {
        name: "James Park",
        role: "Chief Security Officer",
        bio: "Cybersecurity expert with background in government intelligence agencies.",
        image: "👨‍💼"
    }
];

const values = [
    {
        icon: Shield,
        title: "Security First",
        description: "We prioritize the security of your assets above all else with quantum-grade encryption.",
        color: "from-blue-500 to-blue-600"
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Constantly pushing the boundaries of what's possible in financial technology.",
        color: "from-yellow-500 to-orange-600"
    },
    {
        icon: Heart,
        title: "User-Centric",
        description: "Every decision we make is guided by what's best for our community.",
        color: "from-pink-500 to-red-600"
    },
    {
        icon: Award,
        title: "Excellence",
        description: "Committed to delivering world-class service and cutting-edge technology.",
        color: "from-purple-500 to-purple-600"
    }
];

const stats = [
    { label: "Active Users", value: "10M+" },
    { label: "Countries", value: "50+" },
    { label: "Transactions/Day", value: "100M+" },
    { label: "Security Rating", value: "AAA+" }
];

export default function About() {
    return (
        <div className="bg-slate-950">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                            <span className="text-blue-400 text-sm">About QFS</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
                            Building the{" "}
                            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                Financial Future
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            We're on a mission to democratize access to secure, fast, and transparent financial services through quantum technology.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-linear-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/20 rounded-2xl p-8"
                        >
                            <Target className="h-12 w-12 text-blue-400 mb-4" />
                            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                To create a quantum-powered financial ecosystem that enables instant, secure, and transparent transactions for everyone, everywhere. We believe financial freedom should be accessible to all.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-linear-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-2xl p-8"
                        >
                            <Rocket className="h-12 w-12 text-purple-400 mb-4" />
                            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                To become the world's leading quantum financial platform, setting new standards for security, speed, and innovation in the digital economy. The future of finance is quantum.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors text-center"
                            >
                                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${value.color} mb-4`}>
                                    <value.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-gray-400">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            From inception to global quantum financial leader
                        </p>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500 hidden lg:block" />

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                        }`}
                                >
                                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                                        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors">
                                            <div className="text-blue-400 font-bold text-2xl mb-2">{item.year}</div>
                                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                            <p className="text-gray-400">{item.description}</p>
                                        </div>
                                    </div>

                                    {/* Center dot */}
                                    <div className="relative flex-shrink-0 hidden lg:block">
                                        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 ring-4 ring-slate-900" />
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-400/20 animate-ping" />
                                    </div>

                                    <div className="flex-1 hidden lg:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
                            <Users className="h-4 w-4 text-purple-400" />
                            <span className="text-purple-400 text-sm">Leadership Team</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Brilliant minds working together to revolutionize finance
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all hover:shadow-lg hover:shadow-blue-500/10 text-center"
                            >
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-5xl mx-auto mb-4">
                                    {member.image}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                <div className="text-blue-400 text-sm mb-3">{member.role}</div>
                                <p className="text-gray-400 text-sm">{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">By The Numbers</h2>
                        <p className="text-xl text-gray-400">
                            Our impact on the global financial landscape
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Sparkles className="h-16 w-16 text-blue-400 mx-auto mb-6" />
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Join Us on This Journey
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Be part of the quantum financial revolution. Together, we're building the future.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                                Join Our Team
                            </button>
                            <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors border border-white/20">
                                Contact Us
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
