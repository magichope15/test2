
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Wheat, Flame, Award, MapPin, Calendar, ScrollText, History } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      {/* SECCIÓN 1: EL ORIGEN - Optimización de lectura en móvil */}
      <div className="mb-24 md:mb-48 relative">
        <div className="absolute -top-12 md:-top-20 left-1/2 -translate-x-1/2 opacity-5 md:opacity-10 pointer-events-none">
          <ScrollText className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] text-rustic-wood" />
        </div>
        
        <div className="bg-white p-7 md:p-20 parchment-shadow border border-rustic-wood/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-rustic-gold/5 rounded-bl-full pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <History size={14} className="text-rustic-gold md:hidden" />
              <h4 className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-rustic-gold font-bold">Guide de dégustation</h4>
            </div>
            
            <h2 className="text-[2.6rem] md:text-7xl font-serif text-rustic-wood mb-8 md:mb-12 italic leading-[1.1]">
              Tout savoir sur le <span className="text-rustic-oak not-italic">Kouign-Amann</span>
            </h2>
            
            <div className="space-y-6 md:space-y-8 text-rustic-wood/90 font-serif text-lg md:text-xl leading-relaxed">
              <p className="text-xl md:text-3xl font-bold text-rustic-wood border-b border-rustic-gold/20 pb-4">
                L’origine du kouign amann...
              </p>
              <div className="space-y-4 md:space-y-6 text-base md:text-lg font-sans text-rustic-wood/80 text-justify md:text-left">
                <p>
                  L'histoire veut qu'il soit né à <span className="font-bold text-rustic-oak">Douarnenez</span> en Bretagne. La légende s'écrit en <span className="text-rustic-gold font-bold italic">1860</span>.
                </p>
                <p className="hidden md:block">
                  Le boulanger Yves René SCORDIA a voulu approvisionner rapidement la boutique. Avec de la pâte à pain, du beurre et du sucre, il créa ce délice par accident mais avec génie.
                </p>
                <div className="bg-rustic-parchment/70 p-6 md:p-8 border-l-4 border-rustic-gold italic font-serif text-lg md:text-2xl shadow-sm">
                  "Un gâteau feuilleté, gorgé de beurre et de sucre caramélisé, croûte dorée et croustillante au goût de noisette."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN 2: EL DUO - Mobile Optimized (Polaroid Style) */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 md:gap-20 items-center mb-24 md:mb-48">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full group"
        >
          {/* Estilo Polaroid para Móvil */}
          <div className="bg-white p-3 pb-12 md:p-0 md:bg-transparent shadow-2xl md:shadow-none">
            <div className="absolute -inset-2 border border-rustic-gold/20 rounded-lg pointer-events-none translate-x-2 translate-y-2 hidden md:block"></div>
            <img
              src="https://i.ibb.co/3ykM66mP/logooo.jpg"
              alt="Julien et Eli"
              className="relative z-10 w-full rounded-sm aspect-[4/3] md:aspect-[4/5] object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="md:hidden pt-4 text-center">
              <p className="font-serif italic text-xl text-rustic-wood/60">Julien & Eliana</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 md:space-y-10"
        >
          <div className="text-center lg:text-left">
            <span className="text-rustic-gold font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">L'Âme de Ty' Biskouign</span>
            <h2 className="text-4xl md:text-6xl font-serif text-rustic-wood mt-2 leading-tight">Artisans par <span className="italic text-rustic-oak">Passion</span></h2>
          </div>
          
          <div className="space-y-5 md:space-y-6 text-rustic-wood/80 font-sans leading-relaxed text-base md:text-lg">
            <p className="text-center lg:text-left italic">
              "Deux voyageurs unis par la passion du feuilletage breton en terres suisses."
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              <div className="p-5 bg-white shadow-sm border border-rustic-wood/5 rounded-xl">
                <h5 className="font-serif font-bold text-rustic-oak text-xl mb-1">Julien</h5>
                <p className="text-sm italic leading-relaxed">De Vannes à la Riviera, il apporte le sel de son héritage breton pour recréer le goût de son enfance.</p>
              </div>
              <div className="p-5 bg-white shadow-sm border border-rustic-wood/5 rounded-xl">
                <h5 className="font-serif font-bold text-rustic-oak text-xl mb-1">Eliana</h5>
                <p className="text-sm italic leading-relaxed">De Santiago avec un amour inconditionnel pour le beurre, elle insuffle son regard artistique à chaque pliage.</p>
              </div>
            </div>
            <div className="text-center lg:text-left pt-2">
              <span className="font-serif italic text-2xl text-rustic-gold">Kenavo ar wech all !</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SECCIÓN 3: EL MERCADO DE VEVEY - Diseño 'Banner' de Madera */}
      <div className="bg-rustic-wood text-rustic-parchment p-8 md:p-20 shadow-2xl relative mb-24 group overflow-hidden rounded-2xl md:rounded-none">
        <div className="absolute inset-0 wood-texture opacity-10"></div>
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <MapPin className="text-rustic-gold w-8 h-8 md:w-10 md:h-10" />
              <h3 className="text-3xl md:text-5xl font-serif">Le Marché de <span className="text-rustic-gold">Vevey</span></h3>
            </div>
            <p className="text-lg md:text-xl font-serif italic opacity-80 mb-6">Grande place du Marché, 1800 Vevey</p>
            <div className="inline-flex items-center gap-3 bg-rustic-gold/10 border border-rustic-gold/30 px-6 py-3 text-rustic-gold font-bold tracking-[0.2em] uppercase text-xs rounded-full">
              <Calendar size={16} />
              <span>Chaque Samedi Matin</span>
            </div>
          </div>
          <div className="bg-white/5 border-2 border-dashed border-rustic-gold/30 p-8 text-center max-w-[240px] rotate-1 md:rotate-3 group-hover:rotate-0 transition-transform duration-500">
             <p className="font-serif italic text-2xl text-white">"Dépêchez-vous, il n'en reste presque plus..."</p>
          </div>
        </div>
      </div>

      {/* Valores - Grid Compacto */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-16 mb-20">
        {[
          { icon: Wheat, title: "Farine Locale", desc: "Terroir Vaudois." },
          { icon: Flame, title: "Caramélisation", desc: "Sucre croquant." },
          { icon: Heart, title: "Fait Main", desc: "100% Artisanal.", fullWidth: true }
        ].map((v, i) => (
          <div key={i} className={`text-center p-5 bg-white border border-rustic-wood/5 rounded-2xl shadow-sm ${v.fullWidth ? 'col-span-2 md:col-span-1' : ''}`}>
            <div className="w-14 h-14 md:w-20 md:h-20 bg-rustic-wood text-rustic-parchment mx-auto rounded-full flex items-center justify-center mb-4 shadow-lg border-4 border-rustic-parchment">
              <v.icon className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h4 className="text-base md:text-2xl font-serif text-rustic-wood mb-1 font-bold">{v.title}</h4>
            <p className="text-[11px] md:text-base text-rustic-wood/60 italic">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
