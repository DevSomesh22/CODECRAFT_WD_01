import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Starter Pack',
      price: '$25',
      period: '250g',
      description: 'Perfect for trying our premium tea',
      features: [
        '250g Premium Tea',
        'Free Shipping',
        'Gift Packaging',
        'Brewing Guide',
      ],
      popular: false,
    },
    {
      name: 'Family Pack',
      price: '$45',
      period: '500g',
      description: 'Ideal for regular tea lovers',
      features: [
        '500g Premium Tea',
        'Free Shipping',
        'Gift Packaging',
        'Brewing Guide',
        'Tea Infuser Included',
        '10% Off Next Purchase',
      ],
      popular: true,
    },
    {
      name: 'Bulk Pack',
      price: '$85',
      period: '1kg',
      description: 'Best value for tea enthusiasts',
      features: [
        '1kg Premium Tea',
        'Free Express Shipping',
        'Premium Gift Packaging',
        'Brewing Guide',
        'Tea Infuser Set',
        '15% Off Next Purchase',
        'Priority Customer Support',
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 mb-4">
            Pricing
          </div>
          <h2 className="mb-4 text-gray-900">
            Choose Your Perfect Pack
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Select the package that suits your tea-drinking needs. All packs include our finest quality tea.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 md:p-8 rounded-lg border-2 ${
                plan.popular
                  ? 'border-green-600 shadow-xl scale-105'
                  : 'border-gray-200 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-600 text-white px-4 py-1 text-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="mb-2 text-gray-900">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-gray-900">{plan.price}</span>
                  <span className="text-gray-500"> / {plan.period}</span>
                </div>
                <p className="text-sm text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 transition-colors ${
                  plan.popular
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Order Now
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            All prices include taxes. Free shipping on orders above $50.
          </p>
        </div>
      </div>
    </section>
  );
}
