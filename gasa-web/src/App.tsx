import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyChoose from './components/WhyChoose'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
