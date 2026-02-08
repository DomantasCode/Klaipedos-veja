import React from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { projects } from '../data/projects';
import { CONTACT_INFO } from '../constants';
import { SlideUp, FadeIn, StaggerContainer, StaggerItem } from './Animators';

const BeforeAfterCard: React.FC<{ before: string; after: string; alt: string }> = ({ before, after, alt }) => {
  return (
    <div className="group relative w-full h-full min-h-[300px] md:min-h-[400px] flex overflow-hidden">
      {/* Before Side */}
      <div className="relative flex-1 h-full overflow-hidden border-r-2 border-white/20">
        <img
          src={before}
          alt={`Prieš - ${alt}`}
          className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 text-stone-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg backdrop-blur-md">
            Prieš
          </span>
        </div>
      </div>

      {/* After Side */}
      <div className="relative flex-1 h-full overflow-hidden">
        <img
          src={after}
          alt={`Po - ${alt}`}
          className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-nature-green text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
            Po
          </span>
        </div>
      </div>

      {/* Center Divider/Icon Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ImageIcon size={16} className="text-nature-dark" />
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12 md:mb-20">
        <SlideUp>
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-nature-green/5 border border-nature-green/10 text-nature-green text-xs font-bold uppercase tracking-widest mb-6">
            <ImageIcon size={14} />
            <span>Atlikti Darbai</span>
          </div>
          <h2 className="font-serif text-3xl md:text-6xl font-bold text-nature-dark mb-6 leading-tight">
            Pokyčiai, kurie <span className="text-nature-green italic">įkvepia</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Kiekvienas projektas – tai unikali istorija.
          </p>
        </SlideUp>
      </div>

      <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project) => (
          <StaggerItem key={project.id}>
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-warm-gray-100/50 flex flex-col">
              {/* Image Area */}
              <div className="aspect-[4/3] w-full">
                <BeforeAfterCard
                  before={project.beforeImg}
                  after={project.afterImg}
                  alt={project.title}
                />
              </div>

              {/* Text Area */}
              <div className="p-8 text-center bg-white relative z-20">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-serif font-bold text-nature-dark mb-0">
                  {project.title}
                </h3>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Facebook Link Button */}
      <div className="mt-16 text-center">
        <FadeIn delay={0.4}>
          <a
            href={CONTACT_INFO.socials.facebook.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-nature-dark px-8 py-4 rounded-full font-bold border border-stone-200 shadow-md hover:shadow-xl hover:border-nature-green hover:text-nature-green transition-all duration-300 group"
          >
            <span className="uppercase tracking-widest text-xs">Daugiau darbų Facebook</span>
            <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-nature-green group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </div>
          </a>
        </FadeIn>
      </div>
    </div>
  );
};

export default Gallery;