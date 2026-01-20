
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Home, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Nueva URL del Logo
  const LOGO_URL = "https://i.ibb.co/v4S6t4H/image.png";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'bg-white py-2 shadow-lg border-b border-rustic-wood/10' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* Logo Lado Izquierdo */}
        <a href="#" className="flex items-center gap-2 md:gap-4 group">
          <div className="relative w-12 h-12 md:w-16 md:h-16 bg-white rounded-full p-1 shadow-md border border-rustic-gold/20 overflow-hidden flex items-center justify-center">
            <img 
              src={LOGO_URL} 
              alt="Ty' Biskouign Logo" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl md:text-2xl font-serif font-bold tracking-tight leading-none transition-colors ${scrolled ? 'text-rustic-wood' : 'text-white'}`}>Ty' Biskouign</span>
            <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-sans font-bold text-rustic-gold">Artisanat Breton</span>
          </div>
        </a>

        {/* Links Escritorio */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#" className={`font-sans font-semibold text-xs tracking-widest uppercase transition-colors ${scrolled ? 'text-rustic-wood/60 hover:text-rustic-gold' : 'text-white/80 hover:text-rustic-gold'}`}>Accueil</a>
          <a href="#about" className={`font-sans font-semibold text-xs tracking-widest uppercase transition-colors ${scrolled ? 'text-rustic-wood/60 hover:text-rustic-gold' : 'text-white/80 hover:text-rustic-gold'}`}>L'Histoire</a>
          <a 
            href="#order" 
            className={`px-8 py-3 rounded-none font-bold transition-all flex items-center gap-2 transform active:scale-95 border-2 ${scrolled ? 'bg-rustic-wood text-white border-rustic-wood hover:bg-rustic-gold hover:border-rustic-gold' : 'bg-rustic-gold text-rustic-wood border-rustic-gold hover:bg-white hover:text-rustic-wood hover:border-white'}`}
          >
            <ShoppingCart size={16} />
            <span className="font-sans text-xs tracking-widest uppercase">Commander</span>
          </a>
        </div>

        {/* Botón Menú Móvil */}
        <button 
          className={`md:hidden p-3 rounded-full transition-colors z-[110] ${scrolled ? 'bg-rustic-wood/5 text-rustic-wood' : 'bg-white/10 text-white'}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Móvil Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            className="md:hidden fixed inset-0 bg-rustic-parchment z-[105] flex flex-col p-8 pt-24"
          >
            <div className="flex flex-col gap-4">
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 p-5 bg-white shadow-sm border border-rustic-wood/5 rounded-2xl text-rustic-wood font-serif text-2xl">
                <Home className="text-rustic-gold" /> Accueil
              </a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 p-5 bg-white shadow-sm border border-rustic-wood/5 rounded-2xl text-rustic-wood font-serif text-2xl">
                <Info className="text-rustic-gold" /> L'Histoire
              </a>
              <a href="#order" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 p-5 bg-rustic-wood text-white rounded-2xl font-serif text-2xl shadow-xl">
                <ShoppingCart className="text-rustic-gold" /> Commander
              </a>
            </div>

            <div className="mt-auto text-center pb-8 border-t border-rustic-gold/10 pt-8">
               <img src={LOGO_URL} alt="" className="w-12 h-12 mx-auto mb-4 opacity-50 grayscale" />
               <p className="text-rustic-gold font-serif italic mb-2 text-lg">Artisanat Breton en Suisse</p>
               <p className="text-[10px] uppercase tracking-widest text-rustic-wood/40">Clarens • Vevey • Riviera</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
