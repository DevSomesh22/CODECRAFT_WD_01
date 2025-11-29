import { Leaf, Award, Heart, Shield } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: '100% Organic',
      description: 'Grown without pesticides or chemicals, our tea is certified organic and environmentally sustainable.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Premium Quality',
      description: 'Hand-picked and carefully processed to preserve the natural flavor and aroma in every leaf.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health Benefits',
      description: 'Rich in antioxidants and natural compounds that promote wellness and vitality.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Assured',
      description: 'Every batch is tested and certified to meet international quality standards.',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 mb-4">
            Why Choose Us
          </div>
          <h2 className="mb-4 text-gray-900">
            Exceptional Tea, Every Time
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our commitment to quality and sustainability sets us apart in the world of premium tea.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 text-green-700 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
