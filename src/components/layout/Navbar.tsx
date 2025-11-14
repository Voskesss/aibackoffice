import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-1">
            <span className="text-2xl font-black text-white">Ai</span>
            <span className="text-2xl font-black text-white px-3 py-1 bg-gradient-to-r from-primary-purple via-fuchsia-500 to-primary-pink rounded-lg">
              Backoffice
            </span>
          </Link>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors font-medium">
              Home
            </Link>
            <Link to="/diensten" className="text-gray-300 hover:text-white transition-colors font-medium">
              Diensten
            </Link>
            <Link to="/cases" className="text-gray-300 hover:text-white transition-colors font-medium">
              Cases
            </Link>
            <Link to="/ai-intake" className="text-gray-300 hover:text-white transition-colors font-medium">
              AI Intake
            </Link>
            <Link to="/over" className="text-gray-300 hover:text-white transition-colors font-medium">
              Over
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <Link 
            to="/ai-intake"
            className="hidden md:block bg-gradient-to-r from-primary-purple to-primary-blue text-white px-6 py-3 rounded-full hover:scale-105 transition-all font-bold"
          >
            Start →
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-white transition-colors font-medium py-2"
            >
              Home
            </Link>
            <Link 
              to="/diensten" 
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-white transition-colors font-medium py-2"
            >
              Diensten
            </Link>
            <Link 
              to="/cases" 
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-white transition-colors font-medium py-2"
            >
              Cases
            </Link>
            <Link 
              to="/ai-intake" 
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-white transition-colors font-medium py-2"
            >
              AI Intake
            </Link>
            <Link 
              to="/over" 
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-white transition-colors font-medium py-2"
            >
              Over
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-white transition-colors font-medium py-2"
            >
              Contact
            </Link>
            <Link 
              to="/ai-intake"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-gradient-to-r from-primary-purple to-primary-blue text-white px-6 py-3 rounded-full font-bold mt-4"
            >
              Start →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
