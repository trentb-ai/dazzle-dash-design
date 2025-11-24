const SocialProof = () => {
  const companies = [
    'Halifax',
    'NatWest',
    'Nokia',
    'VMware',
    'Latitude Financial',
    'Tool Station',
    'Lloyds Bank',
    'Barclays',
    'American Express',
    'World Gold Council',
    'TAL',
    'Royal Bank of Scotland',
    'Santander'
  ];

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
            Our Founder's Work, Trusted By Global Banks, FS and Professional Services Clients Worldwide.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {companies.map((company, index) => (
            <div
              key={index}
              className="opacity-40 hover:opacity-60 transition-opacity duration-300"
            >
              <span className="text-base md:text-lg font-semibold text-muted-foreground whitespace-nowrap">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
