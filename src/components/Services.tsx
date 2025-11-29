import { ImageWithFallback } from './figma/ImageWithFallback';
import { Truck, Gift, Repeat, HeadphonesIcon } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Free Shipping',
      description: 'On orders above $50',
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: 'Gift Packaging',
      description: 'Beautiful presentation for gifts',
    },
    {
      icon: <Repeat className="w-6 h-6" />,
      title: 'Easy Returns',
      description: '30-day money-back guarantee',
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6" />,
      title: '24/7 Support',
      description: 'Always here to help you',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 mb-4">
            Our Services
          </div>
          <h2 className="mb-4 text-gray-900">
            Complete Tea Experience
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            From selection to delivery, we provide exceptional service at every step.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-6 border border-gray-200 rounded-lg hover:border-green-500 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-700 rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Service Images Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1667650231689-aa6bd2530e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBjdXAlMjBsZWF2ZXN8ZW58MXx8fHwxNzY0MzczNjA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Tea Selection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="mb-1">Curated Selection</h3>
                <p className="text-sm text-gray-200">Wide variety of premium teas</p>
              </div>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1672885372860-cf4fec538190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBjZXJlbW9ueSUyMHBvdXJpbmd8ZW58MXx8fHwxNzY0NDA4NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Tea Consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="mb-1">Expert Consultation</h3>
                <p className="text-sm text-gray-200">Personalized recommendations</p>
              </div>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1708010433898-2685301f61ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBwcm9jZXNzaW5nJTIwZmFjdG9yeXxlbnwxfHx8fDE3NjQzMDk3OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Tea Processing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="mb-1">Quality Processing</h3>
                <p className="text-sm text-gray-200">Traditional methods meet modern standards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
