import React from 'react';
import { Phone, MapPin, Calendar, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto py-20">
      <div className="bg-nature-dark rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12 border border-white/5">

        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nature-green/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-earth-brown/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none"></div>

        {/* Left Content */}
        <div className="relative z-10 text-center lg:text-left max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-nature-light text-xs font-bold uppercase tracking-widest mb-6 border border-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-nature-light animate-pulse"></span>
            Nemokama konsultacija
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Turite klausimų? <br />
            <span className="text-stone-300">Pasikalbėkime apie jūsų kiemą.</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6 text-stone-400 mt-8">
            <div className="flex items-center gap-3 bg-white/5 px-5 py-3 rounded-xl border border-white/5">
              <MapPin size={20} className="text-nature-light" />
              <span className="text-sm font-medium text-stone-300">Klaipėda ir rajonas</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 px-5 py-3 rounded-xl border border-white/5">
              <Calendar size={20} className="text-nature-light" />
              <span className="text-sm font-medium text-stone-300">I-V: 08:00 - 18:00</span>
            </div>
          </div>
        </div>

        {/* Right Action */}
        <div className="relative z-10 shrink-0 w-full lg:w-auto flex flex-col items-center">
          <a
            href="tel:+37060000000"
            className="group w-full sm:w-auto relative flex items-center justify-center gap-5 bg-white text-nature-dark px-12 py-7 rounded-full font-bold text-2xl hover:bg-earth-brown hover:text-white transition-all duration-300 shadow-2xl hover:shadow-earth-brown/40 hover:-translate-y-1"
          >
            <div className="relative">
              <Phone className="w-8 h-8 relative z-10" />
              <div className="absolute inset-0 bg-nature-green/20 rounded-full scale-150 animate-ping opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span>+370 600 00000</span>
          </a>
          <p className="text-stone-500 text-xs mt-4 flex items-center gap-1 opacity-60">
            Atsakome darbo valandomis <ArrowRight size={10} />
          </p>
        </div>

      </div>
    </div>
  );
};

export default Contact;