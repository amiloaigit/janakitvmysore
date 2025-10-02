import { ElephantIcon } from '@/components/icons';
import { LanguageSwitcher } from './language-switcher';
import { useTranslation } from '@/hooks/use-translation';

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-2">
          <ElephantIcon className="h-8 w-8 text-primary" />
          <span className="font-bold text-lg font-headline">{t('app.title')}</span>
        </div>
        <div className="flex items-center gap-4">
          <p className="font-headline font-semibold hidden md:block">
            {t('header.marketingPartner')}
          </p>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
