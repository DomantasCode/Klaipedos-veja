import { Facebook } from 'lucide-react';

export const CONTACT_INFO = {
    phone: {
        display: '+370 623 91998',
        href: 'tel:+37062391998',
    },
    email: {
        display: 'info@klaipedosveja.lt',
        href: 'mailto:info@klaipedosveja.lt',
    },
    address: {
        text: 'Klaipėdos regionas',
    },
    hours: {
        text: 'I-V: 08:00 - 17:00',
    },
    companyCode: '304857171',
    socials: {
        facebook: {
            href: 'https://www.facebook.com/profile.php?id=100057477759220',
            icon: Facebook,
        },
    },
};

export const NAV_LINKS = [
    { name: 'Paslaugos', href: '#services' },
    { name: 'Apie mus', href: '#about' },
    { name: 'Darbų galerija', href: '#gallery' },
    { name: 'D.U.K', href: '#faq' },
    { name: 'Kontaktai', href: '#contact' },
];
