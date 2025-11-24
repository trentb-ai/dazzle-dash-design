import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { Hero, AnimatedContainer, TextStagger } from '@/components/LovableHero';
import { FloatingCrypto } from '@/components/FloatingCrypto';
import { Button } from '@/components/ui/button';
import SocialProof from '@/components/SocialProof';
import StatsBar from '@/components/StatsBar';
import ProblemsSection from '@/components/ProblemsSection';
import DemoBox from '@/components/DemoBox';
import { DemoModal, useExitIntent } from '@/components/DemoModal';
import TabbedAgents from '@/components/TabbedAgents';
import AgentBenefitsBento from '@/components/AgentBenefitsBento';
import SystemFeaturesBento from '@/components/SystemFeaturesBento';
import HowWeWork from '@/components/HowWeWork';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import bellaAgent from '@/assets/bella-agent.png';
import sarahAgent from '@/assets/sarah-agent.png';
import alexAgent from '@/assets/alex-agent.png';
import chrisAgent from '@/assets/chris-agent.png';
import bellaAgentNew from '@/assets/bella-agent-new.png';
import jamesAgent from '@/assets/james-agent.png';

const Index = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useExitIntent(() => {
    setIsDemoModalOpen(true);
  });

  const aiAgents = [
    { image: bellaAgent, name: "Maddie", role: "Voice AI Receptionist", position: { x: "10%", y: "60%" } },
    { image: sarahAgent, name: "Sarah", role: "Outbound SMS & DMs Agent", position: { x: "85%", y: "25%" } },
    { image: alexAgent, name: "Alex", role: "Ad Leads Converter", position: { x: "10%", y: "25%" } },
    { image: chrisAgent, name: "Chris", role: "Website Concierge", position: { x: "85%", y: "60%" } },
    { image: bellaAgentNew, name: "Bella", role: "Onboarding Agent", position: { x: "25%", y: "80%" } },
    { image: jamesAgent, name: "James", role: "Events Concierge", position: { x: "70%", y: "80%" } }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <div className="relative min-h-screen">
          <Hero className="bg-background pb-48">
            {/* Desktop Floating Agents */}
            {aiAgents.map((agent, index) => (
              <FloatingCrypto
                key={index}
                image={agent.image}
                name={agent.name}
                role={agent.role}
                position={agent.position}
                index={index}
              />
            ))}

            {/* Mobile Agent Row */}
            <div className="md:hidden relative z-10 flex justify-center px-4 mt-16 mb-4">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 max-w-full scrollbar-hide">
                {aiAgents.map((agent, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center flex-shrink-0"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    style={{ marginLeft: index > 0 ? '-12px' : '0' }}
                  >
                    <div
                      className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/40 backdrop-blur-sm"
                      style={{
                        background: "rgba(180, 176, 254, 0.15)",
                        boxShadow: "0 0 20px rgba(180, 176, 254, 0.3)",
                      }}
                    >
                      <img src={agent.image} alt={agent.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs font-semibold text-foreground mt-1 whitespace-nowrap">
                      {agent.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-5xl px-4 space-y-8 mt-10 md:mt-32">
              {/* Mobile hero heading (non-animated) */}
              <div className="block md:hidden mt-6">
                <div className="text-3xl font-semibold tracking-tight leading-tight">
                  <span className="block text-foreground">
                    Put Your Service Sales
                  </span>
                  <span className="block bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
                    on Autopilot
                  </span>
                </div>
              </div>

              {/* Desktop animated hero heading */}
              <div className="hidden md:block text-5xl md:text-7xl font-medium tracking-tight leading-tight mt-24">
                <div>
                  <TextStagger text="Put Your Service Sales" as="span" className="text-foreground" stagger={0.05} direction="bottom" />
                </div>
                <div className="mt-2">
                  <TextStagger text="on Autopilot" as="span" className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent" stagger={0.05} direction="bottom" />
                </div>
              </div>

              <AnimatedContainer transformDirection="bottom" transition={{ duration: 0.6, delay: 0.6 }}>
                <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed mt-6">
                  Engage 100% of your leads and enquiries within seconds, turning more clicks and calls into profits, on autopilot.
                </p>
              </AnimatedContainer>

              <AnimatedContainer transformDirection="bottom" transition={{ duration: 0.6, delay: 0.8 }}>
                <div className="flex gap-4 mt-4">
                  <Button variant="outline" size="lg" className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/20">
                    <span className="relative z-10">Test the Agents Live</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                  </Button>
                  <Button size="lg" className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30">
                    <span className="relative z-10">Get the Free Trial</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                  </Button>
                </div>
              </AnimatedContainer>
            </div>
          </Hero>
        </div>

        <SocialProof />
        <StatsBar />
        <DemoBox />
        <ProblemsSection />
        <TabbedAgents />
        <AgentBenefitsBento />
        <SystemFeaturesBento />
        <HowWeWork />
        <FAQ />
      </main>
      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
};

export default Index;
