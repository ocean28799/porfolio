import type { Metadata } from 'next';
import { CVContent } from './cv-content';

export const metadata: Metadata = {
  title: 'CV - Tran Anh Duc | Senior Mobile & AI Solutions Architect',
  description: 'Professional curriculum vitae of Tran Anh Duc - Senior Mobile & AI Solutions Architect specializing in React Native, Next.js, and AI/ML integration.',
  keywords: [
    'cv',
    'resume',
    'curriculum vitae',
    'react native developer',
    'mobile architect',
    'ai integration specialist',
    'next.js developer',
    'full stack engineer',
  ],
  openGraph: {
    title: 'CV - Tran Anh Duc',
    description: 'Professional curriculum vitae - Senior Mobile & AI Solutions Architect',
    type: 'profile',
  },
};

export default function CVPage() {
  return <CVContent />;
}
