
export const translations = {
  en: {
    // Header
    'app.title': 'Janaki TV Mysore | Dasara Darshan',
    'header.marketingPartner': 'Marketing Partner: amiloai.com',
    // Hero
    'hero.title': 'Welcome to Dasara 2025',
    'hero.subtitle': 'Live Streaming of Cultural Programs and Rituals',
    'hero.day': 'Dasara Cultural Programs',
    // PR Section
    'pr.title': 'Our Streaming Partner',
    'pr.subtitle': 'This event is proudly streamed and powered by amiloai.com',
    // Event Status
    'event.status.live': 'Live',
    'event.status.offline': 'Offline',
    // Event Details
    'event.lastUpdated': 'Last Updated:',
    // Footer
    'footer.partner': 'Streaming and Website by amiloai.com',
    'footer.copyright': '© 2025 Janaki TV Mysore. All Rights Reserved.',
  },
  kn: {
    // Header
    'app.title': 'ಜಾನಕಿ ಟಿವಿ ಮೈಸೂರು | ದಸರಾ ದರ್ಶನ',
    'header.marketingPartner': 'ಮಾರ್ಕೆಟಿಂಗ್ ಪಾಲುದಾರರು: amiloai.com',
    // Hero
    'hero.title': 'ದಸರಾ ೨೦೨೫ಕ್ಕೆ ಸುಸ್ವಾಗತ',
    'hero.subtitle': 'ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಆಚರಣೆಗಳ ನೇರ ಪ್ರಸಾರ',
    'hero.day': 'ದಸರಾ ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು',
    // PR Section
    'pr.title': 'ನಮ್ಮ ಸ್ಟ್ರೀಮಿಂಗ್ ಪಾಲುದಾರರು',
    'pr.subtitle': 'ಈ ಕಾರ್ಯಕ್ರಮವನ್ನು ಹೆಮ್ಮೆಯಿಂದ ಸ್ಟ್ರೀಮ್ ಮತ್ತು ನಡೆಸಿಕೊಡുന്നത് amiloai.com',
    // Event Status
    'event.status.live': 'ಲೈವ್',
    'event.status.offline': 'ಆಫ್‌ಲೈನ್‌',
    // Event Details
    'event.lastUpdated': 'ಕೊನೆಯದಾಗಿ ನವೀಕರಿಸಿದ್ದು:',
    // Footer
    'footer.partner': 'ಅಮಿಲೋಯ್.ಕಾಂ ನಿಂದ ಸ್ಟ್ರೀಮಿಂಗ್ ಮತ್ತು ವೆಬ್‌ಸೈಟ್',
    'footer.copyright': '© 2025 ಜಾನಕಿ ಟಿವಿ ಮೈಸೂರು. ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
  },
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof (typeof translations)['en'];
