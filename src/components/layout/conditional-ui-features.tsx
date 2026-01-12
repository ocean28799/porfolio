'use client';

import { usePathname } from 'next/navigation';
import { ChatbotClient } from '@/components/chatbot';
import { FloatingNavigation } from '@/components/layout/floating-navigation';
import { BackgroundToggle } from '@/components/ui/background-toggle';
import { AdvancedParticleBackground } from '@/components/features/backgrounds/advanced-particle-background';

// Routes that should not show navigation/chatbot/effects
const CLEAN_ROUTES = ['/cv'];

export function ConditionalUIFeatures() {
  const pathname = usePathname();
  
  // Don't render these features on clean routes like CV
  if (CLEAN_ROUTES.some(route => pathname?.startsWith(route))) {
    return null;
  }

  return (
    <>
      <ChatbotClient />
      <FloatingNavigation />
      <BackgroundToggle />
      <AdvancedParticleBackground />
    </>
  );
}
