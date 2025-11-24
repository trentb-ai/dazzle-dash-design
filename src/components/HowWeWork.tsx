import { Users, MessageSquare, Cog, Rocket } from 'lucide-react';
import { Button } from './ui/button';

const HowWeWork = () => {
  const steps = [
    {
      number: '01',
      title: 'Discover & Design',
      description: 'We learn about your business, customer journey, and pain points to design the perfect AI solution.',
      icon: Users
    },
    {
      number: '02',
      title: 'Build & Customize',
      description: 'Our team builds your custom AI agents, scripts, automations, and integrations—tailored to your brand.',
      icon: Cog
    },
    {
      number: '03',
      title: 'Test & Refine',
      description: 'We rigorously test every conversation flow, iron out edge cases, and ensure your AI sounds perfectly human.',
      icon: MessageSquare
    },
    {
      number: '04',
      title: 'Launch & Optimize',
      description: 'Go live in as little as 7 days. We monitor performance, make adjustments, and continuously optimize results.',
      icon: Rocket
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            How We <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Transform</span> Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            White-glove onboarding from day one. We build, you profit.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-card border-2 border-border hover:border-primary rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Step Number */}
              <div className="text-6xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-6 group-hover:scale-110 transition-transform">
                {step.number}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <step.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="font-semibold text-lg px-12 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Schedule Live Demo
          </Button>
          <p className="text-muted-foreground text-sm mt-4">
            See our AI agents in action • 15-minute call
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
