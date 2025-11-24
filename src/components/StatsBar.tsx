const StatsBar = () => {
  const stats = [
    { value: '24/7/365', label: 'Always Available' },
    { value: '<500ms', label: 'Response Time' },
    { value: '99.9%', label: 'Uptime' },
    { value: '$0', label: 'Annual Salary' }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-700"></div>
              </div>
              <div className="text-muted-foreground font-medium text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
