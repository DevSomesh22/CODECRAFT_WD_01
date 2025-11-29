import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1756009481685-1513779372cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvb3R5JTIwdGVhJTIwcGxhbnRhdGlvbnxlbnwxfHx8fDE3NjQ0MDg2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Ooty Tea Plantation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="mb-6 animate-fade-in">
          Experience the Finest Tea from Ooty
        </h1>
        <p className="mb-8 max-w-2xl mx-auto text-lg sm:text-xl text-gray-200">
          Discover the rich heritage and exceptional quality of tea grown in the pristine hills of Ooty, 
          where nature meets perfection in every cup.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('pricing')}
            className="px-8 py-3 bg-green-600 text-white hover:bg-green-700 transition-colors"
          >
            Shop Now
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700 transition-colors"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
