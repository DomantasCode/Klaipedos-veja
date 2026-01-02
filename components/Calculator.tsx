import React, { useState } from 'react';
import { Calculator as CalcIcon, ArrowRight, Sprout, Layers, Info, Droplets, Bot, Check, Ruler, Clock, ShieldCheck } from 'lucide-react';

const Calculator: React.FC = () => {
    const [area, setArea] = useState<number>(300); // Always stored in m2
    const [unit, setUnit] = useState<'m2' | 'are'>('m2');

    type PackageType = 'basic' | 'irrigation' | 'robot';
    const [selectedPackage, setSelectedPackage] = useState<PackageType>('irrigation');

    // Pricing Constants
    const LAWN_RATE = 4.5;
    const IRRIGATION_RATE = 7.5;

    const getRobotPrice = (m2: number) => {
        if (m2 < 300) return 1000;
        if (m2 < 900) return 1700;
        return 2600;
    };

    const calculateTotal = () => {
        let total = area * LAWN_RATE;
        if (selectedPackage === 'basic') return total;
        total += area * IRRIGATION_RATE;
        if (selectedPackage === 'irrigation') return total;
        total += getRobotPrice(area);
        return total;
    };

    const totalCost = calculateTotal();

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setArea(parseInt(e.target.value));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseFloat(e.target.value);
        if (!isNaN(val) && val >= 0) {
            if (unit === 'are') {
                setArea(Math.round(val * 100));
            } else {
                setArea(Math.round(val));
            }
        }
    };

    // Display value calculation
    const displayValue = unit === 'm2' ? area : parseFloat((area / 100).toFixed(2));

    return (
        <div className="relative py-24 bg-nature-dark text-stone-warm overflow-hidden">
            {/* Abstract Background Elements - Adjusted to be more subtle and better positioned */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-nature-green/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-earth-brown/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col xl:flex-row gap-16 items-start">

                    {/* Left Column: Context & Benefits - Widened and enriched */}
                    <div className="xl:w-5/12 pt-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-nature-light text-xs font-bold uppercase tracking-widest mb-6 border border-white/5">
                            <Sprout size={14} />
                            <span>Investicija į namus</span>
                        </div>
                        <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 leading-tight text-white">
                            Vienas kiemas,<br /> trys sprendimai.
                        </h2>
                        <p className="text-stone-300 text-lg mb-10 leading-relaxed font-light opacity-90">
                            Pasirinkite komplektaciją, kuri atitinka jūsų lūkesčius. Mūsų skaičiuoklė padeda greitai įvertinti projekto biudžetą, tačiau kiekvienas sklypas yra unikalus.
                        </p>

                        {/* Benefits List */}
                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-white/10 p-2 rounded-lg text-nature-light">
                                    <Ruler size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Tikslūs matavimai</h4>
                                    <p className="text-stone-400 text-sm mt-1">
                                        Dirbame naudodami lazerinę įrangą, todėl užtikriname tikslų nuolydžių formavimą ir vandens nutekėjimą.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-white/10 p-2 rounded-lg text-nature-light">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Garantija darbams</h4>
                                    <p className="text-stone-400 text-sm mt-1">
                                        Suteikiame 2 metų garantiją visiems įrengimo darbams ir naudojamai įrangai (laistymo sistemoms, robotams).
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-white/10 p-2 rounded-lg text-nature-light">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Greitas įgyvendinimas</h4>
                                    <p className="text-stone-400 text-sm mt-1">
                                        Standartinį 5-10 arų sklypą pilnai įrengiame per 5-7 darbo dienas.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="hidden xl:block bg-gradient-to-r from-white/10 to-transparent p-1 rounded-2xl">
                            <div className="bg-nature-dark/80 backdrop-blur-md rounded-xl p-6 border border-white/10">
                                <div className="flex items-center gap-3 mb-2">
                                    <Info size={18} className="text-earth-brown" />
                                    <span className="font-bold text-white text-sm">Sutaupykite su pilnu paketu</span>
                                </div>
                                <p className="text-xs text-stone-300 leading-relaxed">
                                    Įsirengiant laistymo sistemą ir robotą kartu su veja, sutaupote iki 20% bendros darbų kainos, nes kasimo ir instaliacijos darbai atliekami vienu metu.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interactive Tool - Widened */}
                    <div className="xl:w-7/12 w-full">
                        <div className="bg-stone-warm rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">

                            {/* Input Panel (Light) */}
                            <div className="p-8 md:p-10 md:w-3/5 text-gray-800 flex flex-col">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 bg-nature-dark/5 rounded-xl text-nature-dark">
                                            <CalcIcon size={24} />
                                        </div>
                                        <h3 className="font-serif text-2xl text-nature-dark font-bold">Sąmata</h3>
                                    </div>

                                    {/* Unit Toggle */}
                                    <div className="flex bg-gray-100 rounded-lg p-1.5 border border-gray-200">
                                        <button
                                            onClick={() => setUnit('m2')}
                                            className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${unit === 'm2' ? 'bg-white shadow-sm text-nature-dark ring-1 ring-black/5' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            m²
                                        </button>
                                        <button
                                            onClick={() => setUnit('are')}
                                            className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${unit === 'are' ? 'bg-white shadow-sm text-nature-dark ring-1 ring-black/5' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            arai
                                        </button>
                                    </div>
                                </div>

                                {/* Area Input */}
                                <div className="mb-10 bg-gray-50 p-6 rounded-[2rem] border border-gray-100">
                                    <div className="flex justify-between items-end mb-4">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                            {unit === 'm2' ? 'Vejos plotas' : 'Sklypo plotas'}
                                        </label>
                                        <div className="flex items-baseline gap-1 text-nature-dark border-b-2 border-gray-200 focus-within:border-nature-green transition-colors bg-white px-2 rounded-t-md">
                                            <input
                                                type="number"
                                                value={displayValue}
                                                onChange={handleInputChange}
                                                className="w-28 text-right text-4xl font-serif font-bold bg-transparent focus:outline-none py-1"
                                            />
                                            <span className="text-base font-medium text-gray-400 pb-2">{unit === 'm2' ? 'm²' : 'a'}</span>
                                        </div>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="2000"
                                        step="10"
                                        value={area}
                                        onChange={handleSliderChange}
                                        className="w-full accent-nature-green h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                    />
                                    <div className="flex justify-between text-[10px] text-gray-400 mt-2 font-medium uppercase tracking-wider">
                                        <span>Mažas (0 m²)</span>
                                        <span>Didelis (20 a)</span>
                                    </div>
                                </div>

                                {/* Package Selection */}
                                <div className="flex-grow flex flex-col gap-3">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 ml-1">Pasirinkite paslaugų paketą</label>

                                    {/* Option 1: Basic */}
                                    <button
                                        onClick={() => setSelectedPackage('basic')}
                                        className={`group flex items-center gap-4 p-4 rounded-2xl text-left border transition-all duration-300 ${selectedPackage === 'basic' ? 'border-nature-green bg-nature-green/5 ring-1 ring-nature-green shadow-sm' : 'border-gray-100 hover:border-nature-green/30 hover:bg-gray-50'}`}
                                    >
                                        <div className={`w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${selectedPackage === 'basic' ? 'border-nature-green bg-nature-green text-white' : 'border-gray-200 text-gray-400 group-hover:border-nature-green/50 group-hover:text-nature-green'}`}>
                                            <Sprout size={20} />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="font-bold text-nature-dark text-base">Vejos įrengimas</div>
                                            <div className="text-xs text-gray-500 mt-0.5">Profesionalus paruošimas + sėjimas.</div>
                                        </div>
                                        {selectedPackage === 'basic' && <div className="w-4 h-4 text-nature-green"><Check size={16} strokeWidth={3} /></div>}
                                    </button>

                                    {/* Option 2: Irrigation */}
                                    <button
                                        onClick={() => setSelectedPackage('irrigation')}
                                        className={`group flex items-center gap-4 p-4 rounded-2xl text-left border transition-all duration-300 ${selectedPackage === 'irrigation' ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500 shadow-sm' : 'border-gray-100 hover:border-blue-300 hover:bg-blue-50/30'}`}
                                    >
                                        <div className={`w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${selectedPackage === 'irrigation' ? 'border-blue-500 bg-blue-500 text-white' : 'border-gray-200 text-gray-400 group-hover:border-blue-300 group-hover:text-blue-500'}`}>
                                            <Droplets size={20} />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="font-bold text-gray-900 text-base">Veja + Laistymas</div>
                                            <div className="text-xs text-gray-500 mt-0.5">Auto. sistema (Rain Bird / Hunter).</div>
                                        </div>
                                        {selectedPackage === 'irrigation' && <div className="w-4 h-4 text-blue-500"><Check size={16} strokeWidth={3} /></div>}
                                    </button>

                                    {/* Option 3: Robot */}
                                    <button
                                        onClick={() => setSelectedPackage('robot')}
                                        className={`group flex items-center gap-4 p-4 rounded-2xl text-left border transition-all duration-300 ${selectedPackage === 'robot' ? 'border-earth-brown bg-earth-brown/5 ring-1 ring-earth-brown shadow-sm' : 'border-gray-100 hover:border-earth-brown/30 hover:bg-earth-brown/5'}`}
                                    >
                                        <div className={`w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${selectedPackage === 'robot' ? 'border-earth-brown bg-earth-brown text-white' : 'border-gray-200 text-gray-400 group-hover:border-earth-brown/50 group-hover:text-earth-brown'}`}>
                                            <Bot size={20} />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="font-bold text-earth-brown text-base flex items-center gap-2">
                                                Pilnas paketas
                                                <span className="text-[10px] bg-earth-brown text-white px-2 py-0.5 rounded-full uppercase font-bold tracking-wide">Populiariausias</span>
                                            </div>
                                            <div className="text-xs text-gray-500 mt-0.5">Veja + Laistymas + Robotas vejapjovė.</div>
                                        </div>
                                        {selectedPackage === 'robot' && <div className="w-4 h-4 text-earth-brown"><Check size={16} strokeWidth={3} /></div>}
                                    </button>
                                </div>
                            </div>

                            {/* Summary Panel (Dark/Accent) */}
                            <div className="bg-stone-dark md:w-2/5 p-8 md:p-10 flex flex-col justify-between border-l border-white relative overflow-hidden">
                                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply pointer-events-none"></div>

                                <div className="relative z-10">
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                                        <Layers size={14} />
                                        Sąmatos detalizacija
                                    </p>

                                    <div className="border-b-2 border-dashed border-gray-300 pb-8 mb-8">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-4xl lg:text-5xl font-serif font-bold text-nature-dark">
                                                €{Math.round(totalCost).toLocaleString()}
                                            </span>
                                        </div>
                                        <p className="text-xs text-earth-brown font-bold mt-2 uppercase tracking-wide">
                                            Preliminari projekto kaina
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between text-sm items-center">
                                            <span className="text-gray-600 flex items-center gap-2 font-medium"><Sprout size={16} className="text-nature-green" /> Vejos įrengimas</span>
                                            <span className="font-bold text-gray-800">€{(area * LAWN_RATE).toLocaleString()}</span>
                                        </div>

                                        {(selectedPackage === 'irrigation' || selectedPackage === 'robot') && (
                                            <div className="flex justify-between text-sm items-center animate-fade-in">
                                                <span className="text-gray-600 flex items-center gap-2 font-medium"><Droplets size={16} className="text-blue-500" /> Laistymo sistema</span>
                                                <span className="font-bold text-gray-800">€{(area * IRRIGATION_RATE).toLocaleString()}</span>
                                            </div>
                                        )}

                                        {selectedPackage === 'robot' && (
                                            <div className="flex justify-between text-sm items-center animate-fade-in">
                                                <span className="text-gray-600 flex items-center gap-2 font-medium"><Bot size={16} className="text-earth-brown" /> Robotas vejapjovė</span>
                                                <span className="font-bold text-gray-800">€{getRobotPrice(area).toLocaleString()}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="relative z-10 mt-8">
                                    <a
                                        href="#contact"
                                        className="w-full bg-nature-dark text-white font-bold py-4 rounded-full hover:bg-earth-brown transition-all shadow-lg hover:shadow-earth-brown/30 flex items-center justify-center gap-2 group"
                                    >
                                        Užsakyti konsultaciją
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                    <p className="text-[10px] text-gray-400 mt-4 text-center leading-relaxed mx-auto max-w-[220px]">
                                        * Kaina preliminari. Tiksli sąmata pateikiama po sklypo apžiūros ir matavimų.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;