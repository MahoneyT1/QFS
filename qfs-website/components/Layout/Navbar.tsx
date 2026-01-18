'use client'


import { Shield, Menu, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


export default function Navbar () {
    const [isOpen, setIsOpen] = useState(false)

    const router = useRouter();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-primary backdrop-blur-md border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                            <Shield className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xl font-bold text-white">QFS</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        
                        <Link href="/market" className="text-gray-300 hover:text-white transition-colors">
                            Markets
                        </Link>
                        <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                            About
                        </Link>
                        <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                            Contact
                        </Link>

                        <Link href="/learn" className="text-gray-300 hover:text-white transition-colors">
                            Learn
                        </Link>

                        <Link href="/connect" className="text-gray-300 hover:text-white transition-colors">
                            Connect Wallect
                        </Link>

                       
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4 ">
                        <button 
                            onClick={() => router.push('/login')}
                            className="hover:text-white hover:bg-white/10 text-white h-10 rounded-md px-6">
                            Sign in
                        </button>

                        <button 
                            onClick={() => router.push('/createAccount')}
                            className="bg-blue-600 hover:bg-blue-700 text-white h-10 rounded-md px-6">Get Started
                        </button>

                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-300 hover:text-white"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-slate-950 border-t border-slate-800">
                    <div className="px-4 py-4 space-y-4">
                        
                        <Link href="/market" className="block text-gray-300 hover:text-white transition-colors">
                            Markets
                        </Link>
                        <Link href="/about" className="block text-gray-300 hover:text-white transition-colors">
                            About
                        </Link>
                        <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                            Contact
                        </Link>

                        <Link href="/learn" className="block text-gray-300 hover:text-white transition-colors">
                            Learn
                        </Link>

                        <Link href="/connect" className="block text-gray-300 hover:text-white transition-colors">
                            Connect Wallect
                        </Link>


                        <div className="pt-4 border-t border-slate-800 space-y-2">
                            <Link href='/auth/login'  className="w-full text-gray-300 hover:text-white hover:bg-white/10">
                                Sign in
                            </Link>

                            <Link href='/auth/createAccount' className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                Get Started
                            </Link>
                            
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}