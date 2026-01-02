import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >

          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-nature-dark/90"></div>

        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 text-center text-white">
        <div className="animate-fade-in-up">
          <span className="inline-block px-4 py-2 mb-6 border border-white/30 rounded-full text-xs font-bold tracking-widest uppercase bg-white/10 backdrop-blur-md">
            Apželdinimas Vakarų Lietuvoje
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
            Tobula veja ir <br />
            <span className="text-nature-light">laistymo sistemos</span>
          </h1>

          {/* Reduced max-width to max-w-lg to make lines shorter as requested */}
          <p className="text-lg md:text-xl text-stone-200 max-w-lg mx-auto mb-10 leading-relaxed font-light">
            Nuo sklypo paruošimo iki automatinio laistymo – viskas iš vienų rankų. Profesionaliai, greitai ir su garantija Klaipėdoje bei rajone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Changed to Call Action */}
            <a
              href="tel:+37060000000"
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

      {/* Scroll Down Indicator - Changed to Arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowRight className="rotate-90 text-white/70" size={32} />
      </div>
    </div>
  );
};

export default Hero;