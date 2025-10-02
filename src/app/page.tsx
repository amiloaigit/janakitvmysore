'use client';

import Image from 'next/image';
import Link from 'next/link';
import { TranslationProvider } from '@/context/translation-context';
import { useTranslation } from '@/hooks/use-translation';
import { events } from '@/lib/events';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { EventCard } from '@/components/event-card';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingWhatsappButton } from '@/components/floating-whatsapp-button';

function HomePageContent() {
  const { t, language } = useTranslation();
  const heroImage = PlaceHolderImages.find((img) => img.id === 'mysuru-palace');
  const mainEvent = events.find(event => event.id === 'mysuru-palace');
  const otherEvents = events.filter(event => event.id !== 'mysuru-palace');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="relative text-center py-10 px-4 bg-card/50">
           {heroImage && (
             <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover opacity-10"
              priority
              data-ai-hint={heroImage.imageHint}
            />
           )}
          <div className="relative z-10 container mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary mb-4">
              {t('hero.title')}
            </h1>
            <p className="mb-8 text-lg md:text-xl text-foreground/80">
              {t('hero.subtitle')}
            </p>
            {mainEvent && (
              <div className="max-w-4xl mx-auto">
                <EventCard event={mainEvent} language={language} />
              </div>
            )}
          </div>
        </section>

        {otherEvents.length > 0 && (
          <div className="container mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-8 font-headline">
              {t('hero.day')}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {otherEvents.map((event) => (
                <EventCard key={event.id} event={event} language={language} />
              ))}
            </div>
          </div>
        )}

        <section className="bg-muted/50 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-headline mb-4">
              {t('pr.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto italic">
              {t('pr.subtitle')}
            </p>
          </div>
        </section>
      </main>
      <FloatingWhatsappButton />
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <TranslationProvider>
      <HomePageContent />
    </TranslationProvider>
  );
}
