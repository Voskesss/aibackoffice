import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AI Backoffice</h3>
            <p className="text-gray-400">
              Slimmere backoffice met hulp van AI. Praktisch, veilig en mensgericht.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <div className="space-y-2">
              <Link to="/diensten" className="block text-gray-400 hover:text-white transition-colors">
                Diensten
              </Link>
              <Link to="/cases" className="block text-gray-400 hover:text-white transition-colors">
                Cases
              </Link>
              <Link to="/ai-intake" className="block text-gray-400 hover:text-white transition-colors">
                AI Intake
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>E-mail: info@aibackoffice.nl</p>
              <Link to="/contact" className="block hover:text-white transition-colors">
                Contactformulier →
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AI Backoffice. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
