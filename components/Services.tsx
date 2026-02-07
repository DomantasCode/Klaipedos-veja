import React, { useState, useEffect } from 'react';
import { Phone, CheckCircle2, ArrowUpRight, X, Bot } from 'lucide-react';
import { services } from '../data/services';
import { Service } from '../types';
import { CONTACT_INFO } from '../constants';

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
              {/* Render icon directly if it's a ReactElement */}
              {React.isValidElement(service.icon) ? React.cloneElement(service.icon as React.ReactElement, { size: 32 } as any) : service.icon}
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
                {React.isValidElement(service.icon) ? React.cloneElement(service.icon as React.ReactElement, { size: 24 } as any) : service.icon}
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
                <span key={i} className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs font-bold uppercase tracking-wider text-stone-600 shadow-sm">
                  {feature}
                </span>
              ))}
            </div>

            {/* Process / Services List */}
            <div className="mb-12">
              <h3 className="text-lg font-bold text-gray-900 uppercase tracking-widest mb-8 flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${service.color}`}></span>
                {service.processTitle || 'Darbų eiga'}
              </h3>

              <div className={`relative ${service.processTitle ? 'space-y-6' : 'border-l-2 border-stone-100 ml-3 space-y-10 pb-2'}`}>
                {service.process.map((step, idx) => (
                  <div key={idx} className={`relative ${service.processTitle ? 'pl-0 bg-stone-50 p-8 rounded-[2rem] hover:bg-stone-100 transition-colors' : 'pl-8'}`}>
                    {/* Timeline Dot only if no custom title */}
                    {!service.processTitle && (
                      <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white ${service.color} shadow-sm`}></div>
                    )}

                    <h4 className={`font-serif text-xl font-bold text-gray-800 mb-3 ${service.processTitle ? 'pl-5' : ''}`}>
                      {step.title}
                    </h4>
                    <p className={`text-gray-500 leading-relaxed ${service.processTitle ? 'pl-5' : ''}`}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sticky Footer CTA */}
          <div className="p-8 border-t border-gray-100 bg-gray-50/50">
            <a
              href={CONTACT_INFO.phone.href}
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
              Visapusiški sprendimai Jūsų kiemui. Nuo vejos įrengimo ir laistymo sistemų iki apželdinimo bei nuolatinės priežiūros.
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
                  {React.isValidElement(service.icon) ? React.cloneElement(service.icon as React.ReactElement, { size: 28 } as any) : service.icon}
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
                    {service.features.slice(0, service.id === '03' ? 3 : 2).map((feature, i) => (
                      <span key={i} className="px-3 py-1 bg-white border border-stone-200 rounded-md text-[10px] font-bold uppercase tracking-wider text-stone-500 shadow-sm group-hover:border-nature-green/30 group-hover:text-nature-green transition-all">
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

        {/* Robot Installation Partner Section - Compact Version */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-stone-50 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 border border-stone-100 group hover:shadow-lg transition-all duration-300">

            {/* Icon */}
            <div className="w-12 h-12 bg-white rounded-full flex-shrink-0 flex items-center justify-center shadow-sm text-stone-600">
              <Bot size={24} />
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-serif text-lg font-bold text-gray-800 mb-1">
                Planuojate įsigyti vejos robotą?
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Profesionalus parinkimas ir instaliavimas.
              </p>
            </div>

            {/* Contact - Compact */}
            <div className="flex flex-col items-center md:items-end gap-1 flex-shrink-0 border-t md:border-t-0 md:border-l border-stone-200 pt-4 md:pt-0 md:pl-6 w-full md:w-auto">
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Meistro kontaktai</span>
              <a href={CONTACT_INFO.phone.href} className="flex items-center gap-2 text-nature-green font-bold hover:text-nature-dark transition-colors text-base">
                <Phone size={16} />
                {CONTACT_INFO.phone.display}
              </a>
            </div>

          </div>
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

export default Services;