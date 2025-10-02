'use client';

import { useTranslation } from '@/hooks/use-translation';

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-muted py-6 md:px-8 md:py-8 w-full">
      <div className="container flex flex-col items-center justify-center gap-2">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          {t('footer.partner')}
        </p>
        <p className="text-center text-sm leading-loose text-muted-foreground">
          {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
}
