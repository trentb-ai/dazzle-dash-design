import { Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import maddieAgent from '../assets/bella-agent.png';

const DemoBox = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        phone: '',
        name: '',
        email: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const demoPhoneNumber = "+1 (555) 123-4567"; // Replace with your actual demo number

    return (
        <div className="py-24 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-6">
                        Try Our Live Demo
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Experience how Maddie handles real customer conversations—naturally, professionally, and perfectly on-brand.
                    </p>
                </div>

                {/* Demo Box */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                    <div className="grid md:grid-cols-2">

                        {/* Left: Content (changes based on step) */}
                        <div className="bg-primary-dark p-12">
                            <div className="max-w-md">
                                {!submitted ? (
                                    /* STEP 1: Form */
                                    <>
                                        <div className="mb-6">
                                            <span className="inline-block px-4 py-2 bg-primary-light/20 text-primary-light rounded-full text-sm font-semibold mb-4">
                                                Step 1 of 2
                                            </span>
                                            <h3 className="text-2xl font-bold text-white mb-3">
                                                Get Started with Your Live Demo
                                            </h3>
                                            <p className="text-gray-300">
                                                Enter your details to receive your personalized demo phone number.
                                            </p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            {/* Phone Number */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    placeholder="+1 555-123-4567"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all"
                                                    required
                                                />
                                            </div>

                                            {/* Name */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="John"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all"
                                                    required
                                                />
                                            </div>

                                            {/* Email */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder="john@company.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent transition-all"
                                                    required
                                                />
                                            </div>

                                            {/* Submit Button */}
                                            <Button
                                                type="submit"
                                                size="lg"
                                                className="w-full bg-white text-primary-dark hover:bg-gray-100 font-semibold text-lg py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                            >
                                                Continue to Demo Number
                                                <ArrowRight className="ml-2 w-5 h-5" />
                                            </Button>
                                        </form>
                                    </>
                                ) : (
                                    /* STEP 2: Phone Number & Instructions */
                                    <>
                                        <div className="mb-6">
                                            <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold mb-4">
                                                Step 2 of 2
                                            </span>
                                            <h3 className="text-2xl font-bold text-white mb-3">
                                                Call Maddie Now
                                            </h3>
                                            <p className="text-gray-300">
                                                Your personalized demo is ready! Call the number below to experience Maddie in action.
                                            </p>
                                        </div>

                                        {/* Phone Number Display */}
                                        <div className="bg-white/10 border-2 border-primary-light/30 rounded-2xl p-6 mb-8">
                                            <div className="flex items-center justify-center gap-3 mb-2">
                                                <Phone className="w-6 h-6 text-primary-light animate-pulse" />
                                                <p className="text-sm text-gray-300 font-medium">Demo Phone Number</p>
                                            </div>
                                            <a
                                                href={`tel:${demoPhoneNumber} `}
                                                className="block text-center text-3xl font-bold text-white hover:text-primary-light transition-colors"
                                            >
                                                {demoPhoneNumber}
                                            </a>
                                            <p className="text-center text-gray-400 text-xs mt-2">
                                                Click to call on mobile
                                            </p>
                                        </div>

                                        {/* Instructions */}
                                        <div className="space-y-4">
                                            <h4 className="text-white font-semibold text-lg mb-3">What to Expect:</h4>

                                            <div className="flex gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                                <p className="text-gray-300 text-sm">
                                                    <span className="font-semibold text-white">Maddie will answer</span> and greet you professionally
                                                </p>
                                            </div>

                                            <div className="flex gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                                <p className="text-gray-300 text-sm">
                                                    She'll <span className="font-semibold text-white">ask about your business</span> to understand your needs
                                                </p>
                                            </div>

                                            <div className="flex gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                                <p className="text-gray-300 text-sm">
                                                    Then <span className="font-semibold text-white">role-play a receptionist demo</span> customized for your specific business
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-white/10">
                                            <p className="text-gray-400 text-sm text-center">
                                                Demo available 24/7 • Average call time: 3-5 minutes
                                            </p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Right: Visual */}
                        <div className="bg-gradient-to-br from-primary/5 to-primary-light/5 p-12 flex items-center justify-center">
                            <div className="text-center">
                                {/* Animated Maddie Image */}
                                <div className="relative mb-8 inline-block">
                                    <div className="absolute inset-0 w-32 h-32 bg-primary/20 rounded-full animate-ping"></div>
                                    <div className="absolute inset-0 w-32 h-32 bg-primary/10 rounded-full animate-pulse"></div>
                                    <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                                        <img src={maddieAgent} alt="Maddie" className="w-full h-full object-cover" />
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="space-y-4">
                                    <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-primary/10">
                                        <div className="text-3xl font-bold text-primary mb-2">
                                            3-5 min
                                        </div>
                                        <div className="text-gray-600 text-sm">
                                            Average demo call time
                                        </div>
                                    </div>

                                    <div className="bg-white/80 backdrop-blur rounded-2xl p-6 border border-primary/10">
                                        <div className="text-3xl font-bold text-primary mb-2">
                                            100% Human-Like
                                        </div>
                                        <div className="text-gray-600 text-sm">
                                            Natural conversation quality
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Badge */}
                <div className="text-center mt-8">
                    <p className="text-gray-500 text-sm">
                        Join 500+ businesses experiencing Maddie firsthand
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DemoBox;
