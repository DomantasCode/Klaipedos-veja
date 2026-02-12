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
import { Droplets, Leaf, Scissors, Bot, Phone, Lightbulb } from 'lucide-react';

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
        description: 'Profesionalus vejos įrengimas, ilgametė patirtis, kruopštus darbas ir dėmesys detalėms.',
        features: ['Sėklų parinkimas', 'Rankinis lyginimas'],
        color: 'bg-nature-green',
        textColor: 'text-nature-green',
        fullDescription: 'Vejos įrengimo darbus atliekame atsakingai, vadovaudamiesi gerąja praktika ir siekdami ilgalaikio rezultato. Pirmiausia įvertiname sklypo reljefą, o esant poreikiui papildomai atvežame ir paskleidžiame gruntą. Dirvožemį išlyginame, suformuojame reikiamus nuolydžius ir paruošiame plotą sėjai. Frezavimo metu dirva supurenama 10–15 cm gylyje, kad būtų sudarytos palankios sąlygos vejos šaknų vystymuisi. Taip pat maksimaliai pašalinamos nereikalingos priemaišos, kurios gali trukdyti kokybiškam vejos įsitvirtinimui. Baigus pagrindinius darbus, sėjos plotas gali būti uždengiamas agroplėvele arba padengiamas durpių sluoksniu — tai padeda geriau išlaikyti drėgmę ir užtikrina greitesnį sėklų sudygimą. Esant poreikiui, vėlesniuose priežiūros etapuose gali būti taikomos papildomos priemonės piktžolių kontrolei, siekiant dar estetiškesnio ir tvarkingesnio vejos vaizdo.',
        process: [
            { title: 'Pagrindo paruošimas', desc: 'Juodžemio atvežimas ir tolygus paskirstymas sklype.' },
            { title: 'Frezavimas', desc: 'Grunto supurenimas ir nereikalingų priemaišų pašalinimas.' },
            { title: 'Lyginimas', desc: 'Sklypo išlyginimas ir nuolydžių suformavimas.' },
            { title: 'Sėjimas', desc: 'Sertifikuotų sėklų įterpimas ir startinis tręšimas.' },
            { title: 'Apsauga', desc: 'Volavimas ir uždengimas agroplėvele arba durpių sluoksniu greitesniam sudygimui.' },
            { title: 'Prevencija', desc: 'Esant didesniam piktžolių kiekiui, taikomas herbicidinis apdorojimas.' }
        ],
        image: "/service-installation.png",
    },
    {
        id: '02',
        icon: <Droplets className="w-8 h-8" />,
        title: 'Laistymo sistemos',
        description: 'Automatizuotos laistymo sistemos įrengimas, palaikantis optimalų vejos drėgmės lygį.',
        features: ['Automatinis valdymas', 'Lietaus jutikliai', 'Patikima įranga'],
        color: 'bg-blue-600',
        textColor: 'text-blue-600',
        fullDescription: 'Automatinė laistymo sistema – tai praktiškas sprendimas, užtikrinantis nuolat žalią veją bei augalų drėkinimą be papildomų pastangų. Sistema veikia automatiškai, parinkdama optimalų laistymo laiką ir vandens kiekį, todėl nebereikia rūpintis kasdieniu rankiniu laistymu. Įrengimui naudojame tik aukštos kokybės, ilgaamžę įrangą, o išmanieji valdikliai leidžia efektyviai valdyti vandens sąnaudas ir prisitaikyti prie oro sąlygų. Tai patikimas ir patogus sprendimas tiek mažiems kiemams, tiek didesniems sklypams.',
        process: [
            { title: 'Įvertinimas', desc: 'Laistymo poreikių ir sklypo zonų įvertinimas.' },
            { title: 'Planavimas', desc: 'Sistemos suplanavimas ir įrangos parinkimas.' },
            { title: 'Įrengimas', desc: 'Vamzdynų ir purkštukų įrengimas.' },
            { title: 'Montavimas', desc: 'Valdiklių montavimas ir sistemos paleidimas.' },
            { title: 'Patikra', desc: 'Darbo patikra bei reguliavimas optimaliam veikimui.' }
        ],
        image: "/service-irrigation.png",
    },
    {
        id: '03',
        icon: <Scissors className="w-8 h-8" />,
        title: 'Vejos priežiūra',
        description: 'Vejos priežiūra – nuo pjovimo iki tręšimo.',
        features: ['Tręšimas', 'Aeravimas', 'Skarifikavimas'],
        color: 'bg-stone-800',
        textColor: 'text-stone-800',
        fullDescription: 'Graži ir sveika veja reikalauja nuolatinės priežiūros – ne tik reguliaraus pjovimo. Mes pasirūpiname visais svarbiausiais darbais: nuo žolės pjovimo iki tręšimo, piktžolių kontrolės, aeravimo ar skarifikavimo. Dirbame tam, kad jūsų veja būtų tanki, sodriai žalia ir atspari, o jūs galėtumėte mėgautis rezultatu be papildomų rūpesčių.',
        processTitle: 'Paslaugos',
        process: [
            { title: 'Skarifikavimas', desc: 'Specialia technika pašaliname seną, negyvą žolę ir samanas, kad veja galėtų geriau kvėpuoti ir tankiau augti.' },
            { title: 'Tręšimas', desc: 'Tolygiai paskleidžiame trąšas, užtikrinančias sodrią spalvą, stipresnį augimą bei vejos atsparumą.' },
            { title: 'Piktžolių naikinimas', desc: 'Tinkamų herbicidų panaudojimas piktžolių pašalinimui iš vejos.' },
            { title: 'Aeravimas + „levelingas“', desc: 'Atliekame „core“ aeraciją, o susidariusias ertmes užpildome smėliu. Tai pagerina dirvos struktūrą, šaknų būklę, drėgmės įsisavinimą ir padeda išlyginti nedidelius nelygumus.' }
        ],
        image: "/service-maintenance-ref.png"
    },
    {
        id: '04',
        icon: <Leaf className="w-8 h-8" />,
        title: 'Dekoratyvinis Apželdinimas',
        description: 'Estetiškos erdvės sukūrimas derinant augalus bei dekoratyvinę skaldą.',
        features: ['Augalų sodinimas', 'Dekoratyviniai akmenukai', 'Mulčiavimas'],
        color: 'bg-emerald-600',
        textColor: 'text-emerald-600',
        fullDescription: 'Jaukus ir estetiškas kiemas – tai ne tik veja. Mes atliekame sklypo dekoratyvinio apželdinimo darbus: sodiname dekoratyvinius augalus, formuojame zonas skalda ar mulčiu, atrenkame augalus, atsižvelgdami į sklypo dirvožemio savybes bei vietos sąlygas, tokias kaip saulės apšvietimas, pavėsis ir bendras mikroklimatas.',
        processTitle: 'Darbai',
        process: [
            { title: 'Apželdinimas', desc: 'Medžių ir dekoratyvinių augalų sodinimas.' },
            { title: 'Skalda', desc: 'Dekoratyvinės skaldos, akmenukų ar trinkelių įrengimas augalų zonose.' },
            { title: 'Zonavimas', desc: 'Gėlynų atskyrimas borteliais ir formavimas.' },
            { title: 'Mulčiavimas', desc: 'Mulčio pylimas drėgmei išsaugoti ir piktžolėms sulaikyti.' }
        ],
        image: "/service-landscaping.png"
    },
    {
        id: '05',
        icon: <Lightbulb className="w-8 h-8" />,
        title: 'Kiemo apšvietimas',
        description: 'Kiemo apšvietimo sistemų įrengimas, užtikrinantis saugumą bei jaukumą.',
        features: ['Projektavimas', 'LED sistemos', 'Automatika'],
        color: 'bg-amber-500',
        textColor: 'text-amber-500',
        fullDescription: 'Tinkamai įrengtas kiemo apšvietimas suteikia erdvei jaukumo, užtikrina saugumą bei komfortą.',
        processTitle: 'Darbų eiga',
        process: [
            { title: 'Projektavimas', desc: 'Aptariame ir suplanuojame šviestuvų išdėstymą pagal sklypo charakteristikas ir kliento pageidavimus.' },
            { title: 'Instaliacija', desc: 'Paklojame kabelius po žeme, prijungiame šviestuvus ir užtikriname tinkamą jų veikimą.' },
            { title: 'Sistemos paleidimas', desc: 'Integruojame valdymo ir automatikos modulius, kad apšvietimas veiktų pagal nustatytą grafiką, automatiškai įsijungtų sutemus ir išsijungtų prašvitus.' }
        ],
        image: "/service-lighting.png"
    },
];
