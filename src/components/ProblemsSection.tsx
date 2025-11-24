import { Phone, TrendingDown, Clock, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';

const ProblemsSection = () => {
  const problems = [
    {
      icon: Phone,
      title: 'Missed Leads = Lost Revenue',
      description: "Every unanswered call is a customer going to your competitor. You can't afford to miss a single opportunity."
    },
    {
      icon: Clock,
      title: 'Slow Response Times Kill Conversions',
      description: '78% of customers go with the business that responds first. Speed wins, and manual processes lose.'
    },
    {
      icon: TrendingDown,
      title: 'Wasting Money on Dead Leads',
      description: "You're paying for clicks that go nowhere. Without instant lead qualification, your ad spend bleeds."
    },
    {
      icon: AlertCircle,
      title: 'Your Team is Drowning in Repetitive Tasks',
      description: 'Answering the same questions, booking appointments manually, following up on leads—it never ends.'
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-muted to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Your Business is <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Bleeding Opportunities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every day without AI automation costs you money, time, and customers.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group bg-card border-2 border-border hover:border-primary rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <problem.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="font-semibold text-lg px-12 py-6 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Start Free Trial
          </Button>
          <p className="text-muted-foreground text-sm mt-4">
            No credit card required • 14-day free trial
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProblemsSection;
