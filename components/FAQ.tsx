import React, { useState } from 'react';
import { ChevronDown, Plus, Minus, Phone } from 'lucide-react';

const faqData = [
  {
    question: "Kada geriausias laikas įsirengti veją?",
    answer: "Palankiausias laikas sėti veją yra pavasaris (nuo balandžio vidurio) arba ankstyvas ruduo (rugpjūčio pab. – rugsėjo vid.). Tuo metu dirva yra pakankamai šilta ir drėgna, o piktžolių augimas lėtesnis."
  },
  {
    question: "Ar būtina įsirengti automatinę laistymo sistemą?",
    answer: "Nors nebūtina, mes griežtai rekomenduojame. Be reguliaraus laistymo net pati kokybiškiausia sėkla ar ruloninė veja gali išdžiūti per savaitę karštą vasarą. Laistymo sistema taupo jūsų laiką ir vandenį."
  },
  {
    question: "Kiek laiko trunka vejos įrengimo darbai?",
    answer: "Standartiniam 6-10 arų sklypui paruošiamieji darbai ir sėjimas užtrunka apie 3-5 darbo dienas, priklausomai nuo esamo grunto būklės ir pasirinktų paslaugų paketo."
  },
  {
    question: "Kokią garantiją suteikiate?",
    answer: "Visiems inžineriniams darbams (laistymo sistemoms, robotų instaliacijai) suteikiame 2 metų garantiją. Vejos sudygimui garantuojame, jei laikomasi mūsų priežiūros rekomendacijų."
  },
  {
    question: "Ar atvežate juodžemį?",
    answer: "Taip, mes organizuojame kokybiško, sijoto juodžemio atvežimą. Prieš atvežant, įvertiname jūsų sklypo esamą gruntą ir patariame, koks sluoksnis yra reikalingas."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative py-24 bg-white text-gray-800 overflow-hidden border-t border-stone-100">
      {/* Subtle Dot Pattern Texture */}
      <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#d6d3d1 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Column: Sticky Title & Context */}
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nature-green/10 text-nature-green text-xs font-bold uppercase tracking-widest mb-6">
              <span className="text-xl leading-none">&?</span>
              <span>D.U.K.</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-nature-dark mb-6 leading-tight">
              Atsakymai į <br />
              svarbiausius klausimus
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Taupome jūsų laiką. Surinkome informaciją, kuri padės geriau suprasti apželdinimo procesą ir pasiruošti darbams.
            </p>

            <a href="tel:+37060000000" className="inline-flex items-center gap-2 text-nature-dark font-bold hover:text-nature-green transition-colors border-b-2 border-nature-dark/20 hover:border-nature-green pb-1">
              <Phone size={18} />
              <span>Turite klausimų? Skambinkite</span>
            </a>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:w-2/3 w-full">
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`group rounded-2xl transition-all duration-300 ${openIndex === index
                    ? 'bg-white shadow-xl shadow-stone-200/50 ring-1 ring-black/5'
                    : 'bg-stone-50 hover:bg-white border border-transparent hover:border-stone-200 hover:shadow-sm'
                    }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-start justify-between p-6 text-left focus:outline-none"
                  >
                    <div className="flex gap-4">
                      {/* Number indicator */}
                      <span className={`font-serif text-lg font-bold transition-colors ${openIndex === index ? 'text-nature-green' : 'text-stone-400'}`}>
                        0{index + 1}.
                      </span>
                      <span className={`font-bold text-lg md:text-xl pr-4 ${openIndex === index ? 'text-nature-dark' : 'text-gray-700'}`}>
                        {item.question}
                      </span>
                    </div>

                    <div className={`shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-nature-green' : 'text-gray-400 group-hover:text-nature-dark'}`}>
                      {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-8 pl-14 text-gray-600 leading-relaxed max-w-2xl">
                        <div className={`border-l-2 pl-4 ${openIndex === index ? 'border-nature-green' : 'border-transparent'}`}>
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FAQ;