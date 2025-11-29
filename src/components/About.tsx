import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative h-64 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1689968904630-4860a61e150e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBnYXJkZW4lMjBncmVlbnxlbnwxfHx8fDE3NjQ0MDg2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tea Garden"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 mb-4">
              Our Story
            </div>
            <h2 className="mb-6 text-gray-900">
              Premium Tea from the Nilgiris
            </h2>
            <p className="mb-4 text-gray-600">
              Nestled in the picturesque hills of Ooty, our tea plantations have been cultivating the finest 
              tea leaves for over a century. The unique climate and rich soil of the Nilgiris create the 
              perfect conditions for growing exceptional tea.
            </p>
            <p className="mb-6 text-gray-600">
              Every leaf is handpicked by skilled workers who understand the art of tea cultivation. 
              Our commitment to traditional methods combined with modern quality standards ensures that 
              every cup delivers an authentic and memorable experience.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-green-700 mb-2">100+</div>
                <p className="text-gray-600 text-sm">Years of Heritage</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-green-700 mb-2">500+</div>
                <p className="text-gray-600 text-sm">Acres of Plantations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
