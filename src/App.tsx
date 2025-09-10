import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import About from './components/About';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChoose />
      <Testimonials />
      <CTA />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app-root">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
