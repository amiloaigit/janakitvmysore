'use client';

import Link from 'next/link';
import { useTranslation } from '@/hooks/use-translation';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { WhatsappIcon } from '@/components/icons';

export function FloatingWhatsappButton() {
  const { t } = useTranslation();
  const whatsappUrl = `https://wa.me/918884440947?text=${encodeURIComponent(t('pr.whatsappMessage'))}`;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            asChild
            size="icon"
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white"
          >
            <Link href={whatsappUrl} target="_blank">
              <WhatsappIcon className="h-8 w-8" />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t('pr.contactUs')}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
