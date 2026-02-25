import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { Leaf } from 'lucide-react';
import fs from 'fs';

const svgString = renderToString(createElement(Leaf, { size: 32, color: '#355e3b' }));
fs.writeFileSync('public/favicon.svg', svgString);
console.log('Saved to public/favicon.svg');
