import Hero3DPreview from '@/components/preview/Hero3DPreview';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3D Hero Animation Preview | WADI AL RAHA',
  description: 'Interactive preview of 3D animated hero section visuals.',
};

export default function HeroPreviewPage() {
  return <Hero3DPreview />;
}
