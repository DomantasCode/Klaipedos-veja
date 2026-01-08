import React, { useState, useEffect } from 'react';
import { Shovel, Droplets, Truck, CheckCircle2, ArrowUpRight, X, ArrowRight, Calendar, Phone, Leaf, Bot } from 'lucide-react';

interface Service {
  id: string;
  icon: React.ReactElement;
  title: string;
  description: string;
  features: string[];
  color: string;
  textColor: string;
  fullDescription: string;
  process: { title: string; desc: string }[];
  image: string;
}

const ServiceModal: React.FC<{ service: Service; onClose: () => void }> = ({ service, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-6">
      <div
        className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-6xl h-full sm:h-[90vh] bg-white sm:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-fade-in-up">

        {/* Left: Image Panel (40%) */}
        <div className="w-full md:w-2/5 relative h-64 md:h-auto shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Mobile Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 md:hidden p-2 bg-white/90 rounded-full shadow-lg"
          >
            <X size={24} className="text-gray-900" />
          </button>

          {/* Icon Badge Overlay */}
          <div className="absolute bottom-8 left-8 right-8 text-white z-10 hidden md:block">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.color} mb-6 shadow-lg shadow-black/20 text-white`}>
              {React.cloneElement(service.icon, { size: 32 })}
            </div>
            <h2 className="font-serif text-4xl font-bold leading-tight drop-shadow-md">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Right: Content Panel (60%) */}
        <div className="w-full md:w-3/5 flex flex-col h-full bg-white relative">

          {/* Desktop Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-8 z-20 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-8 md:p-12">

            {/* Mobile Title (visible only on small screens) */}
            <div className="md:hidden mb-8">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${service.color} mb-4 text-white`}>
                {React.cloneElement(service.icon, { size: 24 })}
              </div>
              <h2 className="font-serif text-3xl font-bold text-gray-900">
                {service.title}
              </h2>
            </div>

            <div className="prose prose-lg text-gray-600 mb-10 max-w-none">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-4">Apie paslaugą</h3>
              <p className="leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Features (Tags) */}
            <div className="flex flex-wrap gap-3 mb-12">
              {service.features.map((feature, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-stone-50 border border-stone-100 text-sm font-semibold text-gray-600">
                  {feature}
                </span>
              ))}
            </div>

            {/* Process Timeline */}
            <div className="mb-12">
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-widest mb-8 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${service.color}`}></span>
                Darbų eiga
              </h3>

              <div className="relative border-l-2 border-stone-100 ml-3 space-y-10 pb-2">
                {service.process.map((step, idx) => (
                  <div key={idx} className="relative pl-8">
                    {/* Timeline Dot */}
                    <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white ${service.color} shadow-sm`}></div>

                    <h4 className="font-serif text-xl font-bold text-gray-800 mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Footer CTA */}
          <div className="p-8 border-t border-gray-100 bg-gray-50/50">
            <a
              href="tel:+37060000000"
              className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 ${service.color}`}
            >
              <Phone size={20} />
              <span>Teirautis telefonu</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: '01',
      icon: <SproutIcon />,
      title: 'Vejos įrengimas',
      description: 'Svajojate apie tobulą kilimą savo kieme? Atliekame visus darbus nuo pamatų...',
      features: ['Sportinė veja', 'Dekoratyvinė veja', 'Hidrosėja'],
      color: 'bg-nature-green',
      textColor: 'text-nature-green',
      fullDescription: 'Mes suprantame, kad veja nėra tik žolė – tai jūsų kiemo pamatas. Mūsų vejos įrengimo procesas paremtas ilgamete patirtimi ir moksliniais agronomijos principais. Naudojame tik sertifikuotus sėklų mišinius, kurie pritaikyti Lietuvos klimatui ir jūsų dirvožemio tipui (DLF ir kt.).',
      process: [
        { title: 'Sklypo paruošimas', desc: 'Senos velėnos pašalinimas, piktžolių naikinimas.' },
        { title: 'Dirvos gerinimas', desc: 'Juodžemio atvežimas, frezavimas, tręšimas.' },
        { title: 'Lyginimas', desc: 'Kruopštus sklypo išlyginimas ir volavimas.' },
        { title: 'Sėjimas', desc: 'Sėjimas profesionalia įranga kryžminiu būdu.' }
      ],
      image: "https://images.pexels.com/photos/1453799/pexels-photo-1453799.jpeg"
    },
    {
      id: '02',
      icon: <Droplets className="w-8 h-8" />,
      title: 'Laistymo sistemos',
      description: 'Pamirškite varginantį laistymą žarna. Projektuojame ir diegiame išmanias sistemas.',
      features: ['Automatinis valdymas', 'Lietaus jutikliai', 'Purkštukų reguliavimas'],
      color: 'bg-blue-600',
      textColor: 'text-blue-600',
      fullDescription: 'Automatizuota laistymo sistema – tai investicija, kuri atsiperka ne tik sutaupytu vandeniu, bet ir laiku. Diegiame tik patikimų gamintojų (Rain Bird, Hunter) įrangą. Mūsų sistemos turi išmaniuosius valdiklius, kurie reaguoja į oro sąlygas.',
      process: [
        { title: 'Projektavimas', desc: 'Sudaromas tikslus laistymo planas.' },
        { title: 'Montavimas', desc: 'Vamzdynų klojimas, purkštukų montavimas.' },
        { title: 'Programavimas', desc: 'Valdiklio suderinimas optimaliam režimui.' },
        { title: 'Testavimas', desc: 'Sistemos patikra ir apmokymas naudotis.' }
      ],
      image: "https://images.pexels.com/photos/4132326/pexels-photo-4132326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: '03',
      icon: <Bot className="w-8 h-8" />,
      title: 'Vejos roboto įrengimas',
      description: 'Diegiame ir programuojame vejos robotus. Paruošiame veją, kad robotas dirbtų be trikdžių.',
      features: ['Instaliavimas', 'Programavimas', 'Laidų klojimas'],
      color: 'bg-stone-800',
      textColor: 'text-stone-800',
      fullDescription: 'Vejos robotas – tai laisvė nuo pjovimo. Mes ne tik sumontuojame įrangą, bet ir paruošiame sklypą: išlyginame duobes, pašaliname kliūtis, paklojame perimetro laidus taip, kad robotas pasiektų kiekvieną kampelį.',
      process: [
        { title: 'Projektavimas', desc: 'Zonų nustatymas ir maršruto planavimas.' },
        { title: 'Laido klojimas', desc: 'Perimetro laido instaliavimas po žeme.' },
        { title: 'Montavimas', desc: 'Technikos ir stotelės pajungimas.' },
        { title: 'Paleidimas', desc: 'Programavimas ir sistemos testavimas.' }
      ],
      image: "https://images.pexels.com/photos/2203683/pexels-photo-2203683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: '04',
      icon: <Leaf className="w-8 h-8" />,
      title: 'Dekoratyvinis Apželdinimas',
      description: 'Kuriame jaukumą: sodiname medžius, klojame dekoratyvinius akmenukus, formuojame gėlynus.',
      features: ['Augalų sodinimas', 'Dekoratyvinė skalda', 'Akmenukai'],
      color: 'bg-emerald-600',
      textColor: 'text-emerald-600',
      fullDescription: 'Jaukus kiemas – tai ne tik lygi veja. Suteikiame sklypui gyvybės sodindami dekoratyvinius augalus, medžius ir kurdami stilingas zonas su akmenukais. Parinksime augalus, kurie dera prie jūsų dirvožemio ir apšvietimo.',
      process: [
        { title: 'Dizainas', desc: 'Augalų ir zonų parinkimas.' },
        { title: 'Paruošimas', desc: 'Duobių kasimas, grunto gerinimas.' },
        { title: 'Sodinimas', desc: 'Medžių ir krūmų sodinimas.' },
        { title: 'Dekoravimas', desc: 'Akmenukų pylimas, mulčiavimas.' }
      ],
      image: "https://images.pexels.com/photos/1094770/pexels-photo-1094770.jpeg"
    },
  ];

  return (
    <>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="md:w-2/3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nature-green/10 text-nature-green text-xs font-bold uppercase tracking-widest mb-6">
              <CheckCircle2 size={14} />
              <span>Ką mes darome</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-nature-dark leading-tight">
              Paslaugos, kurios kuria <br />
              <span className="text-nature-green italic">vertę jūsų namams</span>
            </h2>
          </div>
          <div className="md:w-1/3 text-right hidden md:block">
            <p className="text-gray-600 text-base max-w-sm ml-auto leading-relaxed">
              Viskas, ko reikia tobulam kiemui – nuo pirmo kastuvo iki paskutinio lašo vandens.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-full border border-stone-100 hover:border-transparent"
            >
              {/* Image Header */}
              <div className="relative h-56 overflow-hidden shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>


              </div>

              {/* Floating Icon */}
              <div className="absolute top-44 right-8 z-10">
                <div className={`w-16 h-16 rounded-2xl ${service.color} text-white flex items-center justify-center shadow-lg shadow-black/10 group-hover:scale-110 transition-transform duration-300 ring-4 ring-white`}>
                  {React.cloneElement(service.icon, { size: 28 })}
                </div>
              </div>

              {/* Content Body */}
              <div className="flex flex-col flex-grow p-8 pt-10">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3 group-hover:text-nature-green transition-colors leading-tight">
                  {service.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {service.description}
                </p>

                <div className="mt-auto">
                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.slice(0, 2).map((feature, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-stone-50 text-[10px] font-bold uppercase tracking-wide text-gray-500 group-hover:bg-nature-green/10 group-hover:text-nature-green transition-colors">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action */}
                  <div className="flex items-center justify-between pt-6 border-t border-stone-100">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-nature-dark transition-colors">
                      Sužinoti daugiau
                    </span>
                    <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-gray-400 group-hover:bg-nature-green group-hover:text-white transition-all duration-300">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </>
  );
};

// Custom Icon for 'Sprout' variation
const SproutIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 20h10" />
    <path d="M10 20c5.5-2.5.8-6.4 3-10" />
    <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
    <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
  </svg>
);

export default Services;