import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Tea Enthusiast',
      content: 'The quality of Ooty Tea is unmatched. Every cup is a delightful experience that transports me to the misty hills of the Nilgiris. Absolutely love it!',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      role: 'Restaurant Owner',
      content: 'We have been serving Ooty Tea at our restaurant for years. Our customers always compliment the exceptional taste and aroma. A true premium product.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      role: 'Health Coach',
      content: 'As a health coach, I recommend Ooty Tea to all my clients. The organic cultivation and health benefits make it a perfect choice for wellness enthusiasts.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 mb-4">
            Testimonials
          </div>
          <h2 className="mb-4 text-gray-900">
            What Our Customers Say
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Don't just take our word for it - hear from our satisfied customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="w-10 h-10 text-green-200 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t pt-4">
                <div className="text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-white rounded-lg">
            <div className="text-green-700 mb-2">5000+</div>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="p-6 bg-white rounded-lg">
            <div className="text-green-700 mb-2">4.9/5</div>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="p-6 bg-white rounded-lg">
            <div className="text-green-700 mb-2">1200+</div>
            <p className="text-gray-600">Reviews</p>
          </div>
          <div className="p-6 bg-white rounded-lg">
            <div className="text-green-700 mb-2">98%</div>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
