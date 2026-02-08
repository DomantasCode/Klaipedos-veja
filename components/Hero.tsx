import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';


const Hero: React.FC = () => {
  return (
    <div className="relative h-[92vh] md:h-screen min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/hero-lawn.png"
          className="w-full h-full object-cover scale-125"
        >
          <source src="/Cinematic_Soil_Leveling_Video_Generation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-nature-dark/90"></div>

        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 text-center text-white px-4">
        <div className="relative z-10">
          <span className="inline-block px-4 py-2 mb-6 border border-white/30 rounded-full text-xs font-bold tracking-widest uppercase bg-white/10 backdrop-blur-md">
            Dirbame Klaipėdos regione
          </span>

          <h1 className="font-serif text-4xl md:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
            Vejos įrengimas ir <br />
            <span className="text-nature-light">laistymo sistemos</span>
          </h1>

          {/* Reduced max-width to max-w-lg to make lines shorter as requested */}
          <p className="text-lg md:text-xl text-stone-200 max-w-lg mx-auto mb-8 md:mb-10 leading-relaxed font-light">
            Užtikriname kokybę ir ilgaamžį rezultatą, o kartu teikiame ir priežiūros bei dekoratyvinio apželdinimo paslaugas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Changed to Call Action */}
            <a
              href={CONTACT_INFO.phone.href}
              className="px-8 py-4 bg-nature-light text-white rounded-full font-bold text-lg hover:bg-green-500 transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-green-500/30 ring-4 ring-transparent hover:ring-nature-light/30"
            >
              Paskambinti
              <Phone size={20} />
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-nature-dark transition-all"
            >
              Mūsų paslaugos
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator - Hidden on Mobile */}
      <div className="hidden md:block absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <ArrowRight className="rotate-90 text-white/70" size={32} />
        </div>
      </div>
    </div>
  );
};

export default Hero;