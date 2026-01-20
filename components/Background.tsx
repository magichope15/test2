
import React, { useState, useEffect } from 'react';

const Background: React.FC = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  
  const animatedUrl = "https://i.ibb.co/rRg6TwcL/Video-Project-ezgif-com-crop.webp";
  const staticUrl = "https://i.ibb.co/Y4DckC8M/93e36db3cda622d03c01708fe28d3fc5.jpg";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Imagen estática de base */}
      <img 
        src={staticUrl} 
        alt="" 
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* WebP animado que se desvanece */}
      <img 
        src={animatedUrl} 
        alt="" 
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out scale-105 ${
          showAnimation ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-rustic-wood/90" />
      
      {/* Textura sutil */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/p6.png')]"></div>
    </div>
  );
};

export default Background;
