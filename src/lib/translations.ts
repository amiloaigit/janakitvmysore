
export const translations = {
  en: {
    // Header
    'app.title': 'Janaki TV Mysore | Dasara Darshan',
    'header.marketingPartner': 'Marketing Partner: amiloai.com',
    // Hero
    'hero.title': 'Welcome to Dasara darshan live 2025',
    'hero.subtitle': 'Live Streaming of Cultural Programs and Rituals',
    'hero.day': 'Dasara Cultural Programs',
    // PR Section
    'pr.title': 'Our Streaming Partner',
    'pr.subtitle': 'This event is proudly streamed and powered by amiloai.com',
    'pr.contactUs': 'Contact us to stream your event',
    'pr.whatsappMessage': "Hello Ketan, I was impressed by the Dasara Darshan live stream. I'm interested in exploring live streaming options for my own content and would appreciate it if you could provide some information on your services.",
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
    'hero.title': 'ದಸರಾ ದರ್ಶನ ಲೈವ್ ೨೦೨೫ಕ್ಕೆ ಸುಸ್ವಾಗತ',
    'hero.subtitle': 'ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಆಚರಣೆಗಳ ನೇರ ಪ್ರಸಾರ',
    'hero.day': 'ದಸರಾ ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು',
    // PR Section
    'pr.title': 'ನಮ್ಮ ಸ್ಟ್ರೀಮಿಂಗ್ ಪಾಲುದಾರರು',
    'pr.subtitle': 'ಈ ಕಾರ್ಯಕ್ರಮವನ್ನು ಹೆಮ್ಮೆಯಿಂದ ಸ್ಟ್ರೀಮ್ ಮತ್ತು ನಡೆಸಿಕೊಡുന്നത് amiloai.com',
    'pr.contactUs': 'ನಿಮ್ಮ ಈವೆಂಟ್ ಅನ್ನು ಸ್ಟ್ರೀಮ್ ಮಾಡಲು ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ',
    'pr.whatsappMessage': "ನಮಸ್ಕಾರ ಕೇತನ್, ದಸರಾ ದರ್ಶನದ ನೇರ ಪ್ರಸಾರದಿಂದ ನಾನು ಬಹಳ ಪ್ರಭಾವಿತನಾಗಿದ್ದೇನೆ. ನನ್ನ ಸ್ವಂತ ವಿಷಯಕ್ಕಾಗಿ ಲೈವ್ ಸ್ಟ್ರೀಮಿಂಗ್ ಆಯ್ಕೆಗಳನ್ನು ಅನ್ವೇಷಿಸಲು ನಾನು ಆಸಕ್ತಿ ಹೊಂದಿದ್ದೇನೆ. ನಿಮ್ಮ ಸೇವೆಗಳ ಬಗ್ಗೆ ದಯವಿಟ್ಟು ಸ್ವಲ್ಪ ಮಾಹಿತಿ ನೀಡಬಹುದೇ?",
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
