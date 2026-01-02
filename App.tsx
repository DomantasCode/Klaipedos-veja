import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Calculator from './components/Calculator';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-stone-50 overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        {/* Services moved up */}
        <section id="services" className="py-20 bg-stone-50 relative overflow-hidden">
          <Services />
        </section>

        {/* About moved down */}
        <section id="about" className="py-20 bg-white">
          <About />
        </section>

        <section id="calculator" className="bg-nature-dark text-stone-warm">
          <Calculator />
        </section>

        <section id="gallery" className="py-20 md:py-28 bg-stone-50">
          <Gallery />
        </section>

        <section id="faq">
           <FAQ />
        </section>

        <section id="contact" className="bg-stone-200">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;