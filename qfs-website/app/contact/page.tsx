'use client'

import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare, Headphones, Building } from "lucide-react";
import { useState } from "react";

const contactInfo = [
    {
        icon: Mail,
        title: "Email Us",
        content: "support@qfs.com",
        description: "Get in touch via email",
        color: "from-blue-500 to-blue-600"
    },
    {
        icon: Phone,
        title: "Call Us",
        content: "+1 (555) 123-4567",
        description: "Mon-Fri 9am-6pm EST",
        color: "from-cyan-500 to-cyan-600"
    },
    {
        icon: MapPin,
        title: "Visit Us",
        content: "123 Quantum Street",
        description: "San Francisco, CA 94102",
        color: "from-purple-500 to-purple-600"
    },
    {
        icon: Headphones,
        title: "Live Support",
        content: "24/7 Available",
        description: "Chat with our team",
        color: "from-pink-500 to-pink-600"
    }
];

const departments = [
    {
        name: "Sales",
        email: "sales@qfs.com",
        description: "Interested in our platform? Let's talk business."
    },
    {
        name: "Technical Support",
        email: "support@qfs.com",
        description: "Having technical issues? We're here to help."
    },
    {
        name: "Partnerships",
        email: "partners@qfs.com",
        description: "Looking to collaborate? Reach out to our team."
    },
    {
        name: "Media & Press",
        email: "press@qfs.com",
        description: "Press inquiries and media relations."
    }
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({ name: "", email: "", subject: "", message: "" });
            setIsSubmitted(false);
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="bg-slate-950">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                            <span className="text-blue-400 text-sm">Get In Touch</span>
                        </div>

                        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
                            Contact{" "}
                            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                Our Team
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all hover:shadow-lg hover:shadow-blue-500/10 text-center"
                            >
                                <div className={`inline-flex p-4 rounded-xl bg-linear-to-br ${info.color} mb-4`}>
                                    <info.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                                <p className="text-blue-400 mb-1">{info.content}</p>
                                <p className="text-sm text-gray-400">{info.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <MessageSquare className="h-6 w-6 text-blue-400" />
                                    <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
                                </div>

                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-12 text-center"
                                    >
                                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Send className="h-8 w-8 text-green-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                        <p className="text-gray-400">We'll get back to you shortly.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm text-gray-300 mb-2">
                                                Full Name
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
                                                Email Address
                                            </label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="subject" className="block text-sm text-gray-300 mb-2">
                                                Subject
                                            </label>
                                            <input
                                                id="subject"
                                                name="subject"
                                                type="text"
                                                required
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500"
                                                placeholder="How can we help?"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm text-gray-300 mb-2">
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={6}
                                                className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-500 resize-none"
                                                placeholder="Tell us more about your inquiry..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white group"
                                        >
                                            {isSubmitting ? (
                                                "Sending..."
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>

                        {/* Departments & Additional Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            {/* Departments */}
                            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <Building className="h-6 w-6 text-purple-400" />
                                    <h2 className="text-2xl font-bold text-white">Departments</h2>
                                </div>

                                <div className="space-y-4">
                                    {departments.map((dept, index) => (
                                        <motion.div
                                            key={dept.name}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            className="border-b border-slate-700 last:border-0 pb-4 last:pb-0"
                                        >
                                            <h3 className="font-bold text-white mb-1">{dept.name}</h3>
                                            <p className="text-sm text-gray-400 mb-2">{dept.description}</p>
                                            <a
                                                href={`mailto:${dept.email}`}
                                                className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                                            >
                                                {dept.email}
                                            </a>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Office Hours */}
                            <div className="bg-linear-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/20 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-white mb-4">Office Hours</h3>
                                <div className="space-y-2 text-gray-300">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday</span>
                                        <span className="text-blue-400">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday</span>
                                        <span className="text-blue-400">10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span className="text-gray-500">Closed</span>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-slate-700">
                                    <p className="text-sm text-gray-400">
                                        All times are in Eastern Standard Time (EST)
                                    </p>
                                </div>
                            </div>

                            {/* Emergency Support */}
                            <div className="bg-linear-to-br from-red-900/20 to-orange-900/20 border border-red-500/20 rounded-2xl p-6">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                                        <Phone className="h-5 w-5 text-red-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-1">Emergency Support</h3>
                                        <p className="text-sm text-gray-400 mb-2">
                                            For urgent security issues, contact our 24/7 emergency line
                                        </p>
                                        <p className="text-red-400 font-bold">+1 (555) 911-HELP</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-gray-400">
                            Quick answers to common questions
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {[
                            {
                                question: "What is the Quantum Financial System?",
                                answer: "QFS is a next-generation financial platform powered by quantum technology, offering secure, instant, and transparent transactions worldwide."
                            },
                            {
                                question: "How long does it take to get a response?",
                                answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please use our emergency support line."
                            },
                            {
                                question: "Is my data secure?",
                                answer: "Absolutely. We use military-grade quantum encryption to protect all your data and transactions. Security is our top priority."
                            },
                            {
                                question: "Do you offer enterprise solutions?",
                                answer: "Yes! Contact our sales team at sales@qfs.com to discuss custom enterprise solutions tailored to your business needs."
                            }
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors"
                            >
                                <h3 className="font-bold text-white mb-2">{faq.question}</h3>
                                <p className="text-gray-400">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section (Placeholder) */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden">
                            <div className="h-96 bg-linear-to-br from-slate-700 to-slate-800 flex items-center justify-center relative">
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_20px]" />
                                <div className="relative z-10 text-center">
                                    <MapPin className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-2">Visit Our Headquarters</h3>
                                    <p className="text-gray-400 mb-4">123 Quantum Street, San Francisco, CA 94102</p>
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white">
                                        Get Directions
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
