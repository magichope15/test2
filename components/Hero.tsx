
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Tag, Sparkles, ChevronRight, Info } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent pt-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-30 text-center px-6 max-w-6xl mx-auto flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mb-4 md:mb-8"
        >
          <span className="text-rustic-gold text-[10px] md:text-sm tracking-[0.3em] md:tracking-[0.5em] uppercase font-bold border-y border-rustic-gold/30 py-2 px-4 md:px-6 inline-flex items-center gap-2">
            <Sparkles size={14} className="md:hidden" />
            Panification Traditionnelle
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="text-[3.5rem] sm:text-7xl md:text-[9rem] font-serif font-bold text-rustic-parchment mb-4 leading-[1.1] md:leading-none tracking-tight drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]"
        >
          Kouign-Amann
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-white/95 text-lg md:text-3xl font-serif italic mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg"
        >
          "Le gâteau le plus gras du monde... et le plus aimé"
        </motion.p>

        {/* Botones - Interactividad directa */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full max-w-[320px] md:max-w-none relative z-40"
        >
          <a
            href="#order"
            className="group cursor-pointer bg-rustic-gold text-rustic-wood px-8 md:px-12 py-5 md:py-6 text-base rounded-none border-2 border-rustic-gold font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-white hover:border-white transition-all active:scale-95 flex items-center justify-center gap-3"
          >
            Réserver ma part
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#about"
            className="group cursor-pointer bg-black/50 text-white px-8 md:px-12 py-5 md:py-6 text-base rounded-none border-2 border-white/40 font-bold uppercase tracking-[0.2em] backdrop-blur-md shadow-xl hover:bg-white/10 hover:border-white transition-all active:scale-95 flex items-center justify-center gap-3"
          >
            Notre terroir
            <Info className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Viñetas móviles */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-14 md:hidden grid grid-cols-3 gap-2 w-full max-w-sm"
        >
          <div className="bg-rustic-wood/80 backdrop-blur-md border border-white/10 p-4 rounded-xl flex flex-col items-center justify-center gap-1">
            <Calendar size={18} className="text-rustic-gold mb-1" />
            <span className="text-[9px] uppercase tracking-tighter text-white/50 font-bold leading-none">Samedi</span>
            <span className="text-[11px] text-white font-serif italic font-bold">Vevey</span>
          </div>
          
          <div className="bg-rustic-gold/95 backdrop-blur-md border border-white/20 p-4 rounded-xl flex flex-col items-center justify-center gap-1 scale-110 z-10">
            <Tag size={18} className="text-rustic-wood mb-1" />
            <span className="text-[9px] uppercase tracking-tighter text-rustic-wood/60 font-bold leading-none">Remise</span>
            <span className="text-[11px] text-rustic-wood font-bold">-15%</span>
          </div>
          
          <div className="bg-rustic-wood/80 backdrop-blur-md border border-white/10 p-4 rounded-xl flex flex-col items-center justify-center gap-1">
            <MapPin size={18} className="text-rustic-gold mb-1" />
            <span className="text-[9px] uppercase tracking-tighter text-white/50 font-bold leading-none">Secteur</span>
            <span className="text-[11px] text-white font-serif italic font-bold">Riviera</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Viñeta decorativa */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)] z-20 pointer-events-none" />
    </section>
  );
};

export default Hero;
