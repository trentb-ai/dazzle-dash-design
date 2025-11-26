import { useState } from 'react';
import { Target, MessageSquare, CheckCircle, FileText, Calendar, Globe } from 'lucide-react';
import { Button } from './ui/button';
import maddieAgent from '../assets/bella-agent-tight.png';
import alexAgent from '../assets/alex-agent.png';
import sarahAgent from '../assets/sarah-agent.png';
import chrisAgent from '../assets/chris-agent-real.png';
import bellaAgent from '../assets/bella-agent-tight-new.png';
import jamesAgent from '../assets/james-agent.png';

const TabbedAgents = () => {
    const [activeTab, setActiveTab] = useState(0);

    const agents = [
        {
            name: "Maddie",
            tagline: "Voice AI Receptionist",
            subtitle: "Your Front Line, Firing on All Cylinders",
            image: maddieAgent,
            features: [
                "Answers every call instantly, 24/7",
                "Qualifies leads with intelligent questions",
                "Books appointments directly into your calendar",
                "Escalates hot prospects to your sales team in real-time",
                "Handles FAQs without breaking a sweat"
            ],
            valueProp: "Maddie ensures you never miss a call again. She sounds human, knows your business inside-out, and makes every caller feel like a VIP.",
            keyFeature: {
                icon: Target,
                title: "Smart Routing",
                description: "Maddie knows when to handle it herself and when to loop in a human—so your team only takes high-value calls."
            },
            cta: "See Maddie in Action"
        },
        {
            name: "Alex",
            tagline: "Ad Leads Converter",
            subtitle: "Your Ad Spend's Best Friend",
            image: alexAgent,
            features: [
                "Responds to ad leads within seconds via call, text, or DM",
                "Qualifies prospects with personalized questions",
                "Nurtures cold leads until they're ready to buy",
                "Syncs all data to your CRM automatically",
                "Follows up relentlessly (without being annoying)"
            ],
            valueProp: "Alex turns your paid traffic into paying customers. While other leads go cold, Alex keeps them warm until they're ready to close.",
            keyFeature: {
                icon: Target,
                title: "CRM Integration",
                description: "Every conversation, qualification score, and next step flows directly into Salesforce, HubSpot, or GoHighLevel."
            },
            cta: "Put Alex to Work"
        },
        {
            name: "Sarah",
            tagline: "Outbound SMS & DMs Agent",
            subtitle: "Your Proactive Revenue Generator",
            image: sarahAgent,
            features: [
                "Reaches out to leads via SMS, Instagram DM, Facebook Messenger",
                "Re-engages cold leads with personalized messages",
                "Sends appointment reminders and follow-ups",
                "Handles objections and books meetings",
                "Keeps conversations on-brand and compliant"
            ],
            valueProp: "Sarah doesn't wait for customers to come to you—she goes to them. Proactive outreach that feels personal, not pushy.",
            keyFeature: {
                icon: MessageSquare,
                title: "Multi-Channel Mastery",
                description: "Sarah manages SMS, Instagram, Facebook, and WhatsApp from one unified system—no channel left behind."
            },
            cta: "Activate Sarah"
        },
        {
            name: "Chris",
            tagline: "Website Concierge",
            subtitle: "Your 24/7 Digital Host",
            image: chrisAgent,
            features: [
                "Greets every visitor personally upon arrival",
                "Instantly identifies visitor intent and problems",
                "Guides users directly to solutions or bookings",
                "Bypasses traditional navigation friction",
                "Captures lead details naturally in conversation"
            ],
            valueProp: "Forget static pages and guessing games. Chris knows your business inside out, meeting visitors to solve their problems instantly and guide them to the exact solution.",
            keyFeature: {
                icon: Globe,
                title: "Instant Insight",
                description: "Chris bypasses the 'browse and bounce' cycle by getting straight to the point—helping visitors find what they need immediately."
            },
            cta: "Deploy Chris"
        },
        {
            name: "Bella",
            tagline: "Onboarding Agent",
            subtitle: "Your Client Success Champion",
            image: bellaAgent,
            features: [
                "Chases outstanding documents automatically",
                "Sends WhatsApp reminders for easy uploads",
                "Files documents directly into your systems",
                "Alerts your team when onboarding is complete",
                "Answers new client FAQs instantly"
            ],
            valueProp: "Bella ensures no client gets stuck in paperwork limbo. She handles the chasing and filing so your team can focus on strategy and relationships.",
            keyFeature: {
                icon: FileText,
                title: "Auto-Filing",
                description: "Bella doesn't just collect files; she organizes and uploads them to the right folders, keeping your records spotless."
            },
            cta: "Hire Bella"
        },
        {
            name: "James",
            tagline: "Events Concierge",
            subtitle: "Your Networking Powerhouse",
            image: jamesAgent,
            features: [
                "Contacts attendees in advance to curate intros",
                "Identifies potential collaborators and partners",
                "Schedules meetings for live and online events",
                "Connects attendees with hosts and speakers",
                "Maximizes event ROI through strategic networking"
            ],
            valueProp: "James turns standard events into high-value networking opportunities, ensuring every attendee meets the right people to grow their business.",
            keyFeature: {
                icon: Calendar,
                title: "Strategic Matchmaking",
                description: "James analyzes attendee profiles to suggest and facilitate the most valuable introductions before the event even starts."
            },
            cta: "Bring James Onboard"
        }
    ];

    const currentAgent = agents[activeTab];

    return (
        <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">
                        Meet Your AI Revenue Engine
                    </h2>
                    <p className="text-lg md:text-xl text-accent max-w-3xl mx-auto font-semibold">
                        Click an Agent name below to find out more
                    </p>
                </div>

                {/* Tabs - 2 Rows */}
                <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-5xl mx-auto">
                    {agents.map((agent, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`px-6 py-3 rounded-xl font-semibold text-base md:text-lg transition-all duration-300 min-w-[200px] ${activeTab === index
                                ? 'bg-gradient-to-r from-primary to-primary-light text-white shadow-xl shadow-primary/30 scale-105'
                                : 'bg-white text-accent border-2 border-accent hover:border-primary hover:shadow-lg'
                                }`}
                        >
                            {agent.name} - {agent.tagline}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
                    <div className="grid md:grid-cols-2 gap-12 items-start">

                        {/* Left: Content */}
                        <div className="space-y-8">
                            {/* Agent Header with Small Circle Avatar */}
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                                        <img
                                            src={currentAgent.image}
                                            alt={currentAgent.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-primary-dark">{currentAgent.name}</h3>
                                    <p className="text-primary font-medium">{currentAgent.tagline}</p>
                                </div>
                            </div>

                            {/* Subtitle Badge */}
                            <div className="inline-block">
                                <div className="px-6 py-3 bg-gradient-to-r from-primary to-primary-light text-white rounded-full shadow-lg font-semibold">
                                    {currentAgent.subtitle}
                                </div>
                            </div>

                            {/* Features List */}
                            <div className="space-y-4">
                                {currentAgent.features.map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 group">
                                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <Button
                                size="lg"
                                className="w-full md:w-auto group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 rounded-full"
                            >
                                <span className="relative z-10">{currentAgent.cta}</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                            </Button>
                        </div>

                        {/* Right: Value Prop & Key Feature */}
                        <div className="space-y-6">
                            {/* Value Prop */}
                            <div className="bg-gradient-to-br from-primary/5 to-primary-light/5 border-l-4 border-primary rounded-2xl p-6">
                                <p className="text-gray-700 leading-relaxed italic text-lg">
                                    "{currentAgent.valueProp}"
                                </p>
                            </div>

                            {/* Key Feature Callout */}
                            <div className="bg-white border-2 border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all hover:shadow-lg">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <currentAgent.keyFeature.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary-dark mb-2 text-lg">
                                            {currentAgent.keyFeature.title}
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            {currentAgent.keyFeature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabbedAgents;
