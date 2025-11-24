import { Card, CardContent, CardHeader } from './ui/card';
import { Phone, MessageCircle, Zap, Target, TrendingUp } from 'lucide-react';

export default function AgentBenefitsBento() {
    return (
        <section className="bg-gradient-to-b from-white to-gray-50 py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold text-primary-dark mb-6">
                        What Your AI Agents Can Do
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Capabilities that used to require a full team—now handled by three AI agents.
                    </p>
                </div>

                {/* Bento Grid - Clean, Spacious Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Never Miss a Lead - Large Feature */}
                    <Card className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-primary/5 via-white to-primary-light/5 border-primary/10 hover:border-primary/30 transition-all duration-300 overflow-hidden group">
                        <CardHeader className="pb-8">
                            <div className="inline-flex items-center gap-3 mb-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <Phone className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary-dark">Never Miss a Lead</h3>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                                Answers every call, text, and DM instantly—even at 3 AM on Christmas. Your AI team never sleeps.
                            </p>
                        </CardHeader>

                        <CardContent className="pt-0">
                            <div className="bg-white/80 backdrop-blur rounded-2xl p-12 border border-primary/10">
                                <div className="relative flex items-center justify-center">
                                    {/* Pulsing phone animation */}
                                    <div className="absolute w-32 h-32 bg-primary/10 rounded-full animate-ping"></div>
                                    <div className="absolute w-40 h-40 bg-primary/5 rounded-full animate-pulse"></div>
                                    <div className="relative w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center shadow-2xl">
                                        <Phone className="w-12 h-12 text-white animate-pulse" />
                                    </div>
                                </div>
                                <div className="mt-8 flex items-center justify-center gap-8">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-primary">24/7</div>
                                        <div className="text-sm text-gray-600">Always On</div>
                                    </div>
                                    <div className="w-px h-12 bg-gray-300"></div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-primary">&lt;1s</div>
                                        <div className="text-sm text-gray-600">Response</div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Multi-Channel */}
                    <Card className="bg-white border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
                        <CardHeader>
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <MessageCircle className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-primary-dark mb-3">Multi-Channel Mastery</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Phone, SMS, Instagram, Facebook, WhatsApp—all in one system.
                            </p>
                        </CardHeader>
                    </Card>

                    {/* Instant Qualification */}
                    <Card className="bg-white border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
                        <CardHeader>
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-primary-dark mb-3">Instant Lead Qualification</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Routes hot prospects to your team in seconds.
                            </p>
                        </CardHeader>
                    </Card>

                    {/* Perfect Memory */}
                    <Card className="md:col-span-2 bg-gradient-to-br from-gray-50 to-white border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
                        <CardContent className="p-8">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-primary-dark mb-2">Perfect Memory & Recall</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Remembers every customer interaction, preference, and conversation history—no notes needed.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Always Learning */}
                    <Card className="bg-white border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
                        <CardHeader>
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <TrendingUp className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-primary-dark mb-3">Always Learning</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Gets smarter with every conversation using adaptive AI.
                            </p>
                        </CardHeader>
                    </Card>

                </div>
            </div>
        </section>
    );
}
