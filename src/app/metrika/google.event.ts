// utils/gtag.ts

export const sendGAEvent = (event: string, category: string, label: string, value?: string) => {
    if (typeof window === 'undefined' || !window.gtag) {
        console.warn('Google Analytics (gtag) не инициализирован');
        return;
    }

    window.gtag('event', event, {
        event_category: category,
        event_label: label,
        value: value || undefined,
    });
};
