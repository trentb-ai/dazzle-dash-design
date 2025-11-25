import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

const RevenueCalculator = () => {
  const [missedCalls, setMissedCalls] = useState(30);
  const [conversionRatio, setConversionRatio] = useState(70);
  const [avgRevenue, setAvgRevenue] = useState(5000);

  // Calculate potential monthly revenue increase
  const potentialMonthlyRevenue = missedCalls * (conversionRatio / 100) * avgRevenue * 4;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  return (
    <div className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Sleeping Giant Revenue Calculator
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate your potential additional annual revenue - and see why we named this program the Sleeping Giant.
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card border-border shadow-xl">
          <div className="space-y-8">
            {/* First Row - Two fields side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Missed Calls */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-base md:text-lg font-semibold text-foreground">
                    Average Calls Not Answered Each Week
                  </label>
                  <span className="text-2xl font-bold text-primary">
                    {formatNumber(missedCalls)}
                  </span>
                </div>
                <Slider
                  value={[missedCalls]}
                  onValueChange={(value) => setMissedCalls(value[0])}
                  max={200}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </div>

              {/* Conversion Ratio */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-base md:text-lg font-semibold text-foreground">
                    Calls Converted to Sales Ratio
                  </label>
                  <span className="text-2xl font-bold text-primary">
                    {conversionRatio}%
                  </span>
                </div>
                <Slider
                  value={[conversionRatio]}
                  onValueChange={(value) => setConversionRatio(value[0])}
                  max={100}
                  min={1}
                  step={1}
                  className="w-full"
                />
              </div>
            </div>

            {/* Second Row - Average Revenue */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-base md:text-lg font-semibold text-foreground">
                  Average Revenue per Sale
                </label>
                <span className="text-2xl font-bold text-primary">
                  {formatCurrency(avgRevenue)}
                </span>
              </div>
              <Slider
                value={[avgRevenue]}
                onValueChange={(value) => setAvgRevenue(value[0])}
                max={100000}
                min={100}
                step={100}
                className="w-full"
              />
            </div>

            {/* Result */}
            <div className="pt-8 border-t border-border">
              <div className="text-center space-y-2">
                <p className="text-lg font-semibold text-muted-foreground">
                  Potential Monthly Revenue Increase
                </p>
                <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
                  {formatCurrency(potentialMonthlyRevenue)}
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* CTA Box */}
        <Card className="mt-8 p-8 md:p-10 bg-gradient-to-br from-primary/10 via-background to-primary-light/10 border-primary/20">
          <div className="text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Ready to Turn These Numbers Into Reality?
            </h3>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch to see how we can help you achieve these projections with your actual lead data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button size="lg" className="w-full sm:w-auto group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30">
                <span className="relative z-10">Get Your Free Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/20">
                <span className="relative z-10">4-Min Case Study</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground italic pt-4">
              Calculation: Missed calls × conversion ratio × average sale value × 4 weeks
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RevenueCalculator;
