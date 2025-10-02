export type EventStatus = 'live' | 'offline';

export interface Event {
  id: string;
  title_en: string;
  title_kn: string;
  description_en: string;
  description_kn: string;
  streamUrl: string;
  status: EventStatus;
  lastUpdated_en?: string;
  lastUpdated_kn?: string;
  imageId: string;
}

export const events: Event[] = [
  {
    id: 'mysuru-palace',
    title_en: 'Mysuru Palace Rituals',
    title_kn: 'ಮೈಸೂರು ಅರಮನೆ ಆಚರಣೆಗಳು',
    description_en: 'Witness the grand rituals performed at the iconic Mysuru Palace, a cornerstone of the Dasara festivities.',
    description_kn: 'ದಸರಾ ಹಬ್ಬದ ಮೂಲಾಧಾರವಾದ ಮೈಸೂರು ಅರಮನೆಯಲ್ಲಿ ನಡೆಯುವ ಭವ್ಯವಾದ ಆಚರಣೆಗಳಿಗೆ ಸಾಕ್ಷಿಯಾಗಿ.',
    streamUrl: 'https://streams.fusionminds.co.in/4cff91a9-5098-4823-92b2-2f42824f84a3.html',
    status: 'live',
    lastUpdated_en: '28th September, 15:45 Hrs IST',
    lastUpdated_kn: '೨೮ನೇ ಸೆಪ್ಟೆಂಬರ್, ೧೫:೪೫ ಭಾರತೀಯ ಸಮಯ',
    imageId: 'mysuru-palace',
  },
  {
    id: 'banni-mantap',
    title_en: 'Banni Mantap - Procession',
    title_kn: 'ಬನ್ನಿ ಮಂಟಪ - ಮೆರವಣಿಗೆ',
    description_en: 'The spectacular Torchlight Parade at the Banni Mantap grounds, marking the grand finale of Dasara.',
    description_kn: 'ದಸರಾ ಮಹೋತ್ಸವದ ಅದ್ಧೂರಿ ಸಮಾರೋಪವನ್ನು ಸೂಚಿಸುವ ಬನ್ನಿ ಮಂಟಪ ಮೈದಾನದಲ್ಲಿ ಅದ್ಭುತ ಪಂಜಿನ ಕವಾಯಿತು.',
    streamUrl: 'https://streams.fusionminds.co.in/e57f4095-4b7a-46dd-81f0-cbd26fb38b8a.html',
    status: 'live',
    imageId: 'banni-mantap',
  },
];
