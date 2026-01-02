import React from 'react';
import { Award, Clock, Heart, Sprout } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="container mx-auto relative">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                {/* Left Column: Visuals (Overlapping Composition) */}
                <div className="lg:w-1/2 relative">
                    {/* Abstract Background Decoration */}
                    <div className="absolute -top-12 -left-12 w-64 h-64 bg-nature-green/5 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-earth-brown/5 rounded-full blur-3xl -z-10"></div>

                    {/* Main Image */}
                    <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                        <img
                            src="https://picsum.photos/seed/landscaper_pro/600/800"
                            alt="Professional Landscaper"
                            className="w-full h-[500px] object-cover"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-nature-dark/60 to-transparent opacity-60"></div>
                    </div>

                    {/* Secondary Floating Image */}
                    <div className="absolute -bottom-12 -right-12 w-48 h-48 md:w-64 md:h-64 rounded-[2rem] overflow-hidden border-[8px] border-stone-50 shadow-xl z-20 hidden md:block animate-fade-in-up">
                        <img
                            src="https://picsum.photos/seed/grass_macro_detail/400/400"
                            alt="Green Grass Detail"
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                        />
                    </div>

                    {/* Stats Badge - Floating Top Left */}
                    <div className="absolute top-8 -left-4 md:-left-12 bg-nature-dark text-white p-6 rounded-2xl shadow-glow z-30 max-w-[180px] border border-white/10 backdrop-blur-sm">
                        <div className="flex items-baseline gap-1 mb-1">
                            <span className="text-4xl font-serif font-bold text-nature-light">12</span>
                            <span className="text-xl font-bold text-nature-green">+</span>
                        </div>
                        <div className="text-xs font-medium uppercase tracking-wider opacity-80 leading-relaxed text-stone-300">
                            Metų sėkmingos patirties
                        </div>
                    </div>

                    {/* Texture Pattern */}
                    <div className="absolute -top-8 -right-8 z-0 opacity-20">
                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="2" className="text-earth-brown" fill="currentColor" />
                            </pattern>
                            <rect width="100" height="100" fill="url(#dots)" />
                        </svg>
                    </div>
                </div>

                {/* Right Column: Content */}
                <div className="lg:w-1/2">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nature-green/10 text-nature-green text-xs font-bold uppercase tracking-widest mb-6">
                        <Sprout size={14} />
                        <span>Mūsų Istorija</span>
                    </div>

                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-nature-dark mb-8 leading-tight">
                        Kuriame harmoniją tarp <br />
                        <span className="relative inline-block text-nature-green">
                            žmogaus ir gamtos
                            <svg className="absolute w-full h-3 -bottom-2 left-0 text-nature-light/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h2>

                    <div className="prose prose-lg text-gray-600 mb-10">
                        <p className="leading-relaxed mb-6">
                            „Klaipėdos veja“ – tai daugiau nei apželdinimo paslaugos. Tai šeimos verslas, gimęs iš aistros tvarkingai, estetiškai ir tvariai aplinkai. Mes suprantame, kad kiemas yra namų tąsa – ramybės oazė, kurioje kuriate prisiminimus.
                        </p>
                        <p className="leading-relaxed font-light">
                            Mūsų filosofija paprasta: <strong>jokių kompromisų kokybei</strong>. Naudojame tik sertifikuotas sėklas, profesionalias laistymo sistemas ir laiko patikrintas dirvos paruošimo metodikas, kad jūsų veja džiugintų ne vienerius metus.
                        </p>
                    </div>

                    {/* Feature Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-earth-brown/30">
                            <div className="bg-earth-brown/10 p-3 rounded-xl text-earth-brown group-hover:bg-earth-brown group-hover:text-white transition-colors">
                                <Award size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-nature-dark text-lg mb-1">Kokybės garantija</h4>
                                <p className="text-sm text-gray-500 leading-snug">Suteikiame oficialią garantiją visiems atliktiems darbams.</p>
                            </div>
                        </div>

                        <div className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-nature-green/30">
                            <div className="bg-nature-green/10 p-3 rounded-xl text-nature-green group-hover:bg-nature-green group-hover:text-white transition-colors">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-nature-dark text-lg mb-1">Tikslūs terminai</h4>
                                <p className="text-sm text-gray-500 leading-snug">Gerbiame jūsų laiką – pradedame ir baigiame sutartu laiku.</p>
                            </div>
                        </div>
                    </div>

                    {/* Quote */}
                    <div className="mt-10 pt-8 border-t border-gray-200">
                        <blockquote className="flex gap-4">
                            <div className="text-nature-light opacity-50 text-4xl font-serif">"</div>
                            <div className="italic text-gray-500 font-medium text-lg pt-2">
                                Mūsų tikslas – ne tik pasėti žolę, bet ir sukurti erdvę, kurioje norisi būti.
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;