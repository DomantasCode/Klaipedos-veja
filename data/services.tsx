import { Service } from '../types';

// Actually, let's keep icons in the component file or a separate icons file if complex.
// For now, I will import React and define icons inline or import from lucide-react if possible.
// Wait, SproutIcon is custom in Services.tsx. I should probably move it to a shared place or redefine.
// Let's use a placeholder for now and I will fix imports later, or better:
// I will move the custom icon to a separate file or keep the data structure simple.
// Rethinking: The Service interface uses ReactElement. This couples data with UI.
// Better approach: Store icon identifier (string or enum) in data, and map to Icon component in UI.
// BUT, to keep refactor safe and simple, I will move data to a .tsx file so it can hold JSX.

import React from 'react';
import { Droplets, Leaf, Scissors, Bot, Phone } from 'lucide-react';

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

export const services: Service[] = [
    {
        id: '01',
        icon: <SproutIcon />,
        title: 'Vejos įrengimas',
        description: 'Profesionalus vejos įrengimas sėjimo būdu. Ilgametė patirtis, kruopštus rankinis darbas ir dėmesys detalėms.',
        features: ['Sėklų parinkimas', 'Rankinis lyginimas'],
        color: 'bg-nature-green',
        textColor: 'text-nature-green',
        fullDescription: 'Veją įrengiame taip, kaip darytume sau – kruopščiai ir be skubos. Nenaudojame sunkios technikos, kuri suspaudžia žemę – viską lyginame rankomis. Tai leidžia idealiai paruošti pagrindą ir išrinkti visus akmenukus. Piktžoles išnaikiname dar prieš sėjimą, todėl veja auga švari. Darbus užbaigiame uždengdami sklypą agroplėvele – taip sėklos gauna drėgmės ir greičiau sudygsta.',
        process: [
            { title: 'Pagrindas', desc: 'Juodžemio atvežimas (jei reikia) ir kruopštus rankinis lyginimas.' },
            { title: 'Prevencija', desc: 'Leidžiame piktžolėms sudygti ir jas sunaikiname – tai garantuoja švaresnę veją.' },
            { title: 'Sėjimas', desc: 'Sertifikuotų sėklų įterpimas, startinis tręšimas.' },
            { title: 'Apsauga', desc: 'Volavimas ir uždengimas agroplėvele optimaliam mikroklimatui.' }
        ],
        image: "/service-installation.png",
    },
    {
        id: '02',
        icon: <Droplets className="w-8 h-8" />,
        title: 'Laistymo sistemos',
        description: 'Pamirškite varginantį laistymą žarna. Įrengiame sistemas, kurios pačios pasirūpina jūsų veja.',
        features: ['Automatinis valdymas', 'Lietaus jutikliai', 'Patikima įranga'],
        color: 'bg-blue-600',
        textColor: 'text-blue-600',
        fullDescription: 'Automatinė laistymo sistema – tai ne prabanga, o būtinybė norint turėti žalią veją be vargo. Jums nebereikės kiekvieną vakarą tampyti žarnų – sistema pasileis pati geriausiu laiku. Naudojame tik aukščiausios klasės įrangą, kuri tarnauja metus. Sumontuojame lietaus jutiklius, todėl per lietų sistema veltui neveiks ir taupys vandenį.',
        process: [
            { title: 'Projektas', desc: 'Suplanuojame purkštukų vietas, kad visa veja būtų palaistyta tolygiai.' },
            { title: 'Įrengimas', desc: 'Iškasame griovelius, klojame vamzdžius ir montuojame purkštukus.' },
            { title: 'Pajungimas', desc: 'Pajungiame valdiklį ir viską sureguliuojame.' },
            { title: 'Apmokymas', desc: 'Parodome, kaip sistema veikia ir kaip ją valdyti.' }
        ],
        image: "/service-irrigation.png",
    },
    {
        id: '03',
        icon: <Scissors className="w-8 h-8" />,
        title: 'Vejos priežiūra',
        description: 'Pilna vejos priežiūra: nuo pjovimo iki tręšimo. Jums belieka tik džiaugtis gražiu kiemu.',
        features: ['Tręšimas', 'Aeravimas', 'Skarifikavimas'],
        color: 'bg-stone-800',
        textColor: 'text-stone-800',
        fullDescription: 'Graži veja reikalauja nuolatinio dėmesio, ne tik pjovimo. Mes pasirūpiname viskuo – nuo reguliaraus žolės pjovimo iki tręšimo ir aeravimo. Darome visus darbus, kad jūsų veja būtų tanki, žalia ir sveika, o jums nereikėtų vargti su technika ar gaišti laiko.',
        processTitle: 'Paslaugos',
        process: [
            { title: 'Žolės pjovimas', desc: 'Atvažiuojame ir tvarkingai nupjauname veją jums patogiu metu.' },
            { title: 'Skarifikavimas', desc: 'Iššukuojame seną žolę ir samanas, kad veja atsigautų.' },
            { title: 'Aeravimas', desc: 'Subadome veją, kad šaknys gautų oro ir geriau augtų.' },
            { title: 'Tręšimas', desc: 'Pabarstome trąšų, kad žolė būtų stipri ir ryškiai žalia.' }
        ],
        image: "/service-maintenance-ref.png"
    },
    {
        id: '04',
        icon: <Leaf className="w-8 h-8" />,
        title: 'Dekoratyvinis Apželdinimas',
        description: 'Suteikite savo kiemui charakterį. Augalai, akmenukai ir teisingas zonavimas.',
        features: ['Augalų sodinimas', 'Dekoratyviniai akmenukai', 'Mulčiavimas'],
        color: 'bg-emerald-600',
        textColor: 'text-emerald-600',
        fullDescription: 'Jaukus kiemas – tai ne tik lygi veja. Suteikiame sklypui gyvybės: sodiname tujas ir dekoratyvinius augalus, formuojame zonas skalda ar akmenukais. Padedame parinkti augalus, kurie prigis jūsų dirvožemyje, ir sukuriame vaizdą, kuris džiugins visus metus.',
        processTitle: 'Paslaugos',
        process: [
            { title: 'Apželdinimas', desc: 'Tujų, medžių ir dekoratyvinių augalų sodinimas.' },
            { title: 'Akmenukai', desc: 'Dekoratyvinės skaldos ir akmenukų klojimas.' },
            { title: 'Zonavimas', desc: 'Gėlynų atskyrimas borteliais ir formavimas.' },
            { title: 'Mulčiavimas', desc: 'Mulčio pylimas drėgmei išsaugoti ir piktžolėms sulaikyti.' }
        ],
        image: "/service-landscaping.png"
    },
];
