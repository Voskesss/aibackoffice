import { Link } from 'react-router-dom';

export default function Navbar() {
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

          <Link 
            to="/ai-intake"
            className="bg-gradient-to-r from-primary-purple to-primary-blue text-white px-6 py-3 rounded-full hover:scale-105 transition-all font-bold"
          >
            Start →
          </Link>
        </div>
      </div>
    </nav>
  );
}
