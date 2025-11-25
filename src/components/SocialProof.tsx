import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import client1_1 from '@/assets/clients/client1-1.png';
import client1_2 from '@/assets/clients/client1-2.png';
import client2_1 from '@/assets/clients/client2-1.png';
import client2_2 from '@/assets/clients/client2-2.png';
import client2_3 from '@/assets/clients/client2-3.png';
import client2_4 from '@/assets/clients/client2-4.png';
import client2_5 from '@/assets/clients/client2-5.png';
import client2_6 from '@/assets/clients/client2-6.png';
import client2_7 from '@/assets/clients/client2-7.png';

const SocialProof = () => {
  // Distribute logos evenly across two rows
  const clientLogosRow1 = [client1_1, client1_2, client2_1, client2_2, client2_3];
  const clientLogosRow2 = [client2_4, client2_5, client2_6, client2_7];

  // Duplicate logos for seamless loop
  const allLogosRow1 = [...clientLogosRow1, ...clientLogosRow1, ...clientLogosRow1];
  const allLogosRow2 = [...clientLogosRow2, ...clientLogosRow2, ...clientLogosRow2];

  return (
    <div className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-2">
            Built on 20+ Years of Award-Winning
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-4">
            Digital Copy, Strategy & Transformation
          </h3>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Our Founder's Work, Trusted By Global Banks, FS and Professional Services Worldwide.
          </p>
        </div>

        {/* Logo Carousel - Row 1 */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full mb-8"
        >
          <CarouselContent className="-ml-4">
            {allLogosRow1.map((logo, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="flex items-center justify-center p-4 h-24 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <img 
                    src={logo} 
                    alt={`Client logo ${index + 1}`} 
                    className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Logo Carousel - Row 2 */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2500,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {allLogosRow2.map((logo, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                <div className="flex items-center justify-center p-4 h-24 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <img 
                    src={logo} 
                    alt={`Client logo ${index + 1}`} 
                    className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default SocialProof;
