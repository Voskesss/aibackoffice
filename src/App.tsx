import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ChatbotWidget from './components/ui/ChatbotWidget';
import Home from './pages/Home';
import Services from './pages/Services';
import Cases from './pages/Cases';
import AIIntake from './pages/AIIntake';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  // Set base path for GitHub Pages deployment
  const basename = import.meta.env.MODE === 'production' ? '/aibackoffice' : '';
  
  return (
    <Router basename={basename}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diensten" element={<Services />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/ai-intake" element={<AIIntake />} />
            <Route path="/over" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ChatbotWidget />
      </div>
    </Router>
  );
}

export default App
