import { ReactElement } from 'react';

export interface Service {
    id: string;
    icon: ReactElement;
    title: string;
    description: string;
    features: string[];
    color: string;
    textColor: string;
    fullDescription: string;
    process: { title: string; desc: string }[];
    processTitle?: string;
    image: string;
    primary?: boolean;
}

export interface Project {
    id: number;
    title: string;
    category: string;
    beforeImg: string;
    afterImg: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}
