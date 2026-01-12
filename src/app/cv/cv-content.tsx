'use client';

import { I18nProvider } from '@/components/i18n-provider';
import { ModernCV } from '@/components/cv/modern-cv';

export function CVContent() {
  return (
    <I18nProvider>
      <ModernCV />
    </I18nProvider>
  );
}
