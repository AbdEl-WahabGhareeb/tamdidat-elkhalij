export const DEFAULT_LOCALE = 'ar';
export const AVAILABLE_LOCALES = ['ar', 'en'] as const;
export type AvailableLocale = typeof AVAILABLE_LOCALES[number];

type AlternateURLs = {
  [key in AvailableLocale]: string;
};

export const SITE_URL = 'https://www.taamco.com';

// Map of paths that should be available in both languages
export const TRANSLATABLE_PATHS = new Set([
  '/',
  '/about',
  '/services',
  '/services/residential',
  '/services/commercial',
  '/services/industrial',
  '/services/maintenance',
  '/projects'
]);

export function generateAlternateURLs(path: string): AlternateURLs {
  const alternates: Partial<AlternateURLs> = {};
  
  if (TRANSLATABLE_PATHS.has(path)) {
    AVAILABLE_LOCALES.forEach(locale => {
      if (locale === DEFAULT_LOCALE) {
        alternates[locale] = `${SITE_URL}${path}`;
      } else {
        alternates[locale] = `${SITE_URL}/${locale}${path}`;
      }
    });
  } else {
    // For paths that don't have translations, use the same URL for all locales
    AVAILABLE_LOCALES.forEach(locale => {
      alternates[locale] = `${SITE_URL}${path}`;
    });
  }

  return alternates as AlternateURLs;
}

export function generateCanonicalURL(path: string): string {
  return `${SITE_URL}${path}`;
}

export function generateAlternateLinks(path: string) {
  const alternates = generateAlternateURLs(path);
  const links = [];

  // Add canonical link
  links.push({
    rel: 'canonical',
    href: alternates[DEFAULT_LOCALE],
  });

  // Add language alternates
  AVAILABLE_LOCALES.forEach(locale => {
    if (locale !== DEFAULT_LOCALE) {
      links.push({
        rel: 'alternate',
        hrefLang: locale,
        href: alternates[locale],
      });
    }
  });

  // Add x-default
  links.push({
    rel: 'alternate',
    hrefLang: 'x-default',
    href: alternates[DEFAULT_LOCALE],
  });

  return links;
}