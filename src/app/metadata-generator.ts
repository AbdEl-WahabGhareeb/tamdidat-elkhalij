import { Metadata } from 'next';
import { generateAlternateLinks, SITE_URL } from '@/lib/i18n';

export function generateMetadata(path: string = '/'): Metadata {
  const alternateLinks = generateAlternateLinks(path);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      template: '%s | تمديدات الخليج',
      default: 'تمديدات الخليج - خدمات تمديد الغاز في السعودية | تصميم وتركيب وصيانة'
    },
    description: 'تمديدات الخليج - شركة سعودية رائدة في تصميم وتركيب وصيانة شبكات الغاز. خدمات متكاملة للمشاريع السكنية والتجارية والصناعية مع معايير جودة عالمية. اتصل بنا الآن.',
    keywords: [
      'تمديدات الغاز',
      'شبكات الغاز',
      'صيانة الغاز',
      'شحن خزانات الغاز',
      'خدمات الغاز في السعودية',
      'تمديدات الخليج',
      'تصميم شبكات الغاز',
      'تركيب شبكات الغاز',
      'صيانة شبكات الغاز',
      'غاز مركزي',
      'خزان غاز',
      'تامكو',
      'taamco'
    ],
    publisher: 'تمديدات الخليج',
    applicationName: 'تمديدات الخليج',
    generator: 'Next.js',
    referrer: 'origin-when-cross-origin',
    authors: [{ name: 'تمديدات الخليج' }],
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    verification: {
      google: 'WrItQ08BRXtWf6oCMt3qJBj16zucGd1oRKttlFafcWs'
    },
    alternates: {
      canonical: alternateLinks.find(link => link.rel === 'canonical')?.href,
      languages: Object.fromEntries(
        alternateLinks
          .filter(link => link.rel === 'alternate' && link.hrefLang !== 'x-default')
          .map(link => [link.hrefLang, link.href])
      )
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'ar_SA',
      alternateLocale: ['en_US'],
      url: SITE_URL,
      siteName: 'تمديدات الخليج',
      title: 'تمديدات الخليج - خدمات تمديد الغاز في السعودية',
      description: 'شركة سعودية متخصصة في تصميم وتركيب وصيانة شبكات الغاز والخدمات المتكاملة',
      images: [
        {
          url: `${SITE_URL}/assets/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'شركة تمديدات الخليج - خدمات الغاز المتكاملة',
          type: 'image/jpeg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'تمديدات الخليج - خدمات تمديد الغاز',
      description: 'شركة سعودية رائدة في تصميم وتركيب وصيانة شبكات الغاز - خدمات متكاملة',
      images: [`${SITE_URL}/assets/og-image.jpg`],
      creator: '@tamdidat_elkhalij',
      site: '@tamdidat_elkhalij',
    },
  };
}