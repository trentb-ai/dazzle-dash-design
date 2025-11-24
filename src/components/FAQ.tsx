import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How can AI automation help my business?",
    answer: "AI automation streamlines repetitive tasks, reduces operational costs, and improves efficiency. It allows your team to focus on high-value activities while ensuring 24/7 availability for customer support and lead generation."
  },
  {
    question: "Is AI automation difficult to integrate?",
    answer: "Not at all. We handle the entire integration process, ensuring our AI solutions work seamlessly with your existing tools and workflows with minimal disruption to your daily operations."
  },
  {
    question: "What industries can benefit from AI automation?",
    answer: "Almost every industry can benefit, including Real Estate, Healthcare, E-commerce, Finance, and Customer Service. Any business with repetitive processes or high customer interaction volume is a good candidate."
  },
  {
    question: "Do I need technical knowledge to use AI automation?",
    answer: "No technical knowledge is required. We build user-friendly systems and provide full support. You just need to focus on your business goals while our AI handles the technical heavy lifting."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer comprehensive support including initial setup, training, and ongoing maintenance. We monitor the systems to ensure optimal performance and make adjustments as your business needs evolve."
  },
  {
    question: "What exactly is the Pillar and Post Growth Engine?",
    answer: "Pillar and Post engages leads via Voice, SMS, or Chat within 60 seconds, qualifies them, and books an appointment or transfers live—without humans. Think of it as your revenue team cloned 100x working 24/7 to turn ad clicks into profit."
  },
  {
    question: "What kind of results can I expect?",
    answer: "Clients report 300% more conversions, 10x return on ad spend, 30% lift in website conversion rates. We guarantee every lead is contacted in 60 seconds or less, resulting in no missed leads and more booked calls."
  },
  {
    question: "How long does setup take?",
    answer: "You'll be live in as little as 7 days. Our white-glove onboarding team will build your entire revenue engine—scripts, automations, integrations—so you can focus on running your business."
  },
  {
    question: "What if it doesn't work for my business?",
    answer: "We only work with businesses we're confident we can help. We require a minimum ad spend and do a full needs analysis during your initial call. If you don't see results in 90 days—we'll make sure to make it right."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            We've Got the Answers <br />
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">You're Looking For</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Quick answers to your AI automation questions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-2xl overflow-hidden bg-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted transition-colors"
              >
                <span className="text-lg font-medium text-foreground pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-primary flex-shrink-0" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-muted-foreground leading-relaxed border-t border-border mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
