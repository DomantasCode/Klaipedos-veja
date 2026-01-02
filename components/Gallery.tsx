import React, { useState } from 'react';
import { ArrowLeftRight, Image as ImageIcon } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  beforeImg: string;
  afterImg: string;
}

// Reduced to 2 projects
const projects: Project[] = [
  {
    id: 1,
    title: "Vejos įrengimas privačiame kieme",
    category: "Vejos įrengimas",
    // Using grayscale/sepia filters on placeholder seeds to simulate 'before' state
    beforeImg: "https://picsum.photos/seed/muddy1/800/600?grayscale",
    afterImg: "https://picsum.photos/seed/lawn1/800/600",
  },
  {
    id: 3,
    title: "Sklypo paruošimas ir apželdinimas",
    category: "Aplinkos tvarkymas",
    beforeImg: "https://picsum.photos/seed/dirt3/800/600?grayscale",
    afterImg: "https://picsum.photos/seed/grass5/800/600",
  }
];

const ComparisonSlider: React.FC<{ before: string; after: string; alt: string }> = ({ before, after, alt }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleDrag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[2rem] shadow-xl group select-none bg-stone-100 ring-1 ring-stone-200">
      {/* After Image (Background) - The 'Green' Result */}
      <img
        src={after}
        alt={`Po ${alt}`}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute top-4 right-4 bg-nature-green/90 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm shadow-sm pointer-events-none z-10">
        Po
      </div>

      {/* Before Image (Foreground - Clipped) - The 'Work' Start */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={before}
          alt={`Prieš ${alt}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-stone-800/80 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm shadow-sm pointer-events-none z-10">
          Prieš
        </div>
      </div>

      {/* Slider Handle Line */}
      <div
        className="absolute inset-y-0 w-1 bg-white cursor-col-resize shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-nature-dark border-4 border-nature-green transition-transform hover:scale-110">
          <ArrowLeftRight size={20} />
        </div>
      </div>

      {/* Interaction Layer */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleDrag}
        className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-30 touch-none"
        aria-label="Compare before and after images"
      />
    </div>
  );
};

const Gallery: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nature-green/10 text-nature-green text-xs font-bold uppercase tracking-widest mb-6">
          <ImageIcon size={14} />
          <span>Mūsų Darbai</span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-nature-dark mb-6 leading-tight">
          Virsmai, kuriais <br /><span className="text-nature-green italic">didžiuojamės</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Pamatykite profesionalaus apželdinimo galią. Vilkite slankiklį, kad pamatytumėte pokytį, kurį sukuriame Klaipėdos kiemams.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col gap-6">
            <ComparisonSlider
              before={project.beforeImg}
              after={project.afterImg}
              alt={project.title}
            />
            <div className="flex justify-between items-end border-b pb-4 border-gray-200">
              <div>
                <span className="text-xs font-bold text-nature-green uppercase tracking-widest bg-nature-green/10 px-3 py-1 rounded-full mb-3 inline-block">{project.category}</span>
                <h3 className="text-2xl font-serif font-bold text-gray-800">{project.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;