'use client';

import { useTranslation } from '@/hooks/use-translation';

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-muted py-6 md:px-8 md:py-8 w-full">
      <div className="container flex items-center justify-center">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
}
