import { cn } from '../lib/utils';
import {
    Terminal,
    Gauge,
    DollarSign,
    Cloud,
    Users,
    Headphones,
    Shield,
    Sparkles,
} from 'lucide-react';

const SystemFeaturesBento = () => {
    const features = [
        {
            title: "Enterprise-Grade Security",
            description:
                "Bank-level encryption, SOC 2 compliant, and GDPR ready for your peace of mind.",
            icon: <Shield className="w-6 h-6" />,
        },
        {
            title: "Lightning Fast Response",
            description:
                "Sub-500ms response times ensure your customers never wait.",
            icon: <Gauge className="w-6 h-6" />,
        },
        {
            title: "Transparent Pricing",
            description:
                "No hidden fees, no surprises. Pay only for what you use with our flexible plans.",
            icon: <DollarSign className="w-6 h-6" />,
        },
        {
            title: "99.9% Uptime Guarantee",
            description: "Always-on reliability with redundant infrastructure across multiple regions.",
            icon: <Cloud className="w-6 h-6" />,
        },
        {
            title: "Multi-Channel Support",
            description: "Phone, SMS, email, and chat—all managed seamlessly from one platform.",
            icon: <Terminal className="w-6 h-6" />,
        },
        {
            title: "24/7 Expert Support",
            description:
                "Our team is always available to help you succeed. Real humans, real help.",
            icon: <Headphones className="w-6 h-6" />,
        },
        {
            title: "Unlimited Scalability",
            description:
                "Handle 10 calls or 10,000 calls per day. Our AI scales with your business.",
            icon: <Users className="w-6 h-6" />,
        },
        {
            title: "Continuous Learning",
            description: "AI agents improve with every conversation, getting smarter over time.",
            icon: <Sparkles className="w-6 h-6" />,
        },
    ];

    return (
        <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                        Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0741ad] to-[#236DF6]">Scale</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Enterprise features that grow with your business.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
                    {features.map((feature, index) => (
                        <Feature key={feature.title} {...feature} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r py-10 relative group/feature border-gray-200",
                (index === 0 || index === 4) && "lg:border-l border-gray-200",
                index < 4 && "lg:border-b border-gray-200"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-50 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-50 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-[#0741ad]">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-300 group-hover/feature:bg-[#0741ad] transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-900">
                    {title}
                </span>
            </div>
            <p className="text-sm text-gray-600 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};

export default SystemFeaturesBento;
