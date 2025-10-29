import { Metadata } from 'next';
import { generateAlternateLinks, SITE_URL } from '@/lib/i18n';

export function generateMetadata(path: string = '/'): Metadata {
  const alternateLinks = generateAlternateLinks(path);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      template: '%s | تمديدات الخليج',
      default: 'تمديدات الخليج - خدمات تصميم وتنفيذ وصيانة شبكات الغاز'
    },
    description: 'شركة تمديدات الخليج المحدودة هي شركة سعودية متخصصة في تصميم وتنفيذ وصيانة شبكات الغاز وشحن خزانات الغاز للمنازل والمنشآت التجارية والصناعية.',
    keywords: [
      'تمديدات الغاز',
      'شبكات الغاز',
      'صيانة الغاز',
      'تعبئة الغاز',
      'خدمات الغاز في السعودية',
      'تمديدات الخليج',
      'تصميم شبكات الغاز',
      'تنفيذ شبكات الغاز',
      'صيانة شبكات الغاز'
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
      images: [
        {
          url: `${SITE_URL}/assets/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'تمديدات الخليج - خدمات الغاز المتكاملة',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'تمديدات الخليج',
      description: 'خدمات تصميم وتنفيذ وصيانة شبكات الغاز',
      images: [`${SITE_URL}/assets/twitter-image.png`],
    },
  };
}