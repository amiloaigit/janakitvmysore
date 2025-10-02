import type { Event } from '@/lib/events';
import type { Language } from '@/lib/translations';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from '@/hooks/use-translation';

interface EventCardProps {
  event: Event;
  language: Language;
}

export function EventCard({ event, language }: EventCardProps) {
  const { t } = useTranslation();
  const title = language === 'kn' ? event.title_kn : event.title_en;
  const description = language === 'kn' ? event.description_kn : event.description_en;
  const lastUpdated = language === 'kn' ? event.lastUpdated_kn : event.lastUpdated_en;

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
       <CardContent className="p-0 aspect-video">
         <iframe
          src={event.streamUrl}
          title={title}
          width="100%"
          height="100%"
          frameBorder="no"
          scrolling="no"
          allowFullScreen={true}
          className="rounded-t-lg"
        ></iframe>
       </CardContent>
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="font-headline text-2xl">{title}</CardTitle>
          {event.status === 'live' ? (
            <Badge variant="destructive" className="bg-red-600 hover:bg-red-700 text-white border-transparent shrink-0">
              {t('event.status.live')}
            </Badge>
          ) : (
            <Badge variant="secondary" className="shrink-0">{t('event.status.offline')}</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow pt-0">
         <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        {lastUpdated && <p className="text-xs text-muted-foreground">{t('event.lastUpdated')} {lastUpdated}</p>}
      </CardFooter>
    </Card>
  );
}
