import React from 'react';
import { CONTACT_INFO, NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  const { facebook } = CONTACT_INFO.socials;

  return (
    <footer className="bg-nature-dark text-white pt-12 md:pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 mb-12">

          {/* Column 1: Brand & Socials */}
          <div className="md:col-span-2 lg:col-span-4">
            <h3 className="font-serif text-xl md:text-2xl font-bold mb-6">Klaipėdos veja</h3>
            <p className="text-stone-400 text-sm mb-6 leading-relaxed">
              Profesionalios apželdinimo paslaugos, skirtos kurti tvarias, gražias ir funkcionalias žaliąsias erdves Klaipėdos regiono namams.
            </p>
            <div className="flex gap-4">
              <a
                href={facebook.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-nature-green transition-colors"
                aria-label="Facebook"
              >
                <facebook.icon size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6">Nuorodos</h4>
            <ul className="space-y-3 text-stone-400 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-nature-light transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6">Paslaugos</h4>
            <ul className="space-y-3 text-stone-400 text-sm">
              <li><a href="#services" className="hover:text-nature-light transition-colors">Vejos įrengimas</a></li>
              <li><a href="#services" className="hover:text-nature-light transition-colors">Laistymo sistemos</a></li>
              <li><a href="#services" className="hover:text-nature-light transition-colors">Vejos priežiūra</a></li>
              <li><a href="#services" className="hover:text-nature-light transition-colors">Dekoratyvinis apželdinimas</a></li>
            </ul>
          </div>

          {/* Column 4-5: Contact Info (Split) */}
          <div className="md:col-span-2 lg:col-span-4">
            <h4 className="font-bold text-lg mb-6 text-left lg:text-center">Kontaktai</h4>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:justify-center text-left">
              <ul className="space-y-4 text-stone-400 text-sm">
                <li>
                  <span className="block text-white font-bold mb-1">Telefonas:</span>
                  <a href={CONTACT_INFO.phone.href} className="hover:text-white transition-colors">{CONTACT_INFO.phone.display}</a>
                </li>
                <li>
                  <span className="block text-white font-bold mb-1">El. paštas:</span>
                  <a href={CONTACT_INFO.email.href} className="hover:text-white transition-colors">{CONTACT_INFO.email.display}</a>
                </li>
                <li>
                  <span className="block text-white font-bold mb-1">Lokacija:</span>
                  {CONTACT_INFO.address.text}
                </li>
              </ul>

              <ul className="space-y-4 text-stone-400 text-sm">
                <li>
                  <span className="block text-white font-bold mb-1">Darbo laikas:</span>
                  {CONTACT_INFO.hours.text}
                </li>
                <li>
                  <span className="block text-white font-bold mb-1">Įmonės kodas:</span>
                  {CONTACT_INFO.companyCode}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Klaipėdos veja. Visos teisės saugomos.</p>
          <p>
            Svetainė sukurta <a href="https://www.mozetech.lt" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors">MozeTech</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;