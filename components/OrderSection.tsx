
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, ShoppingCart, MapPin, NotebookPen, Tag, Info, ChevronRight, Minus, Plus } from 'lucide-react';
import emailjs from '@emailjs/browser';

const OrderSection: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userMessage, setUserMessage] = useState('');
  
  const [qtyNature, setQtyNature] = useState(0);
  const [qtySaveurs, setQtySaveurs] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState<'twint' | 'cash'>('twint');
  const [twintConfirmed, setTwintConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const PRICE_NATURE = 5;
  const PRICE_SAVEURS = 6;
  const DELIVERY_FEE = 15;
  const MIN_ORDER = 40;
  
  const totalItems = qtyNature + qtySaveurs;
  const discountMultiplier = totalItems >= 2 ? 0.85 : 1;
  const subtotalBeforeDiscount = (qtyNature * PRICE_NATURE) + (qtySaveurs * PRICE_SAVEURS);
  const subtotal = subtotalBeforeDiscount * discountMultiplier;
  const isFreeDelivery = subtotal >= MIN_ORDER;
  const currentDeliveryFee = totalItems > 0 ? (isFreeDelivery ? 0 : DELIVERY_FEE) : 0;
  const total = subtotal + currentDeliveryFee;

  const updateQty = (type: 'nature' | 'saveurs', delta: number) => {
    if (type === 'nature') setQtyNature(Math.max(0, qtyNature + delta));
    else setQtySaveurs(Math.max(0, qtySaveurs + delta));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (subtotal < MIN_ORDER) {
      setError(`Minimum : ${MIN_ORDER} CHF après remise.`);
      return;
    }
    if (paymentMethod === 'twint' && !twintConfirmed) {
      setError("Confirmez TWINT svp.");
      return;
    }
    setIsSubmitting(true);
    try {
      await emailjs.send('service_98o36u5', 'template_eqcyr5e', {
        user_name: userName,
        user_phone: userPhone,
        user_address: userAddress,
        qty_nature: qtyNature,
        qty_saveurs: qtySaveurs,
        total_price: `${total.toFixed(2)} CHF`,
        payment_method: paymentMethod.toUpperCase(),
        message: userMessage
      }, '0cthNrBMOg8pJKpGv');
      setSubmitted(true);
    } catch (err) {
      setError("Erreur d'envoi. Veuillez vérifier vos données.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto bg-rustic-parchment p-10 md:p-20 text-center border-b-[10px] border-rustic-gold shadow-2xl">
        <div className="w-20 h-20 bg-rustic-moss/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 size={48} className="text-rustic-moss" />
        </div>
        <h2 className="text-4xl font-serif text-rustic-wood mb-4">Commande Confirmée !</h2>
        <p className="text-lg italic text-rustic-wood/70 mb-10">Julien vous contactera personnellement pour l'horaire de livraison.</p>
        <button onClick={() => setSubmitted(false)} className="bg-rustic-wood text-white px-12 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-rustic-gold transition-all">
          Nouvelle Commande
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="mb-10 flex justify-center">
        <motion.div 
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="bg-rustic-gold px-6 py-3 flex items-center gap-3 text-rustic-wood text-xs md:text-sm font-bold uppercase tracking-widest shadow-xl rounded-full border-2 border-white/20"
        >
          <Tag size={18} /> Offre Fidélité : -15% dès 2 pièces
        </motion.div>
      </div>

      <div className="bg-rustic-parchment p-6 md:p-14 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-b-[12px] border-rustic-gold relative overflow-hidden rounded-t-2xl md:rounded-none">
        <NotebookPen className="absolute -top-6 -right-6 text-rustic-wood/5 rotate-12 hidden md:block" size={200} />
        
        <form onSubmit={handleSubmit} className="space-y-12 md:space-y-20 relative z-10">
          
          <section>
            <div className="flex items-center gap-3 mb-8 border-b border-rustic-gold/20 pb-4">
              <MapPin size={20} className="text-rustic-gold" />
              <h3 className="text-2xl md:text-3xl font-serif text-rustic-wood font-bold">1. Livraison</h3>
            </div>
            <div className="grid gap-6 md:gap-8">
              <div className="group">
                <label className="text-[10px] uppercase tracking-widest font-bold text-rustic-wood/40 mb-2 block">Nom complet</label>
                <input required type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className="w-full bg-white/60 border-2 border-rustic-wood/5 p-4 rounded-xl outline-none focus:border-rustic-gold transition-colors text-lg font-serif" placeholder="Ex: Jean Dupont" />
              </div>
              <div className="group">
                <label className="text-[10px] uppercase tracking-widest font-bold text-rustic-wood/40 mb-2 block">Téléphone Mobile</label>
                <input required type="tel" value={userPhone} onChange={(e) => setUserPhone(e.target.value)} className="w-full bg-white/60 border-2 border-rustic-wood/5 p-4 rounded-xl outline-none focus:border-rustic-gold transition-colors text-lg font-serif" placeholder="079 000 00 00" />
              </div>
              <div className="group">
                <label className="text-[10px] uppercase tracking-widest font-bold text-rustic-wood/40 mb-2 block">Adresse de livraison</label>
                <input required type="text" value={userAddress} onChange={(e) => setUserAddress(e.target.value)} className="w-full bg-white/60 border-2 border-rustic-wood/5 p-4 rounded-xl outline-none focus:border-rustic-gold transition-colors text-lg font-serif" placeholder="Rue, NPA, Ville (Rayon Riviera)" />
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-8 border-b border-rustic-gold/20 pb-4">
              <ShoppingCart size={20} className="text-rustic-gold" />
              <h3 className="text-2xl md:text-3xl font-serif text-rustic-wood font-bold">2. Votre Commande</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-10">
              <div className="p-6 bg-white border border-rustic-wood/5 rounded-2xl flex items-center justify-between shadow-sm">
                <div>
                  <h4 className="font-serif italic text-xl text-rustic-wood">Le Nature</h4>
                  <span className="text-xs text-rustic-gold font-bold">5.00 CHF / pièce</span>
                </div>
                <div className="flex items-center gap-3">
                  <button type="button" onClick={() => updateQty('nature', -1)} className="w-10 h-10 rounded-full bg-rustic-wood/5 flex items-center justify-center text-rustic-wood active:bg-rustic-gold active:text-white transition-all"><Minus size={18} /></button>
                  <span className="w-8 text-center text-xl font-bold font-serif">{qtyNature}</span>
                  <button type="button" onClick={() => updateQty('nature', 1)} className="w-10 h-10 rounded-full bg-rustic-wood flex items-center justify-center text-white active:bg-rustic-gold transition-all"><Plus size={18} /></button>
                </div>
              </div>

              <div className="p-6 bg-white border border-rustic-wood/5 rounded-2xl flex items-center justify-between shadow-sm">
                <div>
                  <h4 className="font-serif italic text-xl text-rustic-wood">Les Saveurs</h4>
                  <span className="text-xs text-rustic-gold font-bold">6.00 CHF / pièce</span>
                </div>
                <div className="flex items-center gap-3">
                  <button type="button" onClick={() => updateQty('saveurs', -1)} className="w-10 h-10 rounded-full bg-rustic-wood/5 flex items-center justify-center text-rustic-wood active:bg-rustic-gold active:text-white transition-all"><Minus size={18} /></button>
                  <span className="w-8 text-center text-xl font-bold font-serif">{qtySaveurs}</span>
                  <button type="button" onClick={() => updateQty('saveurs', 1)} className="w-10 h-10 rounded-full bg-rustic-wood flex items-center justify-center text-white active:bg-rustic-gold transition-all"><Plus size={18} /></button>
                </div>
              </div>
            </div>

            <div className="bg-rustic-wood text-rustic-parchment p-8 rounded-2xl space-y-4 shadow-inner relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,#c5a059_10px,#c5a059_20px)] opacity-30"></div>
              
              <div className="flex justify-between text-xs uppercase tracking-widest opacity-60">
                <span>Sous-total Brut</span>
                <span>{subtotalBeforeDiscount.toFixed(2)} CHF</span>
              </div>
              
              {totalItems >= 2 && (
                <div className="flex justify-between text-xs font-bold text-rustic-gold tracking-widest animate-pulse">
                  <span>Remise Fidelité (-15%)</span>
                  <span>-{(subtotalBeforeDiscount - subtotal).toFixed(2)} CHF</span>
                </div>
              )}

              <div className="flex justify-between items-center text-lg md:text-3xl font-serif font-bold pt-4 border-t border-white/10">
                <span>Total Net</span>
                <span className="text-rustic-gold">{total.toFixed(2)} <span className="text-sm">CHF</span></span>
              </div>
              
              <div className="pt-4 flex flex-col items-center gap-1">
                <div className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter ${isFreeDelivery ? 'bg-rustic-moss text-white' : 'bg-white/10 text-white/60'}`}>
                  {isFreeDelivery ? "Livraison Offerte" : "Frais Livraison: 15.00 CHF"}
                </div>
                {!isFreeDelivery && subtotal > 0 && (
                  <p className="text-[9px] italic opacity-40">Plus que {(MIN_ORDER - subtotal).toFixed(2)} CHF pour livraison gratuite</p>
                )}
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex items-center gap-3 mb-6 border-b border-rustic-gold/20 pb-4">
              <h3 className="text-2xl md:text-3xl font-serif text-rustic-wood font-bold">3. Règlement</h3>
            </div>
            
             <div className="flex flex-col sm:flex-row gap-4">
                <button type="button" onClick={() => setPaymentMethod('twint')} className={`flex-1 p-5 rounded-xl border-2 font-bold text-sm tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-3 ${paymentMethod === 'twint' ? 'bg-rustic-wood text-white border-rustic-wood shadow-xl' : 'border-rustic-wood/10 text-rustic-wood bg-white'}`}>
                  <div className={`w-3 h-3 rounded-full ${paymentMethod === 'twint' ? 'bg-rustic-gold' : 'bg-rustic-wood/10'}`}></div>
                  TWINT
                </button>
                <button type="button" onClick={() => setPaymentMethod('cash')} className={`flex-1 p-5 rounded-xl border-2 font-bold text-sm tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-3 ${paymentMethod === 'cash' ? 'bg-rustic-wood text-white border-rustic-wood shadow-xl' : 'border-rustic-wood/10 text-rustic-wood bg-white'}`}>
                  <div className={`w-3 h-3 rounded-full ${paymentMethod === 'cash' ? 'bg-rustic-gold' : 'bg-rustic-wood/10'}`}></div>
                  Espèces
                </button>
             </div>
             
             {paymentMethod === 'twint' && (
               <div className="flex gap-4 items-center bg-rustic-moss/5 p-5 border-l-4 border-rustic-moss rounded-r-xl">
                 <input type="checkbox" id="twint-chk" checked={twintConfirmed} onChange={() => setTwintConfirmed(!twintConfirmed)} className="w-6 h-6 accent-rustic-moss rounded-md" />
                 <label htmlFor="twint-chk" className="text-xs md:text-sm italic text-rustic-wood/70 leading-tight">Je règle par TWINT à la remise des produits.</label>
               </div>
             )}

             <div className="group">
                <label className="text-[10px] uppercase tracking-widest font-bold text-rustic-wood/40 mb-2 block">Instructions spéciales</label>
                <textarea rows={3} value={userMessage} onChange={(e) => setUserMessage(e.target.value)} className="w-full bg-white/60 border-2 border-rustic-wood/5 p-4 rounded-xl outline-none focus:border-rustic-gold transition-colors text-base font-sans resize-none" placeholder="Horaires, allergies, porte..."></textarea>
             </div>

             {error && (
               <div className="flex items-center gap-3 text-red-700 bg-red-50 p-4 rounded-xl border border-red-200 text-xs font-bold animate-shake">
                <AlertCircle size={18} /> {error}
               </div>
             )}

             <button type="submit" disabled={subtotal < MIN_ORDER || isSubmitting} className="w-full py-8 bg-rustic-gold text-rustic-wood font-serif font-bold text-2xl md:text-3xl shadow-[0_20px_40px_-10px_rgba(197,160,89,0.5)] active:scale-[0.98] disabled:opacity-50 disabled:grayscale transition-all flex items-center justify-center gap-4">
                {isSubmitting ? "Envoi..." : `Valider Ma Part`}
                <ChevronRight className="md:w-8 md:h-8" />
             </button>
             
             {subtotal < MIN_ORDER && subtotal > 0 && (
               <p className="text-center text-[10px] uppercase tracking-widest font-bold text-red-600/60 pt-4">Commande minimum de {MIN_ORDER} CHF requise</p>
             )}
          </section>
        </form>
      </div>
    </div>
  );
};

export default OrderSection;
