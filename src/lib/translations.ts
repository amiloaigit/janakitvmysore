export const translations = {
  en: {
    // Header
    'app.title': 'Janaki TV Mysore | Dasara Darshan',
    // Hero
    'hero.title': 'Welcome to Dasara 2025',
    'hero.subtitle': 'Live Streaming of Cultural Programs and Rituals',
    'hero.day': 'Dasara Cultural Programs - Day 6',
    // Event Status
    'event.status.live': 'Live',
    'event.status.offline': 'Offline',
    // Event Details
    'event.lastUpdated': 'Last Updated:',
    // Footer
    'footer.copyright': '© 2025 amiloai.com. All Rights Reserved.',
  },
  kn: {
    // Header
    'app.title': 'ಜಾನಕಿ ಟಿವಿ ಮೈಸೂರು | ದಸರಾ ದರ್ಶನ',
    // Hero
    'hero.title': 'ದಸರಾ ೨೦೨೫ಕ್ಕೆ ಸುಸ್ವಾಗತ',
    'hero.subtitle': 'ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಆಚರಣೆಗಳ ನೇರ ಪ್ರಸಾರ',
    'hero.day': 'ದಸರಾ ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು - ದಿನ ೬',
    // Event Status
    'event.status.live': 'ಲೈವ್',
    'event.status.offline': 'ಆಫ್‌ಲೈನ್‌',
    // Event Details
    'event.lastUpdated': 'ಕೊನೆಯದಾಗಿ ನವೀಕರಿಸಿದ್ದು:',
    // Footer
    'footer.copyright': '© 2025 amiloai.com. ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
  },
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof (typeof translations)['en'];
