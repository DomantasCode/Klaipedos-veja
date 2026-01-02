import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-nature-dark text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-6">Klaipėdos veja</h3>
            <p className="text-stone-400 max-w-sm mb-6">
              Profesionalios apželdinimo paslaugos, skirtos kurti tvarias, gražias ir funkcionalias žaliąsias erdves Klaipėdos regiono namams.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-nature-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-nature-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-nature-green transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Paslaugos</h4>
            <ul className="space-y-3 text-stone-400">
              <li><a href="#services" className="hover:text-nature-light transition-colors">Vejos įrengimas</a></li>
              <li><a href="#services" className="hover:text-nature-light transition-colors">Laistymo sistemos</a></li>
              <li><a href="#services" className="hover:text-nature-light transition-colors">Juodžemio atvežimas</a></li>
              <li><a href="#services" className="hover:text-nature-light transition-colors">Apželdinimas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Kontaktai</h4>
            <ul className="space-y-3 text-stone-400">
              <li>+370 600 00000</li>
              <li>Klaipėda, Lietuva</li>
              <li>I-V: 08:00 - 18:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Klaipėdos veja. Visos teisės saugomos.</p>
          <p>Sukurta su meile gamtai.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;