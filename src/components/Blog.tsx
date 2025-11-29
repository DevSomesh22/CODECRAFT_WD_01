import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, User, ArrowRight } from 'lucide-react';

export function Blog() {
  const posts = [
    {
      image: 'https://images.unsplash.com/photo-1667650231689-aa6bd2530e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBjdXAlMjBsZWF2ZXN8ZW58MXx8fHwxNzY0MzczNjA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Health',
      title: 'The Health Benefits of Nilgiri Tea',
      excerpt: 'Discover how the unique properties of Nilgiri tea can contribute to your overall wellness and vitality.',
      author: 'Dr. Anita Rao',
      date: 'Nov 15, 2025',
    },
    {
      image: 'https://images.unsplash.com/photo-1672885372860-cf4fec538190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjBjZXJlbW9ueSUyMHBvdXJpbmd8ZW58MXx8fHwxNzY0NDA4NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Brewing Guide',
      title: 'Perfect Brewing Techniques for Tea',
      excerpt: 'Learn the art of brewing the perfect cup of tea with our step-by-step guide and expert tips.',
      author: 'Master Chen',
      date: 'Nov 10, 2025',
    },
    {
      image: 'https://images.unsplash.com/photo-1618510210322-dfba24a47a37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBkcmlua2luZyUyMHRlYXxlbnwxfHx8fDE3NjQ0MDg2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Lifestyle',
      title: 'Tea Rituals Around the World',
      excerpt: 'Explore the fascinating tea traditions and ceremonies from different cultures across the globe.',
      author: 'Sophie Williams',
      date: 'Nov 5, 2025',
    },
  ];

  return (
    <section id="blog" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 mb-4">
            Blog
          </div>
          <h2 className="mb-4 text-gray-900">
            Latest Tea Stories
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore our collection of articles about tea culture, health benefits, and brewing techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white px-3 py-1 text-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-gray-900 hover:text-green-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <button className="flex items-center gap-2 text-green-700 hover:text-green-800 transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-green-600 text-white hover:bg-green-700 transition-colors">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
