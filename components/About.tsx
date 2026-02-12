import React from 'react';
import { Award, Clock, Heart, Sprout } from 'lucide-react';
import { SlideUp } from './Animators';

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
                            src="/about-main-real-bright.png"
                            alt="Mūsų komanda"
                            className="w-full h-[500px] object-cover"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-nature-dark/60 to-transparent opacity-60"></div>
                    </div>

                    {/* Secondary Floating Image */}
                    <div className="absolute -bottom-12 -right-12 w-48 h-48 md:w-64 md:h-64 rounded-[2rem] overflow-hidden border-[8px] border-stone-50 shadow-xl z-20 hidden md:block">
                        <img
                            src="/about-detail-pro.JPG"
                            alt="Green Grass Detail"
                            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                        />
                    </div>

                    {/* Stats Badge - Floating Top Left */}
                    <div className="absolute top-8 -left-4 md:-left-12 bg-nature-dark text-white p-6 rounded-2xl shadow-glow z-30 max-w-[180px] border border-white/10 backdrop-blur-sm">
                        <div className="flex iteredo thatms-baseline gap-1 mb-1">
                            <span className="text-4xl font-serif font-bold text-nature-light">10</span>
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
                    <SlideUp>
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
                                „Klaipėdos veja“ – tai daugiau nei apželdinimo paslaugos. Tai verslas, kuriam svarbi estetiška ir tvarkinga aplinka. Mes suprantame, kad kiemas kuria Jūsų namų jaukumą ir pridėtinę vertę.
                            </p>
                            <p className="leading-relaxed">
                                Mūsų filosofija paprasta: <strong>jokių kompromisų kokybei</strong>. Naudojame tik sertifikuotas sėklas, profesionalias laistymo sistemas ir laiko patikrintas dirvos paruošimo metodikas, kad jūsų veja džiugintų ne vienerius metus.
                            </p>
                        </div>
                    </SlideUp>

                    {/* Feature Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <SlideUp delay={0.1}>
                            <div className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-earth-brown/30">
                                <div className="bg-earth-brown/10 p-3 rounded-xl text-earth-brown group-hover:bg-earth-brown group-hover:text-white transition-colors">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-nature-dark text-lg mb-1">Atsakomybė</h4>
                                    <p className="text-sm text-gray-500 leading-snug">Atsakome už rezultatą. Visada padedame iškilus klausimams.</p>
                                </div>
                            </div>
                        </SlideUp>

                        <SlideUp delay={0.2}>
                            <div className="group flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-nature-green/30">
                                <div className="bg-nature-green/10 p-3 rounded-xl text-nature-green group-hover:bg-nature-green group-hover:text-white transition-colors">
                                    <Heart size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-nature-dark text-lg mb-1">Dėmesys detalėms</h4>
                                    <p className="text-sm text-gray-500 leading-snug">Neskubame. Dirbame kruopščiai iki geriausio rezultato.</p>
                                </div>
                            </div>
                        </SlideUp>
                    </div>

                    {/* Quote */}
                    <div className="mt-10 pt-8 border-t border-gray-200">
                        <SlideUp delay={0.4}>
                            <blockquote className="flex gap-4">
                                <div className="text-nature-light opacity-50 text-4xl font-serif">"</div>
                                <div className="italic text-gray-500 font-medium text-lg pt-2">
                                    Mūsų tikslas – ne tik pasėti žolę, bet ir sukurti erdvę, kurioje norisi būti.
                                </div>
                            </blockquote>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;