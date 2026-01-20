
import React from 'react';
import { Mail, MapPin, Send, Instagram, Facebook, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const LOGO_URL = "https://i.ibb.co/v4S6t4H/image.png";

  return (
    <footer className="bg-rustic-wood text-rustic-parchment py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 wood-texture opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col items-center text-center mb-32">
           <div className="relative w-32 h-32 mb-12 p-4 bg-white rounded-full border-2 border-rustic-gold/30 shadow-2xl flex items-center justify-center">
            <img 
              src={LOGO_URL} 
              alt="Ty' Biskouign Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>
          <h2 className="text-6xl md:text-9xl font-serif text-white mb-6">Ty' Biskouign</h2>
          <div className="h-1 w-32 bg-rustic-gold mx-auto mb-8"></div>
          <p className="text-rustic-gold italic text-3xl font-serif">L'âme de la Bretagne en Vaud</p>
        </div>

        <div className="grid md:grid-cols-3 gap-24 mb-32">
          <div className="text-center group">
            <div className="w-16 h-16 bg-white/5 mx-auto rounded-none border border-rustic-gold/20 flex items-center justify-center mb-8 transition-all group-hover:bg-rustic-gold group-hover:text-rustic-wood">
              <Mail size={24} />
            </div>
            <h4 className="text-xs uppercase tracking-[0.5em] font-bold mb-4 text-rustic-gold">Écrivez-nous</h4>
            <p className="text-xl font-serif italic">teolevytolosa@gmail.com</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-white/5 mx-auto rounded-none border border-rustic-gold/20 flex items-center justify-center mb-8 transition-all group-hover:bg-rustic-gold group-hover:text-rustic-wood">
              <MapPin size={24} />
            </div>
            <h4 className="text-xs uppercase tracking-[0.5em] font-bold mb-4 text-rustic-gold">Le Fournil</h4>
            <p className="text-xl font-serif italic">Clarens, Riviera Vaudoise</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-white/5 mx-auto rounded-none border border-rustic-gold/20 flex items-center justify-center mb-8 transition-all group-hover:bg-rustic-gold group-hover:text-rustic-wood">
              <Send size={24} />
            </div>
            <h4 className="text-xs uppercase tracking-[0.5em] font-bold mb-4 text-rustic-gold">Commandes</h4>
            <p className="text-xl font-serif italic">Réservations 24h/24</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-20 border-t border-white/5 text-white/30">
          <div className="flex gap-8">
            <a href="#" className="hover:text-rustic-gold transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="hover:text-rustic-gold transition-colors">
              <Facebook size={24} />
            </a>
          </div>

          <div className="flex items-center gap-3 font-serif italic text-lg text-white/50">
            Fait avec <Heart size={16} className="text-rustic-gold" fill="#c5a059" /> par l'amour du goût
          </div>

          <p className="text-[10px] font-sans tracking-[0.4em] uppercase">
            &copy; {new Date().getFullYear()} Ty' Biskouign • Bretagne & Suisse
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-2 bg-rustic-gold"></div>
    </footer>
  );
};

export default Footer;
