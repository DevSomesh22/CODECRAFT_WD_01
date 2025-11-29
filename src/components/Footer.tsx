import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-white mb-4">Ooty Tea</h3>
            <p className="mb-4 text-sm">
              Premium tea from the Nilgiris, crafted with care and tradition for over a century.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-green-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('features')}
                  className="hover:text-green-400 transition-colors"
                >
                  Our Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="hover:text-green-400 transition-colors"
                >
                  Shop Tea
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('blog')}
                  className="hover:text-green-400 transition-colors"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Black Tea
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Green Tea
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  White Tea
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Herbal Blends
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Gift Sets
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white mb-4">Newsletter</h3>
            <p className="mb-4 text-sm">
              Subscribe to get special offers and tea tips.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors flex-shrink-0">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2025 Ooty Tea. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-green-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              Shipping Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
