'use client'


import { motion } from "motion/react";
import { Shield, Mail, Lock, User, Phone, Eye, EyeOff, Check, AlertCircle } from "lucide-react";
import { useState } from "react";


export default function CreateAccount() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [accountCreated, setAccountCreated] = useState(false);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        // Full Name validation
        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        } else if (formData.fullName.trim().length < 2) {
            newErrors.fullName = "Full name must be at least 2 characters";
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        // Phone validation
        const phoneRegex = /^\+?[\d\s\-()]{10,}$/;
        if (!formData.phone) {
            newErrors.phone = "Phone number is required";
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = "Please enter a valid phone number";
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
            newErrors.password = "Password must contain uppercase, lowercase, and number";
        }

        // Confirm Password validation
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setAccountCreated(true);
        }, 2000);
    };

    const handleGoogleSignup = () => {
        // Simulate Google OAuth
        console.log("Google signup clicked");
        alert("Google Sign-Up would redirect to Google OAuth here");
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[field];
                return newErrors;
            });
        }
    };

    const getPasswordStrength = () => {
        const password = formData.password;
        if (!password) return { strength: 0, label: "", color: "" };

        let strength = 0;
        if (password.length >= 8) strength++;
        if (password.length >= 12) strength++;
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
        if (/\d/.test(password)) strength++;
        if (/[^a-zA-Z0-9]/.test(password)) strength++;

        if (strength <= 2) return { strength, label: "Weak", color: "bg-red-500" };
        if (strength <= 3) return { strength, label: "Medium", color: "bg-yellow-500" };
        return { strength, label: "Strong", color: "bg-green-500" };
    };

    const passwordStrength = getPasswordStrength();

    if (accountCreated) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-md w-full text-center"
                >
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                        <Check className="h-10 w-10 text-green-400" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Account Created Successfully!</h2>
                    <p className="text-gray-300 mb-8">
                        Welcome to QFS! Your account has been created and you can now access all quantum-secured features.
                    </p>
                    <div className="space-y-4">
                        <button className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3">
                            Go to Dashboard
                        </button>
                        <button
                            
                            className="w-full text-gray-300 hover:text-white hover:bg-white/10"
                            onClick={() => setAccountCreated(false)}
                        >
                            Create Another Account
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950">
            {/* Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-[linear-linear(to_right,#4f4f4f2e_1px,transparent_1px),linear-linear(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
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

            <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-md w-full"
                >
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                            <Shield className="h-5 w-5 text-blue-400" />
                            <span className="text-blue-400 text-sm">Quantum Secured</span>
                        </div>
                        <h1 className="text-4xl font-bold text-white mb-2">Create Account</h1>
                        <p className="text-gray-300">Join QFS and secure your financial future</p>
                    </div>

                    {/* Main Card */}
                    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                        {/* Google Sign Up */}
                        <button
                            onClick={handleGoogleSignup}
                            className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 font-medium rounded-xl transition-all mb-6"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            Continue with Google
                        </button>

                        {/* Divider */}
                        <div className="relative mb-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-700"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-slate-900/50 text-gray-400">Or continue with email</span>
                            </div>
                        </div>

                        {/* Sign Up Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="fullName"
                                        type="text"
                                        value={formData.fullName}
                                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                                        className={`w-full pl-10 pr-4 py-3 bg-slate-800 border ${errors.fullName ? "border-red-500" : "border-slate-600"
                                            } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors`}
                                        placeholder="John Doe"
                                    />
                                </div>
                                {errors.fullName && (
                                    <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                                        <AlertCircle className="h-4 w-4" />
                                        {errors.fullName}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange("email", e.target.value)}
                                        className={`w-full pl-10 pr-4 py-3 bg-slate-800 border ${errors.email ? "border-red-500" : "border-slate-600"
                                            } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors`}
                                        placeholder="john@example.com"
                                    />
                                </div>
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                                        <AlertCircle className="h-4 w-4" />
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Phone className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange("phone", e.target.value)}
                                        className={`w-full pl-10 pr-4 py-3 bg-slate-800 border ${errors.phone ? "border-red-500" : "border-slate-600"
                                            } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors`}
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>
                                {errors.phone && (
                                    <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                                        <AlertCircle className="h-4 w-4" />
                                        {errors.phone}
                                    </p>
                                )}
                            </div>

                            {/* Password */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        value={formData.password}
                                        onChange={(e) => handleInputChange("password", e.target.value)}
                                        className={`w-full pl-10 pr-12 py-3 bg-slate-800 border ${errors.password ? "border-red-500" : "border-slate-600"
                                            } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors`}
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                                        )}
                                    </button>
                                </div>
                                {formData.password && (
                                    <div className="mt-2">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-xs text-gray-400">Password strength:</span>
                                            <span className={`text-xs font-medium ${passwordStrength.label === "Weak" ? "text-red-400" :
                                                    passwordStrength.label === "Medium" ? "text-yellow-400" :
                                                        "text-green-400"
                                                }`}>
                                                {passwordStrength.label}
                                            </span>
                                        </div>
                                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${passwordStrength.color} transition-all`}
                                                style={{ width: `${(passwordStrength.strength / 5) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                )}
                                {errors.password && (
                                    <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                                        <AlertCircle className="h-4 w-4" />
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        id="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        value={formData.confirmPassword}
                                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                                        className={`w-full pl-10 pr-12 py-3 bg-slate-800 border ${errors.confirmPassword ? "border-red-500" : "border-slate-600"
                                            } rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors`}
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                                        )}
                                    </button>
                                </div>
                                {errors.confirmPassword && (
                                    <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
                                        <AlertCircle className="h-4 w-4" />
                                        {errors.confirmPassword}
                                    </p>
                                )}
                            </div>

                            {/* Terms and Conditions */}
                            <div className="flex items-start gap-2">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    className="mt-1 w-4 h-4 rounded border-slate-600 bg-slate-800 text-blue-600 focus:ring-blue-500 focus:ring-offset-slate-900"
                                    required
                                />
                                <label htmlFor="terms" className="text-sm text-gray-400">
                                    I agree to the{" "}
                                    <a href="#" className="text-blue-400 hover:text-blue-300">
                                        Terms of Service
                                    </a>{" "}
                                    and{" "}
                                    <a href="#" className="text-blue-400 hover:text-blue-300">
                                        Privacy Policy
                                    </a>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        Creating Account...
                                    </div>
                                ) : (
                                    "Create Account"
                                )}
                            </button>
                        </form>

                        {/* Sign In Link */}
                        <div className="mt-6 text-center">
                            <p className="text-gray-400">
                                Already have an account?{" "}
                                <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">
                                    Sign In
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Security Notice */}
                    <div className="mt-6 p-4 bg-slate-800/50 border border-slate-700 rounded-xl">
                        <div className="flex items-start gap-3">
                            <Shield className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                            <div className="text-sm text-gray-400">
                                <p className="font-medium text-white mb-1">Quantum-Secured Registration</p>
                                <p>
                                    Your data is protected with quantum-resistant encryption. We never share your personal information with third parties.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
