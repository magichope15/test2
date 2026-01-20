
import React from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import OrderSection from './components/OrderSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-rustic-gold selection:text-rustic-wood">
      {/* Fondo: Siempre detrás (z-0) y sin interceptar clics */}
      <Background />
      
      {/* Navbar: Siempre arriba (z-50 definido en el componente) */}
      <Navbar />
      
      {/* Contenido principal: Flujo normal de clics */}
      <main className="relative">
        <Hero />
        
        <section id="about" className="bg-rustic-parchment py-24 md:py-40 relative z-20">
          <div className="absolute top-0 left-0 right-0 h-24 md:h-40 bg-gradient-to-b from-transparent to-rustic-parchment -translate-y-full pointer-events-none"></div>
          <About />
        </section>

        <section id="order" className="bg-rustic-wood py-24 md:py-40 px-4 relative z-20">
          <OrderSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
